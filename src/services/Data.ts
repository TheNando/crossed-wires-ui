import m from 'mithril'

import Config from './Config'
import firebase from 'firebase/app'
import 'firebase/firestore'

class Api {
  static get URL() {
    return 'http://localhost:8080/'
  }

  static get(resource) {
    return m.request({ method: 'GET', url: Api.URL + resource })
  }

  static post(resource, data) {
    return m.request({ method: 'POST', url: Api.URL + resource, data: data })
  }
}

firebase.initializeApp(Config.firebase)

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

class Firebase {
  collections = {}
  db = firestore
  //url = 'https://firestore.googleapis.com/v1beta1/projects/crossed-wires/databases/(default)/documents/'

  _col(collection) {
    let col = this.collections[collection]

    if (!col) {
      col = this.collections[collection] = this.db.collection(collection)
    }

    return col
  }

  doc(collection, doc) {
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
  static set(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }
}

const Cache = {}

const FirebaseSingleton = new Firebase()

export { Api, FirebaseSingleton as Firebase, Storage, Cache }
