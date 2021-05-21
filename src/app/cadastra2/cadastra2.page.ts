import { HttpService } from './../services/http.service';
import { Storage } from '@ionic/storage';
import { valida } from './../validadores/validaData'
import { Setup } from 'src/app/setup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sepultado } from './../models/sepultado';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastra2',
  templateUrl: './cadastra2.page.html',
  styleUrls: ['./cadastra2.page.scss'],
})

export class Cadastra2Page implements OnInit {

  atributos: any;
  sepultados: any = null;
  informacoes: any;
  submitAttempt: boolean;
  sepultadoForm: FormGroup;
  pegatoken: any;
  token: any;
  id_sepultado:any;
  id_jazigo_fk:any;
  data1 = this.sepultado["data_nascimento"];
  data2 = this.sepultado["data_obito"];


  @ViewChild('map') mapElement: ElementRef;
  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public storage: Storage,
    public sepultado: sepultado,
    public toast: ToastController,
    public formBuilder: FormBuilder,
    public http: HttpService,
    public valida: valida,
    public setup: Setup,

  ) {
    this.sepultadoForm = this.formBuilder.group({
      jazigo_fk:[''],
      nome: ['', Validators.compose([Validators.required])],
      causa_obito_fk: ['', Validators.compose([Validators.required])],
      data_nascimento: ['', Validators.compose([Validators.required])],
      data_obito: ['', Validators.compose([Validators.required])],
      data_sepultamento: ['', Validators.compose([Validators.required])],
    }, { 'validator': this.valida.validaData && this.valida.validaDataSepultado });
  }
  async ionViewDidEnter(){
    
    this.sepultadoForm.reset();
    this.id_sepultado = await this.storage.get('id_jazigo');
    this.id_jazigo_fk = Number(this.id_sepultado);
  }
  async ngOnInit() {
    this.pegatoken = await this.storage.get('selfie-token').then((result) => {
      this.token = result.token;
    });
    this.id_sepultado = await this.storage.get('id_jazigo');
    console.log('id sepultado:' ,this.id_sepultado);
    this.id_jazigo_fk = Number(this.id_sepultado)
    console.log('id_jazigo_fk:' ,this.id_jazigo_fk);
    this.informacoes = await this.storage.get('sepultados')
    this.getSepultados();
    this.getAtributos();
    if (this.informacoes == null) {
      this.informacoes = [];
    }
  }

  async showToast(message: string) {
    let toast = await this.toast.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }
  getAtributos() {
    this.http.get(`atributos/search/40`, this.token).subscribe(
      dados => this.atributos = dados,
      err => {
        if (err != null) {
          this.showToast('Não foi possivel buscar os dados. Tente novamente em alguns minutos.');
        }
      }
    );
  }
  getSepultados() { 
    this.http.get(`sepultados`, this.token).subscribe(
      dados => this.sepultados = dados,
      err => {
        if (err != null) {
          this.showToast('Não foi possivel buscar os dados. Tente novamente em alguns minutos.');
        }
      }
    );
  }
  async sucesso() {
    const toast = await this.toast.create({
      message: 'Cadastrado com Sucesso',
      duration: 1000
    });
    toast.present();
  }
  async erro() {
    const toast = await this.toast.create({
      message: 'Ocorreu um Problema no Cadastro',
      duration: 1000
    });
    toast.present();
  }
  async save() {
    this.informacoes = await this.storage.get('sepultados');
    
    if (this.informacoes == null) {
      this.informacoes = [];
    }
    this.sepultado.jazigo_fk = this.id_jazigo_fk;
    this.informacoes.push(this.sepultado);
    await this.storage.set('sepultados', this.informacoes);
    this.sucesso();
    this.navCtrl.navigateForward('/home');

  }
  deletar() {
    this.storage.remove('sepultados');
  }

}