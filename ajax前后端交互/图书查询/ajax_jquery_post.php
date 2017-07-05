<?php 
$name=$_POST["name"];
$books=array();
$books["shz"]=array("bookname"=>"水浒传","author"=>"施耐庵","desc"=>"一个沙发纷争的年代");
 $books['shz'] = array('bookname'=>'水浒传','author'=>'施耐庵','desc'=>'108条好汉的故事'); 
    $books['xyj'] = array('bookname'=>'西游记','author'=>'吴承恩','desc'=>'佛教与道教的斗争'); 
    $books['hlm'] = array('bookname'=>'红楼梦','author'=>'曹雪芹','desc'=>'一个封建王朝的缩影');
if (array_key_exists($name, $books)==1) {
  echo json_encode($books[$name]);
}else{
  echo '{"flag":0}';
};

 ?>
