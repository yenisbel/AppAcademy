require_relative 'piece'
require_relative 'null_piece'
class Board 
  attr_reader :rows
  attr_reader :sentinel
  
  def initialize
    @sentinel = NullPiece.instance 
    @rows = Array.new(8){ Array.new(8, @sentinel) }
  end 

  def [](pos)
    x,y = pos
    @rows[x][y]
  end

  def []=(pos, piece)
    x,y = pos
    # @rows[x] ||= {}
    @rows[x][y] = piece
  end

  def empty?(pos)
    self[pos].empty?
  end

  def valid_pos?(pos)
    pos.all?{|ele| ele >= 0 && ele <= 7}
  end

  def add_piece(piece, pos)
    self[pos] = piece
  end

  def move_piece(start_pos, end_pos)
    raise "No piece at start position" if empty?(start_pos)  
    piece = self[start_pos]
    # raise "Piece can not move to end pos" if module with moves for specif piece soen't have the pos included ith piece
    self[end_pos] = piece
    self[start_pos] = NullPiece.instance
    piece.pos = end_pos
    nil
  end

  def checkmate?(color)
    return false unless in_check?(color)

    pieces.select { |p| p.color == color }.all? do |piece|
      piece.valid_moves.empty?
    end
  end
  
  def fill_pawns_row(color)
    i = color == :white ? 6 : 1
    8.times { |j| Pawn.new(color, self, [i, j]) }
  end


end 

board_chess = Board.new
p board_chess
pi = Piece.new("black", board_chess, [0,0])
board_chess.add_piece([0,0], pi)
# p pi = Piece.new("black", row, [0,0])
# p row.add_piece(pi, [2,1])