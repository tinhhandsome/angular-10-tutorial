import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { HeroComponent } from './components/hero/hero.component';
import { CheckComponent } from './components/check/check.component';
import { CheckFirstChildComponent } from './components/check/check-first-child/check-first-child.component';
import { CheckSecondChildComponent } from './components/check/check-first-child/check-second-child/check-second-child.component'

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    HeroComponent,
    CheckComponent,
    CheckFirstChildComponent,
    CheckSecondChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
