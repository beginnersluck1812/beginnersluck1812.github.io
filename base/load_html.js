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
    <li class="link-houser" ><a href="#code">1. Code</a></li>
    <li class="link-houser" ><a href="#about">2. About</a></li>
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



// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running!");
    loadSideLinks();
    loadHeader();
});
