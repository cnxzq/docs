var xmlHttp

function showCD(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  }        
var url="getcd.asp";
url=url+"?q="+str;
url=url+"&sid="+Math.random();
xmlHttp.onreadystatechange=stateChanged;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function stateChanged() 
{ 
if (xmlHttp.readyState==4)
   { 
   document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
   }
}

function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}<br><hr><br>
 This file is decompiled from a .CHM file <br>
by an UNREGISTERED version of Easy CHM. <br>
You can download Easy CHM at :

<a href="http://www.etextwizard.com/" target=_blank>
http://www.eTextWizard.com</a> <br><br>


