import { HttpService } from './../services/http.service';
import { Storage } from '@ionic/storage';
import { Geoposition, GeolocationOptions, PositionError } from '@ionic-native/geolocation';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Setup } from 'src/app/setup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jazigo } from './../models/jazigo';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-cadastra1',
  templateUrl: './cadastra1.page.html',
  styleUrls: ['./cadastra1.page.scss'],
})

export class Cadastra1Page implements OnInit {

  options: GeolocationOptions;
  currentPos: Geoposition;
  map: any;
  tipo_carneira: any;
  latitude: any;
  longitude: any;
  informacoes: any;
  lados: any;
  submitAttempt: boolean;
  jazigoForm: FormGroup;
  complementos: any = null;
  pegatoken: any;
  token: any;
  id_storage:any;
  

  @ViewChild('map') mapElement: ElementRef;
  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    public http: HttpService,
    public storage: Storage,
    public jazigo: jazigo,
    public toast: ToastController,
    public formBuilder: FormBuilder,
    public setup: Setup
  ) {
    this.jazigoForm = this.formBuilder.group({
      complemento_agente_fk: ['', Validators.compose([Validators.required])],
      tipo_carneira: ['', Validators.compose([Validators.required])],
      quadra: ['', Validators.compose([Validators.required])],
      fila: ['', Validators.compose([Validators.required])],
      lote: ['', Validators.compose([Validators.required])],
      lado: ['', Validators.compose([Validators.required])],
      latitude : [''],
      longitude : [''],
    }, { 'validator': [] });
  }
  ionViewDidEnter(){
    this.jazigoForm.reset();  
  }
  async ngOnInit() {
    this.getUserPosition();
    this.pegatoken = await this.storage.get('selfie-token').then((result) => {
      this.token = result.token;
    });
    this.getComplemento();
    this.pegarTipo();
    this.pegarLado();
    this.id_storage = await this.storage.get('id_jazigo');
    console.log(this.id_storage);
    this.informacoes = await this.storage.get('jazigos');
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
      duration: 1500
    });
    toast.present();
  }

  pegarTipo() {
    this.tipo_carneira =
      [
        {
          id: '1',
          nome: 'Simples'
        },
        {
          id: '2',
          nome: 'Dupla'
        },
        {
          id: '3',
          nome: 'Tripla'
        },
        {
          id: '4',
          nome: 'Quádrupla'
        }
      ]
  }
  pegarLado() {
    this.lados =
      [
        {
          id: 'E',
          nome: 'Esquerdo'
        },
        {
          id: 'D',
          nome: 'Direito'
        }
      ]
  }

  getComplemento() {
    
    this.http.get(`complemento_agentes`, this.token).subscribe(
      dados => this.complementos = dados,
      err => {
        if (err != null) {
          this.showToast('Não foi possivel buscar os dados. Tente novamente em alguns minutos.');
        }
      }
    );
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
      console.log(pos.coords.latitude, pos.coords.longitude);
      this.currentPos = pos;
      console.log(pos);
      this.addMap(pos.coords.latitude, pos.coords.longitude);
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.storage.set('latitude', pos.coords.latitude)
      this.storage.set('longitude', pos.coords.longitude)
    }, (err: PositionError) => {
      console.log("error : " + err.message);
      ;
    })
  }
  addMap(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);
    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
  }
  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<p>Esta é a sua posição atual !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  };

  async save() {
    this.id_storage = await this.storage.get('id_jazigo');
    if(this.id_storage == null){
      this.id_storage = "1";  
      await this.storage.set('id_jazigo',this.id_storage);
    }else{
      let resultado = Number(this.id_storage) + 1;
      let resultadostring = resultado.toString();  
      await this.storage.set('id_jazigo',resultadostring);
    }
    this.informacoes = await this.storage.get('jazigos');
    
    if (this.informacoes == null) {
      this.informacoes = [];
    }
    this.informacoes.push(this.jazigo);
    await this.storage.set('jazigos', this.informacoes);
    this.sucesso();
    this.navCtrl.navigateForward('/cadastra2');
    
  }

  prox() {
    this.navCtrl.navigateForward('/cadastra2');
  }
  deletar() {
    this.storage.remove('jazigos');
    this.storage.remove('id_jazigo');
  }

}
