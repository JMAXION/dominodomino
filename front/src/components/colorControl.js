

export function colorControl(e){
 
  const element1 = document.getElementById('btn1')
  const element2 = document.getElementById('btn2')
  const element3 = document.getElementById('btn3')

 

element1.addEventListener('click',(e)=>{
    element1.classList.add('country')
    element2.classList.remove('country')
    element3.classList.remove('country')
})
 

element2.addEventListener('click',(e)=>{
    element1.classList.remove('country')
    element2.classList.add('country')
    element3.classList.remove('country')
})
    
element3.addEventListener('click',(e)=>{
    element1.classList.remove('country')
    element2.classList.remove('country')
    element3.classList.add('country')
})
   

  

 
   
}