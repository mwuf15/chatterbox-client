var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(roomName) {
    var $room = '<option></option>';
    RoomsView.$select.append($room).val(roomName);
  }
};
