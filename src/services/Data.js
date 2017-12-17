class Api {
    static get URL () {
        return 'http://localhost:8080/'
    }

    static get (resource) {
        return m.request({ method: 'GET', url: Api.URL + resource })
    }

    static post (resource, data) {
        return m.request({ method: 'POST', url: Api.URL + resource, data: data })
    }
}

class Firebase {
    request () {
        this.url = 'https://firestore.googleapis.com/v1beta1/projects/crossed-wires/databases/(default)/documents/'
    }

    static stripFields (item) {
        return Object.keys(item).forEach(
            field => item[field] = item[field][Object.keys(item[field])[0]]
        )
    }

    static transform (response) {
        return response.documents.reduce((acc, curr) => {
            const key = curr.name.substr(curr.name.lastIndexOf('/') + 1)
            Firebase.stripFields(curr.fields)
            acc[key] = curr.fields
            return acc
        }, {})
    }
}

class Storage {
    static set (key, obj) {
        localStorage.setItem(key, JSON.stringify(obj))
    }

    static get (key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export { Api, Firebase, Storage }
