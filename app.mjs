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


app.post("/accounts_create", async (req,res)=> {
    const newaccouts = {
        ...req.body,
        created_at: new Date(),
        updated_at: new Date(),
    };
    await connectionPool.query(
        `insert into accouts (account_id,customer_id ,account_number ,account_type ,balance ,status ,created_at )
        values ($1,$2,$3,$4,$5,$6,$7)`,
        [
            1,
            2,
            newaccouts.account_number,
            newaccouts.account_type,
            newaccouts.balance,
            newaccouts.status,
            newaccouts.created_at,
        ]
        
    );
})

app.post("/transfer", async (req,res) => {

    try{
        const{from_account,to_accont,amount} = req.body

        // เช็กข้อมูลที่ส่งมา
        if (!from_account || !to_accont || !amount){
            return res.status(400)._construct.json({message: "กรุณากรอกข้อมูลให้ครบ"})
        };

         // ดึงยอดเงินของฝั่งโอน
        const sender = await client.query(
            "SELECT balanc FROM accounts WHERE account_id = $1"
            [to_accont]
        );



    } catch (err){
        await client.query("ROLLBACK")
    }
})

