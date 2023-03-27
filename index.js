// Selecting HTML DOM element

const container = document.querySelector("content");

// Adding event listener and function

document.addEventListener ("DOMContentLoaded", ()=> {
    createHeader();
    createSection();
    createFooter();
});

// Function that will create all elements and append them to the parent element

function createHeader () {
 
    let header = document.createElement ("header");
    header.classList.add ("main-header");
    header.classList.add ("nav");
    let nav = document.createElement ("nav");
    nav.classList.add ("main-nav");
    let ul = document.createElement ("ul");
    let li = document.createElement ("li");
    
    li.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="reservation.html">Reservation</a></li>
    `;

    let h1 = document.createElement ("h1");
    h1.classList.add ("place-name");
    h1.innerHTML = "Our Story";

    ul.appendChild(li);
    nav.appendChild(ul);
    header.appendChild(nav);
    header.appendChild(h1);
    content.appendChild(header);
};

function createSection () {

    let section = document.createElement ("section");
    section.classList.add ("content-section");
    let h3 = document.createElement ("h3");
    h3.classList.add ("about-the-place-title");
    h3.innerHTML = "About Our story";
    let div = document.createElement ("div");
    let image = document.createElement ("img");
    image.classList.add ("next-to-text-img");

    image.src="./Images/Caketable.png";

    let spanText = document.createElement ("span");
    spanText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam sunt nesciunt fugit dolorum laborum ullam possimus exercitationem illo necessitatibus dolores, sit, vel ipsa perspiciatis doloremque consequuntur repellat deleniti tempore!Impedit soluta consequuntur, perspiciatis, facilis fuga, qui at porro unde illo eos iusto fugiat. Soluta at recusandae ullam, sint est, aliquid nulla laborum cupiditate molestiae minus, rerum dicta tenetur autem.Sequi suscipit id dignissimos porro harum, voluptate inventore est enim tempora, sunt reprehenderit perspiciatis illum tenetur. Minus perspiciatis, eum incidunt quia voluptatibus unde, facilis in ducimus, ab nobis accusamus ipsum.Possimus quia modi at, atque distinctio dolorem voluptas veniam. Cumque vero adipisci corporis facilis voluptatum dicta commodi neque maxime nostrum aspernatur quidem, mollitia reprehenderit assumenda quo magnam sit perferendis recusandae?Corporis enim a numquam, amet mollitia ut, cumque vero voluptatibus tenetur voluptate beatae dignissimos architecto quam doloremque. Dolor similique, veniam ab at sit atque reprehenderit modi quo maiores mollitia ad!Labore aliquam dolore cumque accusamus saepe molestias quisquam accusantium. Aspernatur qui iure nesciunt ratione consectetur aliquid natus ex esse reiciendis voluptate, sed fugiat modi aperiam saepe rem facilis? Consequatur, numquam.Odit quasi, autem sapiente molestiae ullam qui, repudiandae assumenda quod commodi accusantium dolorum eligendi voluptate atque tempore repellendus deserunt temporibus saepe natus. Quia minima recusandae, ratione maxime necessitatibus commodi quo!At eveniet, vitae nesciunt in tempore nobis sunt praesentium porro sit nemo deleniti officiis itaque assumenda similique deserunt qui, accusamus sint rem expedita magni ratione blanditiis odio repellat! Recusandae, facilis.Placeat quis saepe est, corrupti pariatur nam explicabo consequatur consequuntur impedit nulla? Architecto adipisci, nesciunt odio facere deserunt quis assumenda in, pariatur dignissimos asperiores vel cum magni impedit? Nisi, sequi!At eveniet, vitae nesciunt in tempore nobis sunt praesentium porro sit nemo deleniti officiis itaque assumenda similique deserunt qui, accusamus sint rem expedita magni ratione blanditiis odio repellat! Recusandae, facilis.Placeat quis saepe est, corrupti pariatur nam explicabo consequatu"
    

    section.appendChild(h3);
    div.appendChild(image);
    section.appendChild(div);
    section.appendChild(spanText);
    content.appendChild(section);
};

function createFooter () {

    let footer = document.createElement ("footer");
    footer.classList.add ("main-footer");
    let extraDiv = document.createElement ("div");
    extraDiv.classList.add ("footer-container");
    let h5 = document.createElement ("h5");
    h5.classList.add ("footer-place-name");
    h5.innerHTML = "Our story";
    let footerList = document.createElement ("ul");
    footerList.classList.add ("footer-menu");
    let list = document.createElement ("li");
    
    list.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="reservation.html">Reservation</a></li>
    `;

    extraDiv.appendChild(h5);
    footerList.appendChild(list);
    extraDiv.appendChild(footerList);
    footer.appendChild(extraDiv);
    content.appendChild(footer);

};

