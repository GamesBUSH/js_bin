<!DOCTYPE html>
<html>
    <head>
      <script src = "src.js"></script>
    </head>
 <body>
    <h2> HTML Формы</h2>
   
     <form action="/action_page.php"
         onsubmit="return print_message()">
     <label for = "name">Имя</label><br>
     <input type = "text" id = "name"
            name = "name" value = "">
     <br>

     <br>
     <input type = "submit" value = "Отправить">
     </form>
   <p id = 'message'></p>
 </body>
</html>

# JavaScript:
# function print_message(){
#   name = document.getElementById('name').value;
#   document.getElementById('message').innerHTML = 'На страницу action_page.php будет отправлено имя: ' + name;
#   return false;
# }
