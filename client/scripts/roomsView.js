var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    console.log('options: ', $('#rooms option'));
    RoomsView.$select.on('change', function(event) {
      console.log('selected:', $("select option:selected").text());

    });
  },

  render: function() {
    for (var message of Messages.storage) {
      if (message.roomname !== undefined) {
        var safeRoom = _.template(`<%-roomname%>`);
        var roomName = safeRoom(message);
        Rooms.storage[roomName] = roomName;
      }
    }
    RoomsView.$select.html("");
    for (var room in Rooms.storage) {
      if (room !== "") {
        RoomsView.renderRoom(room);
      }
    }
  },

  renderRoom: function(roomName) {
    var $room = `<option id="${roomName}">${roomName}</option>`;
    RoomsView.$select.append($room);
  }
};
