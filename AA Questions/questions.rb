
require_relative './questionsdatabase'

class Questions 

     def self.all
        question_data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
        question_data.map{|question| Questions.new(question)}

    end

    def initialize(options) 
         
        @id = options['id']
        @author_id = options['author_id']
        @body = options['body']
        @title = options['title']

    end

    def self.find_by_id(id)

        question_data = QuestionsDatabase.instance.execute(<<-SQL,id)
         SELECT 
           questions.*
         FROM 
            questions
         WHERE 
           questions.id = ?
        SQL

        question_data.nil? ? nil : question_data


    end


    def self.find_by_author(author_id)
      
        question_data = QuestionsDatabase.instance.execute(<<-SQL, author_id)
         SELECT 
           questions.*
         FROM 
            questions
         WHERE 
           questions.author_id = ?
        SQL

    end

    def self.find_by_title(title)
        question_data = QuestionsDatabase.instance.execute(<<-SQL, title)
         SELECT 
           questions.*
         FROM 
            questions
         WHERE 
           questions.title = ?
        SQL

        question_data.nil? ? nil : question_data
    end

    def self.find_by_body(body)
        question_data = QuestionsDatabase.instance.execute(<<-SQL, body)
         SELECT 
           questions.*
         FROM 
            questions
         WHERE 
           questions.body = ?
        SQL

        question_data.nil? ? nil : question_data
    end

    def most_followed(n)
        QuestionsFollow.most_followed_questions(n)
    end









end