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
const section = select('.section')

window.addEventListener('load', () =>{
    
    setTimeout(() => {
        section.classList ='show-modal';
    }, 500);
});