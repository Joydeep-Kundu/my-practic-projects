let total=0
let count = 0
let countEl =document.getElementById("count-el")
let totalEl=document.getElementById("total-el")
function increment(){
    count+=1
    countEl.textContent=count
}
let saveEl=document.getElementById("save-el")
function save(){
    let sc =count+" - "
     saveEl.textContent+=" "+ sc
    total+=count

     countEl.textContent=0
     count=0
     totalEl.innerText="Total : "+total
 }

