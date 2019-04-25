class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    message = Message.create(user_id: current_user.id, content: params[:content])

    ActionCable.server.broadcast("chatroom_channel", {message: message, user: message.user})

    render json: {status: 204}
  end

  def get_current_user
    render json: {current_user_id: current_user.id}
  end
end
