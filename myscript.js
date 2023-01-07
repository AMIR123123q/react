// let qSelector =document.querySelectorAll("li")
// let ul = document.querySelector("ul")
// let result =ul.children[1].children[0]    .innerHTML   //  or .textContent
// result=ul.childElementCount
// result= ul.children[0] .children[0].lastChild.textContent
// console.log(qSelector)
// console.log(result)
// let creat = document.createElement("h2")
// creat.setAttribute("name","amir")
// creat.textContent="hello"
// creat.innerHTML="<p>hello world</p>"
// creat.appendChild(document.createTextNode("hello baby!"))
// console.log(creat.innerHTML)






let list= document.createElement("h1") 
list.innerHTML="لیست کتاب ها"
console.log(list)
// let button = document.querySelector("button").addEventListener("click",function(e)
// {console.log(e.target)});
// button = document.querySelector("button").addEventListener("click",function(e)
// {console.log(e.type);e.preventDefault()})
// button = document.querySelector("button").addEventListener("dblclick",function(e)
// {e.preventDefault() ;console.log("دابل کلیک")})

// button = document.querySelector("button").addEventListener("mouseup",function(e)
// {console.log("mouse upped");e.preventDefault()})
// button = document.querySelector("button").addEventListener("mousedown",function(eee)
// {eee.preventDefault(),console.log("mouse downed")})
//and mouse in  and mouse out (برای وقتی که موس وارد اون باتن میشه و بعد خارج میشه)
//and mousemove  (برای وقتی که موس روی اون باتن تکون میخوره)









// button = document.querySelector("body").addEventListener("mousemove",function(e)
// {console.log(`mouseX:${e.offsetX}, mouseY:${e.offsetY}`);e.preventDefault()})


// localStorage.setItem("name1","amir")
// localStorage.setItem("name2","ali")
// localStorage.setItem("name3","ahmad")
// localStorage.setItem("name4","javad")
// localStorage.removeItem("name2")
// localStorage.clear()
const array=["amir,javad"]
const object={name:"RZ17",family:"robots"}

localStorage.setItem("array",array)
localStorage.setItem("object",JSON.stringify(object))
const myArray = localStorage.getItem("array").split(",")
console.log(myArray)
const myObject =JSON.parse(localStorage.getItem("object"))
console.log(myObject)












