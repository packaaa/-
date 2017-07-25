const http=require('http');
const path=require('path');
const fs=require('fs');
const querystring=require('querystring');
const score=require('./scores.json');
http.createServer((req,res)=>{
  //查询地址入口 /query 使用get
  if (req.url.startsWith('/query') && req.method=='GET') {

    //读取文件
    fs.readFile(path.join(__dirname,'login.html'),'utf8',(err,content)=>{
if (err) {
//文件头
  res.writeHead(500,{'Content-type':'text/plain;charset=utf8'})
  res.end('服务器错误，请联系管理员');

};
//把文件内容传过去
res.end(content);

    });
  }else if (req.url.startsWith('/score')) {
    //使用post获取成绩结果
    let pdata='';
    req.on('data',(chunk)=>{
      pdata+=chunk;
    });
  
    req.on('end',()=>{console.log(pdata);
      let obj=querystring.parse(pdata);
      let result=score[obj.code];
      fs.readFile(path.join(__dirname,'score.art'),'utf8',(err,content)=>{
if (err) {
  res.writeHead(500,{'Content-type':'text/plain;charset=utf8'});
  res.end('服务器错误，请联系管理员')
};
//返回内容之前要进行数据渲染
content=content.replace('{{chinese}',result.chinese);
content=content.replace('{{math}}',result.math);
content=content.replace('{{english}',result.english);
content=content.replace('{{summary}',result.summary);
  res.end(content)

      })
    })
  };

}).listen(3000,()=>{
  console.log('running....');
})