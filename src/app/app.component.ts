import { SincronizarPage } from './sincronizar/sincronizar.page';

import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { ConfigPage } from './config/config.page';
import { LoginPage } from './login/login.page';
import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import JWT from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD

  navigate : any;
  constructor() 
=======
  navigate: any;
  public token: any;

  constructor(
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public login: LoginPage,
  )
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
  {
    this.initializeApp();
    this.sideMenu(); // Faz "aparecer" as páginas no menu lateral
  }
  async ngOnInit() {
    this.storage.create();
    var t = await this.storage.get('theme');
    if (t == true) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  sideMenu()
  {
      this.navigate =
        [
          {
            title: "Home",
            url: "/home",
            icon: "home-outline"
          },
          {
            title: "Sincronizar",
            url: "/sincronizar",
            icon: "cloud-upload-outline"
          },
          {
            title: "Suporte",
            url: "/suporte",
            icon: "help-outline"
          },
          {
            title: "Sobre",
            url: "/sobre",
            icon: "information-outline"
          },
          {
            title: "Configurações",
            url: "/config",
            icon: "settings-outline"
          },
        ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getStorageToken();
    });
  }

  getStorageToken() {
    this.storage.get('selfie-token').then((val) => {
      if (val) {
        this.token = val.token;
        this.verificarValidadeToken();
        this.navCtrl.navigateRoot('/home');
      } else {
        console.log('ta vindo nulo val token');
        this.navCtrl.navigateRoot('/login');
      }
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  verificarValidadeToken() {
    
    let prettyToken: any = JWT(this.token);
    if (prettyToken.exp < Date.now() / 1000) {
      this.storage.remove('sgr-token');
      this.showToast('Seu período de acesso ao aplicativo está expirado, por favor realize um novo login.');
      this.navCtrl.navigateRoot('/login');
    }
  }
}
