let main = document.getElementById("main")
let allBtn = document.getElementById("all")
let shakeBtn = document.getElementById("shake")
let breakFastBtn = document.getElementById("breakfast")
let lunchBtn = document.getElementById("lunch")
let searchBtn = document.getElementById("searchBtn")
let input = document.getElementById("input")


const resturantMenu = [
    {
    productName :"Korma",
    description : "loremaosidfhaojdsfaosjd;fklajsdlfj asjdklfjas;ldfj ljasdfkljasd;lfjasd jkl;lj lasdfha",
    price : 250,
    imgUrl :"https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=612x612&w=0&k=20&c=F-sjeDrKuwqVh51seSkRV7Lng8ujiObyJPDxLvz3oOM=",
    category : "lunch"
    },
    {
    productName :"Biryani",
    description : "Mazy ki biryani hai jani kahan sai le aye",
    price : 300,
    imgUrl :"https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg",
    category : "lunch"
    },
    {
    productName :"Strawberry Shake",
    description : "Strawberry Shake hai peena hai to ajaou jani",
    price : 250,
    imgUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGQ3hwgYEofcKfdxHz7jAuZBDYNQ9RMF4bw&s",
    category : "shake"
    },
    {
    productName :"Paye",
    description : "loremaosidfhaojdsfaosjd;fklajsdlfj asjdklfjas;ldfj ljasdfkljasd;lfjasd jkl;lj lasdfha",
    price : 250,
    imgUrl :"https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=612x612&w=0&k=20&c=F-sjeDrKuwqVh51seSkRV7Lng8ujiObyJPDxLvz3oOM=",
    category : "breakfast"
    },
    {
    productName :"Machli",
    description : "Mazy ki biryani hai jani kahan sai le aye",
    price : 300,
    imgUrl :"https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg",
    category : "lunch"
    },
    {
    productName :"Coldrink",
    description : "Strawberry Shake hai peena hai to ajaou jani",
    price : 250,
    imgUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGQ3hwgYEofcKfdxHz7jAuZBDYNQ9RMF4bw&s",
    category : "shake"
    },
]


const menuHandler = (category) => {
    console.log("mai chla ")
  let eachCardItem =   resturantMenu.filter((item) => {
    if(category){
        return item.category == category
    }else {
        return true
    }
  }).map((item) => {
         const cardHTML = `
<div class="card mb-3" style="width: 18rem">
          <img
            src="${item.imgUrl}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${item.productName}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">${item.price} Pkr</a>
          </div>
        </div>
        `
        return cardHTML

    })
    main.innerHTML = eachCardItem
}

menuHandler()


const searchHandler = () => {
    console.log("mai chl rah hon")
// console.log(input)

// if(input.value ==  )
let findItem = resturantMenu.find((item) => item.productName.toLowerCase() == input.value.toLowerCase())
// console.log(findItem)

if(!findItem)  {
    main.innerHTML = `<h1> No Items found </h1> `
}

const cardHTML = `
<div class="card mb-3" style="width: 18rem">
          <img
            src="${findItem.imgUrl}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${findItem.productName}</h5>
            <p class="card-text">${findItem.description}</p>
            <a href="#" class="btn btn-primary">${findItem.price} Pkr</a>
          </div>
        </div>
        `

        main.innerHTML = cardHTML

}
allBtn.addEventListener("click", function () {
menuHandler()
})
breakFastBtn.addEventListener("click", function () {
menuHandler("breakfast")
})
lunchBtn.addEventListener("click", function () {
menuHandler("lunch")
})
shakeBtn.addEventListener("click", function () {
menuHandler("shake")
})
searchBtn.addEventListener("click", searchHandler)