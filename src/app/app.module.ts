import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextDisplayComponent } from './text-display/text-display.component'; 
import { AppComponent } from './app.component';
  
import { FormattersComponent } from './formatters/formatters.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
    FormattersComponent,
    TextDisplayComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
