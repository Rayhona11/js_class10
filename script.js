let d = document.querySelector('.container')
// Kursor (POINTER events) xodisalari

let i = document.querySelector('i')
let s = document.querySelector('section')
let b = document.querySelector('button')

i.addEventListener('pointerdown', () =>{
  i.classList.add('section')
  s.style.display = "block"
})
b.addEventListener('pointerdown', () => {
    s.style.display = "none"
    b.classList.remove('section')
})
