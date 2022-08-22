const {username,password,email}=localStorage;
document.getElementById('username').innerText = username;
document.getElementById('password').innerText = password;
document.getElementById('email').innerText = email;
document.body.classList.add('font1')

const parentElement = document.getElementById('parentElemnt');
 const startingFunc =(recData,id)=>{
  let div = document.createElement('div')
  let dt = document.createElement('dt')
  let dd = document.createElement('dd')
  dd.classList.add('mt-1','text-sm','text-gray-900','sm:mt-0','sm:col-span-2')
  let button = document.createElement('button')
  button.classList.add('flex','text-white','bg-indigo-500','border-0','py-2','px-6','focus:outline-none','hover:bg-indigo-600','rounded','m-4','items-end')
  button.textContent ="delete Item";
  let customBtnId = String('DeleteItem('+JSON.stringify('item'+id)+')')
  button.setAttribute('onclick',customBtnId);

  dd.append(button)
  div.classList.add("mt-1","text-green-700",'flex','items-center','justify-items-center','px-4','px-5')
  let link = document.createElement('a');
  link.innerText = recData.name;
  link.setAttribute('href',recData.link);
  link.classList.add("animate-pulse",'m-4')
  link.setAttribute('id',String('item'+id))
  div.append(dt,dd);
  dt.append(link)
  parentElement.append(div)
 }



 function DeleteItem(item){ // function that deletes the item from the cart object
 let data = JSON.parse(localStorage.getItem('favItem'))
 let filterValueName = document.getElementById(item).innerText;

 let newData = data.filter(function(object){
     return  object.name != filterValueName 
             
              
 });
 console.log(newData);
 // console.log(JSON.stringify(newData))
 localStorage.setItem('favItem',JSON.stringify(newData))
 parentElement.innerHTML = ' '
 startingPrinting();

}   


const startingPrinting =()=>{
 if('favItem' in localStorage){
 let data = JSON.parse(localStorage.favItem);
 for(let i =0;i<data.length;i++){
     startingFunc(data[i],i);
 }
}

}
function logOut(){
 localStorage.removeItem('cart');
 localStorage.removeItem('isAuth');
 localStorage.removeItem('favItem')
 window.location.href = 'index.html'
}


