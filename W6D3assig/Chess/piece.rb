class Piece
    attr_accessor :pos
    attr_reader :board, :color
  def initialize(color, board, pos) 
    @color = color
    @board = board
    @pos = pos  
    board.add_piece(self, pos)
  end 



end
