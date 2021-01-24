let jobCards = document.getElementsByClassName('job-card');

for(let i = 0 ; i < jobCards.length ; i++){
    jobCards[i].addEventListener('click', function(event){
        location.href = 'https://www.carbonbae.com/';
    });
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

// let navBar = document.getElementById('navigation-bar');

// function changeBackground(){

//     console.log('Scrolled!');

//     navBar.style.backgroundColor = "#f5f5f5";

//     window.removeEventListener('scroll',changeBackground);
// };

// window.addEventListener('scroll', changeBackground);