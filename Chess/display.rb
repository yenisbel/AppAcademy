require 'colorize'
require_relative 'cursor'

class Display

    def initialize(board)
      @board = board
      @cursor = Cursor.new([0,0], board)
    end

    def render
        @board.rows.map.with_index do |row, i|
            row.map.with_index do |piece, j|
                piece.to_s + "----"
            end
        end
    end
    
end