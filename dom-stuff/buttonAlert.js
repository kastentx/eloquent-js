var button = document.querySelector('button')
button.addEventListener('click', function(e) {
  alert('button clicked.\n' + e.which)
})

document.querySelector('p').addEventListener('click', function(e) {
  console.log(e.which)
})
