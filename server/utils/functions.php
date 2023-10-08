<?php
    function result($msg, $array, $status=false){
        header("Content-Type: JSON");
        $array['status'] = $status;
        $array['msg'] = $msg;
        echo json_encode($array, JSON_PRETTY_PRINT);
    }
?>