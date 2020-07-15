var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.renderRoom('lobby');
    console.log('should be lobby element', $('#lobby'));
    $('#lobby').attr("selected", "selected");
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
        // console.log('this is :', roomName)
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
