module Api
  module V1
    class EmployeesController < ApplicationController

      def index
        @employees = Employee.all

        render json: EmployeeSerializer.new(@employees).serialized_json
      end
    end
  end
end