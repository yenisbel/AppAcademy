require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    comp_node = TicTacToeNode.new(game.board, mark)

    moves = comp_node.children

    comp_node = moves.find { |child| child.winning_node?(mark) }
    return comp_node.prev_move_pos if comp_node

    comp_node = moves.find { |child| !child.losing_node?(mark) }
    return comp_node.prev_move_pos if comp_node

    raise "You have sunk my battleship"
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
