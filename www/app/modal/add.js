/**
 * Created by osei on 11/1/15.
 */
import {Modal,Page} from 'ionic/ionic';
import {FORM_DIRECTIVES} from 'angular2/angular2';

@Page({
    templateUrl: 'app/modal/add.html'
})
export class addModal  {
    fn:string;
    email:string;

    addContact() {
        console.log(this.fn, this.email)
    }

}
