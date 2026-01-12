import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextDisplayComponent } from './text-display/text-display.component'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';   // ✅ MISSING IMPORT
import { FormattersComponent } from './formatters/formatters.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormattersComponent,
    TextDisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
