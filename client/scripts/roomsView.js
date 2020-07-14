var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  render: function() {
  },

  renderRoom: function(roomName) {

    var $room = `<option id="${roomName}">${roomName}</option>`;
    console.log(roomName);
    RoomsView.$select.append($room);
    // $(`#${roomName}`).val(roomName);
    // var roomOption = document.createElement("option");
    // roomOption.text = roomName;
    // RoomsView.$select.add(roomOption, null);
  }
};
