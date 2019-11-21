require_relative 'employee'

class Manager < Employee 
    attr_reader :subemployees
  def initialize (name, salary, title, boss)
    super 
    @subemployees = []
  end 
end 








