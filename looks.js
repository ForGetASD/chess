let fenString = "rnbqkbnr/pppppppp/r6r/8/8/8/PPPPPPPP/RNBQKBNR"
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

function fenStringToChessBoardArray() {
    const fenTordelve = fenString.split('/')
    const number = [1, 2, 3, 4, 5, 6, 7, 8]
    for (let i = 0; i < chessBoard.length; i++) {
        for (let j = 0; j < chessBoard.length; j++) {
            if(isNaN(fenTordelve[i][j])){
                chessBoard[i][j] = fenTordelve[i][j]
            }else{
                var jelenlegiJAllas = j
                for (let k = 0; k < fenTordelve[i][jelenlegiJAllas]; k++) {
                    chessBoard[i][j] = "-"
                    j++
                }
                j = jelenlegiJAllas
            }
        }
    }
    console.log(chessBoard)
}



function createBoard(){
    let tabla = ""
    for (let i = 0; i < 64; i++) {
        tabla += "<div class='square'></div>"
    }
    $(".board").append(tabla)
    coloring()
    tempStartingPos()
}

function coloring(){
    $('.board div').each(function(index){
        $(this).css('background-color', (parseInt(index / 8) + index) % 2 == 0 ? '#e8c46c' : '#c08c4c');
    })
}

function tempStartingPos(){
    const poz = $(".square")
    const darkPieces = ["<img src='pics/darkPawn.png'>", "<img src='pics/darkRook.png'>", "<img src='pics/darkKnight.png'>", "<img src='pics/darkBishop.png'>", "<img src='pics/darkQueen.png'>", "<img src='pics/darkKing.png'>"]
    const whitePieces = ["<img src='pics/whitePawn.png'>", "<img src='pics/whiteRook.png'>", "<img src='pics/whiteKnight.png'>", "<img src='pics/whiteBishop.png'>", "<img src='pics/whiteQueen.png'>", "<img src='pics/whiteKing.png'>"]
    //dark pieces
    $(darkPieces[1]).appendTo(poz[0])
    $(darkPieces[1]).appendTo(poz[7])
    $(darkPieces[2]).appendTo(poz[1])
    $(darkPieces[2]).appendTo(poz[6])
    $(darkPieces[3]).appendTo(poz[2])
    $(darkPieces[3]).appendTo(poz[5])
    $(darkPieces[4]).appendTo(poz[3])
    $(darkPieces[5]).appendTo(poz[4])
    $(darkPieces[0]).appendTo(poz[8])
    $(darkPieces[0]).appendTo(poz[9])
    $(darkPieces[0]).appendTo(poz[10])
    $(darkPieces[0]).appendTo(poz[11])
    $(darkPieces[0]).appendTo(poz[12])
    $(darkPieces[0]).appendTo(poz[13])
    $(darkPieces[0]).appendTo(poz[14])
    $(darkPieces[0]).appendTo(poz[15])
    //white pieces
    $(whitePieces[1]).appendTo(poz[56])
    $(whitePieces[1]).appendTo(poz[63])
    $(whitePieces[2]).appendTo(poz[57])
    $(whitePieces[2]).appendTo(poz[62])
    $(whitePieces[3]).appendTo(poz[58])
    $(whitePieces[3]).appendTo(poz[61])
    $(whitePieces[4]).appendTo(poz[59])
    $(whitePieces[5]).appendTo(poz[60])
    $(whitePieces[0]).appendTo(poz[48])
    $(whitePieces[0]).appendTo(poz[49])
    $(whitePieces[0]).appendTo(poz[50])
    $(whitePieces[0]).appendTo(poz[51])
    $(whitePieces[0]).appendTo(poz[52])
    $(whitePieces[0]).appendTo(poz[53])
    $(whitePieces[0]).appendTo(poz[54])
    $(whitePieces[0]).appendTo(poz[55])
}