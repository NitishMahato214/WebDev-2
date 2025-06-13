const item=document.querySelector("#item");
const toDoBox=document.querySelector("#to-do-box");
item.addEventListener(
    "keyup",function(event,key){
        if(event.key=="Enter"){
            add(this.value);
            this.value="";
        }
    }
)

const add=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
            ${item}
    <i class="ri-close-circle-fill"></i>`;

    listItem.addEventListener("click",function(){
        this.classList.toggle("done");
        });
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
    toDoBox.appendChild(listItem);
}