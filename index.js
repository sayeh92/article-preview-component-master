let shareIcon = document.getElementById("buttonSvg");
let OutButton = document.getElementById("mySvg");
let OutButtonDesktop = document.getElementById("buttonDesktop");
let divHide = document.querySelector(".pop");
let divNormal = document.querySelector(".author-info");
let circle = document.getElementById("circleDesktop");
let path = document.getElementById("arrowDesktop");

function handleResize() {
  // Check if we're switching to desktop layout
  if (window.innerWidth > 1440) {
    console.log("Switching to desktop layout");

    // Remove mobile event listeners
    shareIcon.removeEventListener("click", mobileShare);
    OutButtonDesktop.removeEventListener("click", mobileOutButton);

    // Add desktop event listeners
    shareIcon.addEventListener("click", desktopShare);
    OutButtonDesktop.addEventListener("click", desktopOutButton);

    // Reset display properties as needed for desktop
    divHide.style.display = "none";
    OutButtonDesktop.style.display = "none";
    shareIcon.style.display = "flex";
    divNormal.style.display = "flex";
  }

  // Check if we're switching to mobile layout
  else if (window.innerWidth < 1440) {
    shareIcon.style.display = "flex";
    OutButtonDesktop.style.display = "none";
    console.log("Switching to mobile layout");

    // Remove desktop event listeners
    shareIcon.removeEventListener("click", desktopShare);
    OutButtonDesktop.removeEventListener("click", desktopOutButton);

    // Add mobile event listeners
    shareIcon.addEventListener("click", mobileShare);
    OutButton.addEventListener("click", mobileOutButton);

    // Reset display properties as needed for mobile
    divHide.style.display = "none";
    divNormal.style.display = "flex";
  }
}

// Desktop share button function
function desktopShare() {
  console.log("button share desktop");
  if (divHide.style.display === "none" || divHide.style.display === "") {
    divHide.style.display = "flex";
    OutButton.style.display = "none";
    OutButtonDesktop.style.display = "flex";
    shareIcon.style.display = "none";
    console.log("clicked Desktop");
    circle.style.fill = "hsl(217, 19%, 35%)";
    path.style.fill = "hsl(210, 46%, 95%)";
  }
}

// Desktop out button function
function desktopOutButton() {
  if (divHide.style.display === "flex" || divHide.style.display === "") {
    divHide.style.display = "none";
    OutButtonDesktop.style.display = "none";
    shareIcon.style.display = " flex";

    console.log("Out button clicked Desktop");
  }
}

// Mobile share button function
function mobileShare() {
  console.log("clicked mobile");
  if (divHide.style.display === "none" || divHide.style.display === "") {
    divHide.style.display = "flex";
    divNormal.style.display = "none";
    OutButton.style.display = "flex";
    console.log("clicked button");
  } else {
    divHide.style.display = "none";
    divNormal.style.display = "flex";
  }
}

// Mobile out button function
function mobileOutButton() {
  if (divHide.style.display === "flex" || divHide.style.display === "") {
    divHide.style.display = "none";
    divNormal.style.display = "flex";
    console.log("Out button clicked mobile");
  }
}

// Initial setup and event listeners
handleResize();
window.addEventListener("resize", handleResize);
