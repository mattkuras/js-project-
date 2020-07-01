class UsersController < ApplicationController

    def index
        @users = User.all  
        render json: @users, include: [:trips]
    end

    def create
        @user = User.new(user_params)
        
           if @user.save
         session[:user_id] = @user.id
         render json: @user, include: [:trips]
           end
           
    end

       
    private
    
    def user_params 
        params.require(:user).permit(
            :password,
            :name,
            :username,
            :search
        )
    end


end
