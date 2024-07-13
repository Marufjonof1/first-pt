

let doublbtn = document.getElementById("doublbtn");
doublbtn.addEventListener("click", function(){
    let header = document.getElementById("hcontent")
    header.classList.toggle("header2");
})


let products1 = [
    {
        id:1,
        img:' ./img/patinka1.png ',
        name:"Nike Court Zoom Cage 2",
        desc: "от 4 699 ₽"
    },
    {
        id:2,
        img:' ./img/patinka2.png ',
        name:"Air Force 1 Ultra",
        desc: "от 6 789 ₽"
    },
    {
        id:3,
        img:' ./img/patinka3.png ',
        name:"Air Force 1 Ultra Flyknit",
        desc: "от 3 129 ₽"
    },
    {
        id:4,
        img:' ./img/patinka4.png ',
        name:"Men’s Soccer Shoes",
        desc: "от 2 699 ₽"
    }
]



let row = document.getElementById("row")

for(let i = 0; i<= products1.length -1; i++){
    let box = document.createElement("div");
    box.classList = 'box';
    row.appendChild(box)
    let img = document.createElement("img");
    img.src = products1[i].img;
    box.appendChild(img)
    let title = document.createElement("h3");
    title.innerHTML = products1[i].name;
    title.style.fontSize ="1rem"
    title.style.paddingLeft = "10px"
    box.append(title)
    let p = document.createElement("p");
    p.innerHTML = products1[i].desc;
    p.style.paddingTop = "5px"
    p.style.paddingLeft = "10px"
    box.append(p)
}

////////////

let products2 = [
    {
        id:1,
        img:' ./img/kiyim1.png ',
        name:"Nike Court Zoom Cage 2",
        desc: "от 4 699 ₽"
    },
    {
        id:2,
        img:' ./img/kiyim2.png ',
        name:"Air Force 1 Ultra",
        desc: "от 6 789 ₽"
    },
    {
        id:3,
        img:' ./img/kiyim3.png ',
        name:"Air Force 1 Ultra Flyknit",
        desc: "от 3 129 ₽"
    },
    {
        id:4,
        img:' ./img/kiyim4.png ',
        name:"Men’s Soccer Shoes",
        desc: "от 2 699 ₽"
    }
]


let row2 = document.getElementById("row2")

for(let i = 0; i<= products2.length -1; i++){
    let box2 = document.createElement("div");
    box2.classList = 'box2';
    row2.appendChild(box2)
    let img = document.createElement("img");
    img.src = products2[i].img;
    box2.appendChild(img)
    let title = document.createElement("h3");
    title.innerHTML = products2[i].name;
    title.style.fontSize ="1rem"
    title.style.paddingLeft = "10px"
    box2.append(title)
    let p = document.createElement("p");
    p.innerHTML = products2[i].desc;
    p.style.paddingTop = "5px"
    p.style.paddingLeft = "10px"
    box2.append(p)
}

let products3 = [
    {
        id:1,
        img:' ./img/kepka1.png ',
        name:"Nike Court Zoom Cage 2",
        desc: "от 4 699 ₽"
    },
    {
        id:2,
        img:' ./img/kepka2.png ',
        name:"Air Force 1 Ultra",
        desc: "от 6 789 ₽"
    },
    {
        id:3,
        img:' ./img/kepka3.png ',
        name:"Air Force 1 Ultra Flyknit",
        desc: "от 3 129 ₽"
    },
    {
        id:4,
        img:' ./img/kepka4.png ',
        name:"Men’s Soccer Shoes",
        desc: "от 2 699 ₽"
    }
]

let row3 = document.getElementById("row3")

for(let i = 0; i<= products3.length -1; i++){
    let box3 = document.createElement("div");
    box3.classList = 'box3';
    row3.appendChild(box3)
    let img = document.createElement("img");
    img.src = products3[i].img;
    box3.appendChild(img)
    let title = document.createElement("h3");
    title.innerHTML = products3[i].name;
    title.style.fontSize ="1rem"
    title.style.paddingLeft = "10px"
    box3.append(title)
    let p = document.createElement("p");
    p.innerHTML = products3[i].desc;
    p.style.paddingTop = "5px"
    p.style.paddingLeft = "10px"
    box3.append(p)
}