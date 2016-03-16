<div  id="chat" class="row">
    <div class="container">
            <div class="col-md-3" >
                <h1>Chat online</h1>
                <hr>
            </div>

            <div class="col-md-12">
            <ul id="messages">
            </ul>
                <form action="">
                  <input id="message_field" autocomplete="off" /><button>Send</button>
                </form>
            </div>
    </div>
</div>
<hr>
<style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
<script type="text/javascript" src="./js/admin.js" ></script>