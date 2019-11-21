# PHASE 2
def convert_to_int(str)
  begin
    Integer(str)
  rescue ArgumentError
    p "argument needs to be an Integer. pls check it"
    nil   
  end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

class CoffeeReaction < StandardError
  def message
    "I can't take coffee"
  end
end

class FruitsReaction < StandardError
  def message
    "Is not a fruit"
  end
end


def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    p "OMG, thanks so much for the #{maybe_fruit}!"
  elsif maybe_fruit == 'coffee'
    raise CoffeeReaction
  else 
    raise FruitsReaction
  end 
end

def feed_me_a_fruit
  p "Hello, I am a friendly monster. :)"

  begin 
    p "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue CoffeeReaction => e 
    p e.message 
    retry 
  rescue FruitsReaction => e  
    p e.message  
  end 
end  

# PHASE 4

class YearsError < ArgumentError
  def message
    "years known needs at least 5 years"
  end
end

class FulNameError < ArgumentError
  def message
    " must have name"
  end
end

class FavPstTime < ArgumentError
  def message
    "must have favorite time "
  end
end

class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    raise FulNameError if name.length <= 0
    raise YearsError if yrs_known < 5
    raise FavPstTime if fav_pastime.length <= 0
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


