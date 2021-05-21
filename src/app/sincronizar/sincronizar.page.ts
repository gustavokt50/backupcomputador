import { StorageService } from './../services/storage.service';
import { CemiterioService } from './../services/cemiterio.service';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Setup } from 'src/app/setup';
import JWT from 'jwt-decode';



@Component({
  selector: 'app-sincronizar',
  templateUrl: './sincronizar.page.html',
  styleUrls: ['./sincronizar.page.scss'],
})
export class SincronizarPage implements OnInit {
  token: any = null;
  errors = [];
  loader: any = null;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public cemiterioProvider: CemiterioService,
    public setup: Setup,
    public storage: StorageService,
    
  ) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    await this.getStorageToken();
    await this.showConfirmSync();
  }
  async getStorageToken() {
    await this.storage.get('selfie-token').then((val) => {
      if (val) {
        this.token = val.token;
        this.verificarValidadeToken();
      }
    });
  }
  verificarValidadeToken() {
    let prettyToken: any = JWT(this.token);
    if (prettyToken.exp < Date.now() / 1000) {
      this.storage.remove('selfie-token');
      this.showToast('Seu período de acesso ao aplicativo está expirado, por favor realize um novo login.');
      this.navCtrl.navigateRoot('login');
    }
  }
  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  async showConfirmSync() {
    this.loader = await this.loadingCtrl.create({
      message: "Sincronizando..."
    });
    await this.loader.present();
    await this.startSync();
    setTimeout(() => {
      this.loader.dismiss();
      this.navCtrl.navigateRoot('/home');
    }, 3000);
  }
  
  async startSync() {
    await this.storage.remove('cemiterios');
    await this.getCemiterio();
  }
  async getCemiterio() {
    await this.cemiterioProvider
      .getCemiterio(this.token)
      .subscribe(
        async items => {
          await this.storage.set('cemiterios', await this.handleItems(items));
        },
        err => {
          this.errors.push(err);
        }
      );
  }

  async handleItems(items) {
    const rawItems = await items.map(item => {
      return {
        nome: item.nome,
        cep: item.cep,
        endereco: item.endereco,
        numero: item.numero,
        complemento: item.complemento,
        municipio_fk: item.municipio_fk,
        bairro: item.bairro,
        linha_fk: item.linha_fk,
        distrito_fk: item.distrito_fk,
        latitude: item.latitude,
        longitude: item.longitude
      };
    });
    return rawItems;
  }

}
