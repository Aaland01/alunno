
//Fetching the dishes from the DOM
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

//Eventhandler for input in the search-field
function handleSearch() {
    var url = window.location.href;
    var params = new URLSearchParams(url.split("?")[1]);
    if(params=="") {
        return;
    }
    var query;

    for(var pair of params.entries()) {
        if(pair[0]=="query") {
            query = pair[1];
            break;
        }
    }

    updateDishes(query);
}

function updateDishes(q) {
    dishes.forEach(function(dish) {
        if(dish.innerHTML.toLowerCase().indexOf(q)==-1) {
            dish.remove();
        }
    });
}

handleSearch();
