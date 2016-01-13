$(function () {
    
    var content = $('#content');
    var input = $('#input');
    var status = $('#status');
    
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var connection = new WebSocket('ws://127.0.0.1:1337');

    // open, message, error implementation goes here
});