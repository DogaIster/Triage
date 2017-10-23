class CreatePatients < ActiveRecord::Migration[5.1]
  def change
    create_table :patients do |t|
      t.integer :patientID
      t.string :mrn
      t.string :firstName
      t.string :middleName
      t.string :lastName
      t.integer :weight
      t.integer :height

      t.timestamps
    end
  end
end
