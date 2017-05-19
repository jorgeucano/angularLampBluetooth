import { Injectable } from '@angular/core';

@Injectable()
export class BluetoothService {

    private _navigator:any;
    private device:any;
    private ledCharacteristic:any;
    private ledLamp:boolean;


    constructor(){
        this._navigator = navigator;
    }

    lamp(){
        this.ledLamp = true;
    }

    lampTurnOn() {
        if(this.ledLamp){
            let data = new Uint8Array([0xcc, 0x23, 0x33]);
            return this.ledCharacteristic.writeValue(data)
                .catch(err => console.log('Error in lampTurnOn ', err))
        }
    }

    lampTurnOff(){
        if(this.ledLamp){
             let data = new Uint8Array([0xcc, 0x24, 0x33]);
            return this.ledCharacteristic.writeValue(data)
                .catch(err => console.log('Error in lampTurnOff ', err))
        }
    }

    lampChangeColor(red:number, green:number, blue:number){
        let data = new Uint8Array([0x56, red, green, blue, 0x00, 0xf0, 0xaa]);
        return this.ledCharacteristic.writeValue(data)
            .catch(err => console.log('Error in lampChangeColor: ', err));
    }

    

    /*
        example:
            services =>  [0xffe5] or type (text) 

    */ 
    connect(){

       console.log('Requesting Bluetooth Device...');
        this._navigator.bluetooth.requestDevice(
        {
            filters: [{ services: [0xffe5] }]
        })
        .then(device => {
            console.log('> Found ' + device.name);
            console.log('Connecting to GATT Server...');
            return device.gatt.connect();
        })
        .then(server => {
            console.log('Getting Service 0xffe5 - Light control...');
            return server.getPrimaryService(0xffe5);
        })
        .then(service => {
            console.log('Getting Characteristic 0xffe9 - Light control...');
            return service.getCharacteristic(0xffe9);
        })
        .then(characteristic => {
            console.log('All ready!');
            this.ledCharacteristic = characteristic;
        })
        .catch(error => {
            console.log('Argh! ' + error);
        });
    }


    //Get disconnected from a Bluetooth Device
    onDisconnected(event) {
        let device = event.target;
        console.log('Device ' + device.name + ' is disconnected.');
    }

    turnOn() {
    let data = new Uint8Array([0xcc, 0x23, 0x33]);
    return this.ledCharacteristic.writeValue(data)
        .catch(err => console.log('Error when turning on! ', err))
        .then(() => {

        });
    }

    turnOff() {
    let data = new Uint8Array([0xcc, 0x24, 0x33]);
    return this.ledCharacteristic.writeValue(data)
        .catch(err => console.log('Error when turning off! ', err))
        .then(() => {
            
        });
    }




}