import firebase from 'firebase'
import 'firebase/firestore'

class Api {
    static get URL () {
        return 'http://192.168.26.224:8080/'
    }

    static get (resource) {
        return m.request({ method: 'GET', url: Api.URL + resource })
    }

    static post (resource, data) {
        return m.request({ method: 'POST', url: Api.URL + resource, data: data })
    }
}

class _Firebase {
    constructor() {
        // this.url = 'https://firestore.googleapis.com/v1beta1/projects/crossed-wires/databases/(default)/documents/'
        firebase.initializeApp({
            apiKey: '',
            authDomain: '',
            databaseURL: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: '',
        })
        this.db = firebase.firestore()
        this.collections = {}
    }

    _col (collection) {
        let col = this.collections[collection]

        if (!col) {
            col = this.collections[collection] = this.db.collection(collection)
        }

        return col
    }

    doc (collection, doc) {
        return this._col(collection).doc(doc)
    }

    // static stripFields (item) {
    //     return Object.keys(item).forEach(
    //         field => item[field] = item[field][Object.keys(item[field])[0]]
    //     )
    // }

    // static transform (response) {
    //     return response.documents.reduce((acc, curr) => {
    //         const key = curr.name.substr(curr.name.lastIndexOf('/') + 1)
    //         _Firebase.stripFields(curr.fields)
    //         acc[key] = curr.fields
    //         return acc
    //     }, {})
    // }
}

class Storage {
    static set (key, obj) {
        localStorage.setItem(key, JSON.stringify(obj))
    }

    static get (key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

const Firebase = new _Firebase()

export { Api, Firebase, Storage }
