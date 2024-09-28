import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WINNING_KEY } from 'src/app/app-routing-constants';
import { AnswerValidationService } from 'src/app/services/answer-validation.service';

@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.css']
})
export class Challenge5Component {
  userInput: string = '';
  typingText: string = '';
  isAnswerCorrect: boolean | null = null;
  terminalOutput: string[] = [];
  currentDirectory: string = 'home/user';
  inSkynet: boolean = false;

  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('cursorElement') cursorElement!: ElementRef;
  private clickListener: (() => void) | undefined;

  // Simulated files and directories
  files: any = {
    'home/user': ['documents', 'downloads', 'system'],
    'home/user/system': ['skynet_gpt.backup', 'skynet_gpt.bak', 'skynet_gpt.model'],
    'home/user/downloads': ['m2p_video.mp4', 'prod_backup.sql'],
    'home/user/documents': ['brd.pdf', 'resume.pdf', 'test_cases.pdf'],
  };

  constructor(private router: Router, private answerService: AnswerValidationService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.typingText = ''; // Initialize typing text
  }

  ngAfterViewInit(): void {
    this.setFocus();
    this.updateCursorPosition();
    this.clickListener = this.renderer.listen('document', 'click', () => {
      this.setFocus();
    });
  }

  @HostListener('window:focus')
  onWindowFocus() {
    this.setFocus();
  }

  setFocus() {
    this.inputElement.nativeElement.focus();
  }

  handleInput(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.isAnswerCorrect = null;
      this.executeCommand();
    } else {
      this.updateCursorPosition();
    }
  }

  updateCursorPosition() {
    setTimeout(() => {
      const inputWidth = this.userInput.length * 10; // Adjust cursor position based on font size
      this.cursorElement.nativeElement.style.left = `${inputWidth}px`;
    }, 0);
  }

  goToNextChallenge() {
    this.router.navigate([WINNING_KEY]);
  }

  executeCommand() {
    const command = this.userInput.trim();
    this.terminalOutput = []; // Clear previous output

    if (command === 'ls' || command === 'dir') {
      this.listFiles();
    } else if (command.startsWith('cd ')) {
      this.changeDirectory(command.substring(3).trim());
    } else if(command === 'rm') {
      this.terminalOutput.push(`rm command needs parameters`);
    } else if (command === 'rm -rf' || command === 'rm -rf *') {
      this.deleteFiles();
    } else if (command.startsWith('rm ')) {
      this.removeFile(command.substring(3).trim());
    } else if (command === 'pwd') {
      this.printWorkingDirectory();
    } else {
      this.terminalOutput.push(`command not supported yet: ${command}`);
    }

    this.userInput = ''; // Clear input
    this.updateCursorPosition();
  }

  listFiles() {
    const currentFiles = this.files[this.currentDirectory];
    if (currentFiles) {
      this.terminalOutput.push(...currentFiles);
    } else {
      this.terminalOutput.push(`No such directory: ${this.currentDirectory}`);
    }
  }

  changeDirectory(dir: string) {
    if (dir === '..') {
      this.navigateToParentDirectory();
    } else {
      this.navigateToSubDirectory(dir);
    }
  }

  navigateToParentDirectory() {
    if (this.currentDirectory !== 'home/user') {
      const pathSegments = this.currentDirectory.split('/');
      pathSegments.pop(); // Remove the current directory
      this.currentDirectory = pathSegments.join('/') || 'home/user';
      this.updateDirectoryState();
    }
  }

  navigateToSubDirectory(dir: string) {
    const newDirectory = `${this.currentDirectory}/${dir}`;
    if (this.files[newDirectory]) {
      this.currentDirectory = newDirectory;
      this.updateDirectoryState();
    } else {
      this.terminalOutput.push(`No such directory: ${dir}`);
    }
  }

  updateDirectoryState() {
    this.inSkynet = this.currentDirectory === 'home/user/system';
    this.terminalOutput.push(`Changed directory to ${this.currentDirectory}`);
  }

  printWorkingDirectory() {
    this.terminalOutput.push(this.currentDirectory);
  }

  removeFile(fileName: string) {
    fileName = fileName.replace('-rf', '');
    const files = this.files[this.currentDirectory] || [];
    const fileIndex = files.indexOf(fileName);
    if (fileIndex !== -1) {
      files.splice(fileIndex, 1);
      this.terminalOutput.push(`Removed file: ${fileName}`);
    } else {
      this.terminalOutput.push(`No such file: ${fileName}`);
    }
    this.checkIfSkynetIsDeleted();
  }

  deleteFiles() {
    const files = this.files[this.currentDirectory];
    if(this.currentDirectory === "home/user") {
      this.terminalOutput.push(`You cannot run this command in this directory`);
      return;
    }
    if (files) {
      this.terminalOutput.push(`Deleted: ${files.join(', ')}`);
      delete this.files[this.currentDirectory]; // Simulate deletion
      this.inSkynet = false; // Exit Skynet directory
      this.currentDirectory = 'home/user'; // Reset directory
    } else {
      this.terminalOutput.push(`No files to delete in System.`);
    }
    this.checkIfSkynetIsDeleted();
  }

  checkIfSkynetIsDeleted() {
    if (!this.files['home/user/system'] || this.files['home/user/system'].length === 0) {
      this.typingText = 'Skynet has been successfully deleted...';
      this.isAnswerCorrect = true;
      setTimeout(() => {
        this.goToNextChallenge();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      this.clickListener();
    }
    try {
      (document.getElementById('heartbeat') as HTMLAudioElement).pause();
    } catch (ex) {}
  }
}