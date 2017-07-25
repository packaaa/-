#h5标签
##1、块级元素，有意义的div
<article>     定义一篇文章，强调独立性
<header>    定义一个页面或一个区域的头部
  <nav>       定义导航链接
<section>    定义一个区域，例如将一块内容分成几段
<aside>      定义页面内容部分的侧边栏
  <hgroup>    定义文件中一个区块的相关信息，里面放h系列的标签，最好h3
<figure>      定义一组媒体内容以及它们的标题
<figcaption>  定义figure元素的标题
<footer>    定义一个页面或一个区域的底部
<dialog>    定义一个对话框类似微信
##2、多媒体标签
<video>  定义一个视频
<audio>  定义音频内容
<source>   定义媒体资源
<canvas>   定义图片
<embed> 定义外部的可交互的内容或插件  比如 flash
##3、Web 应用标签
<menu>    命令列表
<menuitem>  menu命令列表标签（嵌入系统）
<command> menu标记定义一个命令按钮
<meter>   实时状态显示：气压、气温（ 状态标签）
属性：min、max、value、low、high  value在low和high中间正常，之外会变色警告
<progrss>  任务过程：安装、加载（状态标签）进度条
<datalist>  为input标记定义一个下拉列表，配合option
<detalis>   标记定义一个元素的详细内容，配合dt、dd，有下拉框
##4、注释标签
<ruby>  定义注释或音标
<rp>    告诉那些不支持Ruby元素的浏览器如何去显示，注释括号
<rt>      定义对ruby的注释内容文本，注释在ruby上面就像汉语汉字上的拼音
##5、其他标签
<keygen>    定义表单里一个生成的键值（加密信息传送）
<mark>    定义有标记的文本（黄色选中状态）
<output>    定义一些输出类型，计算表单结果配合oninput事件
6、重新定义的标签
<dd>  问题
<dt>    描述
<hr>    表示主题结束，是一条水平线
<small>   表示小字体，例如注释或者法律条款
<menu>    定义用户界面的菜单，配合commond或者menuitem使用

#二、HTML5视频、音频播放事件属性与API控件
##1、video、audio标签
<video src = "movie.mp4" controls = "controls"><video>
或者<video controls = "controls">
<source src = "movie.mp4"> 
<video>
属性  值 描述
autoplay  autoplay（可省略） 视频自动播放
controls  controls（可省略） 向用户显示播放控件
width px  播放器宽度
height  px  播放器高度
loop  loop、数字 播放完是否继续播放、播放次数
preload proload 是否等待加载完再播放
src url 视频url地址
poster  imgurl  加载等待的画面图片
autobuffer  autobuffer  设置为浏览器缓冲方式，不设置autoplay时有效
##2、HTML5视频API 控件
###（1）获得video标签
①通过DOM对象    var video = document.getElementById("videoID");
②通过jQuery 的方法 var video = $("#videoID")[0];
video标签的属性
载入视频：load()
播放视频：play()
暂停:pause()
快进10秒：currentTime +=10
播放速度增加：playbackRate ++
播放速度增加0.1：playbackRate += 0.1
音量增加：volume += 0.1
静音：muted = true
###（3）事件
canplay  
duration 媒体长度
timeupdate  媒体当前位置
#三、表单
##1、表单输入类型
类型  使用示例  含义
email <input type="email">  输入邮箱格式
tel <input type="tel">  输入手机号码格式
url <input type="url">  输入url格式
number  <input type="number"> 输入数字格式
search  <input type="search"> 搜索框（体现语义化）
range <input type="range">  自由拖动滑块
color <input type="color">  拾色器
time  <input type="time"> 小时
date  <input type="date"> 年月日
datetime  <input type="datetime"> 时间输入框
month <input type="month">  年月
week  <input type="week"> 年周

##2、表单元素
元素  含义
<datalist>  数据列表
<keygen>  生成加密字符串
<output>  输出结果
<meter> 度量器
##3、表单属性
属性  用法  含义
placeholder <input type="text" placeholder="请输入用户名">  占位符
autofocus <input type="text" autofocus> 自动获得焦点
multiple  <input type="file" multiple>  多文件上传
autocomplete  <input type="text" autocomplete="off"> 值：off、on 自动完成
form  <input type="text" form="某表单ID">  
novalidate  <form novalidate></form>  关闭验证
required  <input type="text" required>  必填项
pattern <input type="text" pattern="\d">  自定义验证



#四、DOM扩展
##1、获取元素
①document.getElementsByClassName ('class') 通过类名获取元素，以伪数组形式存在。
②document.querySelector('selector') 通过CSS选择器获取元素，符合匹配条件的第1个元素。
③document.querySelectorAll('selector') 通过CSS选择器获取元素，以伪数组形式存在。
##2、类名操作
①Node.classList.add('class') 添加class
②Node.classList.remove('class') 移除class
③Node.classList.toggle('class') 切换class，有则移除，无则添加
④Node.classList.contains('class') 检测是否存在class
Node指一个有效的DOM节点，是一个通称。
##3、自定义属性
在HTML5中我们可以自定义属性，其格式如下data-*=""，例如
data-info="我是自定义属性"，通过Node.dataset['info'] 我们便可以获取到自定义的属性值。
Node.dataset是以对象形式存在的，当我们为同一个DOM节点指定了多个自定义属性时，Node.dataset则存储了所有的自定义属性的值。
假设某元素 <div id="demo" data-name="itcast" data-age="10">
var demo = document.querySelector('#demo');
###1、读取自定义属性 demo.dataset（所有的属性及属性值）或者 demo.dataset['age']（age属性的值）
###2、设置demo.dataset['name'] = 'web developer'
#五、新增API
##1、网络状态
window.online 用户网络连接时被调用
window.offline 用户网络断开时被调用
##2、全屏
  Node.requestFullScreen() 开启全屏显示
