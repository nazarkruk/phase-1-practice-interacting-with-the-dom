
let counter = document.querySelector('#counter')
let countText = setInterval(counterUp, 1000)

function counterUp(){
    counter.innerText = parseInt(counter.innerText)+ 1
}

const minus = document.querySelector('#minus')
minus.addEventListener('click', decreseNum)

function decreseNum (){
    counter.innerText = parseInt(counter.innerText) - 1
}

const plus = document.querySelector('#plus')
plus.addEventListener('click', increaseNum)

function increaseNum (){
    counter.innerText = parseInt(counter.innerText) + 1
}

const heart = document.querySelector('#heart')
heart.addEventListener('click', likeNum)

function likeNum (){
    const likes  = document.querySelector('.likes')
    const li = document.createElement('li')
    li.innerText = `You liked: ${parseInt(counter.innerText)}!`
    likes.appendChild(li)
}

const pause = document.querySelector('#pause')
pause.addEventListener('click', togglePaused)


function togglePaused(){
    if (pause.innerText === 'resume'){
        countText = setInterval(counterUp, 1000)
        pause.innerText = "pause"
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        return
    } else {
        clearInterval(countText)
        pause.innerText = "resume"
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        return
    }
}

const commentForm = document.querySelector('#comment-form')
commentForm.addEventListener('submit',addComment) 

const commentInput = document.querySelector('#comment-input')


function addComment(event){
    event.preventDefault()
    let commentInpText = event.target.querySelector('#comment-input').value
    const li = document.createElement('li')
    li.innerText = commentInpText
    const list = document.querySelector('#list')
    list.appendChild(li)
}