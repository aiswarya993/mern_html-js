let users = []
let cont = document.getElementById("cont")
const options = { weekday: 'long', day: 'numeric', month: 'long', }
function assusr() {
    let val = document.getElementById("name");
    let dat = document.getElementById("date");

    temp = { val: val.value, date: dat.value }
    users.push(temp)
    rendr()
    console.log(users);
    val.value = ""
    dat.value = ""
}
function rendr() {
    let crd = document.getElementById("card")
    crd.innerHTML = "";
    users.map(user => {
        let div = document.createElement("div");
        let ptag = document.createElement("p");
        let dtag = document.createElement("p");
        let dateToFormat = new Date(user.date);
        let fDate = dateToFormat.toLocaleDateString('en', options)
        dtag.innerText = fDate;
        ptag.innerText = user.val;
        div.classList.add("card")
        crd.appendChild(div)
        div.appendChild(ptag)
        div.appendChild(dtag)
    }
    )


}