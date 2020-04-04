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
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    // data returned from the server
    // Parse.readAll = Ajax request
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      //adds data to messages

      // loop through the results array
      // access the roomname for each object
      // push the roomnames into roomStorage

      for (var i = 0; i < data.results.length; i++) {
        Rooms.roomStorage.push(data.results[i].roomname);
      }

      // Rooms.roomStorage = roomarrayresults;
      Messages.storage = data.results;
      MessagesView.render();
      //all datas coming back are in data.results
      // once data is finished loading, the callback runs stopSpinner and the spinner stops
      // asynchronous function, data must finish loading before callback() invoked
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
