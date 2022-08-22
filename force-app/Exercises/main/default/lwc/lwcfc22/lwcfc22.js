import { LightningElement ,track, wire } from 'lwc';
import getAllLeads from '@salesforce/apex/studentDetail.getAllLeads'
import { MessageContext, publish } from 'lightning/messageService';
import Lead_Channel from '@salesforce/messageChannel/Lead_Channel__c'
export default class Lwcfc22 extends LightningElement {
    @track leads;
    // @wire(getAllLeads)
    // fetchLeads({data,error}){
    //     this.leads = data;
    //     console.log('Data: ',data);
    // }
    @wire(MessageContext)messageContext;
    input;
    handler(e){
        this.input = e.target.value;
    }
    Search(){
        getAllLeads({input:this.input}).then((res)=>{
            this.leads = res;
            console.log('res: ',res);
            publish(this.messageContext,Lead_Channel,this.leads);
        }).catch((e)=>{
            console.log('err',e);
        })
    }

}