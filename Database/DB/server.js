import db from './connection.js';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk'
import routes from '../Router/index.js'

const app = express();
const Port = process.env.PORT || 3051 ;

app.use(express.json());
app.use(cors({
    origin: 'https://betterportfolio-production.up.railway.app'
  }));

app.use('/', routes);

db.on('connected', () => {
console.clear()
console.log(chalk.greenBright.bold('Connected!'))
app.listen(Port, () =>{
    console.log(chalk.yellowBright.bold(`Express is Running on ${Port}`))
})
})