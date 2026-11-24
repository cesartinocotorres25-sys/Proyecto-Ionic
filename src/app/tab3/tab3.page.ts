import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonText} from '@ionic/angular';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MonsterCard } from 'halloween-ui'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, ExploreContainerComponent, MonsterCard],
})
export class Tab3Page {
  constructor() {}
}
