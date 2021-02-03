<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CI Vue</title>
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/custom.css">
    <script src="<?php echo base_url(); ?>assets/js/util/html.js"></script>
    <script src='<?php echo base_url(); ?>assets/js/vue/vue.js'></script>
    <!-- _components -->
    <script src='<?php echo base_url(); ?>assets/js/views/navbar.js'></script>
    <script src='<?php echo base_url(); ?>assets/js/views/home.js'></script>
    <!-- _components__home -->
    <script src='<?php echo base_url(); ?>assets/js/components/contacts.js'></script>
    <script src='<?php echo base_url(); ?>assets/js/components/contact.js'></script>
</head>
<body>
    <!-- Consts -->
    <script>
        window.BASE_URL = '<?php echo base_url(); ?>'
    </script>

    <div id='app'>
        <?php include('navbar.php') ?>