import { LightningElement } from 'lwc';

export default class LwcAssignment21Child extends LightningElement {
    principal;
    rate;
    time;
    Amount;
    handler(e){
        if(e.target.name === 'principal')
        this.principal = e.target.value;
        if(e.target.name === 'rate')
        this.rate = e.target.value;
        if(e.target.name === 'time')
        this.time = e.target.value;
    }

    helper(){
        let P = Number(this.principal);
        let R = Number(this.rate);
        let T = Number(this.rate);
        this.Amount = P + ((P*R*T)/100);
        console.log(this.Amount);
        this.dispatchEvent(new CustomEvent(
            "calculate",{
                detail:this.Amount  
            }
        ));
    }

}