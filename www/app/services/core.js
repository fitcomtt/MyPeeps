/**
 * Created by osei on 11/1/15.
 */


var db = new PouchDB('mypeeps');

export class Core{


    constructor(){

    }

    peeps:any[] = [];

    getAllDocs(){
        return new Promise(function (resolve,reject) {
            db.allDocs()
                .then(function (docs) {
                    resolve(docs)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }
    getDoc(id){
        return new Promise(function (resolve,reject) {
            db.get(id)
                .then(function (doc) {
                    resolve(doc)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

}