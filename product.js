


document.getElementById("displayCount").innerHTML=localStorage.getItem("cartItem")


products=[

{name:"oppoA5",url:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:"534",category:"laptop",type:"oppo"},
{name:"dellA7",url:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",price:"944",category:"laptop",type:"dell"},
{name:"sonyP45",url:"https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600",price:"744",category:"laptop",type:"sony"},
{name:"HP9",url:"https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600",price:"644",category:"laptop",type:"hp"},
{name:"HP9PRO",url:"https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=600",price:"644",category:"laptop",type:"hp"},
{name:"samsungA34",url:"https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=600",price:"244",category:"phone",type:"samsung"},
{name:"OppoReno5",url:"https://images.pexels.com/photos/1693627/pexels-photo-1693627.jpeg?auto=compress&cs=tinysrgb&w=600",price:"244",category:"phone",type:"oppo"},
{name:"apple",url:"https://images.pexels.com/photos/842991/pexels-photo-842991.jpeg?auto=compress&cs=tinysrgb&w=600",price:"244",category:"phone",type:"apple"},
{name:"oppoReno7",url:"https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=600",price:"244",category:"phone",type:"oppo"}
]
localStorage.setItem("product",JSON.stringify(products))
console.log(localStorage.getItem("product"))
console.log(products)

display(products)

function display(products){
  let cartonna=``;
  for(let i=3;i<products.length;i++){
 cartonna+=`
 <div class="ol-12 col-sm-6 col-md-12 col-xl-6 mt-2 ">
 <div class="card" >
     <div class="position-relative">
       <img src="${products[i].url}" class="card-img-top" alt="...">
       <div class=" for_sale">
         for sale
       </div>
       <div   class="price2">
         <ins class="text-danger d-block text-ce">${products[i].price}</ins>
         <del class="text-light">${products[i].price}.00$</del>
       </div>
     </div>
     <div class="card-body">
       <h5 class="card-title  text-warning">${products[i].name}</h5>
       <p class="card-text x">PEST/ PRODUCT/ AT ALL</p>
       <p  class="border-bottom border-1 p-1">
     </p>
     <div class="position-relative">
       <i class="fa-solid fa-star   text-warning"></i>
       <i class="fa-solid fa-star text-warning"></i>
       <i class="fa-solid fa-star text-warning"></i>
       <i class="fa-solid fa-star text-secondary "></i>
       <i class="fa-solid fa-star text-secondary "></i>
       <i class="fa-solid fa-star text-secondary  "></i>
       <i class="fa-solid fa-cart-shopping position-absolute end-0 img-cart text-warning font-bold" onclick=sendId(${i})></i>
      
     </div>
     </div>
   </div>
</div>
`
  }
  document.querySelector(".pro").innerHTML=cartonna
}

///////////////////////////////make your code here please zainab//////////////////////////////////














function sendId(id){
  if(id==0){
id="frist";

  }
window.location=`cart.html?id=${id}`
}