class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :image_url
      t.string :title
      t.string :email
      t.string :phone
      t.date :hire_date
      t.boolean :training
      t.hstore :address
      t.string :slug

      t.timestamps
    end
  end
end
