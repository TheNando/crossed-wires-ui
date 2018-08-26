import m from 'mithril'

import Config from './Config'
import firebase from 'firebase/app'
import 'firebase/firestore'

/** Api Requests */

class Api {
  url = 'http://localhost:8080/'
  headers = {}

  get(resource) {
    return m.request({
      method: 'GET',
      url: this.url + resource,
      headers: this.headers,
    })
  }

  post(resource, data) {
    return m.request({
      method: 'POST',
      url: this.url + resource,
      data,
      headers: this.headers,
    })
  }

  setHeaders(sessionId) {
    this.headers = { Authorization: `Token ${sessionId}` }
  }
}

const ApiSingleton = new Api()

/** Firebase */

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

const FirebaseSingleton = new Firebase()

/** Local Storage Interface */

class Storage {
  static set(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }
}

/** Session cache */

class Session {
  id: string
  name: string
  handle: string
  robot: string
  team: string

  constructor() {
    // Check for existing session and cache if found
    this.load(Storage.get('session'))
  }

  load(session) {
    const { id, user } = session

    if (!id || !user) {
      return
    }

    this.id = id
    this.name = user.name
    this.handle = user.handle
    this.robot = user.robot
    this.team = user.team
    ApiSingleton.setHeaders(this.id)
  }

  set(session) {
    this.load(session)
    Storage.set('session', session)
  }
}

const SessionSingleton = new Session()

// const getData = (event, key) => event.target

const getText = (event) => event.target.innerText.trim()

export {
  ApiSingleton as Api,
  FirebaseSingleton as Firebase,
  SessionSingleton as Session,
  Storage,
  // getData,
  getText,
}
