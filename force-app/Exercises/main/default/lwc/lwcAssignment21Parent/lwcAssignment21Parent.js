import { LightningElement } from 'lwc';

export default class LwcAssignment21Parent extends LightningElement {
    Amount;
    calc(e){
        this.Amount = e.detail; 
    }
}