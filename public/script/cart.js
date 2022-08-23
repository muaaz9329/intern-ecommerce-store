function productName (parentElement,data,index){ // puts name of item in table
    var idMaker=String('item'+index)
    let tr = document.createElement('tr')
    tr.classList.add(idMaker)
    let td = document.createElement('td')
    td.classList.add('px-5','py-5','border-b','border-gray-200','bg-white','text-sm')
    let para = document.createElement('p')
    para.classList.add('text-gray-900','whitespace-no-wrap')
    para.textContent = String(data.name);
    para.setAttribute('id',idMaker)
    td.appendChild(para)
    tr.appendChild(td)
    parentElement.append(tr)

    //function calling for rows
    Price(tr,data)
    amount(tr,data,index)
    total(tr,data)
    DeleteItemBtn(tr,idMaker)
    }

    function Price (parentElement,data){ // puts price in table
    let td = document.createElement('td')
    td.classList.add('px-5','py-5','border-b','border-gray-200','bg-white','text-sm')
    let para = document.createElement('p')
    para.classList.add('text-gray-900','whitespace-no-wrap')
    para.textContent = String(data.price);
    td.appendChild(para)
    parentElement.append(td)
    }

    function amount(parentElement,data,index){ // puts amount table
        let td = document.createElement('td')
        var idMaker=String('item'+index+'Amount')
    td.classList.add('px-5','py-5','border-b','border-gray-200','bg-white','text-sm')
    let para = document.createElement('p')
    para.classList.add('text-gray-900','whitespace-no-wrap')
    para.textContent = String(data.amount);
    para.setAttribute('id',idMaker)
    td.appendChild(para)
    parentElement.append(td)
    }

    function total(parentElement,data){ //puts total = amount * item price in table
        let td = document.createElement('td')
    td.classList.add('px-5','py-5','border-b','border-gray-200','bg-white','text-sm')
    let para = document.createElement('p')
    para.classList.add('text-gray-900','whitespace-no-wrap')
    let tempAmount = data.price * data.amount
    para.textContent =String(tempAmount) ;
    td.appendChild(para)
    parentElement.append(td)
    }



    function DeleteItemBtn (parentElement,id){ //creates a btn with element to delete as a parimeter
        let td = document.createElement('td')
    td.classList.add('px-5','py-5','border-b','border-gray-200','bg-white','text-sm')
    let button = document.createElement('button')
    button.classList.add('flex','text-white','bg-indigo-500','border-0','py-2','px-6','focus:outline-none','hover:bg-indigo-600','rounded')
    button.textContent ="delete Item";
    let customBtnId = String('DeleteItem('+JSON.stringify(id)+')')
    button.setAttribute('onclick',customBtnId);
    td.appendChild(button)
    parentElement.append(td)
    }

    function DeleteItem(item){ // function that deletes the item from the cart object
        let data = JSON.parse(localStorage.getItem('cart'))
        let filterValueName = document.getElementById(item).innerText;
       
        let filterValueAmount = parseInt(document.getElementById((item+'Amount')).innerText)
        let newData = data.filter(function(object){
            return  object.name != filterValueName ||
            object.amount !=filterValueAmount ;
                    
                     
        });
        localStorage.setItem('cart',JSON.stringify(newData))
        parentElement.innerHTML = ' '
        startingPrinting();

    }



    function calculateTotal(){ //calculates the total price of all the items
        let dataFortotal = JSON.parse( localStorage.cart);
        let totalPrice =[]
        for(let j=0;j<dataFortotal.length;j++){
            let tempAmount = dataFortotal[j].price * dataFortotal[j].amount
            totalPrice.push(parseInt(tempAmount))
        }

        let price=0;
        for(var i=0;i<totalPrice.length;i++){
            price = parseInt( totalPrice[i])+price;
        }
        document.getElementById('sub-total').innerText = price
    }


    
    
    const parentElement = document.getElementById('parent') // main element table that gets changed



    function startingPrinting (){
         // calls the data from cart , converts to string to object and passes data to function , that calculates the total amount and puts data inside the table
    if('cart' in localStorage && 'isAuth' in localStorage){
        let data = JSON.parse( localStorage.cart);
    for(var i =0;i<data.length;i++){
        productName(parentElement,data[i],i);
    }
    calculateTotal();
    }
    else{
        const alertBox = document.getElementById('notLogin')
           
            alertBox.classList.replace('hidden','flex')
            setTimeout(()=>{
                window.location.href = 'index.html'
            },4000)
       
    }}


    function addedAddress(){
        const button = document.getElementById('checkoutBtn')
        button.removeAttribute('disabled')
        // bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white 
        //bg-gray-300 hover:bg-gray-500 focus:ring-gray-500 focus:ring-offset-gray-200 text-gray-800
        button.classList.replace('bg-gray-300','bg-green-500');
        button.classList.replace('hover:bg-gray-500','hover:bg-green-700');
        button.classList.replace('focus:ring-gray-500','focus:ring-green-500')
        button.classList.replace('focus:ring-offset-gray-200','focus:ring-offset-green-200')
        button.classList.replace('text-gray-800','text-white')
    }
    function BtnHighlight(){
        const alertBox = document.getElementById('alertBox')
        localStorage.setItem('cart','[]');
        alertBox.classList.replace('hidden','flex')
        setTimeout(()=>{
            window.location.href = 'index.html'
        },4000)
        
    }