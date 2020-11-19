

function hide(id){
    var e = document.getElementById(id);

    if(e.style.display== 'block')
        e.style.display = 'none';
        else
        e.style.display = 'block';
}

if(document.getElementById("output") != null){
    var at=document.getElementById("output").innerHTML;
    console.log(a);
}

// var a = document.getElementById('output').innerHTML;
// console.log(a);
// var b = document.getElementsByClassName("#askedBy").innerHTML;
// console.log(b);
// var c = document.getElementsByClassName(".discrption").innerHTML;
// console.log(c);

function question(){
    var a = document.getElementsByClassName(".title");
    console.log(a);
    var b = document.getElementsByClassName("askedBy");
    console.log(b);
    var c = document.getElementsByClassName("discrption");
    console.log(c)
    return(a);
}

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();