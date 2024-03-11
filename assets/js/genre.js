import data from "../../data/genre.json" assert { type: "json" };
console.log(data);
const genre=document.getElementById("genre");

for(let i=0;i<data.length;i++){
    var tag = document.createElement("li");
    var btn=document.createElement("button");
    btn.innerHTML=data[i].name
    btn.className="filter-btn";
    tag.appendChild(btn);
    genre.appendChild(tag);
}


  