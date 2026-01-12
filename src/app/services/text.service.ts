import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class TextService{
    private textSubject=new BehaviorSubject<string>('');

    text$=this.textSubject.asObservable();

    updateText(text: string){
      this.textSubject.next(text);
    }

    cleartext(){
      this.textSubject.next('');
    }

    getWordCount(text:string): number{
      return text? text.trim().split(/\s+/).length:0;
    }

    getCharCount(text: string): number{
      return text.length;
    }
}