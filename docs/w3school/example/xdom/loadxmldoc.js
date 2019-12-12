function loadXMLDoc(dname) 
{
var xmlDoc;
// code for IE
if (window.ActiveXObject)
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  }
// code for Mozilla, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
  xmlDoc=document.implementation.createDocument("","",null);
  }
else
  {
  alert('Your browser cannot handle this script');
  }
xmlDoc.async=false;
xmlDoc.load(dname);
return(xmlDoc);
}
<br><hr><br>
 This file is decompiled from a .CHM file <br>
by an UNREGISTERED version of Easy CHM. <br>
You can download Easy CHM at :

<a href="http://www.etextwizard.com/" target=_blank>
http://www.eTextWizard.com</a> <br><br>


