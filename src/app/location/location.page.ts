<<<<<<< HEAD
import { Storage } from '@ionic/storage';
import { HomePageModule } from './../home/home.module';
import { AppModule } from './../app.module'
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, MenuController } from '@ionic/angular';
=======
import { Setup } from 'src/app/setup';
import { cemiterio } from './../models/cemiterio';
import { Storage } from '@ionic/storage';
import { MenuController, ToastController } from '@ionic/angular';
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
// geolocation and native-geocoder
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
<<<<<<< HEAD
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
=======
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387

declare var google;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
<<<<<<< HEAD
  latitude: number;
  longitude: number;
  capturedSnapURL: string;
=======

>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
  options: GeolocationOptions;
  currentPos: Geoposition;
  map: any;
  latitude: any;
  longitude: any;
  informacoes: any;
  submitAttempt: boolean;
  cemiterioForm: FormGroup;
  

  @ViewChild('map') mapElement: ElementRef;
<<<<<<< HEAD
  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    private menu: MenuController,
    private storage:Storage,
    private camera: Camera
=======
  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private menu: MenuController,
    public storage: Storage,
    public cemiterio: cemiterio,
    public toast : ToastController,
    public formBuilder: FormBuilder,
    public setup: Setup
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
  ) {
    this.cemiterioForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      municipio_fk: ['', Validators.compose([Validators.required])],
      cep: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{2}.[0-9]{3}-[0-9]{3}')])],
      bairro: ['', Validators.compose([Validators.required])],
      endereco: ['', Validators.compose([Validators.required])],
      numero: [],
      complemento: [],
    }, { 'validator': [] });
  }
  ionViewDidEnter() {
    this.getUserPosition();
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  async ngOnInit() {
    this.informacoes = await this.storage.get('cemiterios')
    if(this.informacoes == null){
      this.informacoes = [];
    }
  }
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {

      console.log(err);
      // Handle error
    });
  }

  nome: undefined;
  morte: undefined;
  cidade: undefined;
  estado: undefined;
  valor: null;
  src: string = '';

  registrar(): any {
    console.log('Registrar');
    console.log(this.nome);
    console.log(this.morte);
    console.log(this.cidade);
    console.log(this.estado);
  }

  setNome(valor) {
    this.nome = valor;
  }

  setMorte(valor) {
    this.morte = valor;
  }

  setCidade(valor) {
    this.cidade = valor;
  }

  setEstado(valor) {
    this.estado = valor;
  }


  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    };
<<<<<<< HEAD
    this.geolocation.getCurrentPosition(this.options).then(async (pos: Geoposition) => {
=======
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
      console.log(pos.coords.latitude, pos.coords.longitude);
      this.currentPos = pos;
      console.log(pos);
      this.addMap(pos.coords.latitude, pos.coords.longitude);
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
<<<<<<< HEAD
      await this.storage.set('latitude', this.latitude);
      await this.storage.set('longitude', this.longitude);
=======
      this.storage.set('latitude', pos.coords.latitude)
      this.storage.set('longitude', pos.coords.longitude)
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
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
      this.informacoes = await this.storage.get('cemiterios');
      this.cemiterio.cep = this.setup.unFormat(this.cemiterio.cep);
      this.informacoes.push(this.cemiterio);
      this.storage.set('cemiterios', this.informacoes);
      if (
      this.informacoes.push(this.cemiterio),
      this.storage.set('cemiterios', this.informacoes)
      ) {
        this.sucesso();
        this.navCtrl.navigateForward('/home');
      }else{
        this.erro();
      }
    }
    deletar(){
      this.storage.remove('cemiterios');
    }
  
}
