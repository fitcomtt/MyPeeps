/**
 * Created by osei on 11/2/15.
 */
import {Page,NavController,NavParams,ViewController} from 'ionic/ionic'
import {editPeep} from '../../peep/edit/edit';
import  {Core} from '../../services/core';
import {List} from '../../list/list';
@Page({
    templateUrl:'app/peep/view/view.html'
})
export class viewPeep {
    self;
    constructor(nav:NavController,params:NavParams,core:Core,vc:ViewController){
        this.nav = nav;
        this.params  = params;
        this.core = Core;
        self = this;
        this.vc = vc;
        this.item = core.peeps[this.params['data'].id].doc;
        this.vc.willEnter = function(){
            core.getPeep(this.params['data'].item.id)
                .then(function(doc){
                    document.getElementById('avatar').src = 'data:'+doc._attachments.avatar.content_type+';base64,'+doc._attachments.avatar.data
                }).catch(function(err){
            });
        };
    }

    edit(){
        this.nav.push(editPeep,{item:this.params['data'].item,id:this.params['data'].id});
    }

    back(){
        this.nav.push(List)
    }

}