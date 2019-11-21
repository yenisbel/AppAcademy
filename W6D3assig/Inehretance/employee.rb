class Employee
    attr_reader :name, :salary, :title, , :boss 
    attr_accessor :bonus

    def initialize(name, salary, title, boss)
        @name = name
        @salary = salary
        @title = title
        @boss = boss
    end

    def bonus(multiplier)
        sum = 0 
        if self.boss.nil?
          return bonus = self.salary * multiplier 
        else
          self.subemployees.each do |salary|
            sum += salary
          end 
          return sum * multiplier
        end 
    end   
end








ned.bonus(5) # => 500_000
darren.bonus(4) # => 88_000
david.bonus(3) # => 30_000