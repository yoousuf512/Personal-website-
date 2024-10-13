let tablink =  document.getElementsByClassName("tab-links");
let tabcontent =  document.getElementsByClassName("tabcontents");
let sidemenu = document.getElementById("sidemenu");


function openmanu(tabname){
    for(tablinks of tablink){
        tablinks.classlist.remove("activelink");
    }

    for(tabcontents of tabcontent){
        tabcontents.classlist.remove("activelink");
    }
    event.currentTarget.classlist.add("activelink");
    document.getElementById(tabname).classList.add("active")
}


function openmanu(){
    sidemenu.style.right = "0";
}


function closemenu(){
    sidemenu.style.right = "-200px";
}
















