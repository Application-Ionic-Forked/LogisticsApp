import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout.component';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
	declarations: [
		LayoutComponent,
		SidenavComponent,
		ToolbarComponent
	],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		IonicModule
	]
})
export class LayoutModule { }
