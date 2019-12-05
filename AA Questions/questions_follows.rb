require_relative "./questionsdatabase"

class QuestionsFollow 
    
  def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions_follows")
        data.map{|datum| QuestionsFollow.new(datum)}

  end

  def initialize(options)  
    @id = options["id"]
    @question_id = options["question_id"]
    @user_id = options["user_id"]

  end

  def self.followers_for_question_id(question_id)
    question_follows_data = QuestionsDatabase.instance.execute(<<-SQL,question_id)

    SELECT
        users.*
    FROM 
      users  
    JOIN 
       questions_follows 
    ON
      users.id = questions_follows.user_id
    WHERE 
      questions_follows.question_id = ?
    SQL

    question_follows_data.nil? ? nil : question_follows_data
        
  end
  
  def self.followed_questions_for_user_id(user_id)
    question_follows_data = QuestionsDatabase.instance.execute(<<-SQL,user_id)

    SELECT
        questions.*
    FROM 
      questions 
    JOIN 
       questions_follows 
    ON
      questions.id = questions_follows.question_id
    WHERE 
      questions_follows.user_id = ?
    SQL

    question_follows_data.nil? ? nil : question_follows_data

  end

  def self.most_followed_questions(n)

    question_follows_data = QuestionsDatabase.instance.execute(<<-SQL, n)

    SELECT
        questions.*  
    FROM 
      questions 
    JOIN 
       questions_follows 
    ON
      questions.id = questions_follows.question_id
    GROUP BY
        questions.id
    ORDER BY
        COUNT(*) DESC
    LIMIT
      n
    SQL

    question_follows_data.nil? ? nil : question_follows_data
  end



end