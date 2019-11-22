class Cursor

    attr_reader :cursor_pos, :board
  
    def initialize(cursor_pos, board)
      @cursor_pos = cursor_pos
      @board = board
      
    end
end