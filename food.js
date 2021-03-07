// function fetchit(){

    

      
//     fetch('https://paul342021.herokuapp.com/')
//   .then(response => response.json())
//   .then(json => {
//      var value = document.getElementById('food').value;
//       var jsonel = json[i];
//       var priceel = jsonel.price;

     
//   })
//   document.getElementById('price-value').innerHTML = priceel;
// }





function fetchit() {

    var ul = document.getElementById('ul');
    var rate = document.getElementById('dollar-rate').value;
    
  
  fetch('https://paul342021.herokuapp.com/')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ul.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )}
    // fetchit();


  