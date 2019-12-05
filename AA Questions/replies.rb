require_relative './questionsdatabase'


class Replies 
    attr_accessor :id , :author_id , :body , :question_id , :parent_id

    def self.all
        reply_data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
        reply_data.map{|reply| Replies.new(reply)}

    end

    def initialize(options) 
         
        @id = options['id']
        @author_id = options['author_id']
        @body = options['body']
        @question_id = options['question_id']
        @parent_id = options['parent_id']

    end
    
    def self.find_by_user_id(authorid)
      
        reply_data = QuestionsDatabase.instance.execute(<<-SQL,authorid)
         SELECT 
           replies.*
         FROM 
            replies
         WHERE 
           replies.author_id = id
        SQL

        reply_data.nil? ? nil : reply_data

    end

    def self.find_by_question_id(id)
        reply_data = QuestionsDatabase.instance.execute(<<-SQL, questionid)
         SELECT 
           replies.*
         FROM 
            replies
         WHERE 
           replies.question_id = ?
        SQL

        reply_data.nil? ? nil : reply_data

    end

    def author   
        Users.find_by_id(author_id)
    end

    
    def question
        Questions.find_by_question_id(question_id)
    end
    
    def parent_reply
    end
    
    def child_replies
    end








end