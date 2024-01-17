import 'dotenv/config'
import express from 'express'
import { routes } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../swagger.json'
 
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.HOST}:${port}`)
})