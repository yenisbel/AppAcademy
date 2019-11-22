require_relative 'display'
class Player
    attr_reader :color, :display
  
    def initialize(color, display)
      @color = color
      @display = display
    end

    def make_move(test_board)
        start_pos, end_pos = nil, nil
    
        until start_pos && end_pos
          display.render
    
          if start_pos
           
          else
            
          end
        end
    
        [start_pos, end_pos]
    end
end
  