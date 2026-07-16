
const video = document.querySelector("#video_box")
let num = localStorage.getItem("num")


video.setAttribute("src",`../videos/movie (${num}).mp4`)