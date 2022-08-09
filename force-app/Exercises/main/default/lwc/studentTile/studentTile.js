import { LightningElement, api,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SELECTED_STUDENT_CHANNEL from '@salesforce/messageChannel/SelectedStudentChannel__c';
export default class StudentTile extends LightningElement {
    @api student = {
        Name: 'Shubham Vyas',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
    };
    @api selectedStudentId = '';

    get tileSelected() {
        return (this.selectedStudentId===this.student.Id)
        ? "tile selected" : "tile";
    }
    studentClick(){
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: { studentId: this.student.Id }
            });
        this.dispatchEvent(evt) ;
    }
    handleStudentSelected(event){
        this.selectedStudentId=event.detail.studentId;
    }
}