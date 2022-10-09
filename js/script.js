let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

let color1 = document.getElementById('colorHeart');

    color1.style.color = "var(--black)";

function hearts1 () {
    if (color1.style.color == "var(--black)") {
        document.getElementById('colorHeart').style.color = 'red';
    } else {
        document.getElementById('colorHeart').style.color = "var(--black)";
    };
};

let color2 = document.getElementById('colorHeart2');

    color2.style.color = "var(--black)";

function hearts2 () {
    if (color2.style.color == "var(--black)") {
        document.getElementById('colorHeart2').style.color = 'red';
    } else {
        document.getElementById('colorHeart2').style.color = "var(--black)";
    }
}

let color3 = document.getElementById('colorHeart3');

    color3.style.color = "var(--black)";

function hearts3 () {
    if (color3.style.color == "var(--black)") {
        document.getElementById('colorHeart3').style.color = 'red';
    } else {
        document.getElementById('colorHeart3').style.color = "var(--black)";
    }
}



// var sideNav = document.getElementById("sideNav")

// sideNav.style.color = "#13131a";