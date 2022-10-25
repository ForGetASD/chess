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
                j += fenString[0]
            }
        }
        fenString = fenString.substring(1 , fenString.length)

        console.log("kész")
        console.log(chessBoard)
        //fenString = ""
    }
}



function createBoard(){
    let tabla = ""
    for (let i = 0; i < 64; i++) {
        tabla += "<div class='square'></div>"
    }
    $(".board").append(tabla)
    coloring()
}

function coloring(){
    $('.board div').each(function(index){
        $(this).css('background-color', (parseInt(index / 8) + index) % 2 == 0 ? '#e8c46c' : '#c08c4c');
    })
}
