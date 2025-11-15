import fs from 'fs'

fs.writeFile('roshan.txt','my name is roshan',{flush:true},(errObj)=>{
     if(errObj) console.error(errObj);
     else console.log('file created');
})

fs.appendFile('roshan.txt','\n stfu bitch',{flush:true},(errObj)=>{
     if(errObj) console.error(errObj);
     else console.log('appended text to file ');
})

fs.copyFile('roshan.txt','./copied/roshan.txt',(errObj)=>{
     if(errObj) console.error(errObj);
     else console.log('copid file');
})

fs.rename('./copied/roshan.txt', './copied/name.txt', (err) => {
     if(err) console.error('this is an error ' +err.message);
     else console.log('done rename');
})

fs.rm('./copied/name.txt',{ recursive: true}, function(err){
     if(err) console.error(err);
     else console.log('done deleting copied file');
} )

