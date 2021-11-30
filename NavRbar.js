const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const ancor = document.querySelector('.ancor')
const ancor2 = document.querySelector('.ancor2')
const ancor3 = document.querySelector('.ancor3')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

ancor.addEventListener('click', () => container.classList.remove('show-nav'))

ancor2.addEventListener('click', () => container.classList.remove('show-nav'))

ancor3.addEventListener('click', () => container.classList.remove('show-nav'))
