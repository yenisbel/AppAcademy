require_relative 'piece'

require_relative 'stepable'

class Knight < Piece
    include stepable

    def move_diffs
        valid_moves = [[-2,-1], [-1, -2], [-2, 1], [-1, 2], [1, -2], [2, -1], [1, 2], [2, 1]]
        return valid_moves
    end

    def symbol
        'kn'.colorize(color)
    end
end