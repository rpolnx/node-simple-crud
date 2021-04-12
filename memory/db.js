const db = {
    "user": []
}

function getAll(entity) {
    return db[entity]
}

function get(entity, id) {
    console.log(id)
    return db[entity].find(it => it.id == id)
}

function create(entity, dto) {
    const id = db[entity].length + 1
    db[entity].push({ ...dto, id })

    return id
}

function update(entity, dto, id) {
    db[entity].push({ ...dto, id: Number(id) })

    return id
}

function deleteById(entity, id) {
    console.log(db[entity].filter(it => it.id !== id))
    db[entity] = db[entity].filter(it => it.id != id)
}


module.exports = {
    getAll,
    get,
    create,
    update,
    deleteById,
}