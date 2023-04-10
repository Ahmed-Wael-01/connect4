const mainBody = document.getElementById("main-body");
const title = document.getElementById("title");
let presentTurn = "red";
let columns = [0,0,0,0,0,0,0];
let finished = false;
let whosTurn = document.getElementById("turn");
whosTurn.innerHTML = presentTurn;
function generate(){
    for(let r = 6; r >= 1; r--){
        const newRow = document.createElement("tr");
        for(let c = 1; c <= 7; c++){
            const newCell = document.createElement("td");
            newCell.setAttribute("data-rowLoc", r);
            newCell.setAttribute("data-colLoc", c);
            newCell.setAttribute("id", r.toString()+c.toString());
            newCell.addEventListener("click", function drop(e){
                if(finished == false){
                    const row = parseInt(e.target.getAttribute("data-rowLoc"));
                    const col = parseInt(e.target.getAttribute("data-colLoc"));
                    const aryCol = col - 1; 
                    columns[aryCol]= columns[aryCol] + 1;
                    console.log(columns[aryCol].toString() + col.toString());
                    const chsnCell = document.getElementById(columns[aryCol].toString() + col.toString());
                    chsnCell.style.backgroundColor = presentTurn;
                    chsnCell.setAttribute("data-color", presentTurn);
                    wincon(chsnCell);
                    if(finished == false){
                        if (presentTurn=="red"){
                            presentTurn = "yellow";
                            whosTurn.innerHTML = presentTurn;
                        }
                        else{
                            presentTurn = "red";
                            whosTurn.innerHTML = presentTurn;
                        };
                    };
                }
            }  )
            newRow.appendChild(newCell);
        }
        mainBody.appendChild(newRow);
    }
};
function wincon(e){
    const row = e.getAttribute("data-rowLoc");
    const col = e.getAttribute("data-colLoc");
    const intRow = parseInt(row);
    const intCol = parseInt(col);
    let counter = 0;
    for (let x = 1; x<4;x++){
        if(intRow < 4){
            break;
        };
        const compareCell = document.getElementById((intRow - x).toString() + col)
        if(e.getAttribute("data-color") == compareCell.getAttribute("data-color")){
            if(x == 3){
                winning();
            }
            else{
                continue;
            }
        }
        else{
            break;
        };
    };
    while(true){
        for (let z = 1; z<4; z++){
            compareCellUp = document.getElementById(row + (intCol + z));
            if (compareCellUp != null){
                if(e.getAttribute("data-color") == compareCellUp.getAttribute("data-color")){
                    console.log(compareCellUp.getAttribute("id"))
                    counter = counter + 1;
                    if(counter == 3){winning()};
                    continue;
                }else{break;}
            }
        }
        for(let x = 1; x<4; x++){
            compareCellDown = document.getElementById(row + (intCol - x));
            if(compareCellDown != null){
                if(e.getAttribute("data-color") == compareCellDown.getAttribute("data-color")){
                    console.log(compareCellDown.getAttribute("id"));
                    counter = counter + 1;
                    if(counter == 3){winning()};
                    continue;
                }else{break;}
            }
        }
        counter = 0;
        break;
    }
    while(true){
        for (let z = 1; z<4; z++){
            compareCellUp = document.getElementById((intRow + z).toString() + (intCol + z).toString());
            if (compareCellUp != null){
                if(e.getAttribute("data-color") == compareCellUp.getAttribute("data-color")){
                    console.log(compareCellUp.getAttribute("id"));
                    counter = counter + 1;
                    if(counter == 3){winning()};
                    continue;
                }else{break;}
            }
        }
        for(let x = 1; x<4; x++){
            compareCellDown = document.getElementById((intRow - x).toString() + (intCol - x).toString());
            if(compareCellDown != null){
                if(e.getAttribute("data-color") == compareCellDown.getAttribute("data-color")){
                    console.log(compareCellDown.getAttribute("id"))
                    counter = counter + 1;
                    if(counter == 3){winning()};
                    continue;
                }else{break;}
            }
        }
        counter = 0;
        break;
    }
    while(true){
        for (let z = 1; z<4; z++){
            compareCellUp = document.getElementById((intRow + z).toString() + (intCol - z).toString());
            if (compareCellUp != null){
                if(e.getAttribute("data-color") == compareCellUp.getAttribute("data-color")){
                    console.log(compareCellUp.getAttribute("id"));
                    counter = counter + 1;
                    if(counter == 3){winning()};
                    continue;
                }else{break;}
            }
        }
        for(let x = 1; x<4; x++){
            compareCellDown = document.getElementById((intRow - x).toString() + (intCol + x).toString());
            if(compareCellDown != null){
                if(e.getAttribute("data-color") == compareCellDown.getAttribute("data-color")){
                    console.log(compareCellDown.getAttribute("id"))
                    counter = counter + 1;
                    if(counter == 3){winning()};
                    continue;
                }else{break;}
            }
        }
        counter = 0;
        break;
    }
};
function winning(){
    console.log("winner is "+presentTurn);
    finished = true;
    title.innerHTML = "The Winner Is " + presentTurn;
}
generate();