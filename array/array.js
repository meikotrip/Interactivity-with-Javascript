var foods = [];

function daftarArr() {
    document.getElementById("foodies").innerHTML =foods;
}

function addArray() {
    var food = prompt("Masukkan Makanan atau minuman favorit Anda !");
    foods[foods.length] = food;
    document.getElementById("foodies").innerHTML =foods;
}

function removeArr() {
    if (foods.length == 1) {
        foods.splice(0,1);
    }
    else {
        var num = prompt("Item nomor berapa yang ingin dihapus ?");
        foods.splice(num-1, 1);
    }
    document.getElementById("foodies").innerHTML =foods;
}
