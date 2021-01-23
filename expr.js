const ex = require('express')
const app = ex();
const path = require('path');
const posts = require('./data.json')

app.use(ex.static('assets'));
app.set('views',path.join(__dirname,'/assets'));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));
app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    const data = posts[subreddit];
    if(data){
       res.render('subreddit',{...data}) ;
    }else{res.send('<h1>render not found</h1>')};
    
})


app.get('*',(req,res)=>{
    res.send("Hello this is all");
})







app.listen(228,()=>{
    console.log("SERVER IS STARTING...");
})