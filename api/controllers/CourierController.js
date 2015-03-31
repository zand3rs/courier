/**
 * CourierController
 *
 */

module.exports = {

  send: function(req, res) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log("send");

    var channel = req.param("channel");
    var message = req.param("message");
    var courier = new Courier(channel);

    console.log("channel: ", channel);
    console.log("message: ", message);

    courier.send(message, function(err) {
      res.json(err || "OK");
    });
  },

  //----------------------------------------------------------------------------

  recv: function(req, res) {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("recv");

    var channel = req.param("channel");
    var courier = new Courier(channel);

    courier.recv(function(err, message) {
      console.log("channel: ", channel);
      console.log("message: ", message);

      res.json(err || message);
    });
  }

};
