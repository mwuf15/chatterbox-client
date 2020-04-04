var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
    for (var i = 0; i < Rooms.roomStorage.length; i++) {
      RoomsView.renderRoom(Rooms.roomStorage[i]);
    }
  },

  roomsRender: _.template(`

      <div class="rooms">
        <option value="roomname"><%= roomname %></option>
      </div>

    `),

  renderRoom: function(room) {
    RoomsView.$select.append(RoomsView.roomsRender(room));
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