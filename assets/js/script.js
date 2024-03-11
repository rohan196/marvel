'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

// document.addEventListener("DOMContentLoaded", function() {
//   const searchLink = document.getElementById("search-link");
//   const searchBar = document.getElementById("search-bar");

//   searchLink.addEventListener("onClick", function(event) {
//     event.preventDefault();
//     if (searchBar.style.display === "none" || searchBar.style.display === "") {
//       searchBar.style.display = "flex";
//     } else {
//       searchBar.style.display = "none";
//     }
//   });

//   const searchButton = document.getElementById("search-button");
//   console.log("Perform search...");
//   searchButton.addEventListener("onClick", function() {

//     // Add your search functionality here
//     console.log("Perform search...");
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const searchInput = document.getElementById("searchInput");
//   const searchButton = document.getElementById("searchButton");
//   const searchResults = document.getElementById("searchResults");

//   // Load JSON data from anime_list.json
//   fetch("anime_list.json")
//       .then(response => response.json())
//       .then(data => {
//           const animeData = data;

//           function performSearch() {
//               const searchTerm = searchInput.value.toLowerCase();
//               searchResults.innerHTML = "";

//               animeData.forEach(anime => {
//                   if (anime.title.toLowerCase().includes(searchTerm) || anime.genre.toLowerCase().includes(searchTerm)) {
//                       const listItem = document.createElement("li");
//                       listItem.textContent = `${anime.title} - Genre: ${anime.genre}`;
//                       searchResults.appendChild(listItem);
//                   }
//               });
//           }

//           searchButton.addEventListener("click", performSearch);
//           searchInput.addEventListener("keyup", function (event) {
//               if (event.key === "Enter") {
//                   performSearch();
//               }
//           });
//       })
//       .catch(error => console.error("Error loading data:", error));
// });


const svgButton = document.getElementById('svgButton');
const textFieldContainer = document.getElementById('textFieldContainer');

svgButton.addEventListener('click', () => {
    textFieldContainer.classList.toggle('hidden');
});










