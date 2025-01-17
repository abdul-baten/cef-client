import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './container/header.component';
import { HeaderFacade } from './facade/header.facade';
import { NgModule } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, BadgeModule, ButtonModule, OverlayPanelModule],
  providers: [HeaderFacade]
})
export class HeaderModule { }
