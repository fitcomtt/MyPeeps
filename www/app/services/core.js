/**
 * Created by osei on 11/1/15.
 */
let db = new PouchDB('peeps',{});

export class Core {

    constructor() {
    }

    db = db;
    peeps = [];
itemOpened = {};

    getAllPeeps(){
      return new Promise((resolve,reject) => {
            db.allDocs({include_docs:true,attachments:true})
                .then((docs) => {
                    resolve(docs.rows)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    }
    getPeep(id) {
       return new Promise((resolve,reject)=>{
            db.get(id,{attachments:true})
                .then((docs) => {
                    resolve(docs)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    }

    addPeep(data,image,type) {
    var peep = data;
    peep._attachments = {};
    peep._attachments.avatar = {
        "content_type":type,
            "data":image
    };
    return  new Promise((resolve,reject)=>{
            db.post(peep)
            .then((doc)=>{
            resolve(doc)
        })
            .catch((err)=>{
        reject(err)
    })
})
    }

    editPeep(doc) {
      return  new Promise((resolve,reject)=>{
              db.get(doc._id)
              .then((success)=>{
              doc._rev = success._rev
              db.put(doc)
              .then((success) => {
              resolve(success)
          })
    .catch((err)=>{
            reject(err)
        })
          })
              .catch((err)=>{
            reject(err)
        })

        })
    }
    deletePeep(doc){
        return new Promise((resolve,reject)=>{
                db.remove(doc)
                .then((success)=>{
                resolve(success)
            })
                .catch((err)=>{
            reject(err)
        })

            })
    }

}

