/*const fs=require('fs');
fs.stat('./test2.js',(err,stat)=>{
  if (err) return;
  if (stat.isFile()) {console.log('文件')};
  if (stat.isDirectory()) {console.log('目录')};
  console.log(stat);
})*/

const path=require('path');
const fs=require('fs');
let root ='F:\\传智学习视频资料-流行框架以后\\node ,js\\day02\\练习';
let fileContent=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>welcome to this</div>
</body>
</html>`;
let inintData={
  projectName:'mydemo',
  data:[{
    name:'img',
    type:'dir'
  },{
    name:'css',
    type:'dir'
  },{
    name:'js',
    type:'dir'
  },{
    name:'index.html',
    type:'file'
  }]
};
fs.mkdir(path.join(root,inintData.projectName),(err)=>{
  if (err) return;
  inintData.data.forEach((item)=>{
    if (item.type=='dir') {
      fs.mkdirSync(path.join(root,inintData.projectName,item.name));
    }else if (item.type=='file') {
      // fs.createWriteFileSync(path.join(root,inintData.projectName,item.name),fileContent));
  fs.writeFileSync(path.join(root,inintData.projectName,item.name),fileContent);
    };

  })
})