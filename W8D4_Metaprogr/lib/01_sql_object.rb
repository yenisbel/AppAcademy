require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    @columns ||= DBConnection.execute2(<<-SQL)
      Select #{table_name}.* from #{table_name} limit 0
    SQL
    @columns.first.map!(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |col| 
      define_method(col) do
        self.attributes[col]
      end

      define_method("#{col}=") do |arg|
        self.attributes[col] = arg
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    temp = DBConnection.execute(<<-SQL)
      Select #{table_name}.* from #{table_name}
    SQL

    parse_all(temp)
  end

  def self.parse_all(results)
    # ...
    results.map{|result| self.new(result)}
  end

  def self.find(id)
    # ...
    inst = DBConnection.execute(<<-SQL, id)
      Select #{table_name}.* from #{table_name} where #{table_name}.id = ?
    SQL
    
    parse_all(inst)[0]
  end

  def initialize(params = {})
    # ... {"id"=>1, "name"=>"Breakfast", "owner_id"=>1} 
    params.each do |key, value|
      key = key.to_sym
      raise "unknown attribute '#{key}'" if !self.class.columns.include?(key)
      self.send("#{key}=" , value)
    end
  end

  def attributes
    @attributes ||= {}
    # ...
  end

  def attribute_values
    @attributes.values
    
  end

  def insert
    # ...
    column_names = self.class.columns.drop(1).join(", ")
    questions = (["?"] * (self.class.columns.length - 1)).join(", ")
    DBConnection.execute(<<-SQL, *attribute_values)
      INSERT INTO #{self.class.table_name} (#{column_names})
      VALUES (#{questions})
    SQL
    
    self.id= DBConnection.last_insert_row_id
  end

  def update
    # ...
    column_names = self.class.columns.map{ |key| "#{key} = ?" }.join(", ")
    DBConnection.execute(<<-SQL, *attribute_values, id)
      UPDATE #{self.class.table_name}
      SET #{column_names}
      WHERE id = ?
    SQL
    
    self.id= DBConnection.last_insert_row_id

  end

  def save
    # ...
    if self.id.nil?
      self.insert
    else
      self.update
    end
  end
end
