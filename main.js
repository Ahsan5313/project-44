const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const btn = document.getElementById('btn')

function showError(input){

    const formGroup = input.parentElement;
    formGroup.className = 'error'
}
function showSuccess(input){

    const formGroup = input.parentElement;
    formGroup.className = 'success'
}

form.addEventListener('submit', function(e){

    e.preventDefault()

    if(fname.value == ''){

        showError(fname)
    }else if(lname.value == ''){

        showError(lname)
    }else if(email.value == ''){

        showError(email)
    }else{

        showSuccess()
    }
})



const myBtn = document.getElementById('myBtn')

window.onscroll = function () {scrollFunction()}

function scrollFunction(){

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){

        myBtn.style.display = 'block'
    }else{

        myBtn.style.display = 'none'
    }
}

function topFun(){

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

}