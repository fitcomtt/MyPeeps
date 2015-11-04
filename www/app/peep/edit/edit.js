/**
 * Created by osei on 11/2/15.
 */
/**
 * Created by osei on 11/1/15.
 */
import {Page,NavController,NavParams} from 'ionic/ionic';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {Core} from '../../services/core';
import {viewPeep} from '../../peep/view/view';

@Page({
    templateUrl: 'app/peep/edit/edit.html'
})
export class editPeep  {
    self;
    constructor(core:Core,nav:NavController,params:NavParams){
        this.core = core;
        self = this;
        this.nav = nav;
        this.params = params;
      // this.peep = core.peeps[this.params.data.id].doc;
        this.peep = this.params.data.item.doc;
        let avatar = document.getElementsByClassName('edit-avatar');

        document.getElementById('file').onchange = function () {
            if (document.getElementById('file').files[0]){
                let reader = new FileReader();

                reader.onloadend = function () {
                   avatar[0].src = reader.result;
                };
                reader.readAsDataURL(document.getElementById('file').files[0])
            }
        }
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
    var data = {};
    data.doc = this.peep;
    this.nav.push(viewPeep,{item:data});
}
}
