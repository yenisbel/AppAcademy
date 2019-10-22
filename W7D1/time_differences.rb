# my_min: Given a list of integers find the smallest number in the list.


# Phase II

# O(n), cause iterating the whole arry to compare each element inside

def my_min(arry)
    mini = arry.first
    arry.each do |ele|
        if ele < mini
            mini = ele
        end
    end
    mini
end

# def my_min(arry)
#     arry.min
# end

# Test
list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5


# Largest Contiguous Sub-sum
# You have an array of integers and you want to find the largest contiguous
# (together in sequence) sub-sum. 
# Find the sums of all contiguous sub-arrays and return the max.

# Phase I
# Write a function that iterates through the array and finds all sub-arrays 
# using nested loops. First make an array to hold all sub-arrays. 
# Then find the sums of each sub-array and return the max

# O(n^2), cause iterating the whole arry to find subarray, so nested loops of O(n)


def largest_contiguous_subsum(arry)
    sums = 0
    size = arry.length

    (0..size - 1).each do | i|
        sub = []
        (i + 1..size).each do |j|
            sub = arry[i..j]
            if sub.sum > sums
                sums = sub.sum 
            end
        end
    end
    sums
end

# Phase II
# Let's make a better version. Write a new function using O(n) time with O(1) memory. 
# Keep a running tally of the largest sum.

# O(n) complexity with actual_sum as memorization variable O(1)
###look for all positive contiguous segments and keeping tracking of the sum

def largest_contiguous_subsum(arry)
    bigone = arry.first || 0
    actual_sum = 0

    arry.each do |number|
        actual_sum += number
        if actual_sum > bigone
            bigone = actual_sum 
        end
        if actual_sum < 0
            actual_sum = 0 
        end
    end
    return bigone
end


# Test 
list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8
list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])
list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])

# possible sub-sums
[5]           # => 5
[5, 3]        # => 8 --> we want this one
[5, 3, -7]    # => 1
[3]           # => 3
[3, -7]       # => -4
[-7]          # => -7

    