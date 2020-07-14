var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    // input is a message object
    // adds a child to the #chats div

    // use message view's render method to create a new message div
    var $messageDiv = MessageView.render(message);
    // get document element by id: chat
    // prepend message div to that element
    MessagesView.$chats.prepend($messageDiv);
  }
};