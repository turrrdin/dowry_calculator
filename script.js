

function getTotalCost() {

    var price = 100;

    // Education: 

    var x1 = document.getElementById("education");

    if (x1.value == "bachelor") {
         price = price*1.5;
    }

    else if (x1.value == "college") {
         price = price*1.2;
    }

    else if (x1.value == "high_school") {
         price = price*1.05;
    }

    else if (x1.value == "middle_school") {
         price = price*0.9;
    }

    // Family networth: 

    var x2 = document.getElementById("networth");

    if (x2.value == "upper_class") {
         price = price*2;
    }

    else if (x2.value == "middle_class") {
         price = price*1.5;
    }

    else if (x2.value == "lower_class") {
         price = price*1.2;
    }

    // Caste: 

    var x3 = document.getElementById("caste");

    if (x3.value == "brahmin") {
         price = price+100;
    }

    else if (x3.value == "kshatriya") {
         price = price+50;
    }

    else if (x3.value == "vaishya") {
         price = price+20;
    }

    else if (x3.value == "shudra") {
         price = price+10;
    }

    else if (x3.value == "varna") {
         price = price-50;
    }

    // Skills:  

    if (document.getElementById("skill1").checked) {
        price = price+10;
    }

    if (document.getElementById("skill2").checked) {
        price = price+20;
    }

    if (document.getElementById("skill3").checked) {
        price = price+15;
    }

    if (document.getElementById("skill4").checked) {
        price = price+10;
    }
    
    // Age: 

    if (document.getElementById("age1").checked) {
        price = price*1.5;
    }

    else if (document.getElementById("age2").checked) {
        price = price*1.2;
    }

    else if (document.getElementById("age3").checked) {
        price = price*0.95;
    }

    // Repitation: 

    if (document.getElementById("reputation1").checked) {
        price = price*0.85;
    }

    if (document.getElementById("reputation2").checked) {
        price = price*0.9;
    }

    if (document.getElementById("reputation3").checked) {
        price = price-20;
    }

    // Total price: 

    var totalprice = document.getElementById('answer');
    totalprice.innerHTML = "The price is: " + price + "$";
}


/*

function favTutorial() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }

*/