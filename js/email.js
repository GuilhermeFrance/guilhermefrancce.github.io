var btn = document.querySelector('#hideshow')
var container = document.querySelector ('.mailme')

btn.addEventListener('click', function(){

  if(container.style.display === 'none') {
      container.style.display = 'flex';
  }else {
    container.style.display = 'none'
  }
  
})

var click = "images/arrowdown.png" 
var clickou = "images/arrowup.png"
function mudaFoto(){
document.getElementById('arroww').src = clickou
let aux = click;
click = clickou;
clickou = aux;
}
        