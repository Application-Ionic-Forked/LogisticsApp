import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

	constructor(
		private menu: MenuController
	) { }

	routeClickCloseMenu() {
		this.menu.close('first');
	}
}
