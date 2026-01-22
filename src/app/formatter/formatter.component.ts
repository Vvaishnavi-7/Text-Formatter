import { Component } from '@angular/core';
import { TextDisplayComponent } from '../text-display/text-display.component';
import { RemoveSpecialCharsPipe } from '../remove-special-chars.pipe';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css'],
  providers: [RemoveSpecialCharsPipe] // custome pipe for removing special characters
})
export class FormatterComponent {
  
  wordCount: number = 0;
  charCount: number = 0;

  
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  textColor: string = '#000000';
  textSize: number = 14; // px

  
  textDisplayRef!: TextDisplayComponent;// check it no connection

  constructor(private specialCharPipe: RemoveSpecialCharsPipe) {}

  
  attachTextDisplay(child: TextDisplayComponent) {
    this.textDisplayRef = child;
    this.updateCounts();
  }

  get inputText(): string {
    return this.textDisplayRef?.inputText || '';
  }

  updateCounts() {
    if (!this.textDisplayRef) return;
    const text = this.inputText || '';
    this.wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    this.charCount = text.replace(/\s/g, '').length;
  }


  clearAll() {
    if (!this.textDisplayRef) return;
    this.textDisplayRef.inputText = '';
    this.textDisplayRef.setOutputText('');
    this.updateCounts();
  }

  removeWhiteSpace() {
  if (!this.textDisplayRef) return;

  const newText = this.inputText
    .trim()                 
    .replace(/\s+/g, ' ');  

  this.textDisplayRef.setOutputText(newText);
  this.updateCounts();
}

  reverseAll() {
    if (!this.textDisplayRef) return;
    const newText = this.inputText.split('').reverse().join('');
    this.textDisplayRef.setOutputText(newText);
    this.updateCounts();
  }

  removeSpecialChars() {
  if (!this.textDisplayRef) return;

  //  USING CUSTOM PIPE HERE
  const newText = this.specialCharPipe.transform(this.inputText);

  this.textDisplayRef.setOutputText(newText);
  this.updateCounts();
}

  capitalizeWords() {
  if (!this.textDisplayRef) return;

  const newText = this.inputText.toUpperCase();
  this.textDisplayRef.setOutputText(newText);
  this.updateCounts();
}
removeStyling() {
  if (!this.textDisplayRef) return;

  
  this.isBold = false;
  this.isItalic = false;
  this.isUnderline = false;
  this.textSize = 14;
  this.textColor = '#000000';

  
  this.textDisplayRef.outputTextStyle = {
    'font-weight': 'normal',
    'font-style': 'normal',
    'text-decoration': 'none',
    'color': '#000000',
    'font-size.px': 14
  };
}


  

  toggleBold() {
    this.isBold = !this.isBold;
    this.applyStyle();
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
    this.applyStyle();
  }

  toggleUnderline() {
    this.isUnderline = !this.isUnderline;
    this.applyStyle();
  }

  increaseSize() {
    this.textSize++;
    this.applyStyle();
  }

  decreaseSize() {
    this.textSize--;
    this.applyStyle();
  }

  
  applyStyle() {
    if (!this.textDisplayRef) return;

    this.textDisplayRef.outputTextStyle = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'text-decoration': this.isUnderline ? 'underline' : 'none',
      'color': this.textColor,
      'font-size.px': this.textSize
    };
  }
}
