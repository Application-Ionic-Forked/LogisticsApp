import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
	declarations: [
		LayoutComponent,
		SidenavComponent
	],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		IonicModule
	]
})
export class LayoutModule { }
