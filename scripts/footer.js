
var create_footer = function () {

    //creating most of elements used in the coming if/else checks
    let footer = document.createElement('footer');
    let centerBlock = document.createElement('div');
    centerBlock.id = "centerBlock";
    let socials = document.createElement('div');
    socials.className="socials";
    centerBlock.appendChild(socials);
    let footerLogo= document.createElement('img');
    footerLogo.id="footerlogo";
    footerLogo.alt="Logo";

    //Social buttons
    let socialMedia = ["instagram","facebook","twitter","tiktok"];

    //Make sure the pointers are right according to index page
    let path = "";
    let contactPath = "";

    if (document.title == "Alunno") {
        path = ""
        contactPath = "page/"
    } else {
        path = "../";
        contactPath = "";
    }

    for(appName of socialMedia){
        let socialButton = document.createElement('a');
        socialButton.href = "https://" + appName + ".com";
        socialButton.title = appName;
        let image = document.createElement('img');
        image.src = path + "img/social_media/" + appName + ".png";
        image.alt = appName +" Logo";
        socialButton.appendChild(image);
        socials.appendChild(socialButton);
    }

    let contactUs = document.createElement('a');
    contactUs.href = contactPath + "about.html";
    contactUs.id = "contactUs";
    contactUs.innerHTML = "Kontakt oss";
    centerBlock.appendChild(contactUs);
    footerLogo.src = path + "img/Logo.png";

    footer.appendChild(centerBlock)

    let rightBlock = document.createElement('div');
    rightBlock.id="rightBlock";
    
    rightBlock.appendChild(footerLogo);
    let personvern = document.createElement('a');
    personvern.href="https://www.datatilsynet.no/rettigheter-og-plikter/hva-er-personvern/";
    personvern.target="_blank";
    personvern.innerHTML="Les om vårt personvern her";
    rightBlock.appendChild(personvern);

    footer.appendChild(rightBlock);

    document.body.appendChild(footer);    
}   

create_footer();
