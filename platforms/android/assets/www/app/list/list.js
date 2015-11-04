/**
 * Created by osei on 11/1/15.
 */
import {NgFor,Pipe,PipeTransform} from 'angular2/angular2';
import {Page,NavController,Popup} from 'ionic/ionic';
import {Core} from '../services/core';
import {addPeep} from '../peep/add/add';
import {viewPeep} from '../peep/view/view';
import {editPeep} from '../peep/edit/edit'

@Page({
    templateUrl: 'app/list/list.html',
    directives: [NgFor],
})

export class List {
    self;
    constructor(core:Core, nav:NavController,popup:Popup) {
        this.core = core;
        self = this;
        this.nav = nav;
        this.peeps = core.peeps;
        this.popup = popup;
        this.core.getAllPeeps()
            .then((docs) => {
            core.peeps = docs;

    })
.catch((err) => {
    console.log(err)
})
}

addPeep(){
    this.nav.push(addPeep)
}
viewPeep(index,doc){
   this.nav.push(viewPeep,{id:index,item:doc})
}
    deletePeep(doc,index,event){
        event.preventDefault();
        event.stopPropagation();
        this.popup.confirm({
            title: 'Delete'+' '+doc.fn+' '+doc.ln,
            subTitle: 'Are you sure?',
            cancelText: 'Cancel',
            okText: 'Ok',

        }).then(()=>{
            self.core.deletePeep(doc)
            .then((success)=>{
          self.core.peeps.splice(index,1)
    })
    .catch((err)=>{

        })
        },()=>{
//cancelled
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
