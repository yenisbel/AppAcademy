require_relative 'tic_tac_toe'
require "byebug"


class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board, @next_mover_mark, @prev_move_pos = board, next_mover_mark, prev_move_pos
  end

  def losing_node?(evaluator)
    
    if board.over?
      return board.won? && board.winner != evaluator
    end

    if self.next_mover_mark == evaluator
      self.children.all? { |node| node.losing_node?(evaluator) }
    else
      self.children.any? { |node| node.losing_node?(evaluator) }
    end

  end

  def winning_node?(evaluator)
    if board.over?
      return board.winner == evaluator
    end
    if self.next_mover_mark == evaluator
      self.children.any?{ |child| child.winning_node?(evaluator) }
    else
      self.children.all?{ |child| child.winning_node?(evaluator) }
    end

  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    childs = []
    (0..2).each do |x|
      (0..2).each do |y|
        position = [x, y]
        next unless board.empty?(position)
        temp_board = board.dup
        temp_board[position] = self.next_mover_mark
        next_mover_mark = (self.next_mover_mark == :o ? :x : :o)
        childs << TicTacToeNode.new(temp_board, next_mover_mark, position) 
      end
    end
    childs
  end
end
