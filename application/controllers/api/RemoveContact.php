<?php

class RemoveContact extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database('default');
    }

    public function index($id)
    {
        $this->load->model('mcontacts');
        $this->mcontacts->delete($id);
        echo "Contact deleted successfully";
    }
}