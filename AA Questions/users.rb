require_relative './questionsdatabase'

class User

    attr_accessor :id, :fname, :lname
  
    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users")
        data.map{|datum| User.new(datum)}

    end

    def initialize(options)
        
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']

    end

    def self.find_by_name(fname, lname)
      
        user_data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
         SELECT 
           users.*
         FROM 
            users
         WHERE 
           users.fname = ? AND users.lname = ?
        SQL

        user_data.nil? ? nil : user_data

    end

    def self.find_by_id(id)
        user_data = QuestionsDatabase.instance.execute(<<-SQL, id)
         SELECT 
           users.*
         FROM 
            users
         WHERE 
           users.id = ?
        SQL

        user_data.nil? ? nil : user_data

    end


end