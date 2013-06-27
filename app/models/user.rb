class User < ActiveRecord::Base
  attr_accessible :email, :token
  
  has_many :subscriptions
  has_many :feeds, :through => :subscriptions
end
