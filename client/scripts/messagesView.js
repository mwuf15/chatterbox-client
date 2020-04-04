var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$chats.on('submit', FormView.handleSubmit);
    // MessagesView.render();
  },


  render: function() {
    // var html = "";

    // Messages.storage.forEach((element) => { html += MessageView.render(element)})
    for (var i = 0; i < Messages.storage.length; i++) {
      MessagesView.renderMessage(Messages.storage[i]);
    }
    // MessagesView.$chats.append(html);

  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render(message));
  }

};