document.cancelFullScreen() 关闭全屏显示，只能通过document才能关闭
  document.fullScreen检测当前是否处于全屏
全屏伪类选择器
:full-screen .box {}、:-webkit-full-screen {}、:moz-full-screen {}
##3、文件读取
通过FileReader对象我们可以读取本地存储的文件，使用 File 对象来指定所要读取的文件或数据。其中File对象可以是来自用户在一个 <input> 元素上选择文件后返回的FileList 对象，也可以来自由拖放操作生成的  DataTransfer。
实例化一个读取器：var reader = new FileReader();
读取文件reader.readAsDateURL();
 reader.readAsBinaryString();
        reader.readAsTEXT();
   事件监听onload 当文读取完成时调用
属性result 文件读取结果
##4、拖拽
①拖拽元素：页面中设置了draggable="true"属性的元素，其中<img>、<a>标签默认是可以被拖拽的
②目标元素：页面中任意的元素
③事件监听：根据元素类型不同，需要设置不同的事件监听
  a拖拽元素
ondrag  应用于拖拽元素，整个拖拽过程都会调用
ondragstart 应用于拖拽元素，当拖拽开始时调用，只触发一次
ondragleave 应用于拖拽元素，当鼠标离开拖拽元素时调用
ondragend 应用于拖拽元素，当拖拽结束时调用
  b目标元素
ondragenter 应用于目标元素，当拖拽元素进入时调用
ondragover  应用于目标元素，当停留在目标元素上时调用，
ondrop    应用于目标元素，当在目标元素上松开鼠标时调用
ondragleave 应用于目标元素，当鼠标离开目标元素时调用

##5、地理定位
①获取当前地理信息（只获取一次）
navigator. geolocation.getCurrentPosition(successCallback, errorCallback, options)
②重复获取当前地理信息（多次）
navigator. geolocation.watchPosition(successCallback, errorCallback, options)
当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position。
position.coords.latitude纬度
position.coords.longitude经度
position.coords.accuracy精度
position.coords.altitude海拔高度
当获取地理信息失败后，会调用errorCallback，并返回错误信息error
可选参数 options 对象可以调整位置信息数据收集方式
a) enableHighAccuracy 高精度模式 true、false
b) timeout 超时设置，单位为ms
c) maximumAge表示浏览器重新获取位置信息的时间间隔，单位为ms

##6、历史管理
提供window.history，对象我们可以管理历史记录，可用于单页面应用，Single Page Application，可以无刷新改变网页内容。
①pushState(data, title, url) 追加一条历史记录
  data对象，用于存储自定义数据，通常设为null
  title网页标题，基本上没有被支持，一般设为空
  url 以当前域为基础增加一条历史记录，不可跨域设置
②replaceState(data, title, url) 与pushState()基本相同，不同之处在于replaceState()，只是替换当前url，不会增加/减少历史记录。
③事件监听
onpopstate事件，当前进或后退时则触发，通过事件对象ev.state可以读取到存储的数据。
##7、Web存储（本地存储）
①  a、设置、读取方便
b、容量较大，sessionStorage约5M、localStorage约20M
c、只能存储字符串，可以将对象JSON.stringify() 编码后存储
②window.sessionStorage
a、生命周期为关闭浏览器窗口
b、在同一个窗口下数据可以共享
③window.localStorage
a、永久生效，除非手动删除
b、可以多窗口共享
④方法详解
setItem(key, value) 设置存储内容
getItem(key) 读取存储内容
removeItem(key) 删除键值为key的存储内容
clear() 清空所有存储内容
key(n) 以索引值来获取存储内容
⑤其它
WebSQL、IndexDB
##8、应用缓存
HTML5中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个cache manifest文件。
①优势
a、可配置需要缓存的资源
b、网络无连接应用仍可用
c、本地读取缓存资源，提升访问速度，增强用户体验
d、减少请求，缓解服务器负担
②缓存清单
一个普通文本文件，其中列出了浏览器应缓存以供离线访问的资源，推荐使用.appcache为后缀名，添加MIME类型
AddType text/cache-manifest .appcache
例如我们创建了一个名为demo.appcache的文件，然后在需要应用缓存在页面的根元素(html)添加属性manifest="demo.appcache"，路径要保证正确。
③manifest文件格式
a、顶行写CACHE MANIFEST
b、CACHE: 换行 指定我们需要缓存的静态资源，如.css、image、js等
c、NETWORK: 换行 指定需要在线访问的资源，可使用通配符
d、FALLBACK: 换行 当被缓存的文件找不到时的备用资源 ./online.html   ./offline.html 
               当online没有用offline替换
④其他
b、可以指定多个CACHE: NETWORK: FALLBACK:，无顺序限制
c、#表示注释，只有当demo.appcache文件内容发生改变时或者手动清除缓存后，才会重新缓存。
d、chrome 可以通过chrome://appcache-internals/工具和离线（offline）模式来调试管理应用缓存