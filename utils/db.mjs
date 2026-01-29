import pkg from "pg";
const { Pool } = pkg;

const connectionPool = new Pool({
    connectionString: "postgresql://postgres:78910123@localhost:5432/CJ-BANK"
});

export default connectionPool;