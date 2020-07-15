var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(() => {
      RoomsView.render();
      App.stopSpinner();
    });

    setInterval(()=>{
      App.startSpinner();
      App.fetch(App.stopSpinner);
    }, 10000)

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages.storage = data.results;
      // console.log('this is message storage',Messages.storage)
      var selectedRoom = $("select option:selected").text();
      MessagesView.render(Messages.storage, selectedRoom);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
