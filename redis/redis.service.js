const Redis = require("ioredis");
const client = new Redis();

const entity = "user";

async function getAll() {
    const data = await client.get(`${entity}`);
    return data ? data : []
}

async function get(id) {
    const data = await client.get(`${entity}:${id}`);

    if (!user) {
        throw Error('User not found')
    }

    return data
}

async function create(dto) {
    const id = await client.get(`${entity}`).length

    const data = await client.set(`${entity}:${id}`, dto);

    return { id }
}

async function update(dto, id) {
    await client.set(`${entity}:${id}`, dto);

    return { id }
}

async function deleteById(id) {
    const user = await get(id)

    await client.set(`${entity}:${id}`, null);
}


module.exports = {
    getAll,
    get,
    create,
    update,
    deleteById,
}