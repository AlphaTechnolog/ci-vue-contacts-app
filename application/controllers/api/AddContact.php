<?php

class AddContact extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database('default');
    }

    public function index($name, $phone)
    {
        $this->load->model('mcontacts');
        $this->mcontacts->add($name, $phone);
        redirect('home');
    }
}