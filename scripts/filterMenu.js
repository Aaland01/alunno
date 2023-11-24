var btns = document.getElementsByClassName("menuFilterBtn");
for(i=0;i<btns.length;i++) {
    btns[i].addEventListener("click",handleCheckbox);
}

var menuBoxes = document.getElementsByClassName("menu-box");
var dishes = [];
for(i=0; i<menuBoxes.length; i++) {
    dishList = menuBoxes[i].children[0].children;
    for(j=0;j<dishList.length;j++) {
        if(j==0) {
            continue;
        }
        dishes.push(dishList[j]);
    }
}

var  visible = {
    gluten:false,
    milk:false,
    egg:false,
    vegan:false
}

function handleCheckbox(event) {

    //Updates the clicked btns visibility status
    visible[event.target.dataset.allergy] = event.target.checked;


    //Updates the visibility of a dish depending on if it meets the current allergen requirements
    for(i=0;i<dishes.length;i++) {
        allergens = dishes[i].dataset.allergenfree.split(" ");
        if(!validDish(allergens)) {
            dishes[i].style.display = "none"
        }
        else {
            dishes[i].style.display = "";
        }
    }
}

//Input: string-array containing all the allergens a dish is free of
//Output: wether or not the dish is valid given the current allergy-requirements from the user
function validDish(allergens) {
    for(var allergen in visible) {
        if(!visible[allergen]) {
            continue;
        }
        if(allergens.indexOf(allergen)==-1) {
            return false;
        }
    }
    return true;
}
