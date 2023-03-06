let lip = document.getElementById("lipstick");
let tool = document.getElementById("toolpic");
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    lip.style.right= value/6 + 'px';
    tool.style.top= value/2 + 'px';
})
