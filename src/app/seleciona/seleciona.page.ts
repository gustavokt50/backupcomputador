import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from './../services/http.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { url_api } from './../../global-config';

@Component({
  selector: 'app-seleciona',
  templateUrl: './seleciona.page.html',
  styleUrls: ['./seleciona.page.scss'],
})
export class SelecionaPage implements OnInit {
  
  cemiterios: any = null;
  cemiterioForm: FormGroup;
  pegatoken:any;
  token:any;
  constructor(
    public navCtrl: NavController,
    public http: HttpService,
    public toastCtrl:ToastController,
    public formBuilder: FormBuilder,
    public storage: Storage
  ) {
    this.cemiterioForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
    }, { 'validator': [] });
  }

  async ngOnInit() {
    this.pegatoken = await this.storage.get('selfie-token').then((result) => {
      this.token = result.token;
    });
    this.getCemiterios();
  }
  prox(){
    this.navCtrl.navigateForward('/cadastra1');
  }
  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }
  getCemiterios() {
    this.http.get(`cemiterios`,this.token).subscribe(
      dados => this.cemiterios = dados,
      err => {
        if (err != null) {
          this.showToast('Não foi possivel buscar os dados. Tente novamente em alguns minutos.');
        }
      }
    );
  }
}
