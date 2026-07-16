const screen = document.getElementById("screen");
const add_btn = document.querySelector(".add_btn")
const notif = document.querySelector(".notif")
const notification = document.querySelector(".notification")
const add_input_box_bg = document.querySelector(".add_input_box_bg")
const cancle = document.querySelector("#cancle")
const next = document.querySelector("#next")
const login_bt = document.querySelector("#log_in")
const cancle2 = document.querySelector("#cancle2")
const next3 = document.querySelector("#next3")
const cancle3 = document.querySelector("#cancle3")
const edit_E = document.querySelector("#edit_E")
const edit_p = document.querySelector("#edit_p")
const edit_cp = document.querySelector("#edit_cp")
const edit_box_bg = document.querySelector(".edit_box_bg")
const log_in = document.querySelector("#log_in")
const next2 = document.querySelector("#next2")
const add_1 = document.querySelector("#add_1")
const add_2 = document.querySelector("#add_2")
const add_3 = document.querySelector("#add_3")
const email = document.querySelector("#Email")
const password = document.querySelector("#password")
const c_password = document.querySelector("#c_password")
const m_name = document.querySelector("#m_name")
const media_inp = document.querySelector("#creat_media")
const github = document.querySelector(".github")
const gmail = document.querySelector(".gmail")
const call_of_duty = document.querySelector(".call_of_duty")
const bit_coin = document.querySelector(".bit_coin")
const games = document.querySelector(".games")
const isnagram = document.querySelector(".isnagram")
const twitter = document.querySelector(".twitter")
const tiktok = document.querySelector(".tiktok")
let statuse = "Password is Blocked"
const body = document.querySelector("#body")
const password_inp = document.querySelector("#password_inp")
const submit_pass = document.querySelector("#submit_pass")
const entring_pass_bg = document.querySelector(".entring_pass_bg")
const boxes = document.querySelector(".boxes")
const change_lang = document.querySelector("#change_lang")
const mt1 = document.querySelector("#mt1")
const mt2 = document.querySelector("#mt2")
const mt3 = document.querySelector("#mt3")
const mt4 = document.querySelector("#mt4")
const mt5 = document.querySelector("#mt5")
const ad = document.querySelector(".ad_bg")


setTimeout(()=>{ad.style.animation = "ad_close 1s ease alternate"},3000)
setTimeout(()=>{ad.style.animation = "ad 1s ease alternate" , ad.style
    .display = "none"
},4000)



let media_name = ""
let accses_stage = 0
const svg_ns = "http://www.w3.org/2000/svg"



let language = JSON.parse(localStorage.getItem("language"))
if (!localStorage.getItem("language")) {
    language = "Eng";
    localStorage.setItem("language", JSON.stringify(language))
}
if (language === "Eng") {
    notification.textContent = "Please fill the information correctly"
    mt1.textContent = "Please enter your account's password"
    mt2.textContent = "Please select your preferred media"
    mt3.textContent = "Please fill the box about your"
    mt4.textContent = "Add a Password"
    mt5.textContent = "If the media you want doesn't exist , create it"
    statuse = "Password is Blocked"
    body.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
}
if (language === "Farsi") {
    notification.textContent = "خطا!!   اطلاعات را درست وارد کنید"
    mt1.textContent = "لطفا رمز اکانت خود را وارد کنید"
    mt2.textContent = "لطفا برنامه مورد نظر خود را انتخاب کنید"
    mt3.textContent = "لطفا اطلاعات را وارد کنید"
    mt4.textContent = "اضافه کردن رمز"
    mt5.textContent = "اگر برنامه ی مورد نظر شما موجد نیست , آن را بسازید"
    body.style.fontFamily = "Vazir"
}

change_lang.addEventListener("click", () => {
    if (language === "Eng") {
        language = "Farsi"
        localStorage.setItem("language", JSON.stringify(language))
        location.reload()
    } else if (language === "Farsi") {
        language = "Eng"
        localStorage.setItem("language", JSON.stringify(language))
        location.reload()
    }

})

let account = []
function get_account() {
    fetch("https://68ed2ee7eff9ad3b1404d776.mockapi.io/api/v1/poorix_card", {
        method: "GET",

    })
        .then((res) => res.json())
        .then((data) => account = data);

}
get_account()


let user_acces = "no"
setTimeout(() => {
    // notification.textContent = `Welcome ${account[2].username}`
    // console.log(account)
    if (localStorage.getItem("acess") === "logged_out" || localStorage.getItem("acess") === "logged_in") {
        for (f in account) {
            if (localStorage.getItem("name") === account[f].username) {
                user_acces = account[f].username
            }
        }
    }

}, 2000)

let acces_passing = "false"
let correct_pass = ""
if (localStorage.getItem("acess") === "logged_out") {
    entring_pass_bg.style.display = "flex"
    setTimeout(() => {
        for (r in account) {
            if (account[r].username === user_acces) {
                correct_pass = account[r].password
            }
        }
        submit_pass.addEventListener("click", (event) => {
            event.preventDefault()
            if (password_inp.value.trim() === correct_pass) {
                acces_passing = "true"
                localStorage.setItem("acess", "logged_in")
                location.reload()
            } else {
                notif.style.display = "flex"
                notification.textContent = "Please enter the correct password"
                setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
                setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none", notification.textContent = "Please fill the information correctly" }, 4000)
            }
        })
    }, 2000)
}

if (localStorage.getItem("acess") === "logged_in") {
    log_in.style.animation = "logged_in_effect 1s ease alternate infinite"
    acces_passing = "true"
}


