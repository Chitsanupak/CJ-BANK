import * as pg from "pg";
const {pool} = pg.defaults

const connectionPol = new pool({
    connectionString: "postgresql://postgres:78910123@localhost:4000/CJ-BANK"
});

export default connectionPol;