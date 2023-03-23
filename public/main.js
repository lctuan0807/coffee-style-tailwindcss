// Author: https://github.com/lctuan0807

const topMenu = document.getElementById('tl-top-menu')
const topMenuIcon = document.getElementById('tl-top-menu-icon')

document.addEventListener('click', (e) => {
  if (topMenuIcon.contains(e.target)) {
    topMenu.classList.toggle('tl-top-menu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    if (topMenu.classList.contains('tl-top-menu-expanded')) {
      topMenu.classList.remove('tl-top-menu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})