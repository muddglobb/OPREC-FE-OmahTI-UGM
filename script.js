let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

const toggleButton = document.getElementById("toggle-names");
const hiddenNames = document.querySelectorAll(".hidden-name");
let isExpanded = false;

toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded;

  hiddenNames.forEach((name) => {
    name.style.display = isExpanded ? "list-item" : "none";
  });

  toggleButton.textContent = isExpanded ? "Show less" : "+3 more";
  toggleButton.style.textDecoration = "underline";
});

const toggleImages = document.getElementById("toggle-images");
const hiddenImages = document.querySelectorAll(".hidden-images");
let isExpandedImages = false;

toggleImages.addEventListener("click", () => {
  isExpandedImages = !isExpandedImages;

  hiddenImages.forEach((name) => {
    name.style.display = isExpandedImages ? "list-item" : "none";
  });

  toggleImages.innerHTML = isExpandedImages
    ? 
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" fill="black" stroke="white" stroke-width="40"/></svg>Collapse'
    : 
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" fill="black" stroke="white" stroke-width="40"/></svg>More';
});