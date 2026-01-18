import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { FormatterComponent } from './formatter/formatter.component';
import { RemoveSpecialCharsPipe } from './remove-special-chars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormatterComponent,
    RemoveSpecialCharsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [RemoveSpecialCharsPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
