const demoid = document.getElementByid('demo')
const democlass =Document.getElementsByClassname('demo')

demoid.style.border='1px solid purple'


for(i=0; i<democlass.length; i++)
{
democlass[i].style.border = 1px solid orange
}