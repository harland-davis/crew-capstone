class Employee < ApplicationRecord
  before_create :slugify
  
  def slugify
    self.slug = first_name.parameterize
  end
end
