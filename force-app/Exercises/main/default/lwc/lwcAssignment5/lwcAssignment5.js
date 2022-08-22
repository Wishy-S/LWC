import { LightningElement ,track} from 'lwc';

export default class LwcAssignment5 extends LightningElement {
    @track result;
    @track op1;
    @track op2;
    handler(e){
        if(e.target.name === 'op1'){
            this.op1 = e.target.value;
        }
        if(e.target.name === 'op2'){
            this.op2 = e.target.value;
        }
    }
    add(){
        this.result = Number(this.op1)+Number(this.op2);
    }
    mul(){
        this.result = this.op1*this.op2;
    }
    div(){
        this.result = this.op1/this.op2;
    }
    sub(){
        this.result = this.op1-this.op2;
    }
}