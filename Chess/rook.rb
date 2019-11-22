require_relative 'piece'
require_relative 'slideable'

class Rook < Piece
  include Slideable

  def move_dirs
    horizontal_and_vertical_dirs
  end
  def symbol
    'r'.colorize(color)
  end

end