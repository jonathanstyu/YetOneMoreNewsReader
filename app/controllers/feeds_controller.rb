class FeedsController < ApplicationController
  before_filter :check_current_user
  
  def index
    @feeds = @current_user.feeds 
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @feeds }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
  
  private
  
  def check_current_user
    unless @current_user
      flash[:error] = "Please Login"
      redirect_to login_path
    end
  end
  
end
