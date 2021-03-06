function fetchit() {

    var ul = document.getElementById('ul');
  
  fetch('https://paul342021.herokuapp.com/pharmacie')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price) ;
          ul.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )}
    fetchit();