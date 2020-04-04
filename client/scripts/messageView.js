var MessageView = {


  render: _.template(`

      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="text"><%= text %></div>
        <div class="roomname"><%= roomname %></div>
        <div></div>
      </div>

    `)

  // render: _.template(
  //     "<div class="chat">" +
  //       "<div class="username"></div>" +
  //       "<div></div>" +
  //     "</div>"
  //   );



};

// _.template -->
// storing the data in messages.js
// MessagesView.render -> has to call MessageView.render