const profieImg=document.querySelector('.img_profile')
const insertCount=document.querySelector('.texto')
let count = 0

let contador= document.createElement('p')




profieImg.addEventListener('mouseover',function(){
    profieImg.style.boxShadow='5px 5px 0px black'
    profieImg.style.transition='all 1.5s'
    count++
    contador.innerText= `${count}`
    console.log(contador)
    insertCount.appendChild(contador)
})
profieImg.addEventListener('mouseout',function(){
    profieImg.style.boxShadow=''
    profieImg.style.transition='all 1.5'
    contador.innerText=`${count} ladrido`
})
