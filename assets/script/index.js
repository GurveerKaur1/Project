function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}

//Get HTML element by id

//Select HTML element by selector
function select(selector, parent = document){
    return parent.querySelector(selector);
}

const modal = select('p');
//const showModal = document.querySelector('.show-modal');
const section = select('.start')

window.addEventListener('load', () =>{
    
    setTimeout(() => {
        section.style.display ='inline';
    }, 1500);
});