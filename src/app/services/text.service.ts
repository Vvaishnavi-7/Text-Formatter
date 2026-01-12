import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TextService {
   private textSource = new BehaviorSubject<string>('');
    text$ = this.textSource.asObservable();
  constructor() { }

updateText(value: string){
  this.textSource.next(value)
}

  // Returns number of words
getWordCount(text: string): number {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  }

  // Returns number of characters
getCharCount(text: string): number {
    return text.length;
  }

  // Returns cleared text
clearText(): string {
    return '';
  }

  // Removing extra spaces
removeExtraSpaces(text: string): string {
    return text.replace(/\s+/g, ' ').trim();
  }

  // Remove special characters
removeSpecialChar(text: string): string {
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
  }

  // Capitalize words
capitalizeWords(text: string): string {
  
   return text.toUpperCase();
}

}
