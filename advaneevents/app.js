let users = [];
let gobak = document.getElementById("goback")
let usrdiv = document.getElementById("user");
gobak.style.display = 'none'
function submtfn() {
    let name = document.getElementById("name");

    let mail = document.getElementById("mail");


    let userTemp = { name: name.value, mail: mail.value };
    users.push(userTemp);

    renderfn();

    mail.value = "";
    name.value = "";


}
function copymail(e) {
    gobak.style.display = 'block'
    document.getElementById("form").style.display = 'none'
    let res = users.find(itm => {
        return itm.mail === e.target.innerText
    })
    console.log(res);
    document.getElementById("resname").innerText = res.name
    document.getElementById("resmil").innerText = res.mail
}
function disp() {
    gobak.style.display = 'none'
    document.getElementById("form").style.display = 'block'

}

function renderfn() {

    usrdiv.innerHTML = "";
    users?.map((itm) => {


        let mailel = document.createElement("p");
        let dive = document.createElement("div");


        dive.classList.add("usr");
        mailel.innerText = itm.mail;
        mailel.addEventListener("click", copymail)
        dive.appendChild(mailel);
        usrdiv.appendChild(dive);


    });
}