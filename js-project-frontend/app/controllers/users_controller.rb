class UsersController < ApplicationController

    
    def create

        @user = User.new(user_params)


           if @user.save
            
             session[:user_id] = @user.id
            
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
