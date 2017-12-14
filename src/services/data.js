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

class Api {
    static request (resource, method='GET') {
        const url = `http://localhost:8080/${resource}`
        return m.request({ method: method, url: url })
    }
}


export { Api, Firebase }
