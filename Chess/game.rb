require_relative 'board'
require_relative 'player'

class Game
  attr_reader :board, :display, :current_player, :players

  def initialize
    @board = Board.new
    @display = Display.new(@board)
    @players = {
      white: Player.new(:white, @display),
      black: Player.new(:black, @display)
    }
    @current_player = :white
  end

  def play
    begin
        start_pos, end_pos = players[current_player].make_move(board)
        board.move_piece(current_player, start_pos, end_pos)
        swap_turn!
    rescue StandardError => e
        @display.notifications[:error] = e.message
        retry
    end
    display.render
  end

  def swap_turn!
    @current_player == :white ? :black : :white
  end
end