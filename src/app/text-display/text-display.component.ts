import {Component, OnInit} from '@angular/core';
import {TextService} from '../services/text.service';

@Component({
  selector: 'app-text=display',
  templateUrl: '/.text-display.component.html'
})

export class TextDisplayComponent implements onInit{
  text= '';
  wordCount=0;
  charCount=0;

  constructor(private textservice: TextService){}

  ngOnInit(){
    this.textservice.text$.subscribe(value=>{
      this.text=value;
      this.wordCount=this.textservice.getWordCount(value);
      this.charCount=this.textservice.getCharCount(value);
    });
  }

  onTextChange(value: string){
    this.textservice.updateText(value);
  }
}