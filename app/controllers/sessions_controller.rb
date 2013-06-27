class SessionsController < ApplicationController
  
  def login
    render :login
  end

  def create
    @user = User.find_by_email(params[:email])
    if @user
      session[:token] = @user.token = SecureRandom.urlsafe_base64(25)
      @user.save!
      redirect_to root_path
    else
      render :json => "error"
    end
  end
  
  def destroy
    if session[:token]
      session[:token] = nil
    else
    end
  end
end
