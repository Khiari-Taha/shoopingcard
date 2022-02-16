

//add element 
//compteur ajout +1 

let plusBtn = document.getElementsByClassName('btn-plus');
let prix = document.getElementsByClassName('prx');

console.log(plusBtn);

for (let plus of plusBtn) {
  for(let i=0;i<prix.length;i++){
    plus.addEventListener('click', function () {
      plus.previousElementSibling.innerText++;
      prix[i].innerText=prix[i].innerText*plus.previousElementSibling.innerText;
    
  })}}
    
  
  





//diminuer 

let minusBtn = document.getElementsByClassName('btn-moins');
for(let minus of minusBtn){
for(let i=0;i<prix.length;i++)
minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
    prix[i].innerText=prix[i].innerText/minus.nextElementSibling.innerText;
    
}

})

};




//delete:


let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i < deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
       
    })
 
}
//prix











