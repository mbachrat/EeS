let numPix = 30;



function genDivs(v){ 
    var e = document.getElementById("container");
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          //cell.innerText = (i * v) + x;
          row.appendChild(cell); 
          console.log("hello")
      } 
      e.appendChild(row); 
    } 
    document.getElementById("code").innerText = e.innerHTML;

  }

  genDivs(numPix)


  function draw() {

    
  }