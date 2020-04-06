var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
    // for (var i = 0; i < Messages.storage.length; i++) {
    //   MessagesView.renderMessage(Messages.storage[i]);
    // }
    for (var i = 0; i < Rooms.roomStorage.length; i++) {
      if (Rooms.roomStorage[i].roomname === undefined) {
        RoomsView.renderRoom('lobby');
      } else {
        RoomsView.renderRoom(Rooms.roomStorage[i].roomname);
      }
    }
  },

  roomsRender: _.template(`

      <div class="rooms">
        <option value="roomname"><%- roomname %></option>
      </div>

    `),

  renderRoom: function(room) {
    // RoomsView.$select.append(RoomsView.roomsRender(room));
    RoomsView.$select.append('<option value="roomname"><%- roomname %></option>');
  },

};

// _.template(`

//       <div class="chat">
//         <div class="username"><%= username %></div>
//         <div class="text"><%= text %></div>
//         <div class="roomname"><%= roomname %></div>
//         <div></div>
//       </div>

//     `)