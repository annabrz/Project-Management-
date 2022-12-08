class SessionsController < ApplicationController
    wrap_parameters format: []
    def create
        user = User.find_by(email:params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: "invalid password or username" }
        end
    end
end
