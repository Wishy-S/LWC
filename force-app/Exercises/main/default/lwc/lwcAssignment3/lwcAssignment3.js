import { LightningElement ,track} from 'lwc';

export default class LwcAssignment3 extends LightningElement {
    @track canget = 'Eligible for Scholarship';
    @track cannotget = 'Not Eligible for Scholarship';
    @track result = '';
    @track marks;
    @track age;
    @track show = false;
    handler(e){
        if(e.target.name === 'age'){
            this.age = e.target.value;
        }
        if(e.target.name === 'marks'){
            this.marks = e.target.value;
        }
        this.show = false;
    }
    validate(){
        if(this.marks > 90 && (18<this.age && this.age<25)){
            this.result = this.canget;
        }else{
            this.result = this.cannotget;
        }
        this.show = true;
    }

}