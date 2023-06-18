let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=/'
let loadstatus = false;
let intro = document.getElementById("intro")
let load = document.getElementById("loader")
let title = document.getElementById("title")
let desc = document.getElementById("desc")
let imghero = document.getElementById("imghero")
let moviecontainer = document.getElementById("moviecontainer")
let err = document.getElementById("err")
moviecontainer.classList.add("disp")
err.classList.add("disp")
function fetchmov() {
    loadstatus = true
    checkloadr()

    let movname = document.getElementById("mov")
    let qry = movname.value
    let API_QRY = api + qry
    fetch(API_QRY).then(res => { return res.json() }).then(data => {
        console.log(data);

         if(data.Error!='Movie not found!'){




       
        loadstatus = false
        checkloadr()
        title.innerText = data.Title
        desc.innerText = data.Plot
        imghero.src = data.Poster
        moviecontainer.classList.remove("disp")  }



        else{

            loadstatus = false
            checkloadr()
            err.classList.remove("disp")
        }
    })
} function checkloadr() {

    intro.style.display = "none"
    if (loadstatus == true) {
        load.classList.add("loader")
    } else {
        load.classList.remove("loader")
    }

}