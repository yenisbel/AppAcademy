json.array! @guests do |guest|
    if guest.age > 40 
        json.name guest.name
        json.age guest.age 
        
    end
        
end