let logo = document.getElementById('logo')
let bdy = document.getElementById('close')
var styl = document.getElementById('menu')

logo.addEventListener('click', function () {
    styl.classList.add('open')
})
bdy.addEventListener('click', function () {
    styl.classList.remove('open')
})

var li = document.getElementsByTagName('li')
var showCont, showCont2;
     showCont = li[0].getElementsByTagName('div')[0]
     showCont2 = li[1].getElementsByTagName('div')[0]
    function myfunc(params) {
        showCont.classList.add('show')
    }
    function myfunc1(params) {
        showCont2.classList.add('show')
    }
    
    window.onclick = function (evt) {
        if(!evt.target.matches('.link')){
            var dropdown = document.getElementsByClassName('drop-cont')
            for (let i = 0; i < dropdown.length; i++) {
                const element = dropdown[i]
                if (element.classList.contains('show')) {
                    element.classList.remove('show')
                    styl.classList.remove('open')
                }
                
            }
        }
        
    }