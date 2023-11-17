let arr=document.querySelectorAll('#form p');
arr.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        let ptag=(ele.getAttribute('id'))
        if (ptag=='UN') {
            document.getElementById('un').classList.remove('ip')
            document.getElementById('username').classList.add('active')
        }
        else if (ptag=='EM') {
            document.getElementById('em').classList.remove('ip')
            document.getElementById('email').classList.add('active')
        }
        else if (ptag=='EM1') {
            document.getElementById('em1').classList.remove('ip')
            document.getElementById('email1').classList.add('active')
        }
        else if (ptag=='PW1') {
            document.getElementById('pw1').classList.remove('ip')
            document.getElementById('pass1').classList.add('active')
        }
        else{
            document.getElementById('pw').classList.remove('ip')
            document.getElementById('pass').classList.add('active')
        }
   })
})

document.getElementById('l').addEventListener('click',()=>{
document.getElementById('sign').classList.add('move');
document.getElementById('login').classList.add('move');
})
document.getElementById('s').addEventListener('click',()=>{
    document.getElementById('sign').classList.remove('move');
    document.getElementById('login').classList.remove('move');
    })