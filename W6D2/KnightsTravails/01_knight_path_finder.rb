require_relative "./00_tree_node"
require "byebug"

class KnightPathFinder
    attr_reader :pos, :considered_positions, :root

    VALID_MOVES = [
                [1, 2],
                [-1, -2],
                [1, -2],
                [-1, 2],
                [2, 1], 
                [-2, -1], 
                [2, -1],
                [-2, 1]
            ]

    def initialize(pos)
        @pos = pos
        @considered_positions = [@pos]
        build_move_tree
    end
    
    def self.valid_moves(position)
        valid = []
        x1, y1 = position
        VALID_MOVES.each do |delta|
            x2, y2 = delta
            new_pos = [x1 + x2, y1 + y2]
            if (new_pos.all?{ |el| el >= 0 && el <= 7 })
                valid << new_pos
            end
        end
        valid
    end

    def new_move_positions(position)
        new_arr = []
        KnightPathFinder.valid_moves(position).each do |e|
            new_arr << e if !@considered_positions.include?(e)
            @considered_positions << e
        end
        new_arr
    end

    def build_move_tree
        @root = PolyTreeNode.new(pos)
        queue = [@root]  
        until queue.empty?
            actual_node = queue.shift
            actual_pos = actual_node.value
            moves = new_move_positions(actual_pos)
            moves.each do |move|
                node = PolyTreeNode.new(move)
                queue << node
                actual_node.add_child(node)
            end
        end
    end

    def find_path(final_pos)
        node = @root.dfs(final_pos)
        trace_back_path(node).reverse.map(&:value)
    end

    def trace_back_path(final_node)
        nodes = []
        step_node = final_node
        until step_node.nil?
            nodes << step_node
            step_node = step_node.parent
        end
        nodes
    end

end



kpf = KnightPathFinder.new([0, 0])

p kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]