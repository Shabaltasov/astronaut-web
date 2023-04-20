import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {HeaderModule} from "../../header/header.module";
import {SliderCardsModule} from "../../slider-cards/slider-cards.module";
import {FooterModule} from "../../footer/footer.module";



@NgModule({
    declarations: [
        MainPageComponent
    ],
    exports: [
        MainPageComponent
    ],
  imports: [
    CommonModule,
    HeaderModule,
    SliderCardsModule,
    FooterModule
  ]
})
export class MainPageModule { }
