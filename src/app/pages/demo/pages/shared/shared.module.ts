import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, ControlsModule } from '@app/shared';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    ControlsModule
  ]
})
export class SharedModule { }
