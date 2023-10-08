<?php

    include("./config/Database.php");
    include("./utils/functions.php");
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
    
    $response = array();
    if( isAuthorized() ){        
        if( $conn ){
            $json = file_get_contents('php://input');
            $datas = json_decode($json);           
            $id = mysqli_real_escape_string($conn, $datas->id);
            if( !empty($datas->id) ){
                $confirmUser = mysqli_query($conn, "SELECT status FROM `admin` WHERE id='$id'") or die(mysqli_error($conn));
                if( mysqli_num_rows($confirmUser) == 1 ){ 
                    $res = mysqli_fetch_array($confirmUser);    
                    $status = 0;
                    if( $res['status'] == "1" ){
                        $status = 0;
                    }else if( $res['status'] == "0" ){
                        $status = 1;
                    }                
                    $query = mysqli_query($conn, "UPDATE `admin` SET status='$status' WHERE id='$id'") or die(mysqli_error($conn));			
                    $query ? result("Success", $response, true) : result("Something went wrong try again", $response);                        
                }else{
                    result("Invalid Account", $response);
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