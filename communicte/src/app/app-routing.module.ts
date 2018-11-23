import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Child4Component} from "./child4/child4.component";
import {Child6Component} from "./child6/child6.component";

const routes: Routes = [
  {path: "", component: Child4Component},
  {path: "child6", component: Child6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
