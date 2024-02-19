

let offerbar = document.getElementById("offerbar");
let offerclose = document.getElementById("offerclose");
offerclose.addEventListener('click',()=>{
    offerbar.style.display = "none"
})

let menu = document.getElementById("menu");
let sidenav = document.getElementById("sidenav");
let sidenavclose = document.getElementById("sidenavclose");

menu.addEventListener('click',()=>{
    sidenav.style.left = "0%"
})
sidenavclose.addEventListener('click',()=>{
    sidenav.style.left = "-50%";
})

// products
const products = [
    {
        id:1,
        name:"Floral Summer Shirt",
        src:"f1.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },

    {
        id:2,
        name:"Summer Green",
        src:"f2.jpg",
        desc:"",
        price:260,
        tags:["new","green","beach"]
    },

    {
        id:3,
        name:"Party Floral Shirt",
        src:"f3.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },

    {
        id:4,
        name:"Floral Summer Shirt",
        src:"f4.jpg",
        desc:"",
        price:399,
        tags:["old","white","beach"]
    },
    {
        id:5,
        name:"Beach Shirt",
        src:"f5.jpg",
        desc:"",
        price:579,
        tags:["old","white","beach"]
    }
,
    {
        id:6,
        name:"Shirt Party Red",
        src:"f6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },

    {
        id:7,
        name:"Party Floral Shirt",
        src:"f3.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },
    {
        id:8,
        name:"Shirt Party Red",
        src:"f6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },
    {
        id:9,
        name:"Floral Summer Shirt",
        src:"f1.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },


]
var productContainer = document.getElementById("products");

products.forEach((product)=>{
    var items = document.createElement("div");
    items.classList.add("product");
    items.innerHTML = `<img style="width: 20vw;" src="images/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`;
    productContainer.append(items);
})

// checkbox

var filterProduct = [];
var tags = document.getElementsByName("tags");
tags.forEach((tag)=>{
    tag.addEventListener('change',(e)=>{
        if(e.target.checked){
            filterProduct.push(e.target.value);
            update();
            console.log(filterProduct);
        }
        else{
            filterProduct = filterProduct.filter(item => item!=e.target.value);
            update();
            console.log(filterProduct);
        }
    })
})

function update(){
    var productList = document.querySelectorAll(".product");
    for(var i = 0;i<productList.length;i++){
        var check = false;
        var product = productList[i];
        console.log(product);
        var temp = product.querySelector("tags").innerHTML;
        console.log("temp "+temp);
        const tempfilterArray = temp.split(',');
        console.log("tempfilterArray "+tempfilterArray);
        console.log("filterProduct "+filterProduct);
        filterProduct.forEach((j)=>{
            tempfilterArray.forEach((i)=>{
                if(j==i){
                    check = true;
                }
            })
        })

        if(!check && filterProduct.length>0){
            product.style.display = "none";
        }
        else{
            product.style.display = "block";
        }
    }
}