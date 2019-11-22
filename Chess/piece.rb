class Piece
    attr_accessor :pos
    attr_reader :board, :color
  def initialize(color, board, pos) 
    @color = color
    @board = board
    @pos = pos  
    board.add_piece(self, pos)
  end 

  def to_s
    " #{symbol} "
  end

  def symbol
  end

  def move_into_check?(end_pos)
    copyboard = board.dup
    copyboard.move_piece(pos, end_pos)
    copyboard.in_check?(color)
  end


end
