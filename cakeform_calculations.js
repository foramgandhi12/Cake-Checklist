//gets the budget value entered by user in the form
function getBudget(){
    return document.getElementById("budget").value;
}

//gets the number of slices entered by user in the form
function getNumSlices(){
    return document.getElementById("slices").value;
}

//calculates the total cost of decorations from the user's selections
function getDecorationsPrice(){
    var decorationsPrice = document.getElementsByName("decorations");
    var price = 0;
    var check = false; //no checkbox is selected so set to false initially
    num = 0;
    num1 = 0;
    num2 = 0;

    while (num < decorationsPrice.length){ //iterates through the collection of decoration elements
        if (decorationsPrice[num].checked){ //checks if element is selected
            price += 20;
            check = true; //sets check to true since a checkbox is selected
        }
        num++;
    }

    //if at least one box is selected, it will no longer be required for the user to select one
    if (check){ //
        while (num1 < decorationsPrice.length){
            decorationsPrice[num1].required = false;
            num1++;
        }
    }
    //will require user to select at least one checkbox
    else{
        while (num2 < decorationsPrice.length){
            decorationsPrice[num2].required = true;
            num2++;
        }
    }
    return price;
}

//calculates the total cost of the cake shape/structure from the user's selection
function getShapeStructure(){
    var structure = document.getElementsByName("shape-structure");
    var price = 0;
    num = 0;

    while (num < structure.length){ //iterates through the collection of cake structure elements
        if (structure[num].checked){ //checks if element is selected
            val = parseInt(structure[num].value); //coverts value of structure element to an integer
            price += val; //updates the price by the value
        }
        num++;
    }
    return price;
}

//calculates the total cost of cake flavours and fillings from the user's selections
function getFlavourFilling(){
    var flavourFilling = document.getElementsByName("flavour-fill");
    var price = 0;
    var check = false; //no checkbox is selected so set to false initially
    num = 0;
    num1 = 0;
    num2 = 0;

    while (num < flavourFilling.length){ //iterates through the collection of flavour/filling elements
        if (flavourFilling[num].checked){ //checks if element is selected
            price += 10;
            check = true; //sets check to true since a checkbox is selected
        }
        num++;
    }

    //if at least one box is selected, it will no longer be required for the user to select one
    if (check){
        while (num1 < flavourFilling.length){
            flavourFilling[num1].required = false;
            num1++;
        }
    }
    //will require user to select at least one checkbox
    else{
        while (num2 < flavourFilling.length){
            flavourFilling[num2].required = true;
            num2++; 
        }
    }
    return price;
}

//calculates the total cost of cake colours from the user's selections
function getColoursPrice(){
    var coloursPrice = document.getElementsByName("colours");
    var price = 0;
    var check = false; //no checkbox is selected so set to false initially
    num = 0;
    num1 = 0;
    num2 = 0;

    while (num < coloursPrice.length){ //iterates through the collection of colour elements
        if (coloursPrice[num].checked){ //checks if element is selected
            price += 5;
            check = true; //sets check to true since a checkbox is selected
        }
        num++;
    }

    //if at least one box is selected, it will no longer be required for the user to select one
    if (check){
        while (num1 < coloursPrice.length){
            coloursPrice[num1].required = false;
            num1++;
        }
    }
    //will require user to select at least one checkbox
    else{
        while (num2 < coloursPrice.length){
            coloursPrice[num2].required = true;
            num2++;
        }
    }
    return price;
}

//calculates the total of the user's order
function calculateTotal(){

    var budget = getBudget();
    var numSlices = getNumSlices();

    var subtotal = (numSlices * (getDecorationsPrice() + getFlavourFilling() + getColoursPrice())) + getShapeStructure(); //calculates the subtotal
    var tax = subtotal * 0.13; //finds the tax on the subtotal
    var total = subtotal + tax; //adds subtotal and tax to get the total

    if (subtotal > budget) //checks if the subtotal exceeds the budget
        alert("You are over budget. Please change your selections to meet your budget price."); //displays to the user that they are over budget

    document.getElementById("subtotal").innerHTML="Sub Total: $"+subtotal.toFixed(2); //displays the subtotal rounded to 2 decimals in the HTML document
    document.getElementById("tax").innerHTML="Tax: $"+tax.toFixed(2); //displays the tax rounded to 2 decimals in the HTML document
    document.getElementById("totalPrice").innerHTML="Total Price for the Cake: $"+total.toFixed(2); //displays the total price rounded to 2 decimals in the HTML document
    
    var divobj = document.getElementById("totalPrice");
    divobj.style.display="block"; //changes display to default value of element, which is to display it in the HTML document
}

//hides the total from the form
function hideTotal(){
    var showTotal = document.getElementById("totalPrice");
    showTotal.style.display='none'; 
}