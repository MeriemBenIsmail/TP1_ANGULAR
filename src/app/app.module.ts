import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { InfoFormComponent } from './carteVisite/info-form/info-form.component';
import { CarteComponent } from './carteVisite/carte/carte.component';
import { WordComponent } from './directives/word/word.component';
import { RainbowComponent } from './directives/rainbow/rainbow.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    FatherComponent,
    SonComponent,
    InfoFormComponent,
    CarteComponent,
    WordComponent,
    RainbowComponent,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
