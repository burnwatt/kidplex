class ChangeUsernameOnUsers < ActiveRecord::Migration[5.2]
  # remove null constraint from username field for user signup by email only
  def change
    change_column_null :users, :username, true 
  end
end
