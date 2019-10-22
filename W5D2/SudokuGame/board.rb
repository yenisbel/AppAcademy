
# A Board should store a grid of Tiles. Define your Board#initialize method to accept such a grid as an argument. 
# Since our puzzles exist as text files, let's write a Board::from_file factory method to read a file and parse 
# it into a two-dimensional Array containing Tile instances.

# The Board class will be doing much of the heavy lifting for our game's logic. It will need the following methods:

# A method to update the value of a Tile at the given position
# A render method to display the current board state
# A solved? method to let us know if the game is over
# I used several helper methods here. You will want to know if each row, column, and 3x3 square has been solved.

require_relative 'tile'

class Board
 
  # def initialize(grid)
  #   @grid_tiles = Array.new(9) {Array.new(9)}
  #   (0...9).each do |i|
  #     (0...9).each do |j|
  #       number = grid[i][j]
  #       @grid_tiles[i][j] = Tile.new(number)
  #     end
  #   end
  # end
  def self.from_file(file)
    File.readlines(file).map { |str| str.chomp.split(",") }
  end

  def initialize(file)
    grid = Board.from_file(file) 
    @grid_tiles = Array.new(9) {Array.new(9)}
    (0...9).each do |i|
      (0...9).each do |j|
        number = grid[i][j]
        @grid_tiles[i][j] = Tile.new(number)
      end
    end
  end

  def check_number?(row, col, number)
    tile = @grid_tiles[row][col]
    return false if tile.given?
    return false unless check_row?(row, number)
    return false unless check_col?(col, number)
    return false unless check_block?(row, col, number)

    return true
  end

  def check_row?(row, number)
    (0...9).each do |col|
      tile = @grid_tiles[row][col]
      return false if tile.number == number
    end
    true
  end

  def check_col?(col, number)
    (0...9).each do |row|
      tile = @grid_tiles[row][col]
      return false if tile.number == number
    end
    true
  end

  def check_block?(row, col, number)
    first_inblock_row = (row / 3) * 3
    first_inblock_col = (col / 3) * 3
    (0...3).each do |row|
      (0...3).each do |col|
        tile = @grid_tiles[ first_inblock_row + row][ first_inblock_col + col]
        return false if tile.number == number
      end
    end
    true
  end

  def update(row, col, number)
    if check_number?(row, col, number)
      tile = @grid_tiles[row][col] 
      tile.number = number
    end
  end

  def solved?
    (0...9).each do |row|
      (0...9).each do |col|
        tile = @grid_tiles[row][col]
        return false if tile.number.nil?
        
      end
    end
    true
  end
end

require "rspec/autorun"
RSpec.describe Board do
  it "Create board" do
    b = Board.new("config.txt")
    expect(b.solved?).to eq true
  end
end





