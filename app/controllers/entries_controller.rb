class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    p feed.entries.count
    feed.reload
    p feed.entries.count
    render :json => feed.entries
  end
end
