var paras = document.getElementsByTagName('p')
Array.prototype.forEach.call(paras, function(para) {
  if(para.getAttribute('data-classified') == 'secret') {
    para.parentNode.removeChild(para)
  }
})