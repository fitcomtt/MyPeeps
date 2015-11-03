/**
 * Created by osei on 11/2/15.
 */
import {Page,NavController,NavParams,Modal} from 'ionic/ionic'
import {editModal} from '../modal/edit';
import  {Core} from '../services/core';
@Page({
    templateUrl:'app/peep/peep.html'
})
export class Peep {
    constructor(nav:NavController,params:NavParams,modal:Modal,core:Core){
        this.nav = nav;
        this.params  = params;
        this.core = Core;
        //this.item = this.params['data'].item;
        this.modal = modal;
    this.item = core.peeps[this.params.data.id];

     //   console.log(this.item)
    }

    edit(){
        this.modal.open(editModal,{data:this.params['data'].id});
    }

}