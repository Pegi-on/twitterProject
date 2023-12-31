import express from 'express'
import usersRouter from './routes/users.routers'
import databaseService from './services/database.services'
const app = express()
app.use(express.json())
const PORT = 3000

databaseService.connect()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/users', usersRouter)
//localhost:3000/users/tweets

app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`)
})
