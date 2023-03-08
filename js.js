let lip = document.getElementById("lipstick");
let tool = document.getElementById("toolpic");
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    if(scrollY >= 919){
        lip.style.right= value/6 + 'px';
    }
    if(scrollY >= 2990){
    tool.style.top= value/2 + 'px';
    }
})
