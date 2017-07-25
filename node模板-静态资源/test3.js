//静态方法
const express=require('express');
const app= express();
//  /ac是虚拟目录
app.use('/ac',express.static('../')).use(express.static('./')).listen(// ../是文件目录
  4000,()=>{
    console.log('running.....')
  })