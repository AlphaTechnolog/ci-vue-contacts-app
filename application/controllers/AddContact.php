<?php

class AddContact extends CI_Controller
{
    public function index()
    {
        $this->load->view('includes/template', [
            'main_content' => 'addContact'
        ]);
    }
}