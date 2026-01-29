import express from "express"
import connectionPool from "./utils/db.mjs";

const app = express()
const port = 4000

app.use(express.json())

app.post("/customers-create",async (req,res) => {
    const newcustomers = {
        ...req.body,
        created_at: new Date(),
        updated_at: new Date(),
    };
    await connectionPool.query(
        `insert into customers (customer_id,first_name,last_name,email,phone,created_at)
        values ($1,$2,$3,$4,$5,$6)`,
        [
            1,
            newcustomers.first_name,
            newcustomers.last_name,
            newcustomers.email,
            newcustomers.phone,
            newcustomers.created_at,
        ]
        
    );
    
});

app.listen(port, () => {
    console.log(`runing at ${port}`)
});