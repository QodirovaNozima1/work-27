import {DATA} from "../server/db.js"

const headerStatus = document.querySelector(".header__status")
const content = document.querySelector(".content")
const contentImage = document.querySelector(".content__image")
const form = document.querySelector(".form")
const input = document.querySelector(".form input")


form.addEventListener("submit", (event)=>{
    event.preventDefault() //=>refresh bo'lurmidi
    let val = input.value
    if(val.trim() === "") return null //bo'w input yoki space yo'q


    contentImage.style.display = "none"  //rasm o'chadi

    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()

    let div = document.createElement("div") //my message div
    div.className = "message my-message"
    div.innerHTML = `
    <p>${val}<p/>
    <span>${hour}:${minute}</span>
    `
    content.appendChild(div)   //HTML ga jo'natadi

    input.value = " " //bo'w input
    partnerSendMessage() //massage ketgandan keyin unga boriwi uchun
})




function partnerSendMessage(){

    setTimeout(()=>{
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let index = Math.floor(Math.random() * DATA.length)
        let div = document.createElement("div") //message div
        div.className = "message "
        div.innerHTML = `
        <p>${DATA[index]}<p/>
        <span>${hour}:${minute}</span>
        `
        content.appendChild(div)   //HTML ga jo'natadi

    },2000)
}