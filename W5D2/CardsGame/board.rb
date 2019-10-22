class Board
  
    def initialize(size)
      @rows = Array.new(4) { Array.new(4) }
      @size = size
      populate
    end
  
    def [](pos)
      row, col = pos
      rows[row][col]
    end
  
    def []=(pos, value)
      row, col = pos
      rows[row][col] = value
    end
end