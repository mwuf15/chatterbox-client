var Friends = {

// toggleStatus:
storage: {},

addFriends: function(event) {
  var friend = event.target.innerText;
  Friends.storage[friend] = friend;
  console.log(Friends.storage);
  MessagesView.filterMessages();
}
};