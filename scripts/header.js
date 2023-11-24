
var create_header = function () {
    let header = document.createElement("header");
    //Logo maker
    let logo = document.createElement('a');
    let image = document.createElement('img');
    image.id = "headerlogo";
    image.alt = "Logo";
    logo.appendChild(image);
    
    header.appendChild(logo);

    //Navigasjon
    let navBtns = document.createElement('div');
    navBtns.id="navBtns";
    
    let about = document.createElement('a');
    about.innerHTML="Om oss";
    navBtns.appendChild(about);
    let menu = document.createElement('a');
    menu.innerHTML="Meny";
    navBtns.appendChild(menu);
    let book = document.createElement('a');
    book.innerHTML="Bordbestilling";
    navBtns.appendChild(book);
    let job = document.createElement('a');
    job.innerHTML="Søk jobb";
    navBtns.appendChild(job);

    //Links ferdigstilling
    var title = document.title;
    if(title=="Alunno"){
        logo.href="";
        image.src = "img/Logo.png";
        job.href="page/jobs.html";
        book.href="page/booking.html";
        menu.href="page/menu.html";
        about.href="page/about.html";
    }else{
        logo.href="../index.html";
        image.src = "../img/Logo.png";
        job.href="jobs.html";
        book.href="booking.html";
        menu.href="menu.html";
        about.href="about.html";
    }

    header.appendChild(navBtns);

    document.body.appendChild(header);
}

create_header();