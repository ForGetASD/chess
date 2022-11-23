import ChessModel from "../Model/chessModel.js"
import ChessView from "../View/chessView.js"

class ChessController{
    constructor(){
        const chessmodel = new ChessModel()
        $("#board").on("click", () => {
            console.log("fut a adatBe elött")
            chessmodel.adatBe("chessPieces.json", this.chessPiecesData)
            console.log("fut a adatBe után")
        })
    }

    chessPiecesData(array){
        const parent = $("article")
        new ChessView(array, parent)
    }
}

export default ChessController