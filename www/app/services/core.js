/**
 * Created by osei on 11/1/15.
 */
let db = new PouchDB('mypeeps');

export class Core {

    constructor() {

    }

    peeps = [];


    getAllPeeps(){
      return new Promise((resolve,reject) => {
            db.allDocs()
                .then((docs) => {
                    resolve(docs)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    }
    getPeep(id) {
       return new Promise((resolve,reject)=>{
            db.get(id)
                .then((docs) => {
                    resolve(docs)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    }

    addPeep(peep) {

    }

    editPeep(id) {
      return  new Promise((resolve,reject)=>{
            db.put()
        })
    }

}

