import { fileURLToPath } from 'url'
import { dirname } from 'path'
import app from './app'


require('dotenv').config({ path: './.env' })


const port = process.env.PORT || 4545

app.all('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../index.html'))
  // res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
  res.json({ error: 'incorrect path' })
})

app.listen(port, () => {
    console.log(`🚀 Server ready at: http://localhost:${port}`)
})
