function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight){

      content.style.maxHeight = null;
    } else {
      
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// function hide(id){
//     var e = document.getElementById(id);

//     if(e.style.display== 'block')
//         e.style.display = 'none';
//         else
//         e.style.display = 'block';
// }

// if(document.getElementById("output") != null){
//     var at=document.getElementById("output").innerHTML;
//     console.log(a);
// }

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
  // document.getElementById("defaultOpen").click();

