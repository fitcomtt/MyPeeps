/**
 * Created by osei on 11/1/15.
 */
import {Page,NavController} from 'ionic/ionic';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {Core} from '../../services/core';
import {List} from '../../list/list';

@Page({
    templateUrl: 'app/peep/add/add.html'
})
export class addPeep {
    self;

    constructor(core:Core, nav:NavController) {
        this.core = core;
        this.nav = nav;
        self = this;
    }

    peep:Object = {};
    file:any;

    addContact(form) {

        if (form.form.valid) {
            if (this.file) {
                let file = document.getElementById('file').files[0];
                let reader = new FileReader();
                reader.onloadend = function () {
                    let base64 = reader.result.replace('data:' + file.type + ';base64,', '');
                    let data = form.form.value;
                    delete data.file;
                    self.core.addPeep(data, base64, file.type)
                        .then((success) => {
                        self.core.getPeep(success.id)
                        .then((doc) => {
                        let item = {};
                    item.doc = doc;
                    self.core.peeps.push(item);
                    self.nav.push(List);

                })
                    .
                    catch((err) => {
                        console.log(err)
                })


                })
                    .
                    catch((err) => {
                        console.log(err)
                })
                };
                reader.readAsDataURL(file)
            } else {
                let image = new Image();
                image.onload = function () {
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    ctx.drawImage(image, 0, 0);
                    let base64 = canvas.toDataURL('image/jpeg').replace('data:image/jpeg;base64,', '');
                    let data = form.value;
                    delete data.file;
                    self.core.addPeep(data, base64, 'image/jpeg')
                        .then((success) => {
                        self.core.getPeep(success.id)
                        .then((doc) => {
                        let item = {};
                    item.doc = doc;
                    self.core.peeps.push(item);
                    self.nav.push(List);

                })
                    .
                    catch((err) => {
                        console.log(err)
                })

                })
                    .
                    catch((err) => {
                        console.log(err)
                })
                };
                image.src = 'app/assets/images/no_image.jpg';

            }
        }


    }

    getImage() {
        document.getElementById('file').click();
    }

    goBack() {
       // this.nav.push(List);
        document.getElementById('avatar').src = 'app/assets/images/no_image.jpg';
        this.nav.pop();
    }

   fileChanged(file) {
    if (file.target.files[0] != undefined){
        let reader = new FileReader();
        reader.onloadend = function () {
            document.getElementById('avatar').src = '';
            document.getElementById('avatar').src = reader.result;
        };
        reader.readAsDataURL(document.getElementById('file').files[0])
    }

}

}
