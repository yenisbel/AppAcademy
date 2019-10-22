# Let's implement a Tile class to represent each position on the Sudoku board. 
# Each Tile has a value and is either given or not. You cannot change the value of any Tile
#  unless it was given (that would be cheating!) The game would be incredibly frustrating if we 
# didn't have some way to distinguish given Tiles from non-givens. You'll want to account for this when writing 
# the Tile#to_s method. If you haven't already, check out the colorize gem!

class Tile
    
    attr_accessor :number
    def initialize(number = nil)
        @number = number
        @given_num = number.nil? ? false : true
    end

    def given?
        @given_num
    end




    
end