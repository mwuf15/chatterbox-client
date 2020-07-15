var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // console.log('this will get call');
  },

  render: function(messagesList, roomName) {
    MessagesView.$chats.html("");
    for (var i = messagesList.length - 1; i >= 0; i--) {
      //if messagelist.roomname === roomName
      if (messagesList[i].roomname === roomName) {
        MessagesView.renderMessage(messagesList[i]);
      }
    }
  },

  renderMessage: function(message) {
    // input is a message object
    // adds a child to the #chats div
    if (message.username === undefined){
      message.username = 'no username'
    }
    if (message.text === undefined) {
      message.text = 'message not found';
    }
    // use message view's render method to create a new message div
    // console.log('username:',message.username)
    var $messageDiv = MessageView.render(message);
    // get document element by id: chat
    // prepend message div to that element
    MessagesView.$chats.prepend($messageDiv);
  },

  filterMessages: function(roomName) {
    //loop thru messagelist
    //if messagelist.roomname === roomName
    //renderMessage(messagelist[i])
  }
};