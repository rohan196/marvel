import data from "../../data/new.json" assert { type: "json" };
console.log(data);
const new_anime=document.getElementById("new_anime");

for(let i=0;i<data.length;i++){
    // Create a list item element
const listItem = document.createElement('li');

// Create a div element with the class "movie-card"
const movieCardDiv = document.createElement('div');
movieCardDiv.className = 'movie-card';

// Create an anchor element with an href attribute
const anchor = document.createElement('a');
anchor.href = 'movie-details.html';

// Create a figure element with the class "card-banner"
const figure = document.createElement('figure');
figure.className = 'card-banner';

// Create an img element with a src and alt attribute
const img = document.createElement('img');
img.src = data[i].poster_link;
img.alt = data[i].name;

// Append the img element to the figure element
figure.appendChild(img);

// Append the figure element to the anchor element
anchor.appendChild(figure);

// Append the anchor element to the "movie-card" div
movieCardDiv.appendChild(anchor);

// Create a div element with the class "title-wrapper"
const titleWrapperDiv = document.createElement('div');
titleWrapperDiv.className = 'title-wrapper';

// Create another anchor element
const titleAnchor = document.createElement('a');

// Create an h3 element with the class "card-title"
const cardTitle = document.createElement('h3');
cardTitle.className = 'card-title';
cardTitle.textContent = data[i].name;

// Append the h3 element to the second anchor element
titleAnchor.appendChild(cardTitle);
titleAnchor.href = 'movie-details.html';

// Create a time element with a datetime attribute
const releaseDate = document.createElement('time');
releaseDate.dateTime = data[i].year;
releaseDate.textContent = data[i].year;

// Append the time element to the "title-wrapper" div
titleWrapperDiv.appendChild(titleAnchor);
titleWrapperDiv.appendChild(releaseDate);

// Append the "title-wrapper" div to the "movie-card" div
movieCardDiv.appendChild(titleWrapperDiv);

// Create a div element with the class "card-meta"
const cardMetaDiv = document.createElement('div');
cardMetaDiv.className = 'card-meta';

// Create a badge element with the class "badge badge-outline"
const badge = document.createElement('div');
badge.className = 'badge badge-outline';
badge.textContent = 'HD';

// Create a div element with the class "duration"
const durationDiv = document.createElement('div');
durationDiv.className = 'duration';

// Create an ion-icon element
const ionIcon = document.createElement('ion-icon');
ionIcon.setAttribute('name', 'time-outline');

// Create a time element with a datetime attribute
const episodeDuration = document.createElement('time');
episodeDuration.dateTime = 'PT137M';
episodeDuration.textContent = data[i].episode;

// Append the ion-icon and time elements to the "duration" div
durationDiv.appendChild(ionIcon);
durationDiv.appendChild(episodeDuration);

// Create a div element with the class "rating"
const ratingDiv = document.createElement('div');
ratingDiv.className = "rating";

// Create an ion-icon element
const ratingIcon = document.createElement('ion-icon');
ratingIcon.setAttribute('name', 'star');

// Create a data element
const ratingData = document.createElement('data');
ratingData.textContent = data[i].rating;

// Append the ion-icon and data elements to the "rating" div
ratingDiv.appendChild(ratingIcon);
ratingDiv.appendChild(ratingData);

// Append the badge, duration, and rating divs to the "card-meta" div
cardMetaDiv.appendChild(badge);
cardMetaDiv.appendChild(durationDiv);
cardMetaDiv.appendChild(ratingDiv);

// Append the "card-meta" div to the "movie-card" div
movieCardDiv.appendChild(cardMetaDiv);

// Append the "movie-card" div to the list item
listItem.appendChild(movieCardDiv);
listItem.onclick=function(){
    scroll(0,0);
    const container2=document.getElementById("anime_details");
    container2.style.display="block";

    //inserting individual data;
    const image=document.getElementById("img");
    image.src=data[i].poster_link;
    image.alt=data[i].name;
    document.getElementById("name").innerHTML=data[i].name;

    const cont=document.getElementById("links");
    for(let j=0;j<data[i].genre.length;j++){
        const link=document.createElement("a");
        // console.log(data[i].genre[j]);
        // link.href=data[i].genre[j];
        link.innerHTML=data[i].genre[j];
        cont.appendChild(link);

        document.getElementById("year").innerHTML=data[i].year;
        document.getElementById("episode").innerHTML=data[i].episode;

        document.getElementById("des").innerHTML=data[i].des;




    }



}
// Now, you can add the listItem to your document or manipulate it further as needed.
 new_anime.appendChild(listItem);
}