const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(path.join(__dirname, '/public'))); // always use for statis files
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', (req, res, next)=>{
     // console.log('this is an application level middleware mounted on / route');
     return res.status(200).json({
          message:'asfjasfjkab'
     });
})


app.get('/', (req,res, next)=>{
     fs.readdir('./files', (err,files)=>{
          res.render('index',{files:files});
     }) 
})

app.get('/file/:filename', (req, res, next)=>{
     let filename = req.params.filename;
     console.log('this is the filename route '+req.params.filename);
     let data = fs.readFileSync(`./files/${req.params.filename}`, 'utf-8')
     console.log(data);
     res.render("view",{data:data,filename:filename });
})

app.post('/create', (req,res, next)=>{
     console.log('post endpoint');
     let arr=[];
     let newFilePathVar = req.body.title.trim().split(' ');
     for(let string of newFilePathVar ){
          arr.push(string[0].toUpperCase()+string.slice(1,string.length));
     }
      newFilePathVar = arr.join('');
     fs.writeFile(`./files/${newFilePathVar}.txt`,`${req.body.details}`, {flag:'w+'},(err)=>{
          if(err){
               console.error(err);
          }
     })
     res.redirect('/');
})

app.get('/edit/:filename', (req, res)=>{
     res.render('edit', {filename: req.params.filename});
});

app.post('/edit', (req, res)=>{
     console.log(req.body.current);
     console.log(req.body.newName);
     fs.renameSync(`./files/${req.body.current}`, `./files/${req.body.newName}`, function(err){
          res.redirect('/');
     });
})

app.use((req, res) => {
  res.status(404).send('Oops! Page not found');
});


app.listen(3000, ()=>{
     console.log('server started on port 3000');
});