let fenString = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
let chessBoard = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
]


function feltolt(){
    let i = 0
    let j = 0
    while(fenString != ""){
        if(fenString[0] == "/"){
            i++
            j = 0
        }else{
            if(isNaN(fenString[0])){
                chessBoard[i][j] = fenString[0]
                j++
            }else{
                let szam = parseInt(fenString[0]) + j
                for (let index = j; index < szam; index++) {
                    chessBoard[i][index] = "-"
                }
                j += parseInt(fenString[0])
            }
        }
        fenString = fenString.substring(1 , fenString.length)
    }
    //console.log(chessBoard)
    //console.log(chessBoard[2][3])
}



function createBoard(){
    let tabla = ""
    for (let i = 0; i < 64; i++) {
        tabla += "<div class='square'></div>"
    }
    $(".board").append(tabla)
    coloring()
    piecesPlacements()
}

function coloring(){
    $('.board div').each(function(index){
        $(this).css('background-color', (parseInt(index / 8) + index) % 2 == 0 ? '#e8c46c' : '#c08c4c');
    })
}

function piecesPlacements(){
    var szo = "asd"
    for (let i = 0; i < chessBoard.length; i++) {
        for (let j = 0; j < chessBoard.length; j++) {   
            if(String(chessBoard[i][j]) != "-"){
                if(String(chessBoard[i][j]) === String(chessBoard[i][j]).toUpperCase()){
                    thePieceColor("white", chessBoard[i][j])
                }else{
                    thePieceColor("dark", chessBoard[i][j])
                }
            }
        }
    }
}


function thePieceColor(color, babu){
    const poz = $(".square")
    //console.log(babu)
    var url = './pics/' + color + 'Rook.png'
    var image = new Image();
    switch(babu) {
        case "r":
            image.src = url;
            poz[0].append(image)
            break;
        // case n:
        //     putdown
        //     break;
        // case b:
        //     putdown
        //     break;
        // case q:
        //     putdown
        //     break;
        // case k:
        //     putdown
        //     break;
        // case p:
        //     putdown
        //     break;
      }
}