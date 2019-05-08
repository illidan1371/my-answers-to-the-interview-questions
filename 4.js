var table = document.createElement("table"); // this creates a table.
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');// this loop will create the cells.
    for (var j = 1; j < 9; j++) {         // a chess table is 8x8 so i used
                                          //i&j<9
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white"; //i gave the .white class to the cells..
                                    //that are supposed to be white and..
                                    //did the same thing for the black ones.
        } else {
            td.className = "black";
        }
        tr.appendChild(td);         //here i attatched the cells to the rows..
                                    // and the rows to the table and..
                                    //the table to the HTML body.
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
