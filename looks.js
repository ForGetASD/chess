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
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            tabla += `<div id="${i}" class='square'></div>`
        }
    }
    $(".board").append(tabla)
    coloring()
    feltolt()
    piecesPlacements()
}

function coloring(){
    $('.board div').each(function(index){
        $(this).css('background-color', (parseInt(index / 8) + index) % 2 == 0 ? '#e8c46c' : '#c08c4c');
    })
}

function piecesPlacements(){
    let szam = 0
    for (let i = 0; i < chessBoard.length; i++) {
        for (let j = 0; j < chessBoard.length; j++) {   
            if(String(chessBoard[i][j]) != "-"){
                if(String(chessBoard[i][j]) === String(chessBoard[i][j]).toUpperCase()){
                    thePieceColor("white", chessBoard[i][j], szam)
                    szam++
                }else{
                    thePieceColor("dark", chessBoard[i][j], szam)
                    szam++
                }
            }
        }
    }
}


function thePieceColor(color, babu, pozicio){
    let tomb = []
    let tszam = 0
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            tomb[tszam] = chessBoard[i][j]
            tszam++
        }
    }

    let poz = $(".square")

    var image = new Image();
        if(babu == "r" || babu == "R"){
            var url = './pics/' + color + 'Rook.png'
            image.src = url
            poz[pozicio].append(image)
        }else if(babu == "n" || babu == "N"){
            var url = './pics/' + color + 'Knight.png'
            image.src = url
            poz[pozicio].append(image)
        }else if(babu == "b" || babu == "B"){
            var url = './pics/' + color + 'Bishop.png'
            image.src = url
            poz[pozicio].append(image)
        }else if(babu == "q" || babu == "Q"){
            var url = './pics/' + color + 'Queen.png'
            image.src = url
            poz[pozicio].append(image)
        }else if(babu == "k" || babu == "K"){
            var url = './pics/' + color + 'King.png'
            image.src = url
            poz[pozicio].append(image)
        }else if(babu == "p" || babu == "P"){
            var url = './pics/' + color + 'Pawn.png'
            image.src = url
            poz[pozicio].append(image)
        }
}