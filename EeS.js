let numPix = 15;

function showMore(){
  console.log('test');
}

function genDivs(v){ 
    var e = document.getElementById("container");
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = `gridsquare`;
          cell.setAttribute('id',`${(i*v)+x}`);
 
          //cell.innerText = (i * v) + x;
          row.appendChild(cell); 
        
      } 
      e.appendChild(row); 
    } 
   
  }

  genDivs(numPix)

 
  document.getElementById("container").addEventListener("hover",function(e) {
    // e.target was the clicked element
   // if (e.target && e.target.matches("")) {
    var element = document.getElementById(`${e.target.id}`);
    element.style.backgroundColor = "#00FF00";
      console.log(e.target.id);
   // }
  });