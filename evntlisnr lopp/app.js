

function clkfn(e) {
  let arr=  document.querySelectorAll(".btn")
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
   arr[i].style.backgroundColor="red";
    
  }
  let arr1=  document.querySelector("body")

   arr1.style.backgroundColor="red";
    
  
}
document.querySelector(".btn").addEventListener("click", clkfn)