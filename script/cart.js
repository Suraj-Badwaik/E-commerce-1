
var cartAddedData= JSON.parse(localStorage.getItem("cartDATAobj"));

console.log(cartAddedData)



var cartAddedData2= JSON.parse(localStorage.getItem("cartDataobjwomen"));

console.log(cartAddedData2)


  //-------------------------------------------------------------------//
  //-------------------------------------------------------------------//
  //-------------------------------------------------------------------//



var total1 = cartAddedData.reduce(function (sum, el, index, arr) {
    return sum + Number(el.price);
  }, 0);

  var total2 = cartAddedData2.reduce(function (sum, el, index, arr) {
    return sum + Number(el.price);
  }, 0); 


var FinalTotal= total1 + total2  ;

//-----//-------//----------//---------//

  var length1 = cartAddedData.length;
  console.log(length);

  
  var length2 = cartAddedData2.length;
  console.log(length2);


  var totallength = length1 + length2 ;

//   console.log(total);

  
 document.querySelector("p").innerText = "You have " + totallength + " items in cart and  total is $" + FinalTotal

 document.querySelector('#promo').addEventListener("click",myfunction)

 function myfunction(){
    var code = document.querySelector('#code').value;
    if(code =="masai30")
    {
      // alert('code accepted')
      document.querySelector('p').innerText = "You have " + totallength + " items in cart and  total is $" + (FinalTotal-(FinalTotal*0.30))
    }
 }

  //-------------------------------------------------------------------//
  //-------------------------------------------------------------------//
  //-------------------------------------------------------------------//



cartAddedData.map(function(el,index){
    var box=document.createElement("div");
    
    var image=document.createElement("img");
    image.src=el.image_url;

    var name=document.createElement("p");
    name.setAttribute("class","name")
    name.innerText=el.name;

    var cd1=document.createElement("div");
    
    var price=document.createElement("p");
    price.setAttribute("class","price")
    price.innerText="$ "+el.price;

    var striked=document.createElement("p")
    striked.setAttribute("class","strprice")
    striked.innerText="$ "+el.strikedoffprice;

    var cd2=document.createElement("div");
    var btn=document.createElement("button");
    btn.setAttribute("class","btn");
    btn.innerText="Remove Item";
    btn.addEventListener("click", function(){
        removeItem(el,index);
    });

    cd2.append(btn);
    cd1.append(price,striked);

    var pdiv=document.createElement("div");
    pdiv.setAttribute("class","pdiv");

    pdiv.append(cd1,cd2)

    box.append(image,name,pdiv);

    document.querySelector(".container").append(box);
})


function removeItem(el,index){
    console.log(el,index);
    cartAddedData.splice(index,1);
    localStorage.setItem("cartDATAobj",JSON.stringify(cartAddedData));
    window.location.reload();
}




//------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------//



cartAddedData2.map(function(el,index){
    var box=document.createElement("div");
    
    var image=document.createElement("img");
    image.src=el.image_url;

    var name=document.createElement("p");
    name.setAttribute("class","name")
    name.innerText=el.name;

    var cd1=document.createElement("div");
    
    var price=document.createElement("p");
    price.setAttribute("class","price")
    price.innerText="$ "+el.price;

    var striked=document.createElement("p")
    striked.setAttribute("class","strprice")
    striked.innerText="$ "+el.strikedoffprice;

    var cd2=document.createElement("div");
    var btn=document.createElement("button");
    btn.setAttribute("class","btn");
    btn.innerText="Remove Item";
    btn.addEventListener("click", function(){
        removeItem1(el,index);
    });

    cd2.append(btn);
    cd1.append(price,striked);

    var pdiv=document.createElement("div");
    pdiv.setAttribute("class","pdiv");

    pdiv.append(cd1,cd2)

    box.append(image,name,pdiv);

    document.querySelector(".container").append(box);
})


function removeItem1(el,index){
    console.log(el,index);
    cartAddedData2.splice(index,1);
    localStorage.setItem("cartDataobjwomen",JSON.stringify(cartAddedData2));
    window.location.reload();
}