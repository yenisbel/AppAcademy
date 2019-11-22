module Stepable
    def moves
        move_diffs.each do |delta|
            x1,y1 = delta
            # start_pos from piec
            x,y = pos
            new_pos = [x + x1, y + y1]
            if board.empty?(new_pos) && board.valid_pos?(new_pos)
                moves.push(new_pos)
            end
        end
    end
    
    def move_diffs
    end
end