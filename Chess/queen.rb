require_relative 'piece'
require_relative 'slideable'
class Queen < Piece
    include Slideable

    def move_dirs
        diagonal_dirs.concat(horizontal_and_vertical_dirs)
    end

    def symbol
        'q'.colorize(color)
    end
end