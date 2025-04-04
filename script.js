document.querySelectorAll('.pointer').forEach((pointer)=>{
    pointer.addEventListener('click', changeSlide)
});

function changeSlide(event){
    let pointer = event.target.getAttribute('data-item')
    let actualSlider = document.querySelector('.banner .sliders')

    if(pointer == 1){
        actualSlider.style.marginLeft = '0'
    }else if(pointer == 2){
        actualSlider.style.marginLeft = '-100dvw'
    }else if(pointer == 3){
        actualSlider.style.marginLeft = '-200dvw'
    }
        

}
document.querySelector('.button.one').addEventListener('click', clicou)
function clicou(){
    
alert('voce clicou em um botao')

}
document.querySelector('.menu-opener').addEventListener('click', abrirmenu)
let nav = document.querySelector('#nav')

function abrirmenu(){
    if (nav.style.display === 'none'){
        nav.style= 'display:block;'
    }else{
        nav.style= 'display:none;'
        console.log('a')
    }
};