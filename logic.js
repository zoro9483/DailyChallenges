

function hide(id){
    var e = document.getElementById(id);

    if(e.style.display== 'block')
        e.style.display = 'none';
        else
        e.style.display = 'block';
}

var a = document.getElementsByClassName("#title").innerHTML;
console.log(a);
var b = document.getElementsByClassName("#askedBy").innerHTML;
console.log(b);
var c = document.getElementsByClassName(".discrption").innerHTML;
console.log(c);

function question(){
    var a = document.getElementsByClassName(".title");
    console.log(a);
    var b = document.getElementsByClassName("askedBy");
    console.log(b);
    var c = document.getElementsByClassName("discrption");
    console.log(c)
    return(a);
}