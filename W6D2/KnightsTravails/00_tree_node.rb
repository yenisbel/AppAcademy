class PolyTreeNode

    attr_accessor :parent, :children, :value

    def initialize(value = nil)
        @parent = nil
        @children = []
        @value = value
    end

    def parent=(parent = nil)
        old_parent = @parent 
        old_parent.children.delete(self) if @parent
        @parent = parent
        parent.children << self if parent && !parent.children.include?(self)
    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        raise "Error" if !@children.include?(child)
        child.parent = nil
    end

    def dfs(target)
        return self if self.value == target
        self.children.each do |child|
            val = child.dfs(target)
            return val unless val.nil?
        end 
        nil       
    end

    def bfs(target)
        queue = [self]
        until queue.empty?
            val = queue.shift
            return val if target == val.value
            val.children.each do |child|
                queue << child
            end
        end
        nil
    end


end