var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.renderRoom('lobby');
    $('#lobby').attr("selected", "selected");
    RoomsView.$select.on('change', MessagesView.filterMessages);
  },

  render: function() {
    for (var message of Messages.storage) {
      if (message.roomname !== undefined) {
        var safeRoom = _.template(`<%-roomname%>`);
        var roomName = safeRoom(message);
        if (roomName !== "" && Rooms.storage[roomName] === undefined) {
          Rooms.storage[roomName] = roomName;
          RoomsView.renderRoom(roomName);
        }
      }
    }

  },

  renderRoom: function(roomName) {
    var $room = `<option id="${roomName}">${roomName}</option>`;
    RoomsView.$select.append($room);
  }
};
