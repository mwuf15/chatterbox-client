var Rooms = {

  storage: {},

  add: function(event) {
    var roomName = $('#roomid').val();
    Rooms.storage[roomName] = roomName;
    RoomsView.renderRoom(roomName);
    $("#roomid").val("");
  }
};
