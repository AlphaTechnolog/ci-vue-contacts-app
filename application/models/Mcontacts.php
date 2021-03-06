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

    public function add($name, $phone)
    {
        $sql = 'INSERT INTO contacts (name, phone) VALUES ("' . $name . '", "' . $phone . '");';
        $this->db->query($sql);
        return json_encode(true);
    }
    
    public function delete($id)
    {
        $sql = 'DELETE FROM contacts WHERE id = ' . $id;
        $this->db->query($sql);
        return json_encode($sql);
    }
}