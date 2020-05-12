var ball=document.getElementById("ball");
ball.style.top=ball.offsetTop + 'px';
ball.style.left=ball.offsetLeft + 'px';

var h=ball.offsetHeight;
var l=ball.offsetWidth;
window.addEventListener('keypress',function(event){

    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);
    if(event.key==="w")
    {
        if(top>5){
            ball.style.top=top-5+'px';
        }
    }
    if(event.key==="s")
    {
        if(top<(window.innerHeight-h)-5){
            ball.style.top=top+5+'px';
        }
    }
    if(event.key==="a")
    {
        if(left>5){
            ball.style.left=left-5+'px';
        }
    }
    if(event.key==="d")
    {
        if(left<(window.innerWidth-l)-5){
            ball.style.left=left+5+'px';
        }
    }



    


   

});
