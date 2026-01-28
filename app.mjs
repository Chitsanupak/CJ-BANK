import express from "express"

const app = express()
const port = 4000

app.post("/posts", (req,res) => {
    const newPost = {
        
    }
});

app.listen(port, () => {
    console.log(`runing at ${port}`)
});