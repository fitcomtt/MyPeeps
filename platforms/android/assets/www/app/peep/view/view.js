/**
 * Created by osei on 11/2/15.
 */
import {Page,NavController,NavParams} from 'ionic/ionic'
import {editPeep} from '../../peep/edit/edit';
import  {Core} from '../../services/core';
import {List} from '../../list/list';
@Page({
    templateUrl:'app/peep/view/view.html'
})
export class viewPeep {
    self;
    constructor(nav:NavController,params:NavParams,core:Core){
        this.nav = nav;
        this.params  = params;
        this.core = Core;
        self = this;
         //this.item = core.peeps[this.params.data.id];
        this.item = this.params.data.item;
        console.log(this.item)
    }

    edit(){
        this.nav.push(editPeep,{item:this.params['data'].item,id:this.params['data'].id});
    }

    back(){
        this.nav.push(List)
    }
}