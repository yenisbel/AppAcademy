require_relative 'piece'

require_relative 'stepable'

class King < Piece
    include Stepable

    def move_diffs
        valid_moves = [[-1,-1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
        return valid_moves
    end
    def symbol
        'k'.colorize(color)
    end
end