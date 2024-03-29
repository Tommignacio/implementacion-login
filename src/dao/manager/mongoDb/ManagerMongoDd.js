'use strict'
class ManagerMongoDb {
    constructor(collection) {
        this.collection = collection
    }

    // Crea un nuevo documento
    async create(doc) {
        try {
            const newDoc = await this.collection.create(doc)
            console.log('aaaaaasasas')
            console.log({ newDoc })
            return newDoc
        } catch (err) {
            throw new Error('Error: ' + err)
        }
    }

    // Devuelve todos los documentos
    async getAll() {
        try {
            const all = await this.collection.find({})
            return all
        } catch (err) {
            throw new Error('Error: ' + err)
        }
    }

    // Devuelve el documento que coincide con el id
    async getOne(id) {
        try {
            const one = await this.collection.findById(id)
            console.log({ one })
            return one
        } catch (err) {
            throw new Error('Error: ' + err)
        }
    }

    // Actualiza un documento por su id
    async update(id, doc) {
        try {
            console.log(typeof id)
            const updateDoc = await this.collection.findByIdAndUpdate(id, doc)
            return updateDoc
        } catch (err) {
            throw new Error('Error: ' + err)
        }
    }

    // Guarda documento
    async save(doc) {
        try {
            await doc.save()
        } catch (err) {
            throw new Error('Error: ' + err)
        }
    }

    // Elimina por id
    async delete(id) {
        try {
            const deleteDoc = await this.collection.findByIdAndDelete(id)
            return deleteDoc
        } catch (err) {
            throw new Error('Error: ' + err)
        }
    }
}

export default ManagerMongoDb
