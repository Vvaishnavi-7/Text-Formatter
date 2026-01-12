import { Component } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-formatters',
  templateUrl: './formatters.component.html'
})
export class FormattersComponent {

  text = '';   // ✅ ADD THIS

  constructor(private textService: TextService) {
    this.textService.text$.subscribe(value => this.text = value);
  }

  clearAll() {
    this.textService.clearText();
  }

  removeWhitespace() {
    this.textService.updateText(
      this.text.replace(/\s+/g, ' ').trim()
    );
  }

  reverseText() {
    this.textService.updateText(
      this.text.split('').reverse().join('')
    );
  }

  capitalizeWord() {
    this.textService.updateText(
      this.text.replace(/\b\w/g, c => c.toUpperCase())
    );
  }
}
