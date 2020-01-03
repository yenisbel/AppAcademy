// Board.won(), Board.winner();, Board.empty(pos);, Board.place_mark(pos, mark)

class Board {
    constructor(){
        this.grid = [["_","_","_"],["_","_","_"],["_","_","_"]]
    }
    empty(pos) {
        xPos, yPos = pos
        return (this.grid[xPos][yPos] === '_')
    }

    place_mark(pos, mark){
        xPos, yPos = pos
        if (empty(pos)) {
            this.grid[xPos][yPos] = mark;
        }
    }

    won(){
        return this.winner
    }

    winner(){
        const winnerDiagAndHoriz = [
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]], 
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]], 
        ];
        for (let i = 0; i < winnerDiagAndHoriz.length; i++) {
            // mark in this pos
            const winnerPos = winnerDiagAndHoriz[i];
            if (winnerPos) {
                return winnerPos;
            }
            
        }
        return null
    }

    
        

}






// const ticT = new Board()
// console.log(ticT)