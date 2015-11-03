/**
 * Created by osei on 11/1/15.
 */
import {Modal,Page} from 'ionic/ionic';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {Core} from '../services/core';

@Page({
    templateUrl: 'app/modal/add.html'
})
export class addModal  {
    self;
    constructor(core:Core){
        this.core = core;
        self = this;

    }
    peep: Object = {};
    file:any;
    addContact(form) {

        if(this.file){
            let file  = document.getElementById('file').files[0];

            let reader = new FileReader();
            reader.onloadend = function () {
                let base64 = reader.result.replace('data:'+file.type+';base64,','');
                let data = form.value;
                delete data.file;
                self.core.addPeep(data,base64,file.type)
                    .then((success)=>{
                    self.core.peeps.push(success);
                console.log(self.core.peeps)
            })
        .catch((err)=>{
                console.log(err)
        })
            };
            reader.readAsDataURL(file)
        }else{
          let  image = new Image();
            image.onload = function () {
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image,0,0);
                let base64 = canvas.toDataURL('image/jpeg').replace('data:image/jpeg;base64,','');
                let data = form.value;
                delete data.file;
                self.core.addPeep(data,base64,'image/jpeg')
                    .then((success)=>{
                    self.core.peeps.push(success);
                console.log(self.core.peeps)
                })
            .catch((err)=>{
                console.log(err)
            })
            };
            image.src = 'app/assets/images/no_image.jpg';

        }

    }

getImage(){
    document.getElementById('file').click();
}

}
