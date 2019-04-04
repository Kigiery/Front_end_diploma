import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLayoutRoutingModule } from './menu-layout-routing.module';
import { MenuLayoutComponent } from './menu-layout.component';

@NgModule({
  declarations: [MenuLayoutComponent],
  imports: [
    CommonModule,
    MenuLayoutRoutingModule
  ]
})
export class MenuLayoutModule { }
