var heading = document.getElementById("hello-heading").textContent="Hello java script";
const fruits=["apple" , "mango","blueberry"];
for(let i=0;i<fruits.length;i++){
const listele=document.createElement("li");
listele.textContent=fruits[i];
document.getElementById("fruits").appendChild(listele);
}
const btn = document.getElementById("action-btn");
btn.addEventListener("click",function(){
    document.getElementById("btn-status").textContent="Button has been Clicked";
})

