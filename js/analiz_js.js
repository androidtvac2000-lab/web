const start = document.querySelector(".start")
const loader = document.querySelector(".loader")
const text = document.querySelector(".text")
const check_items = document.querySelector(".check_items")
const good1 = document.querySelector("#good1")
const analiz1 = document.querySelector("#analiz1")
const not_good1 = document.querySelector("#not_good1")
const good2 = document.querySelector("#good2")
const analiz2 = document.querySelector("#analiz2")
const not_good2 = document.querySelector("#not_good2")
const good3 = document.querySelector("#good3")
const analiz3 = document.querySelector("#analiz3")
const not_good3 = document.querySelector("#not_good3")
const good4 = document.querySelector("#good4")
const analiz4 = document.querySelector("#analiz4")
const not_good4 = document.querySelector("#not_good4")
let ways = document.querySelector(".ways")
let back_btn = document.querySelector(".back_btn")
let errors = ""



let token = JSON.parse(localStorage.getItem("saved_info"))

start.addEventListener("click", () => {
    // console.log(token.length)
    back_btn.style.display = "none"
    start.style.display = "none"
    loader.style.display = "flex"
    text.style.display = "flex"
    check_items.style.display = "block"
    if (localStorage.getItem("acess") === "logged_in") {
        setTimeout(() => { analiz1.style.display = "none", good1.style.display = "block" }, 8000)
    } else {
        setTimeout(() => { analiz1.style.display = "none", not_good1.style.display = "block" }, 8000)
        errors += "  Please log in  "
    }
    if (token != null) {
        if (token.length != 0) {
            setTimeout(() => { analiz3.style.display = "none", good3.style.display = "block" }, 12000)
            if (token[0].password.length >= 4) {
                setTimeout(() => { analiz2.style.display = "none", good2.style.display = "block" }, 10000)
            } else {
                setTimeout(() => { analiz2.style.display = "none", not_good2.style.display = "block" }, 10000)
                errors += "  Check your passwords  "
            }
        } else {
            setTimeout(() => { analiz3.style.display = "none", not_good3.style.display = "block", analiz2.style.display = "none", not_good2.style.display = "block" }, 12000)
        }
    } else {
        setTimeout(() => { analiz3.style.display = "none", not_good3.style.display = "block", analiz2.style.display = "none", not_good2.style.display = "block" }, 12000)
        errors += "  Please add a password and try again  "
    }
    if(localStorage.getItem("acess") === "logged_in"){
        if (token != null) {
            if (token.length != 0) {
                if (token[0].password.length >= 4) {
                    errors = "Every things is good"
                }
            }
        }   
    }

    setTimeout(() => {
        analiz4.style.display = "none", good4.style.display = "block", loader.style.display = "none" , text.style.display = "none",ways.textContent = errors , ways.style.color = "#ffffff" , back_btn.style.display = "flex"}, 15000)
})