let parse_passwording = ""
let token = JSON.parse(localStorage.getItem("saved_info"))
// console.log(token)
if (!localStorage.getItem("saved_info")) {
    localStorage.setItem("saved_info", null)
}
if (!Array.isArray(token)) {
    token = [];
}
if (token != null) {
    let a = ""
    let b = ""
    let i = 0;
    let currentBoxes = boxes;
    for (t in token) {
        parse_passwording = ""
        parse_passwording2 = ""
        a = token[t].username
        b = token[t].password

        for (let g = 0; g < a.length; g += 4) {
            const chunk = a.substring(g, g + 4)
            if (chunk == "#bty") {
                parse_passwording += "a"
            } else if (chunk == "%&o(") {
                parse_passwording += "b"
            } else if (chunk == "ph67") {
                parse_passwording += "c"
            } else if (chunk == "kw3^") {
                parse_passwording += "d"
            } else if (chunk == "uyt8") {
                parse_passwording += "S"
            } else if (chunk == "5yt8") {
                parse_passwording += "s"
            } else if (chunk == "o09#") {
                parse_passwording += "e"
            } else if (chunk == "5&#@") {
                parse_passwording += "f"
            } else if (chunk == "k3%3") {
                parse_passwording += "g"
            } else if (chunk == "opd&") {
                parse_passwording += "h"
            } else if (chunk == "q$#$") {
                parse_passwording += "i"
            } else if (chunk == "kdj%") {
                parse_passwording += "j"
            } else if (chunk == "xbk,") {
                parse_passwording += "k"
            } else if (chunk == "mka#") {
                parse_passwording += "l"
            } else if (chunk == "2tyu") {
                parse_passwording += "m"
            } else if (chunk == "lmlk") {
                parse_passwording += "n"
            } else if (chunk == ":lom") {
                parse_passwording += "o"
            } else if (chunk == "!(j*") {
                parse_passwording += "p"
            } else if (chunk == ":f#@") {
                parse_passwording += "q"
            } else if (chunk == "j$@#") {
                parse_passwording += "r"
            } else if (chunk == "pl$)") {
                parse_passwording += "t"
            } else if (chunk == "gew@") {
                parse_passwording += "u"
            } else if (chunk == "kdsn") {
                parse_passwording += "v"
            } else if (chunk == "lk!!") {
                parse_passwording += "w"
            } else if (chunk == "^$%#") {
                parse_passwording += "x"
            } else if (chunk == "****") {
                parse_passwording += "y"
            } else if (chunk == "&^&&") {
                parse_passwording += "z"
            } else if (chunk == "5bty") {
                parse_passwording += "A"
            } else if (chunk == "4&o(") {
                parse_passwording += "B"
            } else if (chunk == "3h67") {
                parse_passwording += "C"
            } else if (chunk == "2w3^") {
                parse_passwording += "D"
            } else if (chunk == "109#") {
                parse_passwording += "E"
            } else if (chunk == "0&#@") {
                parse_passwording += "F"
            } else if (chunk == "93%3") {
                parse_passwording += "G"
            } else if (chunk == "8pd&") {
                parse_passwording += "H"
            } else if (chunk == "7$#$") {
                parse_passwording += "I"
            } else if (chunk == "6dj%") {
                parse_passwording += "J"
            } else if (chunk == "5bk,") {
                parse_passwording += "K"
            } else if (chunk == "4ka#") {
                parse_passwording += "L"
            } else if (chunk == "3tyu") {
                parse_passwording += "M"
            } else if (chunk == "1mlk") {
                parse_passwording += "N"
            } else if (chunk == "0lom") {
                parse_passwording += "O"
            } else if (chunk == "9(j*") {
                parse_passwording += "P"
            } else if (chunk == "8f#@") {
                parse_passwording += "Q"
            } else if (chunk == "7$@#") {
                parse_passwording += "R"
            } else if (chunk == "6l$)") {
                parse_passwording += "T"
            } else if (chunk == "5ew@") {
                parse_passwording += "U"
            } else if (chunk == "4dsn") {
                parse_passwording += "V"
            } else if (chunk == "3k!!") {
                parse_passwording += "W"
            } else if (chunk == "2$%#") {
                parse_passwording += "X"
            } else if (chunk == "1***") {
                parse_passwording += "Y"
            } else if (chunk == "0^&&") {
                parse_passwording += "Z"
            } else if (chunk == "####") {
                parse_passwording += "_"
            } else if (chunk == "&$#@") {
                parse_passwording += "-"
            } else if (chunk == "FjnK") {
                parse_passwording += "="
            } else if (chunk == "HDS6") {
                parse_passwording += "+"
            } else if (chunk == ":;lm") {
                parse_passwording += "!"
            } else if (chunk == "<sk,") {
                parse_passwording += "@"
            } else if (chunk == "T$^5") {
                parse_passwording += "#"
            } else if (chunk == "%&%4") {
                parse_passwording += "$"
            } else if (chunk == "&REl") {
                parse_passwording += "%"
            } else if (chunk == "DWEr") {
                parse_passwording += "^"
            } else if (chunk == "1342") {
                parse_passwording += "&"
            } else if (chunk == "1sfD") {
                parse_passwording += "*"
            } else if (chunk == "sfss") {
                parse_passwording += "("
            } else if (chunk == "LIjm") {
                parse_passwording += ")"
            } else if (chunk == "ADWR") {
                parse_passwording += "|"
            } else if (chunk == "wqew") {
                parse_passwording += "~"
            } else if (chunk == "vyge") {
                parse_passwording += ":"
            } else if (chunk == "jmse") {
                parse_passwording += ";"
            } else if (chunk == "shvb") {
                parse_passwording += "."
            } else if (chunk == "Mjku") {
                parse_passwording += ">"
            } else if (chunk == "$#nj") {
                parse_passwording += "<"
            } else if (chunk == "&&kj") {
                parse_passwording += ","
            } else if (chunk == "!!!j") {
                parse_passwording += "1"
            } else if (chunk == "#$|k") {
                parse_passwording += "2"
            } else if (chunk == "SA3w") {
                parse_passwording += "3"
            } else if (chunk == "Rioy") {
                parse_passwording += "4"
            } else if (chunk == "Iw32") {
                parse_passwording += "5"
            } else if (chunk == "FKwu") {
                parse_passwording += "6"
            } else if (chunk == "ihs)") {
                parse_passwording += "7"
            } else if (chunk == "SI3%") {
                parse_passwording += "8"
            } else if (chunk == "Hw89") {
                parse_passwording += "9"
            } else if (chunk == "oki@") {
                parse_passwording += "0"
            }
        }
        for (let g = 0; g < a.length; g += 4) {
            const chunk2 = b.substring(g, g + 4)
            if (chunk2 == "#bty") {
                parse_passwording2 += "a"
            } else if (chunk2 == "%&o(") {
                parse_passwording2 += "b"
            } else if (chunk2 == "uyt8") {
                parse_passwording2 += "S"
            } else if (chunk2 == "5yt8") {
                parse_passwording2 += "s"
            } else if (chunk2 == "ph67") {
                parse_passwording2 += "c"
            } else if (chunk2 == "kw3^") {
                parse_passwording2 += "d"
            } else if (chunk2 == "o09#") {
                parse_passwording2 += "e"
            } else if (chunk2 == "5&#@") {
                parse_passwording2 += "f"
            } else if (chunk2 == "k3%3") {
                parse_passwording2 += "g"
            } else if (chunk2 == "opd&") {
                parse_passwording2 += "h"
            } else if (chunk2 == "q$#$") {
                parse_passwording2 += "i"
            } else if (chunk2 == "kdj%") {
                parse_passwording2 += "j"
            } else if (chunk2 == "xbk,") {
                parse_passwording2 += "k"
            } else if (chunk2 == "mka#") {
                parse_passwording2 += "l"
            } else if (chunk2 == "2tyu") {
                parse_passwording2 += "m"
            } else if (chunk2 == "lmlk") {
                parse_passwording2 += "n"
            } else if (chunk2 == ":lom") {
                parse_passwording2 += "o"
            } else if (chunk2 == "!(j*") {
                parse_passwording2 += "p"
            } else if (chunk2 == ":f#@") {
                parse_passwording2 += "q"
            } else if (chunk2 == "j$@#") {
                parse_passwording2 += "r"
            } else if (chunk2 == "pl$)") {
                parse_passwording2 += "t"
            } else if (chunk2 == "gew@") {
                parse_passwording2 += "u"
            } else if (chunk2 == "kdsn") {
                parse_passwording2 += "v"
            } else if (chunk2 == "lk!!") {
                parse_passwording2 += "w"
            } else if (chunk2 == "^$%#") {
                parse_passwording2 += "x"
            } else if (chunk2 == "****") {
                parse_passwording2 += "y"
            } else if (chunk2 == "&^&&") {
                parse_passwording2 += "z"
            } else if (chunk2 == "5bty") {
                parse_passwording2 += "A"
            } else if (chunk2 == "4&o(") {
                parse_passwording2 += "B"
            } else if (chunk2 == "3h67") {
                parse_passwording2 += "C"
            } else if (chunk2 == "2w3^") {
                parse_passwording2 += "D"
            } else if (chunk2 == "109#") {
                parse_passwording2 += "E"
            } else if (chunk2 == "0&#@") {
                parse_passwording2 += "F"
            } else if (chunk2 == "93%3") {
                parse_passwording2 += "G"
            } else if (chunk2 == "8pd&") {
                parse_passwording2 += "H"
            } else if (chunk2 == "7$#$") {
                parse_passwording2 += "I"
            } else if (chunk2 == "6dj%") {
                parse_passwording2 += "J"
            } else if (chunk2 == "5bk,") {
                parse_passwording2 += "K"
            } else if (chunk2 == "4ka#") {
                parse_passwording2 += "L"
            } else if (chunk2 == "3tyu") {
                parse_passwording2 += "M"
            } else if (chunk2 == "1mlk") {
                parse_passwording2 += "N"
            } else if (chunk2 == "0lom") {
                parse_passwording2 += "O"
            } else if (chunk2 == "9(j*") {
                parse_passwording2 += "P"
            } else if (chunk2 == "8f#@") {
                parse_passwording2 += "Q"
            } else if (chunk2 == "7$@#") {
                parse_passwording2 += "R"
            } else if (chunk2 == "6l$)") {
                parse_passwording2 += "T"
            } else if (chunk2 == "5ew@") {
                parse_passwording2 += "U"
            } else if (chunk2 == "4dsn") {
                parse_passwording2 += "V"
            } else if (chunk2 == "3k!!") {
                parse_passwording2 += "W"
            } else if (chunk2 == "2$%#") {
                parse_passwording2 += "X"
            } else if (chunk2 == "1***") {
                parse_passwording2 += "Y"
            } else if (chunk2 == "0^&&") {
                parse_passwording2 += "Z"
            } else if (chunk2 == "####") {
                parse_passwording2 += "_"
            } else if (chunk2 == "&$#@") {
                parse_passwording2 += "-"
            } else if (chunk2 == "FjnK") {
                parse_passwording2 += "="
            } else if (chunk2 == "HDS6") {
                parse_passwording2 += "+"
            } else if (chunk2 == ":;lm") {
                parse_passwording2 += "!"
            } else if (chunk2 == "<sk,") {
                parse_passwording2 += "@"
            } else if (chunk2 == "T$^5") {
                parse_passwording2 += "#"
            } else if (chunk2 == "%&%4") {
                parse_passwording2 += "$"
            } else if (chunk2 == "&REl") {
                parse_passwording2 += "%"
            } else if (chunk2 == "DWEr") {
                parse_passwording2 += "^"
            } else if (chunk2 == "1342") {
                parse_passwording2 += "&"
            } else if (chunk2 == "1sfD") {
                parse_passwording2 += "*"
            } else if (chunk2 == "sfss") {
                parse_passwording2 += "("
            } else if (chunk2 == "LIjm") {
                parse_passwording2 += ")"
            } else if (chunk2 == "ADWR") {
                parse_passwording2 += "|"
            } else if (chunk2 == "wqew") {
                parse_passwording2 += "~"
            } else if (chunk2 == "vyge") {
                parse_passwording2 += ":"
            } else if (chunk2 == "jmse") {
                parse_passwording2 += ";"
            } else if (chunk2 == "shvb") {
                parse_passwording2 += "."
            } else if (chunk2 == "Mjku") {
                parse_passwording2 += ">"
            } else if (chunk2 == "$#nj") {
                parse_passwording2 += "<"
            } else if (chunk2 == "&&kj") {
                parse_passwording2 += ","
            } else if (chunk2 == "!!!j") {
                parse_passwording2 += "1"
            } else if (chunk2 == "#$|k") {
                parse_passwording2 += "2"
            } else if (chunk2 == "SA3w") {
                parse_passwording2 += "3"
            } else if (chunk2 == "Rioy") {
                parse_passwording2 += "4"
            } else if (chunk2 == "Iw32") {
                parse_passwording2 += "5"
            } else if (chunk2 == "FKwu") {
                parse_passwording2 += "6"
            } else if (chunk2 == "ihs)") {
                parse_passwording2 += "7"
            } else if (chunk2 == "SI3%") {
                parse_passwording2 += "8"
            } else if (chunk2 == "Hw89") {
                parse_passwording2 += "9"
            } else if (chunk2 == "oki@") {
                parse_passwording2 += "0"
            }
        }

        i++;
        const box = document.createElement("div");
        box.setAttribute("class", "box");

        const box_bg = document.createElement("div");
        box_bg.setAttribute("class", "box_bg");

        const span = document.createElement("span");
        span.setAttribute("class", "head_icon");
        span.textContent = token[t].media;

        const st = document.createElement("p");
        st.setAttribute("id", "status");
        if (acces_passing === "true") {
            statuse = "Password is open"
            st.style.color = "green"
        }
        st.textContent = statuse;


        box_bg.append(span, st);
        box.append(box_bg);

        if (i > 3 && (i - 1) % 3 === 0) {
            const boxes2 = document.createElement("div");
            boxes2.setAttribute("class", "boxes");
            body.append(boxes2);
            currentBoxes = boxes2;
        }


        currentBoxes.append(box);
        const pass_page_bg = document.createElement("div")
        pass_page_bg.setAttribute("class", "pass_page_bg")
        const pass_bg = document.createElement("div")
        pass_bg.setAttribute("class", "pass_bg")
        const pass_page = document.createElement("div")
        pass_page.setAttribute("class", "pass_page")
        const h_icons = document.createElement("div")
        h_icons.setAttribute("class", "h_icons")
        const media_family = document.createElement("div")
        media_family.setAttribute("class", "media_family")
        const acceptble = document.createElement("div")
        acceptble.setAttribute("class", "acceptble")
        const information_ac = document.createElement("div")
        information_ac.setAttribute("class", "information_ac")
        const box_info = document.createElement("div")
        box_info.setAttribute("class", "box_info")
        const box_info2 = document.createElement("div")
        box_info2.setAttribute("class", "box_info2")
        const trash = document.createElement("button")
        const edit = document.createElement("button")
        const close = document.createElement("button")
        close.setAttribute("class", "close")
        const b_close = document.createElement("b")
        b_close.textContent = "CLOSE"
        close.append(b_close)
        const h2 = document.createElement("h2")
        h2.textContent = token[t].media
        media_family.append(h2)
        const h4 = document.createElement("h4")
        h4.textContent = "Password is unBlocked"
        acceptble.append(h4)
        const username_p = document.createElement("p")
        username_p.textContent = "username :"
        const password_p = document.createElement("p")
        password_p.textContent = "password :"
        const account_i = document.createElement("p")
        account_i.setAttribute("class", "account_i")
        account_i.textContent = parse_passwording
        const account_i2 = document.createElement("p")
        account_i2.setAttribute("class", "account_i")
        account_i2.textContent = parse_passwording2
        box_info.append(username_p, account_i)
        box_info2.append(password_p, account_i2)
        information_ac.append(box_info, box_info2)


        // svg 
        const svg_trash = document.createElementNS(svg_ns, "svg");
        svg_trash.setAttribute("width", "24");
        svg_trash.setAttribute("height", "24");
        svg_trash.setAttribute("viewBox", "0 0 24 24");
        const path_t = document.createElementNS(svg_ns, "path");
        path_t.setAttribute("fill", "currentColor");
        path_t.setAttribute("d", "m20 9l-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9");
        const path_t2 = document.createElementNS(svg_ns, "path");
        path_t2.setAttribute("fill", "currentColor");
        path_t2.setAttribute("d", "m20 9l-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9zm1-3h-5.625M3 6h5.625m0 0V4a2 2 0 0 1 2-2h2.75a2 2 0 0 1 2 2v2m-6.75 0h6.75");
        const svg_edit = document.createElementNS(svg_ns, "svg");
        svg_edit.setAttribute("width", "24");
        svg_edit.setAttribute("height", "24");
        svg_edit.setAttribute("viewBox", "0 0 24 24");
        const path_E = document.createElementNS(svg_ns, "path");
        path_E.setAttribute("fill", "currentColor");
        path_E.setAttribute("d", "m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z");
        const path_E2 = document.createElementNS(svg_ns, "path");
        path_E2.setAttribute("fill", "currentColor");
        path_E2.setAttribute("d", "M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2");
        svg_trash.append(path_t, path_t2)
        svg_edit.append(path_E, path_E2)
        trash.append(svg_trash)
        edit.append(svg_edit)
        h_icons.append(trash, edit)

        pass_page.append(h_icons, media_family, acceptble, information_ac, close)
        pass_bg.append(pass_page)
        pass_page_bg.append(pass_bg)
        body.append(pass_page_bg)

        if (acces_passing === "true") {
            box.addEventListener("click", () => {
                pass_page_bg.style.display = "flex"

            });
        }
        close.addEventListener("click", () => {
            pass_page_bg.style.display = "none"
        });
        trash.addEventListener("click", function (event) {
            event.preventDefault();
            pass_page_bg.remove();
            box.remove();
            token.splice(t, 1);
            localStorage.setItem("saved_info", JSON.stringify(token))
            typeLine();
            location.reload()

            notif.style.display = "flex"
            notification.textContent = "Please enter the correct password"
            setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
            setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none", notification.textContent = "Please fill the information correctly", localStorage.setItem("acess", "logged_out") }, 4000)


        });
        edit.addEventListener("click", function (event) {
            event.preventDefault()
            correct_pass = ""
            if (localStorage.getItem("acess") === "logged_in") {
                entring_pass_bg.style.display = "flex"
                for (f in account) {
                    if (account[f].username === user_acces) {
                        correct_pass = account[f].password
                    }
                    
                }
                submit_pass.addEventListener("click", (event) => {
                    event.preventDefault()
                    if (password_inp.value.trim() === correct_pass) {
                        entring_pass_bg.style.display = "none"
                        edit_box_bg.style.display = "flex"
                        next3.addEventListener("click", (event) => {
                            event.preventDefault()
                            if (edit_E.value.trim().length > 0 && edit_p.value.trim().length >= 4 && edit_p.value.trim() === edit_cp.value.trim()) {
                                let gmail_lower = edit_E.value.trim()
                                let gmail_lower2 = edit_p.value.trim()

                                let passwording = ""
                                let passwording2 = ""
                                for (j in gmail_lower) {
                                    if (gmail_lower[j] === "a") {
                                        passwording += "#bty"
                                    } else if (gmail_lower[j] === "b") {
                                        passwording += "%&o("
                                    } else if (gmail_lower[j] === "c") {
                                        passwording += "ph67"
                                    } else if (gmail_lower[j] === "d") {
                                        passwording += "kw3^"
                                    } else if (gmail_lower[j] === "e") {
                                        passwording += "o09#"
                                    } else if (gmail_lower[j] === "f") {
                                        passwording += "5&#@"
                                    } else if (gmail_lower[j] === "g") {
                                        passwording += "k3%3"
                                    } else if (gmail_lower[j] === "h") {
                                        passwording += "opd&"
                                    } else if (gmail_lower[j] === "i") {
                                        passwording += "q$#$"
                                    } else if (gmail_lower[j] === "j") {
                                        passwording += "kdj%"
                                    } else if (gmail_lower[j] === "k") {
                                        passwording += "xbk,"
                                    } else if (gmail_lower[j] === "l") {
                                        passwording += "mka#"
                                    } else if (gmail_lower[j] === "m") {
                                        passwording += "2tyu"
                                    } else if (gmail_lower[j] === "n") {
                                        passwording += "lmlk"
                                    } else if (gmail_lower[j] === "o") {
                                        passwording += ":lom"
                                    } else if (gmail_lower[j] === "p") {
                                        passwording += "!(j*"
                                    } else if (gmail_lower[j] === "q") {
                                        passwording += ":f#@"
                                    } else if (gmail_lower[j] === "r") {
                                        passwording += "j$@#"
                                    } else if (gmail_lower[j] === "t") {
                                        passwording += "pl$)"
                                    } else if (gmail_lower[j] === "u") {
                                        passwording += "gew@"
                                    } else if (gmail_lower[j] === "v") {
                                        passwording += "kdsn"
                                    } else if (gmail_lower[j] === "w") {
                                        passwording += "lk!!"
                                    } else if (gmail_lower[j] === "x") {
                                        passwording += "^$%#"
                                    } else if (gmail_lower[j] === "y") {
                                        passwording += "****"
                                    } else if (gmail_lower[j] === "z") {
                                        passwording += "&^&&"
                                    } if (gmail_lower[j] === "A") {
                                        passwording += "5bty"
                                    } else if (gmail_lower[j] === "B") {
                                        passwording += "4&o("
                                    } else if (gmail_lower[j] === "C") {
                                        passwording += "3h67"
                                    } else if (gmail_lower[j] === "D") {
                                        passwording += "2w3^"
                                    } else if (gmail_lower[j] === "E") {
                                        passwording += "109#"
                                    } else if (gmail_lower[j] === "F") {
                                        passwording += "0&#@"
                                    } else if (gmail_lower[j] === "G") {
                                        passwording += "93%3"
                                    } else if (gmail_lower[j] === "H") {
                                        passwording += "8pd&"
                                    } else if (gmail_lower[j] === "I") {
                                        passwording += "7$#$"
                                    } else if (gmail_lower[j] === "J") {
                                        passwording += "6dj%"
                                    } else if (gmail_lower[j] === "K") {
                                        passwording += "5bk,"
                                    } else if (gmail_lower[j] === "L") {
                                        passwording += "4ka#"
                                    } else if (gmail_lower[j] === "M") {
                                        passwording += "3tyu"
                                    } else if (gmail_lower[j] === "S") {
                                        passwording += "uyt8"
                                    } else if (gmail_lower[j] === "s") {
                                        passwording += "5yt8"
                                    } else if (gmail_lower[j] === "N") {
                                        passwording += "1mlk"
                                    } else if (gmail_lower[j] === "O") {
                                        passwording += "0lom"
                                    } else if (gmail_lower[j] === "P") {
                                        passwording += "9(j*"
                                    } else if (gmail_lower[j] === "Q") {
                                        passwording += "8f#@"
                                    } else if (gmail_lower[j] === "R") {
                                        passwording += "7$@#"
                                    } else if (gmail_lower[j] === "T") {
                                        passwording += "6l$)"
                                    } else if (gmail_lower[j] === "U") {
                                        passwording += "5ew@"
                                    } else if (gmail_lower[j] === "V") {
                                        passwording += "4dsn"
                                    } else if (gmail_lower[j] === "W") {
                                        passwording += "3k!!"
                                    } else if (gmail_lower[j] === "X") {
                                        passwording += "2$%#"
                                    } else if (gmail_lower[j] === "Y") {
                                        passwording += "1***"
                                    } else if (gmail_lower[j] === "Z") {
                                        passwording += "0^&&"
                                    } else if (gmail_lower[j] === "_") {
                                        passwording += "####"
                                    } else if (gmail_lower[j] === "-") {
                                        passwording += "&$#@"
                                    } else if (gmail_lower[j] === "=") {
                                        passwording += "FjnK"
                                    } else if (gmail_lower[j] === "+") {
                                        passwording += "HDS6"
                                    } else if (gmail_lower[j] === "!") {
                                        passwording += ":;lm"
                                    } else if (gmail_lower[j] === "@") {
                                        passwording += "<sk,"
                                    } else if (gmail_lower[j] === "#") {
                                        passwording += "T$^5"
                                    } else if (gmail_lower[j] === "$") {
                                        passwording += "%&%4"
                                    } else if (gmail_lower[j] === "%") {
                                        passwording += "&REl"
                                    } else if (gmail_lower[j] === "^") {
                                        passwording += "DWEr"
                                    } else if (gmail_lower[j] === "&") {
                                        passwording += "1342"
                                    } else if (gmail_lower[j] === "*") {
                                        passwording += "1sfD"
                                    } else if (gmail_lower[j] === "(") {
                                        passwording += "sfss"
                                    } else if (gmail_lower[j] === ")") {
                                        passwording += "LIjm"
                                    } else if (gmail_lower[j] === "|") {
                                        passwording += "ADWR"
                                    } else if (gmail_lower[j] === "~") {
                                        passwording += "wqew"
                                    } else if (gmail_lower[j] === ":") {
                                        passwording += "vyge"
                                    } else if (gmail_lower[j] === ";") {
                                        passwording += "jmse"
                                    } else if (gmail_lower[j] === ".") {
                                        passwording += "shvb"
                                    } else if (gmail_lower[j] === ">") {
                                        passwording += "Mjku"
                                    } else if (gmail_lower[j] === "<") {
                                        passwording += "$#nj"
                                    } else if (gmail_lower[j] === ",") {
                                        passwording += "&&kj"
                                    } else if (gmail_lower[j] === "1") {
                                        passwording += "!!!j"
                                    } else if (gmail_lower[j] === "2") {
                                        passwording += "#$|k"
                                    } else if (gmail_lower[j] === "3") {
                                        passwording += "SA3w"
                                    } else if (gmail_lower[j] === "4") {
                                        passwording += "Rioy"
                                    } else if (gmail_lower[j] === "5") {
                                        passwording += "Iw32"
                                    } else if (gmail_lower[j] === "6") {
                                        passwording += "FKwu"
                                    } else if (gmail_lower[j] === "7") {
                                        passwording += "ihs)"
                                    } else if (gmail_lower[j] === "8") {
                                        passwording += "SI3%"
                                    } else if (gmail_lower[j] === "9") {
                                        passwording += "Hw89"
                                    } else if (gmail_lower[j] === "0") {
                                        passwording += "oki@"
                                    }
                                }
                                for (j in gmail_lower2) {
                                    if (gmail_lower2[j] === "a") {
                                        passwording2 += "#bty"
                                    } else if (gmail_lower2[j] === "b") {
                                        passwording2 += "%&o("
                                    } else if (gmail_lower2[j] === "c") {
                                        passwording2 += "ph67"
                                    } else if (gmail_lower2[j] === "d") {
                                        passwording2 += "kw3^"
                                    } else if (gmail_lower2[j] === "e") {
                                        passwording2 += "o09#"
                                    } else if (gmail_lower2[j] === "f") {
                                        passwording2 += "5&#@"
                                    } else if (gmail_lower2[j] === "g") {
                                        passwording2 += "k3%3"
                                    } else if (gmail_lower2[j] === "h") {
                                        passwording2 += "opd&"
                                    } else if (gmail_lower2[j] === "i") {
                                        passwording2 += "q$#$"
                                    } else if (gmail_lower2[j] === "j") {
                                        passwording2 += "kdj%"
                                    } else if (gmail_lower2[j] === "k") {
                                        passwording2 += "xbk,"
                                    } else if (gmail_lower2[j] === "l") {
                                        passwording2 += "mka#"
                                    } else if (gmail_lower2[j] === "m") {
                                        passwording2 += "2tyu"
                                    } else if (gmail_lower2[j] === "n") {
                                        passwording2 += "lmlk"
                                    } else if (gmail_lower2[j] === "o") {
                                        passwording2 += ":lom"
                                    } else if (gmail_lower2[j] === "p") {
                                        passwording2 += "!(j*"
                                    } else if (gmail_lower2[j] === "S") {
                                        passwording2 += "uyt8"
                                    } else if (gmail_lower2[j] === "s") {
                                        passwording2 += "5yt8"
                                    } else if (gmail_lower2[j] === "q") {
                                        passwording2 += ":f#@"
                                    } else if (gmail_lower2[j] === "r") {
                                        passwording2 += "j$@#"
                                    } else if (gmail_lower2[j] === "t") {
                                        passwording2 += "pl$)"
                                    } else if (gmail_lower2[j] === "u") {
                                        passwording2 += "gew@"
                                    } else if (gmail_lower2[j] === "v") {
                                        passwording2 += "kdsn"
                                    } else if (gmail_lower2[j] === "w") {
                                        passwording2 += "lk!!"
                                    } else if (gmail_lower2[j] === "x") {
                                        passwording2 += "^$%#"
                                    } else if (gmail_lower2[j] === "y") {
                                        passwording2 += "****"
                                    } else if (gmail_lower2[j] === "z") {
                                        passwording2 += "&^&&"
                                    } else if (gmail_lower2[j] === "A") {
                                        passwording2 += "5bty"
                                    } else if (gmail_lower2[j] === "B") {
                                        passwording2 += "4&o("
                                    } else if (gmail_lower2[j] === "C") {
                                        passwording2 += "3h67"
                                    } else if (gmail_lower2[j] === "D") {
                                        passwording2 += "2w3^"
                                    } else if (gmail_lower2[j] === "E") {
                                        passwording2 += "109#"
                                    } else if (gmail_lower2[j] === "F") {
                                        passwording2 += "0&#@"
                                    } else if (gmail_lower2[j] === "G") {
                                        passwording2 += "93%3"
                                    } else if (gmail_lower2[j] === "H") {
                                        passwording2 += "8pd&"
                                    } else if (gmail_lower2[j] === "I") {
                                        passwording2 += "7$#$"
                                    } else if (gmail_lower2[j] === "J") {
                                        passwording2 += "6dj%"
                                    } else if (gmail_lower2[j] === "K") {
                                        passwording2 += "5bk,"
                                    } else if (gmail_lower2[j] === "L") {
                                        passwording2 += "4ka#"
                                    } else if (gmail_lower2[j] === "M") {
                                        passwording2 += "3tyu"
                                    } else if (gmail_lower2[j] === "N") {
                                        passwording2 += "1mlk"
                                    } else if (gmail_lower2[j] === "O") {
                                        passwording2 += "0lom"
                                    } else if (gmail_lower2[j] === "P") {
                                        passwording2 += "9(j*"
                                    } else if (gmail_lower2[j] === "Q") {
                                        passwording2 += "8f#@"
                                    } else if (gmail_lower2[j] === "R") {
                                        passwording2 += "7$@#"
                                    } else if (gmail_lower2[j] === "T") {
                                        passwording2 += "6l$)"
                                    } else if (gmail_lower2[j] === "U") {
                                        passwording2 += "5ew@"
                                    } else if (gmail_lower2[j] === "V") {
                                        passwording2 += "4dsn"
                                    } else if (gmail_lower2[j] === "W") {
                                        passwording2 += "3k!!"
                                    } else if (gmail_lower2[j] === "X") {
                                        passwording2 += "2$%#"
                                    } else if (gmail_lower2[j] === "Y") {
                                        passwording2 += "1***"
                                    } else if (gmail_lower2[j] === "Z") {
                                        passwording2 += "0^&&"
                                    } else if (gmail_lower2[j] === "_") {
                                        passwording2 += "####"
                                    } else if (gmail_lower2[j] === "-") {
                                        passwording2 += "&$#@"
                                    } else if (gmail_lower2[j] === "=") {
                                        passwording2 += "FjnK"
                                    } else if (gmail_lower2[j] === "+") {
                                        passwording2 += "HDS6"
                                    } else if (gmail_lower2[j] === "!") {
                                        passwording2 += ":;lm"
                                    } else if (gmail_lower2[j] === "@") {
                                        passwording2 += "<sk,"
                                    } else if (gmail_lower2[j] === "#") {
                                        passwording2 += "T$^5"
                                    } else if (gmail_lower2[j] === "$") {
                                        passwording2 += "%&%4"
                                    } else if (gmail_lower2[j] === "%") {
                                        passwording2 += "&REl"
                                    } else if (gmail_lower2[j] === "^") {
                                        passwording2 += "DWEr"
                                    } else if (gmail_lower2[j] === "&") {
                                        passwording2 += "1342"
                                    } else if (gmail_lower2[j] === "*") {
                                        passwording2 += "1sfD"
                                    } else if (gmail_lower2[j] === "(") {
                                        passwording2 += "sfss"
                                    } else if (gmail_lower2[j] === ")") {
                                        passwording2 += "LIjm"
                                    } else if (gmail_lower2[j] === "|") {
                                        passwording2 += "ADWR"
                                    } else if (gmail_lower2[j] === "~") {
                                        passwording2 += "wqew"
                                    } else if (gmail_lower2[j] === ":") {
                                        passwording2 += "vyge"
                                    } else if (gmail_lower2[j] === ";") {
                                        passwording2 += "jmse"
                                    } else if (gmail_lower2[j] === ".") {
                                        passwording2 += "shvb"
                                    } else if (gmail_lower2[j] === ">") {
                                        passwording2 += "Mjku"
                                    } else if (gmail_lower2[j] === "<") {
                                        passwording2 += "$#nj"
                                    } else if (gmail_lower2[j] === ",") {
                                        passwording2 += "&&kj"
                                    } else if (gmail_lower2[j] === "1") {
                                        passwording2 += "!!!j"
                                    } else if (gmail_lower2[j] === "2") {
                                        passwording2 += "#$|k"
                                    } else if (gmail_lower2[j] === "3") {
                                        passwording2 += "SA3w"
                                    } else if (gmail_lower2[j] === "4") {
                                        passwording2 += "Rioy"
                                    } else if (gmail_lower2[j] === "5") {
                                        passwording2 += "Iw32"
                                    } else if (gmail_lower2[j] === "6") {
                                        passwording2 += "FKwu"
                                    } else if (gmail_lower2[j] === "7") {
                                        passwording2 += "ihs)"
                                    } else if (gmail_lower2[j] === "8") {
                                        passwording2 += "SI3%"
                                    } else if (gmail_lower2[j] === "9") {
                                        passwording2 += "Hw89"
                                    } else if (gmail_lower2[j] === "0") {
                                        passwording2 += "oki@"
                                    }
                                }
                                const edited = { "media": token[t].media, "username": passwording, "password": passwording2 }
                                token.push(edited)
                                token.splice(t, 1);
                                localStorage.setItem("saved_info", JSON.stringify(token));
                                location.reload()
                            }
                        })
                        cancle3.addEventListener("click", (event) => {
                            event.preventDefault()
                            edit_box_bg.style.display = "none"
                        })

                    } else {
                        notif.style.display = "flex"
                        notification.textContent = "Please enter the correct password"
                        setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
                        setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none", notification.textContent = "Please fill the information correctly" }, 4000)
                    }
                })
            } else {
                notif.style.display = "flex"
                notification.textContent = "Please log in"
                setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
                setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none", notification.textContent = "Please fill the information correctly" }, 4000)
            }

        })
    }
}









