 
var checkOpenStatus = function () {
    var d = new Date();
    var time = d.getHours();
    var day = d.getDay();
    if ((time >= 13) && (time < 23) && (day != 0)) {
        y = "<span>Restauranten er åpen!</span>";
        if((time >= 16) && (time < 18)){
            y = "<span>Restauranten er åpen!<br><br>Det er happy hour!</span>"; 
        }
    } else {
        y = "<span>Restauranten er for øyeblikket stengt.</span>";
    }
    document.getElementById("openNow").innerHTML = y;
    setTimeout(checkOpenStatus,15000);
};

checkOpenStatus();