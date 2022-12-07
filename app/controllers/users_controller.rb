class UsersController < ApplicationController
    
    def index 
        users = User.all
        render json: users, status: :ok
    end

    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :accepted
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :position, :manager?, :email, :password, :avatar)
    end
end