const CustomAlert2 = document.querySelector("#alert2").classList;
const CustomAlert = document.querySelector("#alert").classList;
const AlertFunction = () => {
    CustomAlert.remove("hidden")
    setTimeout(() => CustomAlert.add("hidden"), 4000)


}

function AlertFunction2() {
    CustomAlert2.remove("hidden")
    setTimeout(() => CustomAlert2.add("hidden"), 4000)


}




const ProductPageFunctionality = () => {
    if (!("cart" in localStorage)) {
        localStorage.setItem("cart", '[]')

    }
    if (!('favItem' in localStorage)) {
        localStorage.setItem("favItem", "[]")

    }
}
function addToCart() {
    const productName = document.getElementById("productName").innerText;
    const productPrice = parseInt(document.getElementById("productPrice").innerText);
    const noOfProduct = parseInt(document.getElementById("noOfProduct").value);

    const oldCartData = localStorage.getItem("cart");//[] in string
    var CartData = JSON.parse(oldCartData);//[] in js from string
    const proObj = {
        name: productName,
        price: productPrice,
        amount: noOfProduct
    }
    CartData.push(proObj)
    const pushedData = JSON.stringify(CartData)
    localStorage.setItem('cart', pushedData)
    AlertFunction();


}
function favItem() {
    const productName = document.getElementById("productName").innerText;
    const link = String(window.location.href);
    var choise;
    var FavData = JSON.parse(localStorage.getItem('favItem'))//[] in js from string
    const favObj = {
        name: productName,
        link: link
    }

    FavData.push(favObj);
    localStorage.setItem('favItem', JSON.stringify(FavData))
    document.getElementById('favIco').style.fill = "#FF8FB1"
    AlertFunction2()

}