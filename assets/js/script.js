'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");



// modal toggle function
const modalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

/*// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });

}*/

// add click event to all portfolio items
const portfolioItem = document.querySelectorAll("[data-filter-item]")
for (let i = 0; i < portfolioItem.length; i++) {

  portfolioItem[i].addEventListener("click", function () {
    //modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    //modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = "Test"//this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = "Test text"//this.querySelector("[data-testimonials-text]").innerHTML;

    modalFunc();
  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

formBtn.addEventListener("click", function() {	
	const name = formInputs[0].value
	const subj = formInputs[1].value
	const text = formInputs[2].value
	const URL = `mailto:thomas.joakim@gmail.com?subject=${name},%20${subj}&body=${text}`
	window.open(URL)
})

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const navigateFunc = function(target) {
  for (let i = 0; i < pages.length; i++) {
      if (target.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
}
  
const experienceFilterItems = document.querySelectorAll("[data-timeline-item]");

const experienceFilterFunc = function (selectedValue) {
	let fadeTimer = 1000
	for (let i = 0; i < experienceFilterItems.length; i++) {
	if (selectedValue === "all")
	  experienceFilterItems[i].classList.add("active");
	else if (experienceFilterItems[i].dataset.category.toLowerCase().includes(selectedValue)) {
	   //setTimeout(function() {
	      experienceFilterItems[i].classList.add("active");
	//}, fadeTimer)
	fadeTimer += 500
	} else {
	experienceFilterItems[i].classList.remove("active");
	}
	}
}

const experienceFilterBtn = document.querySelectorAll("[data-experience-filter-btn]");
let lastClickedExpBtn = experienceFilterBtn[1];

for (let i = 0; i < filterBtn.length; i++) {

  experienceFilterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    experienceFilterFunc(selectedValue);

    lastClickedExpBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedExpBtn = this;
  });

}
experienceFilterFunc("mechanical")


// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
	navigateFunc(this.innerHTML.toLowerCase())
  });
}


const clientFunc = function(category) {
	navigateFunc("Resume")
	experienceFilterFunc(category)
	setTimeout(function() {
		document.querySelector("[data-experience-anchor]").scrollIntoView();
	},10);
}
