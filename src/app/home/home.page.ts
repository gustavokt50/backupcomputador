import { Storage } from '@ionic/storage';
import { LocationPage } from './../location/location.page';

import { Component, ViewChild, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCntr: NavController,
    private alertController: AlertController,
    private storage: Storage,
    public menuCtrl: MenuController
  ) {


  }
  ngOnInit() {
    this.menuCtrl.enable(true);

  }

  goToPage(page) {
    this.navCntr.navigateForward(page)
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.tasks.length == 500) {
        event.target.disabled = true;
      }
    }, 500);
  }
  updateLocalStorage() {
    localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
  }
  delete(task: any) {
    this.tasks = this.tasks.filter(taskArray => task != taskArray);

    this.updateLocalStorage();
  }
}


