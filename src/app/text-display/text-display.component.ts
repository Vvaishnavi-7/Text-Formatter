import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent {
  inputText: string = '';
  outputText: string = '';

  
  @Output() textChange: EventEmitter<string> = new EventEmitter();

  updateText() {
    
    this.textChange.emit(this.inputText);
  }

  setOutputText(newText: string) {
    this.outputText = newText;
    this.updateText();
  }

  
  outputTextStyle: any = {};
}
