class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :title, :email, :phone, :image_url, :hire_date, :training, :address
end
