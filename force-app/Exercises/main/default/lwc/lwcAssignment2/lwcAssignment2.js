import { LightningElement,track} from 'lwc';

export default class LwcAssignment2 extends LightningElement {
    @track name;
    @track address;
    @track salary;
    @track designation;
    @track show = false;
    handler(event){
        // console.log('et: ',event.target);
        
        if(event.target.name === 'name')
        this.name = event.target.value;

        if(event.target.name === 'address')
        this.address = event.target.value;

        if(event.target.name === 'salary')
        this.salary = event.target.value;
        
        if(event.target.name === 'designation')
        this.designation = event.target.value;

        this.show = false;
    }
    doit(){
        this.show = true;
    }
}