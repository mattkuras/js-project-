class UsersController < ApplicationController

    
    def create

        @user = User.new(user_params)

        @user.identities.each do |i|
            i.name = i.community.name 
        end
      #  byebug
           if @user.save
            
             session[:user_id] = @user.id
             redirect_to '/posts'
           else
            10.times {@user.identities.build}
             render 'new'
            
           end
    end

       
    private
    
    def user_params 
        params.require(:user).permit(
            :password,
            :name,
            :email,
            :search
        )
    end


end
