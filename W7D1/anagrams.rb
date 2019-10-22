# Phase I

#this implementation is O(n^2) cause iterate throug the n element in array, and 
# also the include? is O(n) cause is iterate throug second arry searching for char

def first_anagram?(str1, str2)
    return false if str1.length != str2.length
    str1.chars.all? {|char| str2.include?(char)}
end

#Phase III

def third_anagram?(str1, str2)
    str1.length == str2.length && str1.chars.sort == str2.chars.sort
end


#Phase IV

## Time complexity is O(n) cause only iterate once to create a hash 
###and the operation to consult or insert hash is O(1) lookup

def vfourth_anagram?(str1, str2)
    # hash1 = {}
    # hash2 = {}
    # str1.each_char {|char| hash1[char] = true}
    # str2.each_char {|char| hash2[char] = true}
    # hash1 == hash2
    creat_hash(str1) == creat_hash(str2)
end

def creat_hash(str)
    result_hash = {}
    str.each_char do |letter|
        result_hash[letter] = true
    end
    result_hash
end

def fourth_anagram?(str1, str2)
    hash1 = {}
    str1.each_char {|char| hash1[char] = true}
    str2.each_char.all? {|char| hash1.key?(char)}
end

# Test

p vfourth_anagram?("gizmo", "sally")    #=> false
p vfourth_anagram?("elvis", "lives")    #=> true