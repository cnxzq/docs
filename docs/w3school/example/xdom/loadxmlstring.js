function loadXMLString(txt) 
{
try //Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async="false";
  xmlDoc.loadXML(txt);
  return(xmlDoc);  
  }
catch(e)
  {
  try //Firefox, Mozilla, Opera, etc.
    {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(txt,"text/xml");
    return(xmlDoc);
    }
  catch(e) {alert(e.message)}
  }
return(null);
}<br><hr><br>
 This file is decompiled from a .CHM file <br>
by an UNREGISTERED version of Easy CHM. <br>
You can download Easy CHM at :

<a href="http://www.etextwizard.com/" target=_blank>
http://www.eTextWizard.com</a> <br><br>


