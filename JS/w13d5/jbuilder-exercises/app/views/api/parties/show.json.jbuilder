json.name @party.name

json.guests @party.guests do |gu|
    json.name gu.name
    json.gifts gu.gifts, :title
end