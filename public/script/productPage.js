const CustomAlert2 = document.querySelector("#alert2").classList;
const CustomAlert = document.querySelector("#alert").classList;
document.body.classList.add('font1')
const AlertFunction = () => {
    CustomAlert.remove("hidden")
    setTimeout(() => CustomAlert.add("hidden"), 4000)


}


function AlertFunction2() {
    CustomAlert2.remove("hidden")
    setTimeout(() => CustomAlert2.add("hidden"), 4000)


}

const alertBox = document.getElementById('notLogin')
    
const notLoginFunc =()=>{
    alertBox.classList.replace('hidden','flex')
    setTimeout(()=>{
        location.href = "../login.html"
    },4000)
}
        



const ProductPageFunctionality = () => {
    
        if (!("cart" in localStorage)) {
            localStorage.setItem("cart", '[]')
    
        }
        if (!('favItem' in localStorage)) {
            localStorage.setItem("favItem", "[]")
    
        }else{
            let productName = document.getElementById('productName').innerText;
            let favItemColor = JSON.parse(localStorage.getItem('favItem'))
            if(favItemColor.length !=0){
                for(let k =0;k<favItemColor.length;k++){
                    if(productName === favItemColor[k].name){
                        document.getElementById('favIco').style.fill = "#FF8FB1"
                        break;
                    }
                    else{
                        continue;
                    }
                   
                }
            }
        }
    
    

}
function addToCart() {
    if(!('isAuth' in localStorage)){
        notLoginFunc()
    }
    else{

    
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
    if(CartData.length != 0){
        for(let j=0;j<CartData.length;j++){
            if(proObj.name == CartData[j].name){
                CartData[j].amount = CartData[j].amount + proObj.amount;
                break;
                
            }
            else{
                CartData.push(proObj)
            }
        }
        let pushedData = JSON.stringify(CartData)
        console.log(CartData)
        localStorage.setItem('cart', pushedData)
        AlertFunction();
    }
    else{
        CartData.push(proObj)
        let pushedData = JSON.stringify(CartData)
        console.log(CartData)
        localStorage.setItem('cart', pushedData)
        AlertFunction();
    }
    
   
    }

}
function favItem() {
    if(!('isAuth' in localStorage)){
        notLoginFunc();
    }
    else{
        const productName = document.getElementById("productName").innerText;
        const link = String(window.location.href);
        var choise;
        var FavData = JSON.parse(localStorage.getItem('favItem'))//[] in js from string
        const favObj = {
            name: productName,
            link: link
        }
        if(FavData.length != 0){
            for(let i=0;i<FavData.length;i++){
                if(favObj.name == FavData[i].name){
                    break;
                }
                else{
                    FavData.push(favObj);
                }
            }
        }
        else{
        FavData.push(favObj);
        localStorage.setItem('favItem', JSON.stringify(FavData))
        document.getElementById('favIco').style.fill = "#FF8FB1"
        AlertFunction2()
        }
        
    
        
    }


}