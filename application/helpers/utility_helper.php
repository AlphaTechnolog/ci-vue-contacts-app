<?php
/**
*
* utility_helper: Archivo con la programación de funciones
*
* Autor: Franklim Guerra
*
*/

/**
*
* asset_url: Funcion que retorna la url de los utilitarios
*
* Autor: Jorge Pérez
*
*/
function asset_url(){
   return base_url().'assets/';
}

/**
*
* es_permitido: Funcion que retorna si un usuario está permitido a través de un rol o un permiso
*
* Autor: Franklim Guerra
*
*/
function es_permitido($permiso)
{
    if (isset($_SESSION['dataSessionpersonapanafugas']))
    {
        $permisos = $_SESSION['dataSessionpersonapanafugas']['permisos'];
        if (in_array($permiso,$permisos))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

/**
*
* link_activo: Funcion que retorna la clave active para identificar que un hipervínculo está activo
*
* Autor: Franklim Guerra
*
*/
function link_activo($link)
{
    if (isset($_SESSION['link_active']))
    {
        if ( $_SESSION['link_active'] == $link )
            return "active";
    }
    else
    {
        if ($link == "link1")
            return "active";
    }
}

function xml_load($xml,$language)
{
    $objeto_xml = simplexml_load_file(APPPATH.'xml/'.$xml.'_'.$language.'.xml');
    return $objeto_xml;
}
?>
