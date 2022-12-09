class SessionsController < ApplicationController

    def create
        user = User.find_by(email:params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :accepted
        else
            render json: { errors: "invalid password or username" }, status: :unauthorized
        end
    end

    def show
        
    end

    def delete
        session.delete :user_id
        head :no_content
    end
end
