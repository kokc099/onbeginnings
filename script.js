
dragElement(document.getElementById("textone"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("textone")) {
    document.getElementById("textone").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
/*second text*/
dragElementtwo(document.getElementById("texttwo"));

function dragElementtwo(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("texttwo")) {
    document.getElementById("texttwo").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*third text*/
dragElementthree(document.getElementById("textthree"));

function dragElementthree(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("textthree")) {
    document.getElementById("textthree").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*fourth text*/
dragElementfour(document.getElementById("textfour"));

function dragElementfour(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("textfour")) {
    document.getElementById("textfour").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*fifth text*/
dragElementfive(document.getElementById("textfive"));

function dragElementfive(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("textfive")) {
    document.getElementById("textfive").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*sixth text*/
dragElementsix(document.getElementById("textsix"));

function dragElementsix(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("textsix")) {
    document.getElementById("textsix").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


/*change background color*/
function myFunction()
{   
  document.body.style.backgroundColor= "#6BD7D9";
  document.getElementById("texteight").style.color = "white";
  document.getElementById("textnine").style.color = "white";
  document.getElementById("textten").style.color = "#6bd7d9";
  document.getElementById("texteleven").style.color = "#6bd7d9";
  document.getElementById("texttwelve").style.color = "#6bd7d9";
  document.getElementById("textthirteen").style.color = "#6bd7d9";
  document.getElementById("textfourteen").style.color = "#6bd7d9";
  document.getElementById("textfifteen").style.color = "#6bd7d9";
  document.getElementById("textsixteen").style.color = "#6bd7d9";
  document.getElementById("textseventeen").style.color = "#6bd7d9";
  document.getElementById("texteighteen").style.color = "#6bd7d9";  
  document.getElementById("unknown").style.color = "#6bd7d9";
  document.getElementById("unknownone").style.color = "#6bd7d9";
  document.getElementById("unknowntwo").style.color = "#6bd7d9"; 
  
}

function myFunctionone()
{  
  document.body.style.backgroundColor = "#d099b1";
  document.getElementById("texteight").style.color = "#d099b1";
  document.getElementById("textnine").style.color = "#d099b1";
  document.getElementById("textten").style.color = "white";
  document.getElementById("texteleven").style.color = "#d099b1";
  document.getElementById("texttwelve").style.color = "#d099b1";
  document.getElementById("textthirteen").style.color = "#d099b1";
  document.getElementById("textfourteen").style.color = "#d099b1";
  document.getElementById("textfifteen").style.color = "#d099b1";
  document.getElementById("textsixteen").style.color = "#d099b1";
  document.getElementById("textseventeen").style.color = "#d099b1";
  document.getElementById("texteighteen").style.color = "#d099b1";  
  document.getElementById("unknown").style.color = "white";
  document.getElementById("unknownone").style.color = "white";
  document.getElementById("unknowntwo").style.color = "white"; 
  
}

function myFunctiontwo()
{  
  document.body.style.backgroundColor = "#e99b74";
  document.getElementById("texteight").style.color = "#e99b74";
  document.getElementById("textnine").style.color = "#e99b74";
  document.getElementById("textten").style.color = "#e99b74";
  document.getElementById("texteleven").style.color = "white";
  document.getElementById("texttwelve").style.color = "white";
  document.getElementById("textthirteen").style.color = "#e99b74";
  document.getElementById("textfourteen").style.color = "#e99b74";
  document.getElementById("textfifteen").style.color = "#e99b74";
  document.getElementById("textsixteen").style.color = "#e99b74";
  document.getElementById("textseventeen").style.color = "#e99b74";
  document.getElementById("texteighteen").style.color = "#e99b74";  
  document.getElementById("unknown").style.color = "#e99b74";
  document.getElementById("unknownone").style.color = "#e99b74";
  document.getElementById("unknowntwo").style.color = "#e99b74"; 
  
}

function myFunctionthree()
{  
  document.body.style.backgroundColor = "#ecbb41";
  document.getElementById("texteight").style.color = "#ecbb41";
  document.getElementById("textnine").style.color = "#ecbb41";
  document.getElementById("textten").style.color = "white";
  document.getElementById("texteleven").style.color = "#ecbb41";
  document.getElementById("texttwelve").style.color = "#ecbb41";
  document.getElementById("textthirteen").style.color = "#ecbb41";
  document.getElementById("textfourteen").style.color = "#ecbb41";
  document.getElementById("textfifteen").style.color = "#ecbb41";
  document.getElementById("textsixteen").style.color = "#ecbb41";
  document.getElementById("textseventeen").style.color = "#ecbb41";
  document.getElementById("texteighteen").style.color = "#ecbb41";  
  document.getElementById("unknown").style.color = "#ecbb41";
  document.getElementById("unknownone").style.color = "#ecbb41";
  document.getElementById("unknowntwo").style.color = "#ecbb41"; 
  
}

function myFunctionfour()
{  
  document.body.style.backgroundColor = "#97cc0a";
   document.getElementById("texteight").style.color = "#97cc0a";
  document.getElementById("textnine").style.color = "#97cc0a";
  document.getElementById("textten").style.color = "#97cc0a";
  document.getElementById("texteleven").style.color = "#97cc0a";
  document.getElementById("texttwelve").style.color = "#97cc0a";
  document.getElementById("textthirteen").style.color = "#97cc0a";
  document.getElementById("textfourteen").style.color = "#97cc0a";
  document.getElementById("textfifteen").style.color = "#97cc0a";
  document.getElementById("textsixteen").style.color = "#97cc0a";
  document.getElementById("textseventeen").style.color = "#97cc0a";
  document.getElementById("texteighteen").style.color = "#97cc0a";  
  document.getElementById("unknown").style.color = "#97cc0a";
  document.getElementById("unknownone").style.color = "#97cc0a";
  document.getElementById("unknowntwo").style.color = "#97cc0a"; 
  
}

function myFunctionfive()
{  
  document.body.style.backgroundColor = "#7198a6";
  document.getElementById("texteight").style.color = "#7198a6";
  document.getElementById("textnine").style.color = "#7198a6";
  document.getElementById("textten").style.color = "#7198a6";
  document.getElementById("texteleven").style.color = "#7198a6";
  document.getElementById("texttwelve").style.color = "#7198a6";
  document.getElementById("textthirteen").style.color = "white";
  document.getElementById("textfourteen").style.color = "white";
  document.getElementById("textfifteen").style.color = "white";
  document.getElementById("textsixteen").style.color = "white";
  document.getElementById("textseventeen").style.color = "white";
  document.getElementById("texteighteen").style.color = "white";  
  document.getElementById("unknown").style.color = "#7198a6";
  document.getElementById("unknownone").style.color = "#7198a6";
  document.getElementById("unknowntwo").style.color = "#7198a6"; 
  
}
        


