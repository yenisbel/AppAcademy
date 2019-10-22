require 'byebug'

def naive_solution(arr, range)
    cur_max_range = 0
    i = 0
    j = i + range
    while j < arr.length + 1
        #debugger
        if (arr[i...j].max - arr[i...j].min) > cur_max_range
            cur_max_range = (arr[i...j].max - arr[i...j].min)
        end
        i += 1
        j = i + range
    end
    return cur_max_range
    #time complexity is O(2n^2) => O(n^2)
end

# p naive_solution([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
# p naive_solution([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
# p naive_solution([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
# p naive_solution([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8

class MyQueue
    def initialize
        @queue = []
    end
    
    def enqueue(ele)
        @queue.push(ele)
    end

    def dequeue(ele)
        @queue.shift
    end

    def peek
        @queue.last
    end
    
    def empty?
        @queue.empty?
    end

    def size
        @queue.length
    end
end

class MyStack
    def initialize
        @store = []
    end

    def peek
        @store.last
    end
      
    def size
        @store.size
    end
    
    def empty?
        @store.empty?
    end

    def pop
        @store.shift   
    end

    def push(item)
        @store.push(item)   
    end
end
  
class StackQueue
    def initialize
        @pop_stack = MyStack.new
        @push_stack = MyStack.new
    end

    def size
        @pop_stack.length + @push_stack.length
    end

    def empty?
        @pop_stack.empty? && @push_stack.empty?
    end

    def enqueue(ele)
        @pop_stack.push(ele)
    end

    def dequeue
        @push_stack.push(@pop_stack.pop) if !@pop_stack.empty?
    end
end

class MinMaxStack
    def initialize
        @store = MyStack.new
        @max_s = MyStack.new
        @min_s = MyStack.new
    end

    def peek
        @store.peek
    end

    def size
        @store.size
    end

    def empty?
        @store.empty?
    end

    def max
        @max_s.peek
    end

    def min
        @min_s.peek
    end

    def pop
        #debugger
        @max_s.pop
        @min_s.pop
        @store.pop
    end

    def push(ele)
        # @max = ele if ele > @max
        # @min = ele if ele < @min
        @store.push(ele)

        if @max_s.size == 0 
            @max_s.push(ele)
        elsif ele > max 
            @max_s.push(ele)
        else
            @max_s.push(max)
        end
        
        if @min_s.size == 0 
            @min_s.push(ele)
        elsif ele < min 
            @min_s.push(ele)
        else
            @min_s.push(min)
        end
    end
end

class MinMaxStackQueue
    attr_reader :pop_stack, :push_stack

    def initialize
        @pop_stack = MinMaxStack.new
        @push_stack = MinMaxStack.new
    end

    def size
        @pop_stack.size + @push_stack.size
    end

    def empty?
        @pop_stack.empty? && @push_stack.empty?
    end

    def enqueue(ele)
        #debugger
        @pop_stack.push(ele)
    end

    def dequeue
        #debugger
        @push_stack.push(@pop_stack.pop) if !@pop_stack.empty?
    end

    def max
        @pop_stack.max unless @pop_stack.empty?
    end

    def min
        @pop_stack.min unless @pop_stack.empty?
    end
end

def windowed_max_range(arr, range)
    cur_max_range = 0
    answer = 0
    queue = MinMaxStackQueue.new
    arr.each do |ele|
        #break if queue.size > range
        queue.enqueue(ele)
        queue.dequeue if queue.pop_stack.size > range
        #debugger
        if queue.pop_stack.size == range
            cur_max_range = queue.max - queue.min
            #debugger
            answer = cur_max_range if answer < cur_max_range
        end
        #debugger
        #answer = cur_max_range if answer < cur_max_range
    end
    return answer
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
#p windowed_max_range([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
#p windowed_max_range([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
#p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8