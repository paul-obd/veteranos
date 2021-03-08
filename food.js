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

    var ulv = document.getElementById('ul-v');
    var rate = document.getElementById('dollar-rate').value;
    
  
  fetch('https://paul342021.herokuapp.com/virbacdog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulv.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )
  
    var ulmv = document.getElementById('ul-mv');

    fetch('https://paul342021.herokuapp.com/medicalvirbacdog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulmv.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )

    var ulo = document.getElementById('ul-o');

    fetch('https://paul342021.herokuapp.com/ownatdog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulo.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )


    var uloc = document.getElementById('ul-oc');

    fetch('https://paul342021.herokuapp.com/ownatclassicdog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          uloc.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )

    var ulp = document.getElementById('ul-p');

    fetch('https://paul342021.herokuapp.com/proformancedog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulp.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )

    

    var ulu = document.getElementById('ul-u');

    fetch('https://paul342021.herokuapp.com/unicadog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulu.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )

    var ule = document.getElementById('ul-e');

    fetch('https://paul342021.herokuapp.com/equilibriodog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ule.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )

    var ulvc = document.getElementById('ul-vc');

    fetch('https://paul342021.herokuapp.com/virbaccat')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulvc.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )

    var ulocat = document.getElementById('ul-ocat');

    fetch('https://paul342021.herokuapp.com/ownatcat')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulocat.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )

    var ulec = document.getElementById('ul-ec');

    fetch('https://paul342021.herokuapp.com/equilibriocat')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulec.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )
    

    var ulmvc = document.getElementById('ul-mvc');

    fetch('https://paul342021.herokuapp.com/medicalvirbacdog')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        var jsonel = json[i];
        
        
        var li = document.createElement('li');
          li.innerHTML = (jsonel.name + ":" + " " + jsonel.price + jsonel.dollar + "        " + (rate*jsonel.price) + "L.L." );
      
          
          ulmvc.appendChild(li);
  
        
        
  
        
      }
      
    }
      
    )
  
  
  }
    // fetchit();


  