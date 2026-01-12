import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormattersComponent } from './formatters/formatters.component';

const routes: Routes = [
  { path: '', component: FormattersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
