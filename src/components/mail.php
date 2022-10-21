<?php

if (isset($_POST['email']) && $_POST['email'] != '' && $_POST['name'] != '' && $_POST['comment'] != '') {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $admin_email = "info@klugcode.dev";
        $email = $_REQUEST['email'];
        $name = $_REQUEST['name'];
        $comment = $_REQUEST['comment'];

        mail($admin_email, "$name", $comment, "From:" . $email);

        echo '<script language="javascript">';
        echo 'alert("Message sent")';
        echo '</script>';
    } else {
        echo '<script language="javascript">';
        echo 'alert("The message has not been sent. Try again.")';
        echo '</script>';
    }
}
