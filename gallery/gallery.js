function upDate(picturePrev) {
    x = document.getElementById("image");
    x.style.background="url("+picturePrev.src+")";
    x.innerHTML = picturePrev.alt;
}

function unDo () {
    x = document.getElementById("image");
    x.style.background='#8e68ff';
    x.innerHTML = '<b>Hover over an image below to display here.</b>';
}