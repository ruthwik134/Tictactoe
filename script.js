buttons=document.querySelectorAll(".button");
para=document.querySelector("p");
reset=document.getElementsByClassName("reset");
newg=document.getElementsByClassName("newgame");
console.log(buttons);
let flag=0;
 type0=true;
 let patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 
 function printwinner(pos1){
    para.classList.remove("hide");
    para.innerText="winner is "+pos1;
    flag=1;
    reseting();
   
 }
 
function reseting(){
    for(let i of buttons){
        i.innerText="";
        i.style.pointerEvents="auto";
        /*para.classList.add("hide");*/

    }
}
 
 function checkpattern(){
    for(let i of patterns){
        let pos1=buttons[i[0]].innerText;
        let pos2=buttons[i[1]].innerText;
        let pos3=buttons[i[2]].innerText;
        if(pos1!="" & pos2!="" & pos3!=""){
            if(pos1==pos2 & pos2==pos3){
                printwinner(pos1);
                //console.log(flag);
                //reseting();
            }
        }
        
        
        }
        let draw = true;
            for (let i of buttons) {
                if (i.innerText === "") {
                    draw = false;
                    break;
                }
            }
            if (draw) {
                para.classList.remove("hide");
                para.innerText = "Match Drawn";
                flag = 1; // To prevent further moves
            }
        
    }
 





 for(let i of buttons){
    i.addEventListener("click",()=>{
        if(type0){
            i.innerText="X";
            type0=false;

       }
        else{

            i.innerText="O";
            type0=true;
        }
        i.style.pointerEvents="none";
        checkpattern();    
    })
}
reset[0].addEventListener("click",()=>{
    reseting();
})
newg[0].addEventListener("click",()=>{
    reseting();
})
