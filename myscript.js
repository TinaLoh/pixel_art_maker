function init() {
  createTable();
}

function createTable () {
  var grid = document.getElementById('space');

  // createing table adn inserting into document
  tab = document.createElement('table');
  grid.appendChild(tab);

  tab.border = '2';

  for (var i = 0; i < 10; i++){
    // creating row and inserting into document
    var row = tab.insertRow(i);

    for(var j = 0; j < 20; j++){
      // creating cells and fill with data (numbers)
      var cell = row.insertCell(j);
      cell.style.backgroundColor = 'white';
      cell.style.color = 'white';
      cell.style.height = '50px';
      cell.style.width = '50px';
      paint(cell);
    };
  };
}

  function paint(cell) {
      cell.addEventListener('click', function() {
        this.style.backgroundColor = 'orange';
      })
    }

    var colors = {
      1: "#FF0000",
      2: "#400000",
      3: "#800000",
      4: "#C00000",
      5: "#FF4040",
      6: "#FF8080",
    }

window.onload = init;
