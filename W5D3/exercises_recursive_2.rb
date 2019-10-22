def range(start_idx, end_idx)
    return [] if end_idx <= start_idx
    range(start_idx, end_idx - 1).push(end_idx-1) 
end

# p range(1, 4)

def sum_Recarray(array)
    return 0 if array.empty?
    return array[0] if array.length == 1
    array[0] + sum_array(array[1..-1])
end

# p sum_array([1,2,3,4])
# p sum_array([])
# p sum_array([1])

def sum_it_array(array)
    counter = 0
    array.each {|ele| counter += ele}
    counter
end

# p sum_it_array([1,2,3,4])
# p sum_it_array([])
# p sum_it_array([1])


def exp(base,power)
    return 1 if power == 0
    base * exp(base,power-1)
end

# p exp(2,3)
# p exp(2,0)

def exp_second(base,power)
    return 1 if power == 0
    
    result = exp_second(base,power/2)

    if power.even?
        result ** 2
    else
        base * (result ** 2)     
    end
end

# p exp_second(2,3)
# p exp_second(2,0)
# p exp_second(2,4)


# p exp_second(2,0)



def deep_dup(array)
    flat = []
    return [array] unless array.is_a?(Array)
    array.each do |ele|
        flat += deep_dup(ele)
    end
    flat
end

# p deep_dup([1, [2], [3, [4]]])
# robot_parts = [
#     ["nuts", "bolts", "washers"],
#     ["capacitors", "resistors", "inductors"]
#   ]
# p deep_dup(robot_parts)

def fibonacci(num)

    return [0,1].take(num) if num <= 2 
    previous = fibonacci(num - 1)
    scond = previous[-1] + previous[-2]
    previous << scond
    
end


# p fibonacci(1)
# p fibonacci(0)
# p fibonacci(2)
# p fibonacci(4)


def binary_search(array, target)
    return nil if array.empty?
    middle_index = array.length/2
    left_side = array[0...middle_index]
    right_side = array[middle_index+1..-1]
    if array[middle_index] > target
        binary_search(left_side,target)   
    elsif array[middle_index] == target
        return middle_index
    else
        binary_search(right_side,target)               
    end 
    

end

# p binary_search([1, 2, 3], 1) # => 0
# p binary_search([2, 3, 4, 5], 3) # => 1
# p binary_search([2, 4, 6, 8, 10], 6) # => 2

# input = [5,9,4,2]

def merge_sort(array)
    return array if array.length <= 1
    middle_index = array.length/2-1
    arry1 = array[0..middle_index]
    arry2 = array[(middle_index + 1)..-1]
    #Should be sorted by the time it reaches merge
    b = merge_sort(arry1)
    c = merge_sort(arry2)
    merge(b,c)

end

def merge(arry1, arry2)
    result = []
    until (arry1.empty? || arry2.empty?)
        if arry1.first < arry2.first
            result << arry1.shift
        else
            result << arry2.shift
        end
    end
    result + arry1 + arry2
end


# 1. Find the middle point to divide the array into two halves:  
# middle m = (l+r)/2
# 2. Call mergeSort for first half:   
# Call mergeSort(arr, l, m)
# 3. Call mergeSort for second half:
# Call mergeSort(arr, m+1, r)
# 4. Merge the two halves sorted in step 2 and 3:
# Call merge(arr, l, m, r)

input = [5,9,4,2]
# p input2
# p merge_sort(input)
# p merge_sort(input2)
# p merge([4,3,2,1],[8,7,6,5])

def subsets(arry)
    return [[]] if arry.empty?
    subarry = subsets(arry.take(arry.length - 1))
    c = subarry.map do |ele|
        ele + [arry[-1]]
    end
    subarry + c
end



# p subsets([]) # => [[]]
# p subsets([1]) # => [[], [1]]
# p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
# subsets([1, 2, 3])
# # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


def permutations(values)
    return [values] if values.length <= 1
    result = []
    values.each.with_index do |ele, i| 
        sub_values = values[0...i] + values[i+1..-1] 
        sub_permutations =  permutations(sub_values)  
       
        sub_permutations.length.times do |i|
            result << [ele] + sub_permutations[i]
        end
    end
    result
end



p permutations(["a", "b", "c","d"])
# p permutations([1,2])

# [["a", "b", "c"], 
# ["a", "c", "b"], 
# ["b", "a", "c"], 
# ["b", "c", "a"], 
# ["c", "a", "b"], 
# ["c", "b", "a"]]
# p [1].permutation.to_a
# p [1,2].permutation.to_a
# p [1,2,3].permutation.to_a
