module Slideable
    HORIZONTAL_AND_VERTICAL_DIRS = [[-1, 0],[0, -1],[0, 1],[1, 0]]
    
    DIAGONAL_DIRS = [[-1, -1],[-1, 1],[1, -1],[1, 1]]
    
    attr_reader :DIAGONAL_DIRS, :HORIZONTAL_AND_VERTICAL_DIRS
    
    def moves
        moves
        move_dirs.each do |delta|
            x1,y1 = delta
            moves.concat(grow_unblocked_moves_in_dir(x1, y1))
        end
        moves
    end

    def grow_unblocked_moves_in_dir(dx, dy)
        x,y = pos
        moves = []
        loop do
            new_pos = [x + dx, y + dy]
            if board.empty?(new_pos) && board.valid_pos?(new_pos)
                moves.push(new_pos)
            else
                break
            end
        end
        moves
    end

    def move_dirs
    end

    def horizontal_and_vertical_dirs
        HORIZONTAL_AND_VERTICAL_DIRS
      end
    
    def diagonal_dirs
        DIAGONAL_DIRS
    end
end