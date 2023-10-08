<?php

    include("./config/Database.php");
    include("./utils/functions.php");
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $responses = array();
    if( isAuthorized() ){
        if( $conn ){
            $json = file_get_contents('php://input');
            $datas = json_decode($json);
            $password = mysqli_real_escape_string($conn, $datas->password);
            $name = mysqli_real_escape_string($conn, $datas->name);
            $id = mysqli_real_escape_string($conn, $datas->id);           
            if( isset($datas->password) && isset($datas->name) && isset($datas->id)){
                $query = mysqli_query($conn, "UPDATE `admin` SET password='$password', name='$name' WHERE id='$id'") or die(mysqli_error($conn));			
                if( $query ){
                    result("Success", $response, true);                    
                }else{
                    result("No Records Available", $response);
                }
            }else{
                    result("Invalid Information", $response);
            }            
        }else{
            result("DB Connection Error", $response);
        }
    }else{
        result("Unauthorized Link", $response);
    }   

?>