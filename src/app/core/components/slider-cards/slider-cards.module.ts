import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderCardsComponent } from './slider-cards.component';



@NgModule({
    declarations: [
        SliderCardsComponent
    ],
    exports: [
        SliderCardsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SliderCardsModule { }
