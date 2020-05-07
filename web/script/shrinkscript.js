let ipad = window.matchMedia('(min-width: 768px)')
let fullscreen = window.matchMedia('(min-width: 1080px)')

function myFunction () {
  if (fullscreen.matches) {
    scrollFunction('0px', '90px')
  } else if (ipad.matches) {
    scrollFunction('0px', '130px')
  } else {
    scrollFunction('0px', '220px')
  }
}

function scrollFunction (x, y) {
  console.log('scrollFunction x value = ' + x)
  if (document.documentElement.scrollTop > 80) {
    document.getElementById('shrinktext').style.height = x
  } else {
    document.getElementById('shrinktext').style.height = y
  }
}

window.onscroll = function () {
  myFunction()
}

myFunction() // Call listener function at run time
fullscreen.addListener(myFunction) // Attach listener function on state changes
