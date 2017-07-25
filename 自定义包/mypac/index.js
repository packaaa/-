//读取markdown文件 
const  md=require('markdown-it')();
const path=require('path');
const fs=require('fs');
let tplPath=path.join(__dirname,'tpl.html');
let mdPath=path.join(__dirname,'demo.md');
let targetPath=path.join(__dirname,'demo.html');

//读取markdown文件
fs.readFile(mdPath,'utf8',(err,data)=>{
  if(err) return;
  let result=md.render(data);
  let tpl =fs.readFile(tplPath,'utf8',(err,tplData)=>{
    if (err) return;
     tplData=tplData.replace('<%content%>',result);
    //生成的最终文件
    fs.writeFile(targetPath,tplData,(err)=>{
      console.log('转换完成');
    })
  })
})

/*var md=require('markdown-it')();
var result =md.render('## dsfsfsad');
console.log(result);
*/