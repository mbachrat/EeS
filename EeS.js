let numPix = 15;


function genDivs(v){ 
    var e = document.getElementById("container");
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      row.setAttribute('id',`rows`);
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = `gridsquare`;
          cell.setAttribute('id',`${(i*v)+x}`);
 
          //cell.innerText = (i * v) + x;
          row.appendChild(cell); 
        
      } 
      e.appendChild(row); 
    } 
    document.getElementById("container").addEventListener("mouseover",function(e) {
      // e.target was the clicked element
     // if (e.target && e.target.matches("")) {
      var element = document.getElementById(`${e.target.id}`);
      
      if (element.style.backgroundColor == "") {
        element.style.backgroundColor = "rgba(12, 245, 51, 0.3)";

      }
      else if (element.style.backgroundColor == "rgba(12, 245, 51, 0.3)") {
        element.style.backgroundColor = "rgba(12, 245, 51, 0.6)";
      }
      else if (element.style.backgroundColor == "rgba(12, 245, 51, 0.6)") {
        element.style.backgroundColor = "rgba(12, 245, 51, 1)";
      }
      else {

      }
        console.log(e.target.id);
     // }
    });

    const btn = document.getElementById("btn");
    btn.addEventListener('click', gameReset)
  }

  genDivs(numPix)



  function gameReset() {

    let rowTwo = document.getElementById("container");
    rowTwo.remove();

    let container = document.createElement("div");
    container.setAttribute('id',`container`);
    over.appendChild(container);

    let button = document.getElementById("btn");
    button.remove();
    let btn = document.createElement("button");
    btn.setAttribute('id',`btn`);
    btn.innerText = "RESET";
    over.appendChild(btn);


    let grid = window. prompt("Enter number of squares (max 50x50)");
    genDivs(grid);

  }