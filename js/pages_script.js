const back = document.querySelector(".but_back")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const submit = document.querySelector("#submit")







back.addEventListener("click", () => {
    window.location = "../index.html"
})

submit.addEventListener("click", () => {
    if (username.value.trim().length > 0 && password.value.trim().length >= 4) {
        fetch("https://68ed2ee7eff9ad3b1404d776.mockapi.io/api/v1/poorix_card", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value.trim(),
                password: password.value.trim(),
            }),

        })
        localStorage.setItem("name", username.value.trim())
        username.value = ""
        password.value = ""
        localStorage.setItem("acess","logged_in")
        setTimeout(()=>{window.location = "../index.html"},1000)
    }
})
