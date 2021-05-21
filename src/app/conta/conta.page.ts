import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
 cadastrados:any;
 getcad:any;
  constructor(
    public storage: Storage,
    public navCtrl: NavController
  ){

  }
  async ngOnInit() {
    this.getcad = await this.storage.get('cemiterios');
    this.listaConsulta();
  }

  consulta() {
    this.getcad.forEach((value) => {
      console.log(value);
    });
  }


  listaConsulta(){
    this.consulta();
   
  }

}
