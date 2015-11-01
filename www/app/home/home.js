import {Page} from 'ionic/ionic';
import {Core} from '../services/core';
@Page({
  templateUrl: 'app/home/home.html',
})

export class HomeCmp {

  constructor(core:Core) {
      this.core = core;
      console.log(core)
  }

    addPeep(){
        this.core.getAllDocs()
            .then(function (docs) {
                console.log(this)
              //  this.core.peeps.push(docs);
               // console.log(this.core.peeps)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

}


