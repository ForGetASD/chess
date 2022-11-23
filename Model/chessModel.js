
class ChessModel{
    #piecesArray = []
    constructor(){

    }

    adatBe(vegPont, callBack){
        fetch(vegPont, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#piecesArray = data.pieces
                callBack(this.#piecesArray)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
}

export default ChessModel