def bad_two_sum?(arr, target_sum)
    #brute force solution
    i = 0
    while i < arr.length
        j = i + 1
        while j < arr.length
            return true if arr[i] + arr[j] == target_sum
            j += 1
        end
        i += 1
    end
    return false
    #time complexity is O(n^2)
end

def okay_two_sum?(arr, target_sum)
    #sort then solve
    arr.sort!
    arr.any? {|ele| arr.include?(target_sum - ele)}
    #time complexity is O(nlogn) based on runtime of arr.sort!
end

def two_sum?(arr, target_sum)
    #determines whether any two integers in the array sum to target amount
    #use hash map. should be O(n) time
    map = Hash.new
    arr.each do |ele|
        sum = target_sum - ele
        if map.key?(sum)
            return true
        else
            map[ele] = 0
        end
    end
    return false
end

arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false