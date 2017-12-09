<?php
  session_start();
  session_regenerate_id(true);
  include_once ('topBar.php');
  include_once('../phpUtils/user.php');
  $user_todolists = getUserTodoLists($_SESSION['login-user']);
 ?>


 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>MY TODO LISTS</title>
   </head>
   <body>
     <h1> All of My Todo Lists </h1>
     <div class="todolists">
       <?php
        foreach ($user_todolists as $todolist){
          echo '<section class="todolist">
              <h3>';
          echo $todolist["title"];
          echo '</h3>    <aside>';
          echo $todolist["category"];
          echo '</aside>
              <footer>';
          echo '<form action="todolistoptions.php" method="post">
            <input type="hidden" name="todolistid" value="';
          echo $todolist['todoListID'];
          echo'">';
          echo ' <input type="submit" value="View TODO LIST" >
          </form>';
          echo '<form action="../phpUtils/removelist.php" method="post">
            <input type="hidden" name="todolistid" value="';
          echo $todolist['todoListID'];
          echo'">';
          echo ' <input type="submit" value="DELETE" >
          </form>';
          echo'</footer>
          </section>';
        }
      ?>
     </div>
   </body>
 </html>
