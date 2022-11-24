screen=document.getElementById("screen")
buttons=document.querySelectorAll("button")
let print=""
function cal(){for (item of buttons){
  item.addEventListener('click',(e)=>{
   val= e.target.innerText
   
     if(val=="C")
     {
         print=""
        screen.value=print
   
     }
     
     else if(val=="="){
         
         screen.value=eval(print)
         a=screen.value
         print=""
         print+=a
     }
     else if(val=="X"){
         back=print.slice(0,-1)
         print=back
         screen.value=print
     }
     else{
        print+=val
        screen.value=print
     }
  }) 
}}
cal()
screen.addEventListener('blur',()=>{
  screen.style.border="2px solid #4b82b2"
})
