import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PeopleProvider} from "../../providers/people/people";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public people ;
  public shouldReorder = false;

  constructor(public navCtrl: NavController, public  service: PeopleProvider) {
      this.people = service.getPeople();
  }

  toggleReorder() {
    this.shouldReorder = !this.shouldReorder
  }


}
