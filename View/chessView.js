
class ChessView{
    constructor(array, parent){
        $(parent).html("<div id='chessBoard'")
        this.board = parent.children("#chessBoard:last-child")
        for (let i = 1; i <= 8; i++) {
            $(this.board).append(`<div id="column${i}>`)
            this.boardColumn = this.board.children("board:last-child")
            for (let j = 1; j <= 8; j++) {
                $(this.boardColumn).append(`<div id="row${j}></div>`)
            }
            $(board).append("</div>")
        }
        $(parent).append("</div>")
    }
}

export default ChessView