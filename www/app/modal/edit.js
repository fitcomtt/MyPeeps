/**
 * Created by osei on 11/2/15.
 */
/**
 * Created by osei on 11/1/15.
 */
import {Modal,Page} from 'ionic/ionic';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {Core} from '../services/core';

@Page({
    templateUrl: 'app/modal/edit.html'
})
export class editModal  {
    self;
    constructor(core:Core,modal:Modal){
        this.core = core;
        self = this;
        this.modal = modal;
        this.peep = core.peeps[self.modal._defaults.data].doc;
    }

    file:any;
    editContact(form) {
        if(this.file){
            var file  = document.getElementById('file').files[0];

            var reader = new FileReader();
            reader.onloadend = function () {
                var base64 = reader.result.replace('data:'+file.type+';base64,','');
                var data = form.value;
                delete data.file;
                data._id = self.peep._id;
                data._attachments = {};
                data._attachments.avatar = {
                    "content_type":file.type,
                    "data":base64
                };

                self.core.editPeep(data)
                    .then((success)=>{
                self.peep = data
            })
        .catch((err)=>{
                console.log(err)
        })
    };
    reader.readAsDataURL(file)
}else{
        var data = form.value;
        delete data.file;
            data._id = self.peep._id;
            data._attachments = self.peep._attachments;
            self.core.editPeep(data)
            .then((success)=>{
                self.peep = data
    })
.catch((err)=>{
        console.log(err)
})

}

}

getImage(){
    document.getElementById('file').click();
}
done(){
    this.close();
}
}
