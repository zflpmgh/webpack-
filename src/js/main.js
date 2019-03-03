

var btn=document.getElementById("btn");
btn.onclick=function(){
    import('./source.js').then(function(data){
		alert(data.default)    //data.fefault是jsonp请求返回的数据，也就是source.js通过export default暴露的数据。
})

}