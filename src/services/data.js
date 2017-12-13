const url = 'https://firestore.googleapis.com/v1beta1/projects/crossed-wires/databases/(default)/documents/'

const stripFields = (item) => Object.keys(item).forEach(
    (field) => item[field] = item[field][Object.keys(item[field])[0]]
)

const transform = (response) => {
    return response.documents.reduce((acc, curr) => {
        const key = curr.name.substr(curr.name.lastIndexOf('/') + 1)
        stripFields(curr.fields)
        acc[key] = curr.fields
        return acc
    }, {})
}

export { transform, url }