add_btn.addEventListener("click", function () {
    add_input_box_bg.style.display = "flex"
})

cancle.addEventListener("click", function () {
    add_input_box_bg.style.display = "none"
    media_name = ""
    add_1.style.display = "flex"
    add_2.style.display = "none"
    add_3.style.display = "none"
    media_inp.value = ""
    github.style.border = "none"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"

})

cancle2.addEventListener("click", function () {
    add_input_box_bg.style.display = "none"
    media_name = ""
    add_1.style.display = "flex"
    add_2.style.display = "none"
    add_3.style.display = "none"
    media_inp.value = ""
    github.style.border = "none"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    email.value = ""
    password.value = ""
    c_password.value = ""
})

github.addEventListener("click", function () {
    media_name = "Git Hub"
    github.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

gmail.addEventListener("click", function () {
    media_name = "gmail"
    gmail.style.border = "2px solid rgb(235, 125, 0)"
    github.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

call_of_duty.addEventListener("click", function () {
    media_name = "COD"
    call_of_duty.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    github.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

bit_coin.addEventListener("click", function () {
    media_name = "Coins"
    bit_coin.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    github.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

games.addEventListener("click", function () {
    media_name = "Games"
    games.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    github.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

tiktok.addEventListener("click", function () {
    media_name = "Tik Tok"
    tiktok.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    twitter.style.border = "none"
    github.style.border = "none"
    media_inp.value = ""
})

isnagram.addEventListener("click", function () {
    media_name = "I agram"
    isnagram.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    github.style.border = "none"
    twitter.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

twitter.addEventListener("click", function () {
    media_name = "Twitter"
    twitter.style.border = "2px solid rgb(235, 125, 0)"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    github.style.border = "none"
    tiktok.style.border = "none"
    media_inp.value = ""
})

media_inp.addEventListener("input", () => {
    media_name = media_inp.value.trim()
    twitter.style.border = "none"
    gmail.style.border = "none"
    call_of_duty.style.border = "none"
    bit_coin.style.border = "none"
    games.style.border = "none"
    isnagram.style.border = "none"
    github.style.border = "none"
    tiktok.style.border = "none"
})

add_1.style.display = "flex"
add_2.style.display = "none"
add_3.style.display = "none"
next.addEventListener("click", () => {
    if (media_name.length != 0 && add_1.style.display === "flex" && media_name.length < 8) {
        // console.log(media_name)
        add_2.style.display = "flex"
        add_1.style.display = "none"
        m_name.textContent = media_name
        m_name.style.color = "orange"
        // console.log(token.username)
    } else {
        notif.style.display = "flex"
        setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
        setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none" }, 4000)
    }
})

next2.addEventListener("click", () => {
    if (email.value.length != 0 && password.value.length >= 4 && c_password.value === password.value && add_2.style.display === "flex") {
        // console.log("accese")
        add_2.style.display = "none"
        add_3.style.display = "flex"
        let gmail_lower = password.value.trim()
        let gmail_lower2 = email.value.trim()

        let passwording = ""
        let passwording2 = ""
        for (j in gmail_lower) {
            if (gmail_lower[j] === "a") {
                passwording += "#bty"
            } else if (gmail_lower[j] === "b") {
                passwording += "%&o("
            } else if (gmail_lower[j] === "c") {
                passwording += "ph67"
            } else if (gmail_lower[j] === "d") {
                passwording += "kw3^"
            } else if (gmail_lower[j] === "e") {
                passwording += "o09#"
            } else if (gmail_lower[j] === "f") {
                passwording += "5&#@"
            } else if (gmail_lower[j] === "g") {
                passwording += "k3%3"
            } else if (gmail_lower[j] === "h") {
                passwording += "opd&"
            } else if (gmail_lower[j] === "i") {
                passwording += "q$#$"
            } else if (gmail_lower[j] === "j") {
                passwording += "kdj%"
            } else if (gmail_lower[j] === "k") {
                passwording += "xbk,"
            } else if (gmail_lower[j] === "l") {
                passwording += "mka#"
            } else if (gmail_lower[j] === "m") {
                passwording += "2tyu"
            } else if (gmail_lower[j] === "n") {
                passwording += "lmlk"
            } else if (gmail_lower[j] === "o") {
                passwording += ":lom"
            } else if (gmail_lower[j] === "p") {
                passwording += "!(j*"
            } else if (gmail_lower[j] === "q") {
                passwording += ":f#@"
            } else if (gmail_lower[j] === "r") {
                passwording += "j$@#"
            } else if (gmail_lower[j] === "t") {
                passwording += "pl$)"
            } else if (gmail_lower[j] === "u") {
                passwording += "gew@"
            } else if (gmail_lower[j] === "v") {
                passwording += "kdsn"
            } else if (gmail_lower[j] === "w") {
                passwording += "lk!!"
            } else if (gmail_lower[j] === "x") {
                passwording += "^$%#"
            } else if (gmail_lower[j] === "y") {
                passwording += "****"
            } else if (gmail_lower[j] === "z") {
                passwording += "&^&&"
            } if (gmail_lower[j] === "A") {
                passwording += "5bty"
            } else if (gmail_lower[j] === "B") {
                passwording += "4&o("
            } else if (gmail_lower[j] === "C") {
                passwording += "3h67"
            } else if (gmail_lower[j] === "D") {
                passwording += "2w3^"
            } else if (gmail_lower[j] === "E") {
                passwording += "109#"
            } else if (gmail_lower[j] === "F") {
                passwording += "0&#@"
            } else if (gmail_lower[j] === "G") {
                passwording += "93%3"
            } else if (gmail_lower[j] === "H") {
                passwording += "8pd&"
            } else if (gmail_lower[j] === "I") {
                passwording += "7$#$"
            } else if (gmail_lower[j] === "J") {
                passwording += "6dj%"
            } else if (gmail_lower[j] === "K") {
                passwording += "5bk,"
            } else if (gmail_lower[j] === "L") {
                passwording += "4ka#"
            } else if (gmail_lower[j] === "M") {
                passwording += "3tyu"
            } else if (gmail_lower[j] === "S") {
                passwording += "uyt8"
            } else if (gmail_lower[j] === "s") {
                passwording += "5yt8"
            } else if (gmail_lower[j] === "N") {
                passwording += "1mlk"
            } else if (gmail_lower[j] === "O") {
                passwording += "0lom"
            } else if (gmail_lower[j] === "P") {
                passwording += "9(j*"
            } else if (gmail_lower[j] === "Q") {
                passwording += "8f#@"
            } else if (gmail_lower[j] === "R") {
                passwording += "7$@#"
            } else if (gmail_lower[j] === "T") {
                passwording += "6l$)"
            } else if (gmail_lower[j] === "U") {
                passwording += "5ew@"
            } else if (gmail_lower[j] === "V") {
                passwording += "4dsn"
            } else if (gmail_lower[j] === "W") {
                passwording += "3k!!"
            } else if (gmail_lower[j] === "X") {
                passwording += "2$%#"
            } else if (gmail_lower[j] === "Y") {
                passwording += "1***"
            } else if (gmail_lower[j] === "Z") {
                passwording += "0^&&"
            } else if (gmail_lower[j] === "_") {
                passwording += "####"
            } else if (gmail_lower[j] === "-") {
                passwording += "&$#@"
            } else if (gmail_lower[j] === "=") {
                passwording += "FjnK"
            } else if (gmail_lower[j] === "+") {
                passwording += "HDS6"
            } else if (gmail_lower[j] === "!") {
                passwording += ":;lm"
            } else if (gmail_lower[j] === "@") {
                passwording += "<sk,"
            } else if (gmail_lower[j] === "#") {
                passwording += "T$^5"
            } else if (gmail_lower[j] === "$") {
                passwording += "%&%4"
            } else if (gmail_lower[j] === "%") {
                passwording += "&REl"
            } else if (gmail_lower[j] === "^") {
                passwording += "DWEr"
            } else if (gmail_lower[j] === "&") {
                passwording += "1342"
            } else if (gmail_lower[j] === "*") {
                passwording += "1sfD"
            } else if (gmail_lower[j] === "(") {
                passwording += "sfss"
            } else if (gmail_lower[j] === ")") {
                passwording += "LIjm"
            } else if (gmail_lower[j] === "|") {
                passwording += "ADWR"
            } else if (gmail_lower[j] === "~") {
                passwording += "wqew"
            } else if (gmail_lower[j] === ":") {
                passwording += "vyge"
            } else if (gmail_lower[j] === ";") {
                passwording += "jmse"
            } else if (gmail_lower[j] === ".") {
                passwording += "shvb"
            } else if (gmail_lower[j] === ">") {
                passwording += "Mjku"
            } else if (gmail_lower[j] === "<") {
                passwording += "$#nj"
            } else if (gmail_lower[j] === ",") {
                passwording += "&&kj"
            } else if (gmail_lower[j] === "1") {
                passwording += "!!!j"
            } else if (gmail_lower[j] === "2") {
                passwording += "#$|k"
            } else if (gmail_lower[j] === "3") {
                passwording += "SA3w"
            } else if (gmail_lower[j] === "4") {
                passwording += "Rioy"
            } else if (gmail_lower[j] === "5") {
                passwording += "Iw32"
            } else if (gmail_lower[j] === "6") {
                passwording += "FKwu"
            } else if (gmail_lower[j] === "7") {
                passwording += "ihs)"
            } else if (gmail_lower[j] === "8") {
                passwording += "SI3%"
            } else if (gmail_lower[j] === "9") {
                passwording += "Hw89"
            } else if (gmail_lower[j] === "0") {
                passwording += "oki@"
            }
        }
        for (j in gmail_lower2) {
            if (gmail_lower2[j] === "a") {
                passwording2 += "#bty"
            } else if (gmail_lower2[j] === "b") {
                passwording2 += "%&o("
            } else if (gmail_lower2[j] === "c") {
                passwording2 += "ph67"
            } else if (gmail_lower2[j] === "d") {
                passwording2 += "kw3^"
            } else if (gmail_lower2[j] === "e") {
                passwording2 += "o09#"
            } else if (gmail_lower2[j] === "f") {
                passwording2 += "5&#@"
            } else if (gmail_lower2[j] === "g") {
                passwording2 += "k3%3"
            } else if (gmail_lower2[j] === "h") {
                passwording2 += "opd&"
            } else if (gmail_lower2[j] === "i") {
                passwording2 += "q$#$"
            } else if (gmail_lower2[j] === "j") {
                passwording2 += "kdj%"
            } else if (gmail_lower2[j] === "k") {
                passwording2 += "xbk,"
            } else if (gmail_lower2[j] === "l") {
                passwording2 += "mka#"
            } else if (gmail_lower2[j] === "m") {
                passwording2 += "2tyu"
            } else if (gmail_lower2[j] === "n") {
                passwording2 += "lmlk"
            } else if (gmail_lower2[j] === "o") {
                passwording2 += ":lom"
            } else if (gmail_lower2[j] === "p") {
                passwording2 += "!(j*"
            } else if (gmail_lower2[j] === "S") {
                passwording2 += "uyt8"
            } else if (gmail_lower2[j] === "s") {
                passwording2 += "5yt8"
            } else if (gmail_lower2[j] === "q") {
                passwording2 += ":f#@"
            } else if (gmail_lower2[j] === "r") {
                passwording2 += "j$@#"
            } else if (gmail_lower2[j] === "t") {
                passwording2 += "pl$)"
            } else if (gmail_lower2[j] === "u") {
                passwording2 += "gew@"
            } else if (gmail_lower2[j] === "v") {
                passwording2 += "kdsn"
            } else if (gmail_lower2[j] === "w") {
                passwording2 += "lk!!"
            } else if (gmail_lower2[j] === "x") {
                passwording2 += "^$%#"
            } else if (gmail_lower2[j] === "y") {
                passwording2 += "****"
            } else if (gmail_lower2[j] === "z") {
                passwording2 += "&^&&"
            } else if (gmail_lower2[j] === "A") {
                passwording2 += "5bty"
            } else if (gmail_lower2[j] === "B") {
                passwording2 += "4&o("
            } else if (gmail_lower2[j] === "C") {
                passwording2 += "3h67"
            } else if (gmail_lower2[j] === "D") {
                passwording2 += "2w3^"
            } else if (gmail_lower2[j] === "E") {
                passwording2 += "109#"
            } else if (gmail_lower2[j] === "F") {
                passwording2 += "0&#@"
            } else if (gmail_lower2[j] === "G") {
                passwording2 += "93%3"
            } else if (gmail_lower2[j] === "H") {
                passwording2 += "8pd&"
            } else if (gmail_lower2[j] === "I") {
                passwording2 += "7$#$"
            } else if (gmail_lower2[j] === "J") {
                passwording2 += "6dj%"
            } else if (gmail_lower2[j] === "K") {
                passwording2 += "5bk,"
            } else if (gmail_lower2[j] === "L") {
                passwording2 += "4ka#"
            } else if (gmail_lower2[j] === "M") {
                passwording2 += "3tyu"
            } else if (gmail_lower2[j] === "N") {
                passwording2 += "1mlk"
            } else if (gmail_lower2[j] === "O") {
                passwording2 += "0lom"
            } else if (gmail_lower2[j] === "P") {
                passwording2 += "9(j*"
            } else if (gmail_lower2[j] === "Q") {
                passwording2 += "8f#@"
            } else if (gmail_lower2[j] === "R") {
                passwording2 += "7$@#"
            } else if (gmail_lower2[j] === "T") {
                passwording2 += "6l$)"
            } else if (gmail_lower2[j] === "U") {
                passwording2 += "5ew@"
            } else if (gmail_lower2[j] === "V") {
                passwording2 += "4dsn"
            } else if (gmail_lower2[j] === "W") {
                passwording2 += "3k!!"
            } else if (gmail_lower2[j] === "X") {
                passwording2 += "2$%#"
            } else if (gmail_lower2[j] === "Y") {
                passwording2 += "1***"
            } else if (gmail_lower2[j] === "Z") {
                passwording2 += "0^&&"
            } else if (gmail_lower2[j] === "_") {
                passwording2 += "####"
            } else if (gmail_lower2[j] === "-") {
                passwording2 += "&$#@"
            } else if (gmail_lower2[j] === "=") {
                passwording2 += "FjnK"
            } else if (gmail_lower2[j] === "+") {
                passwording2 += "HDS6"
            } else if (gmail_lower2[j] === "!") {
                passwording2 += ":;lm"
            } else if (gmail_lower2[j] === "@") {
                passwording2 += "<sk,"
            } else if (gmail_lower2[j] === "#") {
                passwording2 += "T$^5"
            } else if (gmail_lower2[j] === "$") {
                passwording2 += "%&%4"
            } else if (gmail_lower2[j] === "%") {
                passwording2 += "&REl"
            } else if (gmail_lower2[j] === "^") {
                passwording2 += "DWEr"
            } else if (gmail_lower2[j] === "&") {
                passwording2 += "1342"
            } else if (gmail_lower2[j] === "*") {
                passwording2 += "1sfD"
            } else if (gmail_lower2[j] === "(") {
                passwording2 += "sfss"
            } else if (gmail_lower2[j] === ")") {
                passwording2 += "LIjm"
            } else if (gmail_lower2[j] === "|") {
                passwording2 += "ADWR"
            } else if (gmail_lower2[j] === "~") {
                passwording2 += "wqew"
            } else if (gmail_lower2[j] === ":") {
                passwording2 += "vyge"
            } else if (gmail_lower2[j] === ";") {
                passwording2 += "jmse"
            } else if (gmail_lower2[j] === ".") {
                passwording2 += "shvb"
            } else if (gmail_lower2[j] === ">") {
                passwording2 += "Mjku"
            } else if (gmail_lower2[j] === "<") {
                passwording2 += "$#nj"
            } else if (gmail_lower2[j] === ",") {
                passwording2 += "&&kj"
            } else if (gmail_lower2[j] === "1") {
                passwording2 += "!!!j"
            } else if (gmail_lower2[j] === "2") {
                passwording2 += "#$|k"
            } else if (gmail_lower2[j] === "3") {
                passwording2 += "SA3w"
            } else if (gmail_lower2[j] === "4") {
                passwording2 += "Rioy"
            } else if (gmail_lower2[j] === "5") {
                passwording2 += "Iw32"
            } else if (gmail_lower2[j] === "6") {
                passwording2 += "FKwu"
            } else if (gmail_lower2[j] === "7") {
                passwording2 += "ihs)"
            } else if (gmail_lower2[j] === "8") {
                passwording2 += "SI3%"
            } else if (gmail_lower2[j] === "9") {
                passwording2 += "Hw89"
            } else if (gmail_lower2[j] === "0") {
                passwording2 += "oki@"
            }
        }

        // console.log(passwording)
        const saved = { "media": media_name, "username": passwording2, "password": passwording }
        const accses_token = token.push(saved)
        localStorage.setItem("saved_info", JSON.stringify(token))
        typeLine();
    } else {
        notif.style.display = "flex"
        setTimeout(() => { notif.style.animation = "notif_close 1s ease alternate" }, 3000)
        setTimeout(() => { notif.style.animation = "notif 1s ease alternate", notif.style.display = "none" }, 4000)
    }
})















const lines = [
    "[ACCESSING] Connecting to PASSWORDIFY_SERVER...",
    "[OK] Connection established from 192.168.13.37",
    "[LOGIN] Bypassing authentication...",
    "[BRUTE FORCE] Trying passwords: ****",
    "[SUCCESS] Admin access granted.",
    "",
    "[QUERY] Searching criminal database...",
    "SELECT * FROM suspects WHERE city = 'Los Angeles' AND risk_level > 7;",
    "[RESULT] 12 records found.",
    "",
    "[DOWNLOAD] Exporting records to local machine...",
    "[PROGRESS] ██████████ 100%",
    "",
    "[LOG] All actions masked. No trace left.",
    "[STATUS] Operation complete.",
    "",
    "[SAVING] SAVING IS COMPLETE.   ..........................................."
];

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";
let typingSpeed = 1;   // سرعت تایپ (میلی‌ثانیه)
let lineDelay = 30;    // مکث بین خط‌ها

const cursor = document.createElement("span");
cursor.className = "cursor";
screen.appendChild(cursor);

function typeLine() {
    if (lineIndex >= lines.length) {
        // بعد از اتمام، دوباره از اول شروع کن
        // lineIndex = 0;
        // screen.innerHTML = "";
        // screen.appendChild(cursor);
        screen.style.display = "none"
        add_input_box_bg.style.display = "none"
        media_name = ""
        add_1.style.display = "flex"
        add_2.style.display = "none"
        add_3.style.display = "none"
        media_inp.value = ""
        github.style.border = "none"
        gmail.style.border = "none"
        call_of_duty.style.border = "none"
        bit_coin.style.border = "none"
        games.style.border = "none"
        isnagram.style.border = "none"
        twitter.style.border = "none"
        tiktok.style.border = "none"
        email.value = ""
        password.value = ""
        c_password.value = ""
        location.reload()
    }

    const text = lines[lineIndex];

    if (charIndex < text.length) {
        currentLine += text[charIndex];
        updateScreen();
        charIndex++;
        setTimeout(typeLine, typingSpeed);
    } else {
        currentLine += "\n";
        updateScreen();
        charIndex = 0;
        lineIndex++;
        currentLine = screen.textContent;
        setTimeout(typeLine, lineDelay);
    }
}

function updateScreen() {
    screen.textContent = currentLine;
    screen.appendChild(cursor);
    window.scrollTo(0, document.body.scrollHeight);
}

login_bt.addEventListener("click",()=>{
    if (localStorage.getItem("acess") === "logged_in") {
        localStorage.setItem("acess","logged_out")
        location.reload()
    }
})


