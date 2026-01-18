import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TextDisplayComponent } from '../text-display/text-display.component';
import { FormatterComponent } from '../formatter/formatter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(TextDisplayComponent) textDisplay!: TextDisplayComponent;
  @ViewChild(FormatterComponent) formatter!: FormatterComponent;

  onTextChange(text: string) {
    this.formatter?.updateCounts();
  }

  ngAfterViewInit() {
    this.formatter.attachTextDisplay(this.textDisplay);
  }
}
