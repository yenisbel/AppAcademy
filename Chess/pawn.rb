require_relative 'piece'

class Pawn < Piece
    def move_dirs
      forward_steps
    end

    def forward_dir
      color == :white ? -1 : 1
    end

    def at_start_row?
      pos[0] == (color == :white) ? 6 : 1
    end

    def forward_steps
      x, y = pos
      one = [x + forward_dir, y]
      return [] unless board.valid_pos?(one) && board.empty?(one)
  
      steps = [one]
      two = [x+ 2 * forward_dir, y]
      steps << two if at_start_row? && board.empty?(two)
      steps
    end

    def symbol
      'p'.colorize(color)
    end
end