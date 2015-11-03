/**
 * Created by osei on 11/1/15.
 */
import {NgFor} from 'angular2/angular2';
import {Page,Modal,NavController} from 'ionic/ionic';
import {Core} from '../services/core';
import {addModal} from '../modal/add';
import {Peep} from '../peep/peep';

@Page({
    templateUrl: 'app/list/list.html',
    directives: [NgFor]
})

export class List {
    self;

    constructor(core:Core, modal:Modal, nav:NavController) {
        this.core = core;
        self = this;
        this.modal = modal;
        this.nav = nav;
        this.peeps = core.peeps;
        this.core.getAllPeeps()
            .then((docs) => {
            core.peeps = docs;
        this.peeps = core.peeps;
    })
.catch((err) => {
    console.log(err)
})
}

addPeep(){
    this.modal.open(addModal);
}
viewPeep(index){
   this.nav.push(Peep,{id:index})
}
    deletePeep(id,index,event){

    }
}
