cardat=0
cardwidth=150
cardheight=80

function scrolldown()
{
if (cardat<document.all.carddisplay.offsetHeight-cardheight)
	{
	cardat=cardat + 10
	cardwidth=cardwidth-10
	document.all.carddisplay.style.clip="rect(" + cardat + " 135 " + (cardat + cardheight) + " 0)"
	document.all.carddisplay.style.top=cardwidth
	}
}

function scrollup()
{
if (cardat>0)
	{
	cardwidth=cardwidth+10
	cardat=cardat-10
	document.all.carddisplay.style.clip="rect(" + cardat + " 135 " + (cardat + cardheight) + " 0)"
	document.all.carddisplay.style.top=cardwidth
	}
}

function fastdown()
{
scrolldown()
scrolltimer=setTimeout("fastdown()",100)
}

function fastup()
{
scrollup()
scrolltimer=setTimeout("fastup()",100)
}

function stopscrolltimer()
{
clearTimeout(scrolltimer)
}

function resetcardat()
{
cardat=0
cardwidth=150
cardheight=80
document.all.carddisplay.style.clip="rect(" + cardat + " 135 " + (cardat + cardheight) + " 0)"
document.all.carddisplay.style.top=cardwidth
}

var timercount=1
var timer
var selecttext

function cursorhand(elmnt)
{
elmnt.style.cursor="hand"
}

function getvariable()
{
radioselect=document.formname.name
for (j = 0; j<radioselect.length; ++ j)
	{
	if (radioselect[j].checked)
		{
		selecttext=radioselect[j].value
		document.myform.myinput.value=selecttext
		}
	}
}

function cardtimer(ontimerfile,timervalue)
{
wmlfile=ontimerfile
valuecount=timervalue
if (timercount==timervalue)
	{
	clearTimeout(timer)
	timercount=1
	readcards()
	displaycards()
	}
else
	{
	timercount++
	timer=setTimeout("cardtimer(wmlfile,valuecount)",100)
	}
}

function stoptimer()
{
clearTimeout(timer)
}<br><hr><br>
 This file is decompiled from a .CHM file <br>
by an UNREGISTERED version of Easy CHM. <br>
You can download Easy CHM at :

<a href="http://www.etextwizard.com/" target=_blank>
http://www.eTextWizard.com</a> <br><br>


