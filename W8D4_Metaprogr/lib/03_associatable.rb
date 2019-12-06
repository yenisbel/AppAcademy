require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  
  def model_class
    # ...
    @class_name.constantize
  end


  def table_name
    # ...
    self.model_class.table_name
  end
end


class BelongsToOptions < AssocOptions
  def initialize(name, options = {})

    @class_name = name.to_s.capitalize if !options[:class_name]
    @primary_key = :id if !options[:primary_key]
    @foreign_key = (name.to_s.downcase + "_id").to_sym if !options[:foreign_key] 

    options.each do |key, value|
      self.send("#{key}=", value)
    end
    
  
    # ...
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    # ...
    @class_name = name.to_s.capitalize.singularize if !options[:class_name]
    @primary_key = :id if !options[:primary_key]
    @foreign_key = (self_class_name.downcase + "_id").to_sym if !options[:foreign_key] 

    options.each do |key, value|
      self.send("#{key}=", value)
    end
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    # ...

    
    #<BelongsToOptions:0x00007ff0eb9ef410 @class_name="Human", @primary_key=:id, @foreign_key=:owner_id>
    self.assoc_options[name] = BelongsToOptions.new(name, options) 


    define_method(name) do
      options = self.class.assoc_options[name]

      foreign_key1 = self.send(options.foreign_key)
      options.model_class.where(options.primary_key => foreign_key1).first
    end



  end

  def has_many(name, options = {})
    # ...
    self.assoc_options[name] = HasManyOptions.new(name, self.name, options) 


    define_method(name) do
      options = self.class.assoc_options[name]

      foreign_key1 = self.send(options.primary_key)
      options.model_class.where(options.foreign_key => foreign_key1)
    end
  end

  def assoc_options
    if @assoc_options
      return  @assoc_options
    else
      @assoc_options = {}
    end

    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  # Mixin Associatable here...
  extend Associatable
end
