<?php

class Mcontacts extends CI_Model
{
    public function fetchall()
    {
        $sql = "SELECT * FROM contacts";
        $contacts = $this->db->query($sql);

        foreach ($contacts->result() as $row) {
            $item = [
                "id"     => $row->id,
                "name"   => $row->name,
                "phone"  => $row->phone
            ];

            $contactsList[] = $item;
        }

        return json_encode($contactsList);
    }
}