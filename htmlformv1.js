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
    <form action="/action_page.php"
         onsubmit="return print_message_1()">
     <label for = "fam">Фамилия</label><br>
     <input type = "text" id = "fam"
            fam = "fam" value = "">
     <br>

     <br>
     <input type = "submit" value = "Отправить">
     </form>
   <p id = 'message'></p>
    <form action="/action_page.php"
         onsubmit="return print_message_2()">
     <label for = "oh">Очество</label><br>
     <input type = "text" id = "oh"
            oh = "oh" value = "">
     <br>

     <br>
     <input type = "submit" value = "Отправить">
     </form>
   <p id = 'message'></p>
    <form action="/action_page.php"
         onsubmit="return print_message_3()">
     <label for = "oh">Телефон</label><br>
     <input type = "text" id = "tel"
            tel = "tel" value = "">
     <br>

     <br>
     <input type = "submit" value = "Отправить">
     </form>
   <p id = 'message'></p>
 </body>
</html>

# JavaScript

#function print_message(){
#  name = document.getElementById('name').value;
#  document.getElementById('message').innerHTML = 'На страницу action_page.php будет отправлено имя: ' + name;
#  return false;
#}
#function print_message_1(){
#  fam = document.getElementById('fam').value;
#  document.getElementById('message').innerHTML = 'На страницу action_page.php будет отправлено фамилия: ' + fam;
#  return false;
#}
#function print_message_2(){
#  oh = document.getElementById('oh').value;
#  document.getElementById('message').innerHTML = 'На страницу action_page.php будет отправлено очество: ' + oh;
#  return false;
#}
#function print_message_3(){
#  oh = document.getElementById('tel').value;
#  document.getElementById('message').innerHTML = 'На страницу action_page.php будет отправлено телефон: ' + tel;
#  return false;
#}
