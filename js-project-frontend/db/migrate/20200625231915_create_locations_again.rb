class CreateLocationsAgain < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :city 
      t.integer :user_id
      t.integer :trip_id
    end
  end
end
