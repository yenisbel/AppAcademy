require 'rspec'
require 'dessert'
require 'chef'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { Chef.new("lolo") }
  let(:dessert1) { Dessert.new("sweet", 1, chef)} 
  let(:dessert2) {Dessert.new("cookie", 2, "Lola")}
  
  describe "#initialize" do
    it "sets a type" do
      expect(dessert2.type).to be_truthy
    end

    it "sets a quantity" do
      expect(dessert2.quantity).to be_truthy
    end

    it "starts ingredients as an empty array" do
      expect(dessert1.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect{Dessert.new("supers", "1", "Lola")}.to raise_error(ArgumentError)
      # raise ArgumentError unless quantity.is_a?(Integer)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      other_ingredient = dessert2.add_ingredient("sugar")
      expect(other_ingredient).to eq(["sugar"])
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      other_ingredient =["flour", "cinammon"]
      other_ingredient.each do |ing|
        dessert2.add_ingredient(ing)
      end
      expect(dessert2.mix!).to eq(["flour", "cinammon"])
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      dessert2.eat(1)
      expect(dessert2.quantity).to eq(1)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect{dessert2.eat(3)}.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Lolo")
      expect(dessert1.serve).to eq("Chef Lolo has made 1 sweets!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert1)
      dessert1.make_more
    end
  end
end
