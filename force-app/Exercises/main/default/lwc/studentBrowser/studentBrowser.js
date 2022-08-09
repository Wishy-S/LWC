import { LightningElement } from 'lwc';

export default class StudentBrowser extends LightningElement {
    studentList = [];
    constructor() {
        super() ;//set up the correct prototype chain
        const studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul',
        'Amit', 'Simon'];
        this.studentList = studentNames.map( (studentName, index) => {
        return {
        'sobjectType': 'Contact',
        'Name': studentName,
        'PhotoUrl': '/services/images/photo/003B0FakePictId',
        'Id': index
        };
        });
    }
}
