window.onload=function(){
    this.setList();
    this.type();
}

// NAV
function setMenu(){
    var list=document.getElementById("list");
    if(list.style.height=="0px"){
        list.style.height="240px";
    }else{
        list.style.height="0px";
    }
}

function setList(){
    var list=document.getElementById("list");
    var width=document.body.clientWidth;
    if(width>=768){
        list.style.height="60px";
    }else{
        list.style.height="0px";
    }
}

window.onresize = function(){
    this.setList();
}

// FOCUS
function type(){
    var text=document.getElementById("text");
    var i=1;
    var str="期待可以有所帮助。(～￣▽￣)～";
    typing();
    function typing(){
        if (i <= str.length) {
            text.innerHTML = str.slice(0, i++);
            timer = setTimeout(typing,200);
        }
        else {
            text.innerHTML = str;
            clearTimeout(timer);
        }
    }
}


