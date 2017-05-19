import { Component } from '@angular/core';
import { BluetoothService } from './services/bluetooth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  
  constructor(private BS:BluetoothService){
       
  }

  ngOnInit (){
    
  }
  
  connect(){
    this.BS.connect();
  }

  turnOn(){
    this.BS.turnOn();
  }

  turnOff(){
    this.BS.turnOff();
  }

  turnRed(){
    this.changeColor(255,0,0);
  }

  turnGreen(){
    this.changeColor(0,255,0);
  }

  turnBlue(){
    this.changeColor(0,0,255);
  }

  red= 0;
  green=0;
  blue=0;
  changeWithForm(){
    this.changeColor(this.red, this.green, this.blue);
  }

  changeColor(r, g, b){
    this.BS.lampChangeColor(r,g,b);
  }

}
