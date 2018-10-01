
let cars = {name: [], price: [], contact: []};

function addCars(){
    let thisName = document.getElementById("carName").value;
    let thisPrice = document.getElementById("carPrice").value;
    let thisContact = document.getElementById("userEmail").value;

    let result = "";
    let currentItem = "";
    console.log("Set Initial Variables");

    if (thisName != "" && thisPrice != "" && thisContact != ""){
        runAddition();
    }
    else {
        alert("Please Fill in All the Fields");
    }

    function runAddition(){
        cars.name.push(thisName);
        cars.price.push(thisPrice);
        cars.contact.push(thisContact);
        console.log("Set Object");

        for (let i = 0; i < cars.name.length; i+= 1){
            currentItem = `<li>${cars.name[i]}, &dollar;${cars.price[i]}, ${cars.contact[i]}</li>`;
            result += currentItem;
            console.log(`Added ${cars.name[i]}`);
        }
        console.log("finished for loop");

        document.getElementById("carsList").innerHTML = result;
        console.log("Filled in List");

        document.getElementById("carName").value = "";
        document.getElementById("carPrice").value = "";
        document.getElementById("userEmail").value = "";
        console.log("reset inputs");
    }
}