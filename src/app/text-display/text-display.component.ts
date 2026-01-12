import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent {

  text: string = '';
  wordCount: number = 0;
  charCount: number = 0;



  constructor(private textservice: TextService) {}


    updateOutput(): void {
    this.wordCount = this.textservice.getWordCount(this.text);
    this.charCount = this.textservice.getCharCount(this.text);
  // ngOnInit(): void {
  //   this.textSub = this.textservice.text$.subscribe((value: string) => {
  //     this.text = value;
  //     this.wordCount = this.textservice.getWordCount(value);
  //     this.charCount = this.textservice.getCharCount(value);
  //   });
  // }


    }

 
}
