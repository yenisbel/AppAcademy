require_relative '03_associatable'

# Phase IV
module Associatable
  # Remember to go back to 04_associatable to write ::assoc_options

  def has_one_through(name, through_name, source_name)
    # ...

    p name, through_name, source_name

    define_method(name)do

      through_options = self.class.assoc_options[through_name]
      source_options = through_options.model_class.assoc_options[source_name]

      through = through_options.table_name
      through_pri = through_options.primary_key
      through_for = through_options.foreign_key

      source = source_options.table_name
      source_pri = source_options.primary_key
      source_for = source_options.foreign_key

      arg = self.send(through_for)

      query = DBConnection.execute(<<-SQL, arg)
        SELECT #{source}.*
        FROM #{through}
        JOIN #{source} ON #{through}.#{source_for} = #{source}.#{source_pri}
        WHERE #{through}.#{through_pri} = ?
      SQL

      source_options.model_class.parse_all(query).first
    end
  end
end

