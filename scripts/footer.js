
var create_footer = function () {
    //creating most of elements used in the coming if/else checks
    let footer = document.createElement('footer');
    let centerBlock = document.createElement('div');
    centerBlock.id = "centerBlock";
    let socials = document.createElement('div');
    socials.className="socials";
    centerBlock.appendChild(socials);
    let image2= document.createElement('img');
    image2.id="footerlogo";
    image2.alt="Logo";

    //Social buttons
    let some = ["instagram","facebook","twitter","tiktok"];

    //Make sure the pointers are right according to index page
    var title = document.title;
    if(title=="Alunno"){
        for(app of some){
            let el = document.createElement('a');
            el.href="https://" + app +".com";
            el.title=app;
            let image = document.createElement('img');
            image.src="img/social_media/"+app+".png";
            image.alt=app+" Logo";
            el.appendChild(image);
            socials.appendChild(el);
        }
        let temp=document.createElement('a');
        temp.href="page/about.html";
        temp.id="contactUs";
        temp.innerHTML="Kontakt oss";
        centerBlock.appendChild(temp);
        image2.src="img/Logo.png";
    }
    
    else{
        for(app of some){
            let el = document.createElement('a');
            el.href="https://" + app +".com";
            el.title=app;
            let image = document.createElement('img');
            image.src="../img/social_media/"+app+".png";
            image.alt=app+" Logo";
            el.appendChild(image);
            socials.appendChild(el);
        }
        let temp=document.createElement('a');
        temp.href="about.html";
        temp.id="contactUs";
        temp.innerHTML="Kontakt oss";
        centerBlock.appendChild(temp);
        image2.src="../img/Logo.png";
    }

    footer.appendChild(centerBlock)

    let rightBlock = document.createElement('div');
    rightBlock.id="rightBlock";
    
    rightBlock.appendChild(image2);
    let personvern = document.createElement('a');
    personvern.href="https://www.datatilsynet.no/rettigheter-og-plikter/hva-er-personvern/";
    personvern.target="_blank";
    personvern.innerHTML="Les om vårt personvern her";
    rightBlock.appendChild(personvern);

    footer.appendChild(rightBlock);

    document.body.appendChild(footer);    
}   

create_footer();
