async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://admin:pass@localhost:5432/user'
    });

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function getAll() {
    const client = await connect();
    const res = await client.query('SELECT * FROM users');
    return res.rows;
}

async function get(id) {
    const client = await connect();
    const res = await client.query(`SELECT * FROM users WHERE id = ${id}`);
    return res
}

async function create(dto) {
    const client = await connect();
    const keys = Object.keys(dto).join(",")
    const values = Object.keys(dto).join(",")
    const res = await client.query(`INSERT INTO users(${keys}) VALUES(${values})`);

    return res.id
}

async function update(dto, id) {
    const client = await connect();
    const entries = Object.entries(dto).reduce((acc, it) => `${acc} ${it[0]} = ${it[1]}`, "")
    await client.query(`UPDATE users() SET ${entries} WHERE id = ${id}`);
}

async function deleteById(id) {
    const client = await connect();
    await client.query(`DELETE FROM users WHERE id = ${id}`);
}


module.exports = {
    getAll,
    get,
    create,
    update,
    deleteById,
}