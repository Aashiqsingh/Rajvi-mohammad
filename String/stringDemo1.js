
// console.log(str);

// var x = str.length
// console.log(x);

// str = str.toUpperCase()
// console.log(str);

// str = str.toLocaleLowerCase()
// console.log(str)


// var x = str.charAt(4)
// console.log(x);

// var x = str.charCodeAt(40)
// console.log(x);

// var str = str.codePointAt(40)
// console.log(str);

// var x = str.concat("The")
// console.log(x);

// console.log(str + "The");

// let a = 10,b=20;
// console.log("addition ",a+b);

// var str = "RoyAl technosoft pvt ltd."

// var str2 = " Rajvi shukla."

// var x = str.concat(str2)
// var x = str2.concat(str)
// console.log(x);


// var x = str.endsWith("d.")

// var x = str2.startsWith(" ")
// console.log(x);


var sname = prompt("Enter name = ");
var age = parseInt(prompt("Enter age = "));

if(age > 18)
    {
        console.log(sname.toUpperCase());
    }
    else{
        console.log(sname.toLocaleLowerCase());
    }
