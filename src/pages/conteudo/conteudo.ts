import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConteudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html',
})
export class ConteudoPage {
  public nome:string = "Luis Fernando";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somadoisnumeros(num1:number,num2:number): void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
      //  this.somadoisnumeros(10,99);
  }

}
