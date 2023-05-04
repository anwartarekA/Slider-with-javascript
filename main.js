
let butt = document.querySelector("#btns");
let button = document.querySelectorAll("#btns button");
let divs = document.querySelector("#images");
let div = document.querySelectorAll("#images div");


butt.addEventListener('click', (e) => {
    let currentbutt = e.target;
    
    let currentdiv = document.getElementById(currentbutt.dataset.mark);
    button.forEach(x => {
        x.classList.remove("active");
        currentbutt.classList.add("active");
    
    })
    div.forEach(t => {
        t.classList.remove("show");
        currentdiv.classList.add("show");
    })
    
})
let allpic = document.getElementById("fullscreen");
let shoenpic=document.getElementById("bigpicture")
let pic = document.querySelector(".pic12");
let btn5 = document.getElementById("btn5");
btn5.addEventListener('click', () => {
    allpic.style.display = "none";

})
pic.addEventListener('click', () => {
    allpic.style.display = "block";
    shoenpic.style.display = "block";
})


let array = [{
    Image: "images/300.png"
},
{
    Image: "images/300.png"
},
{
    Image: "images/400.png"
},
{
    Image: "images/111.png"
},
    {
        Image: "images/180.png"
},
{
    Image: "images/150.webp"
},
{
    Image: "images/102.png"
},
{
    Image: "images/60.jpg"
},
{
    Image: "images/55.gif"
},
];
let ggg = document.getElementById("as");
let i = 0;
let apply = function () {
 ggg.src = array[i].Image;
}
apply();

let btn4 = document.getElementById("btn4");
btn4.addEventListener('click', () => {
    i++;
    if (i > array.length - 1)
    {
        i = 0;
        apply();
    }
    apply();
})
let btn3 = document.getElementById("btn3");
btn3.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = array.length - 1;
        apply();
    }
    apply();
})
