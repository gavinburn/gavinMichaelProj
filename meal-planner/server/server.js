import express from 'express'
import cors from 'cors'
import { PrismaClient } from "./src/generated/prisma/index.js"
import { FitnessGoal, Gender, FitnessLevel, validateEnumValue } from '../common/constants.js'

const prisma = new PrismaClient()
const app = express()

app.use(express.json());
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

app.post("/api/user", async (req, res) => {
    try {
        // Validate enum values
        try {
            validateEnumValue(req.body.fitnessGoal, FitnessGoal, 'fitnessGoal');
            validateEnumValue(req.body.gender, Gender, 'gender');
            validateEnumValue(req.body.fitnessLevel, FitnessLevel, 'fitnessLevel');
        } catch (enumError) {
            return res.status(400).json({ error: enumError.message });
        }

        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                fitnessGoal: req.body.fitnessGoal,
                fitnessLevel: req.body.fitnessLevel,
                gender: req.body.gender,
                password: req.body.password,
                username: req.body.username,
                weight: req.body.weight,
                favoriteCuisines: req.body.favoriteCuisines
            },
        })

        console.log("User created:", user)
        
        // Send back the created user (without password)
        const { password, ...userWithoutPassword } = user
        res.status(201).json(userWithoutPassword)
        
    } catch (error) {
        console.error("Error creating user:", error)
        res.status(500).json({ error: "Failed to create user" })
    }
})


app.listen(5000, () => {console.log("Server started on port 5000")})