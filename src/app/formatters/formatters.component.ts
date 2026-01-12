import { Component } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-formatters',
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css']
})
export class FormattersComponent {
  text: string = '';
  wordCount: number = 0;
  charCount: number = 0;

  fontSize: number = 14;
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  color: string = '#000000';

  constructor(private textService: TextService) {}

  updateCounts() {
    this.wordCount = this.textService.getWordCount(this.text);
    this.charCount = this.textService.getCharCount(this.text);
  }

  clearText() {
    this.text = this.textService.clearText();
    this.updateCounts();
  }

  removeExtraSpaces() {
    this.text = this.textService.removeExtraSpaces(this.text);
    this.updateCounts();
  }

  removeSpecialChar() {
    this.text = this.textService.removeSpecialChar(this.text);
    this.updateCounts();
  }

  capitalizeWords() {
    this.text = this.textService.capitalizeWords(this.text);
    this.updateCounts();
  }

  // Styling functions
  toggleBold() { this.isBold = !this.isBold; }
  toggleItalic() { this.isItalic = !this.isItalic; }
  toggleUnderline() { this.isUnderline = !this.isUnderline; }
  changeColor(event: any) { this.color = event.target.value; }
  increaseFontSize() { this.fontSize += 2; }
  decreaseFontSize() { this.fontSize -= 2; }
}
