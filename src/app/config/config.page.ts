import { AlertController, NavController } from '@ionic/angular';
import { StorageService } from './../services/storage.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
  
export class ConfigPage implements OnInit {
  theme : boolean ;
  
  constructor(
    private renderer : Renderer2,
    private storage:Storage,
    private alertCtrl: AlertController,
    public navCtrl : NavController
    ) {
    
  }
  async ngOnInit() {
    this.theme = await this.storage.get('theme');
  }
  async onToggleColorTheme(event){
    if(event.detail.checked){
      //document.body.setAttribute('color-theme','dark');
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
      this.theme = true;
      this.storage.set( 'theme' , this.theme);  
    }else{
      //document.body.setAttribute('color-theme','light');
      this.renderer.setAttribute(document.body, 'color-theme', 'light')
      this.theme = false;
      this.storage.set( 'theme' , this.theme);    
    };
  }
  
  async logout() {
    const confirm = await this.alertCtrl.create({
      header: 'Deseja mesmo sair do aplicativo?',
      message: '',
      buttons: [
        {
          text: 'Não',
          handler: () => { }
        },
        {
          text: 'Sim',
          handler: async () => {
            let val = await this.storage.get('selfie-lembrar-senha');
            if (val) {
              this.storage.remove('selfie-dig-leituras');
              this.storage.remove('selfie-ocorrencias');
              this.storage.remove('selfie-token');
              this.storage.remove('selfie-readings-add');
            } else {
              this.storage.clear();
            }
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await confirm.present();
  }
}

