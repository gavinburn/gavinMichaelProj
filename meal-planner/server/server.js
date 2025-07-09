import express from 'express'
import cors from 'cors'
import { PrismaClient } from "./src/generated/prisma/index.js"

const prisma = new PrismaClient()
const app = express()

// allow requests from your front-end origin
app.use(cors({ origin: 'http://localhost:5173' }))

app.get("/api", async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        console.log('DB →', users)         // logs your array of users
        res.json(users)                    // sends JSON array to client
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'DB error' })
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})