const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let container = document.getElementsByClassName("flex-container")[0];

for(let i = 0;i<works.length;i++){
    let component =document.createElement("div");
    component.setAttribute("class","item")

    let title = document.createElement("h4");
    title.innerHTML = "Genre : " + works[i].tips;
    component.appendChild(title);

    let innerbox1 = document.createElement("div");
    innerbox1.setAttribute("class","inner-box");

    let main = document.createElement("h3");
    main.innerHTML = works[i].author;
    main.setAttribute("style","display:inline-block;");
    innerbox1.appendChild(main);

    let lifetime = document.createElement("p");
    lifetime.innerHTML = "lifetime:" + works[i].lifetime;
    lifetime.setAttribute("style","display:inline-block; width:30%; margin-left:10pt;");
    innerbox1.appendChild(lifetime);

    component.appendChild(innerbox1);

    let innerbox2 = document.createElement("div");
    innerbox2.setAttribute("class","inner-box");

    let photos = document.createElement("h3");
    photos.innerHTML = "Popular Photos";

    innerbox2.appendChild(photos);

    for(let j = 0;j<works[i].photos.length;j++) {
        let photo = document.createElement("img");
        photo.setAttribute("class", "photo");
        photo.setAttribute("style", "display:inline-block;");
        photo.setAttribute("src",works[i].photos[j]);
        innerbox2.appendChild(photo);
    }
    component.appendChild(innerbox2);

    let button = document.createElement("button");
    button.innerHTML = "Visit";
    button.setAttribute("style","text-align:center");
    component.appendChild(button);

    container.appendChild(component);
}
