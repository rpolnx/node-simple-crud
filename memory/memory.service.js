const db = require('./db')

const entity = "user";

async function getAll() {
    return db.getAll(entity)
}

async function get(id) {
    const user = db.get(entity, id)

    if (!user) {
        throw Error('User not found')
    }
    return user
}

async function create(dto) {
    const id = db.create(entity, dto)
    return { id }
}

async function update(dto, id) {
    const consolidate = db.update(entity, dto, id)

    return { consolidate }
}

async function deleteById(id) {
    const user = db.get(entity, id)

    if (!user) {
        throw Error('User not found')
    }

    return db.deleteById(entity, id)
}


module.exports = {
    getAll,
    get,
    create,
    update,
    deleteById,
}