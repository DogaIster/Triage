class CreateEncourters < ActiveRecord::Migration[5.1]
  def change
    create_table :encourters do |t|
      t.integer :encourterID
      t.string :visitNumber
      t.string :admittedAt
      t.string :dischargedAt
      t.string :location
      t.integer :room
      t.integer :bed
      t.integer :patientID

      t.timestamps
    end
  end
end
