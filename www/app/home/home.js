/**
 * Created by osei on 11/1/15.
 */
import {NgFor} from 'angular2/angular2';
import {Page,Modal,NavController} from 'ionic/ionic';
import {Core} from '../services/core';

@Page({
    templateUrl: 'app/home/home.html',
    directives: [NgFor]
})

export class HomeCmp {
    self;

    constructor(core:Core,modal:Modal,nav:NavController) {
        this.core = core;
        self = this;
        this.modal = modal;
        this.nav = nav;
        this.core.getAllPeeps()
            .then((docs) => {
                console.log(docs)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    addPeep() {
self.modal.open(addModal);
    }

}


@Page({
    templateUrl:'./app/modal/add.html'
})
class addModal extends Modal{
    constructor(){

    }
}