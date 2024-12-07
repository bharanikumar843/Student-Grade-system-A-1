document.write("<h4>Student Grade System</h4>")


var id =prompt("Enter student ID", id)


var id= 123
var isname= "bharani"
var dsp=95;
var ADC=92;
var m1=86;
var mmc=91;
var m3=89;

var total=dsp+ADC+m1+mmc+m3;
var percentage=(total*100)/500;
document.write("id=:"+id+"<br>")
document.write("name=:"+isname+"<br>")
document.write("total=:"+total+"<br>")
document.write("percentage=:"+percentage+"<br>")





var grade = prompt("Enter marks Get Yours Results Grade!")

if (grade > 90) {
    document.write("Grade:A 😍");
    } 
    else if (grade > 80 && grade <= 90) {
    document.write("Grade:B 🥰");
    } 
    else if (grade > 70 && grade <= 80) {
        document.write("Grade:C 😊");
    } 
    else if (grade > 60 && grade <= 70) {
        document.write("Grade:D 😊");
    } 
    else if (grade > 50 && grade <= 60) {
        document.write("Grade:E 😖");
    } 
    else {
        document.write("Fail😥");
    }













