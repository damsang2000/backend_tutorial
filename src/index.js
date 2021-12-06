import {engine} from 'express-handlebars'
import path from 'path'
import { dirname } from 'path'
import express from 'express'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
const app=express()
const port=3000
// Lấy directory thư mục
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

app.use(express.static(path.join(__dirname,'public')))

// dùng morgan để debug
app.use(morgan('combined'))
// tạo handlebars và config đuôi file
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources/views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})