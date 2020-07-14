var Rooms = {

  add: function(event) {
    var roomName = $('#roomid').val();
    console.log('room:',roomName);
    RoomsView.renderRoom(roomName);
    console.log('click!');
  }
};
