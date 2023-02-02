const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')


const handler1 = (e) => {
    console.log(e)
}
const handler2 = (e) => {
    alert(e)
}

/*sm.onclick = handler1
sm.onclick = handler2*/

/*

sm.addEventListener('click',handler1) //назначение события
sm.addEventListener('click',handler2) //назначение события

sm.removeEventListener('click', handler1) //снятие события
sm.removeEventListener('click', handler2 ) //снятие события


//при назначения обработчика фугкции мы не используем аниномные функции иначе мы не сможем снять эту функции при потребности
*/


sm.onclick = handler1
md.onclick = handler1
bg.onclick = handler1


const handler4 = (e) => {
    e.preventDefault()//отменяем стандартное назначение функции
    alert('привет')
}




const a = document.getElementById('a')
a.addEventListener('click', handler4)