var maths = 90
var science = 70
var social = 65
var english = 80
var python = 90
var biology = 80

var c = maths+science+social+english+python+biology
var c = c/6

var a = "<br/>"
document.write(a,"maths = 90")
document.write(a,"science = 70")
document.write(a,"social = 50")
document.write(a,"enlish = 60")
document.write(a,"python = 70")
document.write(a,"biology = 80")
document.write(a,c)

if (c>50){
    document.write(a,"Pass")
}
else if (c=50){
    document.write(a,"Qualified")
}
else{
    document.write(a,"Fail")
}

