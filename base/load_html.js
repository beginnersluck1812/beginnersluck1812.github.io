

//all this html is going to be the same for each page, so we are going to dynamically add it
const sideLinksHTML = `
<h4 class="tutorial-links just-content">Tutorial Roadmap</h4>
<ul class="tutorial-links just-content link-houser">
    <li class="link-houser" ><a href="../index.html">Introduction</a></li>
    <li class="link-houser" ><a href="../Overview/overview.html">Overview</a></li>
    <li class="nested-link-houser" ><a href="../Overview/searching_positions.html">Searching Positions</a></li>
    <li class="link-houser" ><a href="resources">Resources</a></li>
</ul>
`

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
  var nestedLinkElements = document.getElementsByClassName('nested-link-houser')
  var allSideLinkElements = [...linkElements, ...nestedLinkElements];
  console.log(allSideLinkElements);

    // Iterate through each element and find the one with the name 'linkName'
    for (var i = 0; i < allSideLinkElements.length; i++) {
      if (allSideLinkElements[i].innerText == linkName) {
        allSideLinkElements[i].style.fontWeight = 'bold';
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
