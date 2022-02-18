

// let countText = setInterval(counterUp, 1000)

// function counterUp(){
//     let counter = document.querySelector('#counter')
//     counter.innerText = parseInt(counter.innerText)+ 1
// }

const minus = document.querySelector('#minus')
minus.addEventListener('click', decreseNum)

function decreseNum (){
    let counter = document.querySelector('#counter')
    counter.innerText = parseInt(counter.innerText) - 1
}

const plus = document.querySelector('#plus')
plus.addEventListener('click', increaseNum)

function increaseNum (){
    let counter = document.querySelector('#counter')
    counter.innerText = parseInt(counter.innerText) + 1
}
