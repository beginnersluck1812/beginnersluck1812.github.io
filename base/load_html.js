{/* <body>
  <div id="tutorial-links">

    <h4 class="tutorial-links just-content">Tutorial Roadmap</h4>

    <ul class="tutorial-links just-content link-houser">
      <li class="link-houser" ><a href="#code">1. Code</a></li>
      <li class="link-houser" ><a href="#about">2. About</a></li>
      <li class="link-houser" ><a href="#resources">3.Resources</a></li>
    </ul>

  </div>
  
  
  <div id="main-part-of-page" class="main-page">
    <header class="main-page">
      
      <h1 class="main page">Othello AI Tutorial</h1>
    

      <ul class="main-page just-content link-houser">
        <li class="link-houser" ><a href="#code">Code</a></li>
        <li class="link-houser" ><a  href="#about">About</a></li>
        <li class="link-houser" ><a href="#resources">Resources</a></li>
      </ul>

    </header>
    
    <div class="main-page" id="text-content">
      <h2>Overview</h2>
    </div>
  </div>
  
  
    
</body> */}


const sideLinksHTML = `
<h4 class="tutorial-links just-content">Tutorial Roadmap</h4>
<ul class="tutorial-links just-content link-houser">
    <li class="link-houser" ><a href="index.html">Introduction</a></li>
    <li class="link-houser" ><a href="overview.html">Overview</a></li>
    <li class="link-houser" ><a href="#resources">3. Resources</a></li>
</ul>
`;

const headerHTML = `
    <h1 class="main page">Othello AI Tutorial</h1>
    <ul class="main-page just-content link-houser">
        <li class="link-houser" ><a href="#code">Code</a></li>
        <li class="link-houser" ><a  href="#about">About</a></li>
        <li class="link-houser" ><a href="#resources">Resources</a></li>
    </ul>
`;



function addHTMLToElement(elementName, HTML) {
    // Check if the element with id "tutorial-links" exists
    const element = document.getElementById(elementName);

    if (element) {

        const tutorialLinksTemplate = document.createElement('template');
        tutorialLinksTemplate.innerHTML = HTML;

        // Append the content to the existing div
        element.appendChild(tutorialLinksTemplate.content.cloneNode(true));
    } else {console.log("DIV isnt present");}
}


function loadSideLinks() {
    addHTMLToElement('tutorial-links',sideLinksHTML);
}

function loadHeader() {
    addHTMLToElement('tutorial-header',headerHTML);
}


var sideLinkToBold;

function changeSideLinkToBold(sideLinkName) {
  sideLinkToBold = sideLinkName;
}

//bolds the tutorial link on the side of the screen
//so if 'Introduction' is passed in, it will bold 'Introduction' link on the side
function boldTutorialLink(linkName) {

  // Get all elements with the class 'link-houser'
  var linkElements = document.getElementsByClassName('link-houser');
  console.log(linkElements);

    // Iterate through each element and find the one with the name 'linkName'
    for (var i = 0; i < linkElements.length; i++) {
      if (linkElements[i].innerText == linkName) {
        linkElements[i].style.fontWeight = 'bold';
        return;
      }
    }
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running!");
    loadSideLinks();
    loadHeader();
    boldTutorialLink(sideLinkToBold);
});
