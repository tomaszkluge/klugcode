<?php 

    if(isset($_POST['btn']))
    {
       $UserName = $_POST['name'];
       $Email = $_POST['email'];
       $Subject = $_POST['Subject'];
       $Msg = $_POST['comment'];

       if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
       {
           echo 'Message not sent, please try again.';
       }
       else
       {
           $to = "info@klugcode.dev";

           if(mail($to,$Subject,$Msg,$Email))
           {
               echo 'Message sent.';
           }
       }
    }
    
?>