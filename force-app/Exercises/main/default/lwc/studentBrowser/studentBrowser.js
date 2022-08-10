import { LightningElement ,wire} from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';
import { publish, MessageContext } from 'lightning/messageService';
import SELECTED_STUDENT_CHANNEL from '@salesforce/messageChannel/SelectedStudentChannel__c';

export default class StudentBrowser extends LightningElement {
    
    selectedDeliveryId = '';    
    selectedInstructorId = '';
    cols = [
        {
        fieldName:"Name",
        label: "Name"
        },
        {
        fieldName:"Title",
        label: "Title",
        hiddenOnMobile: true
        },
        {
        fieldName:"Phone",
        label: "Phone",
        type: "phone"
        },
        {
        fieldName:"Email",
        label: "E-Mail",
        type: "email"
        }
        ];
    @wire(getStudents, { instructorId: '$selectedInstructorId',
    courseDeliveryId: '$selectedDeliveryId' })
    students;
    handleFilterChange(event){
        this.selectedDeliveryId = event.detail.deliveryId;
        this.selectedInstructorId = event.detail.instructorId;
    }   
    
    handleStudentSelected(event){
        const studentId = event.detail.studentId;
        this.updateSelectedStudent(studentId);
    }
    updateSelectedStudent(studentId){
        publish(this.messageContext, SELECTED_STUDENT_CHANNEL, {
        studentId: studentId
        });
    }
    @wire(MessageContext)messageContext;
}
