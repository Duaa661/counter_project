const button_1=document.querySelector('.button-1')//plus btn
const button_2=document.querySelector('.button-2')//minus-btn
const zero=document.querySelector('.zero')//coung
const input=document.querySelector('.input')//input field
const reset=document.querySelector('.Reset')


button_1.addEventListener('click',()=>{
     const countvalue=parseInt(zero.innerText);
     const changebyvalue=parseInt(input.value)
     zero.innerText=countvalue+1;
     zero.innerText=countvalue+changebyvalue;
})
button_2.addEventListener('click',()=>{
    const countvalue=parseInt(zero.innerText);
    const changebyvalue=parseInt(input.value)
    zero.innerText=countvalue-1;
    zero.innerText=countvalue-changebyvalue;
})

reset.addEventListener('click',()=>{
   zero.innerText=0;
})
