<?php

class Home extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database('default');
    }

    private function getContacts()
    {
        $this->load->model('mcontacts');
        $contacts = $this->mcontacts->fetchall();
        return $contacts;
    }

    public function index()
    {
        $contacts = $this->getContacts();
        $this->load->view('includes/template', [
            'main_content' => 'home',
            'contacts'     => $contacts
        ]);
    }
}