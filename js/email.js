var btn = document.querySelector('#hideshow')
var container = document.querySelector ('.mailme')

btn.addEventListener('click', function(){

  if(container.style.display === 'flex') {
      container.style.display = 'none';
  }else {
    container.style.display = 'flex'
  }
  
})

var click = "images/arrowup.png"
var clickou = "images/arrowdown.png"
function mudaFoto(){
document.getElementById('arroww').src = clickou;
let aux = click;
click = clickou;
clickou = aux;
}
        