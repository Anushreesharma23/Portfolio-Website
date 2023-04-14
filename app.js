const express= require('express')
const app = express()
const path = require('path')
const UserModel = require("./models/user")
const database = require('./db')
const transporter = require('./email')
let port=8000;

database();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'pugfiles'))

app.use('/pictures', express.static(process.cwd() + '/pictures')); //to read from pictures
app.use('/files', express.static(process.cwd() + '/files')); //to read from files
app.use(express.urlencoded({extended: true})); //for MongoDB

app.get('/',(req,res)=>{
    res.status(200).render('index.pug')
})
app.get('/resume',(req,res)=>{
    res.status(200).render('resume.pug')
})

app.post('/', async (req, res)=>{
try {
    const {Name, Email, WorkOpportunities} = req.body;
    const message = new UserModel({
        Name,
        Email,
        WorkOpportunities,
    })

    const savedMessage = await message.save();

    const options = {
        from: 'anushreesharma232003@outlook.com',
        to: Email,
        subject: "Form Submitted Successfully",
        text: "Thank You for contacting me, I will reply to you shortly!"
    }
    
    transporter.sendMail(options, (err, info)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log("Sent" + info.response)
    })

    console.log(savedMessage);

} 
catch (error) {
    console.error(error.message);
    res.status(500).send("An Error Occured!");
}   

    res.status(200).render('index.pug')
})

app.listen(port,()=>{
    console.log(`the application has started successfully on localhost: http://localhost:${port}`);
})
