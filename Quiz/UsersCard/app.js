console.log("js running -->")


let data = [
    {name : "Hasan",
        position :"Full Stack Developer",
        profilePic : "https://randomuser.me/api/portraits/men/75.jpg",
        description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quis. Ex, repellendus corrupti officia rerum modi incidunt et quae dolorem accusamus sunt hic!"
    },
    {name : "Sara",
        position :"Web Developer",
        profilePic : "https://randomuser.me/api/portraits/women/75.jpg",
        description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quis. Ex, repellendus corrupti officia rerum modi incidunt et quae dolorem accusamus sunt hic!"
    },
    {name : "Ayan",
        position :"Student",
        profilePic : "https://randomuser.me/api/portraits/men/78.jpg",
        description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quis. Ex, repellendus corrupti officia rerum modi incidunt et quae dolorem accusamus sunt hic!"
    },
    {name : "Haider",
        position :"Frontend Developer",
        profilePic : "https://randomuser.me/api/portraits/men/15.jpg",
        description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quis. Ex, repellendus corrupti officia rerum modi incidunt et quae dolorem accusamus sunt hic!"
    },
]

let start = 0;

let profilePic = document.querySelector("img")
let name = document.querySelector("h1")
let position = document.querySelector("h2")
let description = document.querySelector("p")

function manipulatingData () {
profilePic.src = data[start].profilePic
name.textContent = data[start].name
position.innerText = data[start].position
description.innerHTML = data[start].description
}

function nextHandler() {
  if(start == 3){
        start = 0
    }else {
        start++;
    }
    manipulatingData()

}
function prevHandler() {
    if(start == 0){
        start = 3

    }else {
        start--;
    }

manipulatingData()
}


manipulatingData()