class StaticPagesController < ApplicationController
  before_action :authenticate_user!
  
  def home
    @messages = Message.all
  end
end
