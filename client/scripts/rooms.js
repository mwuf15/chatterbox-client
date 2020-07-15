var Rooms = {

  storage: {lobby:'lobby'},

  add: function(event) {
    var roomName = $('#roomid').val();
    Rooms.storage[roomName] = roomName;
    RoomsView.renderRoom(roomName);
    $("#roomid").val("");
  }
};
