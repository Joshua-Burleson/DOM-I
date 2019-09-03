const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// Nav
let nav = document.getElementsByTagName('nav')[0];

let navAnchors = Array.from(nav.children);

navAnchors.forEach((anchor, index) => {
  let navKeys = Object.keys(siteContent['nav']);
  anchor.id = navKeys[index];
  anchor.setAttribute('class', 'drunkWithPower');
  anchor.textContent = siteContent['nav'][anchor.id];
});
    //Task 3
//Changing the color of the anchor tags in the nav could have easily been
//done with a for or forEach loop and altering element.style.color,
//however I wanted to test altering a stylesheet.
let cssFile = document.styleSheets[1]; //stylesheet[0] is a google font sheet
cssFile.insertRule('.drunkWithPower {color: green;}', 29); //29 is the last block CSS.

let home = document.createElement('a');
home.href = '#';
home.textContent = 'Home';
home.setAttribute('class', 'drunkWithPower');
nav.prepend(home);

let ourWork = document.createElement('a');
ourWork.href = '#';
ourWork.textContent = 'Our Work';
ourWork.setAttribute('class', 'drunkWithPower');
nav.appendChild(ourWork);

// Top Section
let ctaContent = siteContent['cta']
let cta = document.querySelector('.cta');

let topH1 = cta.querySelector('.cta-text h1');
let topBtn = cta.querySelector('.cta-text button');
      //Updating document to give img id, due to instructions and error in assignment index.html file
cta.querySelector('img').id = 'cta-img';
let topImg = cta.querySelector('#cta-img');


topH1.innerHTML = ctaContent['h1'].split(' ').join('<br>'); //'DOM<br>IS<br>AWESOME';
topBtn.textContent = ctaContent['button'];

topImg.src = ctaContent['img-src'];


// Main Content
let mainContentVals = siteContent['main-content'];
let mainContent = document.querySelector('.main-content');

    // Top Row Content
let topContent = mainContent.querySelector('.top-content');

let topFirst = topContent.getElementsByClassName('text-content')[0];
let topSecond = topContent.getElementsByClassName('text-content')[1];

topFirst.querySelector('h4').textContent = mainContentVals['features-h4'];
topSecond.querySelector('h4').textContent = mainContentVals['about-h4'];

topFirst.querySelector('p').textContent = mainContentVals['features-content'];
topSecond.querySelector('p').textContent = mainContentVals['about-content'];

    // Middle Row Image
mainContent.querySelector('#middle-img').src = mainContentVals['middle-img-src'];

   // Bottom Row Image
let bottomContent = document.querySelector('.bottom-content');

let bottomFirst = bottomContent.getElementsByClassName('text-content')[0];
let bottomSecond = bottomContent.getElementsByClassName('text-content')[1];
let bottomThird = bottomContent.getElementsByClassName('text-content')[2];

bottomFirst.querySelector('h4').textContent = mainContentVals['services-h4'];
bottomSecond.querySelector('h4').textContent = mainContentVals['product-h4'];
bottomThird.querySelector('h4').textContent = mainContentVals['vision-h4'];;

bottomFirst.querySelector('p').textContent = mainContentVals['services-content'];
bottomSecond.querySelector('p').textContent = mainContentVals['product-content'];
bottomThird.querySelector('p').textContent = mainContentVals['vision-content'];


// Contact Section
let contactContent = siteContent['contact'];
let contactSection = document.querySelector('.contact');

    // Section Header
contactSection.querySelector('h4').textContent = contactContent['contact-h4'];

    // Contact Details
contactSection.getElementsByTagName('p')[0].innerHTML = contactContent['address'];
contactSection.getElementsByTagName('p')[1].textContent = contactContent['phone'];
contactSection.getElementsByTagName('p')[2].textContent = contactContent['email'];


// Footer
document.querySelector('footer').querySelector('p').textContent = siteContent['footer']['copyright'];

// Stretch
let body = document.querySelector('body');

body.style.backgroundColor = 'white';

let toggleButton = document.createElement('button');

const modeSwitchContents = {
  day : {
    bgColor : 'white',
    textColor : 'black',
    logoSrc: siteContent['nav']['img-src'],
    btnText: 'Night Mode'
  },
  night: {
    bgColor : 'black',
    textColor : 'white',
    logoSrc: '/img/night-logo.png',
    btnText: 'Day Mode'
  }
}

function toggleBackground(){
  let toggleButn = contactSection.querySelector('button');

  switch(body.style.backgroundColor){
    case 'black': body.style.backgroundColor = modeSwitchContents.day.bgColor;
                  body.style.color = modeSwitchContents.day.textColor;
                  logo.src = modeSwitchContents.day.logoSrc;
                  toggleButn.textContent = modeSwitchContents.day.btnText;
                  toggleButn.style.backgroundColor = modeSwitchContents.night.bgColor;
                  toggleButn.style.color = modeSwitchContents.night.textColor;
                  break;

    case 'white' || '' : body.style.backgroundColor = modeSwitchContents.night.bgColor;
                  body.style.color = modeSwitchContents.night.textColor;
                  logo.src = modeSwitchContents.night.logoSrc;
                  toggleButn.textContent = modeSwitchContents.night.btnText;
                  toggleButn.style.backgroundColor = modeSwitchContents.day.bgColor;
                  toggleButn.style.color = modeSwitchContents.day.textColor;
                  break;
  }
}

toggleButton.setAttribute('onclick', 'toggleBackground()');
toggleButton.setAttribute('class', 'toggle-button');
toggleButton.textContent = 'Night Mode';
toggleButton.style.backgroundColor = 'black';
toggleButton.style.color = 'white';

document.querySelector('.contact').appendChild(toggleButton);

const toggleBtnCSS = `
  .toggle-button{
    display: flex;
    justify-content: center;
    height: 3rem;
    width: 14rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 8px;
  }
`
cssFile.insertRule(toggleBtnCSS, 30);