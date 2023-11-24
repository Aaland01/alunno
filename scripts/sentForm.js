function checkSubmit() {
    url = window.location.href;
    var params = new URLSearchParams(url.split("?")[1]);
    var send = false;
    var message = "Din innsending er mottatt!";
    if(params=="") {
        return;
    }

    for(var pair of params) {
        if(pair[0]=="sent" && pair[1]) {
            send = true;
        }
        if(pair[0]=="sender") {
            message = pair[1];
        }
    }
    if(send) {
        sendConfirmation(message);
    }
}

function sendConfirmation(msg) {
    alert(msg);
    window.location = window.location.href.split("?")[0];
}

window.onload = checkSubmit();