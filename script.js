let btn=document.querySelector(".btn");
let input=document.querySelector(".input");
let display=document.querySelector(".displays");
let img = document.querySelector(".xyz");

function append(){

    if (input.value == 0){
        alert("Please enter task");
    }
   else{
    display.innerHTML = display.innerHTML + `
    <div class="display">
             <span class="abc">
              ${input.value}
             </span>  
               <div class = "xyz">
                <img src = "delete.svg">
                </div>
           

    </div>
    
    `;
    input.value = ""
let img = document.querySelectorAll(".xyz");
 console.log(img.length);
   for( let i = 0 ; i < img.length ; i++){
     img[i].onclick = function(){
       this.parentNode.remove();
     } 
     
    }
   }
// let tasks = document.querySelectorAll("abc");
// for(let i=0 ; i < tasks.length ; i++){
//     tasks[i].onclick = function(){
//         this.classList.toggle("complete");
//     }
// }
   
}



