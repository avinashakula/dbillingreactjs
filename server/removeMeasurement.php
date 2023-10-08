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
            $id = mysqli_real_escape_string($conn, $datas->id);           
            if( !empty($datas->id) ){
                $existanceCheck = mysqli_query($conn, "SELECT * FROM `quantity` WHERE id='$id'") or die(mysqli_error($conn));			
                if( mysqli_num_rows($existanceCheck) == 1 ){
                    $query = mysqli_query($conn, "DELETE FROM `quantity` WHERE id='$id'") or die(mysqli_error($conn));			
                    if( $query ){
                        result("Success", $response, true);                    
                    }else{
                        result("Something went wrong, try again", $response);
                    }
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