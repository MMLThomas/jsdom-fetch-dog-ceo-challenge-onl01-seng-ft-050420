
console.log('%c HI', 'color: firebrick')


function fetchDogs(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderDogs(json));
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => listBreeds(json.message));
}


function renderDogs(dogs) {
  dogs.message.forEach(dog => {
    let img = document.createElement('img');
    let node = document.querySelector('#dog-image-container');
    img.setAttribute('src',dog);
    node.appendChild(img);
  })
}

function listBreeds(dogBreeds){
  let node = document.querySelector("#dog-breeds");
  Object.keys(dogBreeds).forEach( breed => {
    let new_node = document.createElement('Li');
    let name = document.createTextNode(breed);
    new_node.appendChild(name)
    node.appendChild(new_node);
    
    new_node.addEventListener('click', function(){
      new_node.style.color = 'yellow';
    })
    
    document.querySelector("#breed-dropdown").addEventListener('')
    
    
    
    
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
})







