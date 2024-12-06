let n =5487
let rev = 0
while(n!=0){
    rev = rev*10+n%10
    n = parseInt(n/10)
}
console.log(rev)

const data = [
    {
        "image": "https://product-list-with-cart-front-end.netlify.app/images/image-waffle-desktop.jpg",
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": "6.50"
     },
     {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-creme-brulee-desktop.jpg",
         "name": "Vanilla Bean Crème Brûlée",
         "category": "Crème Brûlée",
         "price": "7.00"
      },
      {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-macaron-desktop.jpg",
         "name": "Macaron Mix of Five",
         "category": "Macaron",
         "price": "8.00"
      },
      {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-tiramisu-desktop.jpg",
         "name": "Classic Tiramisu",
         "category": "Tiramisu",
         "price": "5.50"
      },
      {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-baklava-desktop.jpg",
         "name": "Pistachio Baklava",
         "category": "Baklava",
         "price": "4.00"
      },
      {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-meringue-desktop.jpg",
         "name": "Lemon Meringue Pie",
         "category": "Pie",
         "price": "5.00"
      },
      {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-cake-desktop.jpg",
         "name": "Red Velvet Cake",
         "category": "Cake",
         "price": "4.50"
      },
      {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-brownie-desktop.jpg",
         "name": "Salted Caramel Brownie",
         "category": "Brownie",
         "price": "4.50"
      },
      {
         "image": "https://product-list-with-cart-front-end.netlify.app/images/image-panna-cotta-desktop.jpg",
         "name": "Vanilla Panna Cotta",
         "category": "Panna Cotta",
         "price": "6.50"
      }
    ]
for(let i = 0; i<data.length;i++){
    let ele = `<div id="box"><p>${data[i].category}</p><p>${data[i].name}</p><p>${data[i].price}</p></div>`
    document.getElementById("display").innerHTML+=ele


}