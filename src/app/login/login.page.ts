<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, Platform} from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController } from '@ionic/angular';
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
<<<<<<< HEAD
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
=======

export class LoginPage implements OnInit {

  username: any = null;
  password: any = null;
  loader: any = null;
  lembrarSenha: any = null;
  subscribe: any;
  

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private authenticationProvider: AuthenticationService,
    private platform: Platform,
    public storage: Storage,
    public menuCtrl: MenuController
  ) {
    
  }


  ionViewDidEnter() {
    this.subscribe = this.platform.backButton.subscribeWithPriority(10, (() => {
      navigator["app"].exitApp();
    }));
    
  }

  ionViewDidLeave() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.storage.get('selfie-token').then((val) => {
      if (val != null) { 
        return this.navCtrl.navigateRoot('/home');
      }else{
        console.log(val)
      }
    });
    this.storage.get('selfie-lembrar-senha').then((val) => {
      if (val) {
        this.lembrarSenha = true;
        this.storage.get('selfie-pwd').then((val) => {
          if (val) {
            this.password = val;
          };
        });
        this.storage.get('selfie-username').then((val) => {
          if (val) {
            this.username = val;
          }
        });
      }
    })
  }

  salvarSenha() {
    this.storage.set('selfie-lembrar-senha', true);
    this.storage.set('selfie-pwd', this.password);
  }

  async logar() {
    
    if (this.validate()) {
      if (this.lembrarSenha) {
        this.salvarSenha();
      } else {
        this.storage.set('selfie-lembrar-senha', 'false');
      }
      this.loader = await this.loadingCtrl.create({
        message: "Autenticando..."
      });
      await this.loader.present();
      this.username = this.username.toLowerCase();
      this.authenticationProvider
        .login(this.username, this.password)
        
        .subscribe(
          token => this.saveToken(token),
          () => {
            this.loader.dismiss();
            this.showToast('Credenciais inválidas.');
          }
        );
        
    }
  }

  saveToken(token: any) {
    
    this.loader.dismiss();
    this.storage.set('selfie-token', token);
    this.storage.set('selfie-username', this.username);
    this.nextPage();
  }

  nextPage() {
    this.showToast('Usuário autenticado com sucesso.');
    return this.navCtrl.navigateRoot('/home');
  }

  validate() {
    if (this.username == null) {
      this.showToast('Informe o usuário a ser autenticado.');
      return false;
    }
    else if (this.password == null) {
      this.showToast('Informe a senha do usuário.');
      return false;
    } else {
      return true;
    }
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
  }

}
