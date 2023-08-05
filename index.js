const portfolioArray = [
    {
        image: `images/mamaPerry's kitchen flyer mockup.jpg`,
        title: `MamaPerry Kitchen`,
        type: `Flyer`
    },
    {
        image: `images/Ash Wednesday Wish.jpg`,
        title: `Ash Wednesday`,
        type: `Wish`
    },
    {
        image: `images/Tela Bakery Flyer - Mockup.jpg`,
        title: `TelaBakery`,
        type: `Flyer`
    },
    {
        image: `images/Mama Perry's Kitchen Logo.jpg`,
        title: `MamaPerry's Kitchen`,
        type: `LOGO`
    },
    {
        image: `images/Travail Flyer - Mockup.jpg`,
        title:`Travail`,
        type: `flyer`
    },
    {
        image: `images/20230311_184602.jpg`,
        title:`TelaStudio T-Shirt`,
        type: `clothing design`
    },
   
]
const portfolioContent = document.querySelector('.portfolio-content');

portfolioArray.forEach((content) => {
    portfolioContent.innerHTML+= `
        <div class="design">
            <div class="design-image-div">
                <img src="${content.image}" class="design-image" width="504px">
            </div>
            <div class="design-title-div">
                <p class="design-title">
                    ${content.title}
                </p>
                <p class="design-type">
                    ${content.type.toUpperCase()}
                </p>
            </div>
        </div>
    `
});

// const header = document.querySelector(".header");
// const menuIcon = document.querySelector(".menu-icon");
// let menuFlag = 0;
// function showMenu(){
//     if(menuFlag === 0){
//         header.innerHTML += `
//         <div class="nav-div">
//             <a href="#home">Home</a>
//         </div>
//         <div class="nav-div">
//             <a href="#portfolio">Portfolio</a>
//         </div>
//         <div class="nav-div">
//             <a href="#about-me">About Me</a>
//         </div>
//         <div class="nav-div">
//             <a href="#contact">Contact</a>
//         </div>`;
//         menuFlag = 1;
//         console.log(menuFlag);
//     }
// }
// menuIcon.addEventListener('click',() => {
//     showMenu();
// });