<?php
if (isset($_REQUEST['email'])) {

    $admin_email = "info@klugcode.dev";
    $email = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $comment = $_REQUEST['comment'];

    mail($admin_email, "$name", $comment, "From:" . $email);

    echo "Dziękuję za kontakt.";
} else {
?>

    <form method='post'>
        <label>Your Name</label>
        <input name='name' type='text'></input>
        <label>Email</label>
        <input name='email' type='email'></input>
        <label>Details</label>
        <textarea name='comment' rows='6' placeholder='Type a message_'></textarea>
        <button className='btn'>Send</button>
    </form>

<?php
}
?>