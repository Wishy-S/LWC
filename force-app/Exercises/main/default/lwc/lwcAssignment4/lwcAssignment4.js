import { LightningElement ,track} from 'lwc';

export default class LwcAssignment4 extends LightningElement {
    @track daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    @track daysIndex = ['Jan','Deb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
}