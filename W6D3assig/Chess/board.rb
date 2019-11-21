require_relative 'piece'
class Board 
  attr_reader :rows
  attr_reader :sentinel
  
  def initialize
    @sentinel = NullPiece.instance 
    @rows = Array.new(8){ Array.new(8, @sentinel)}
  end 

  def [](pos)
    x,y = pos
    @rows[x][y]
  end

  def []=(pos, piece)
    x,y = pos
    @rows[x][y] = piece
  end

  def add_piece(piece, pos)
    self[pos] = piece
  end

  def move_piece(start_pos, end_pos)
    raise "No piece at start position" if self[start_pos] == " "  
    piece = self[start_pos]
    self[end_pos] = piece
    self[start_pos] = " "
    piece.pos = end_pos

  end

end 

row = Board.new
p pi = Piece.new("black", row, [0,0])
# p row.add_piece(pi, [2,1])