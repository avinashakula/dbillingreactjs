<?php

    include("./config/Database.php");
    include("./utils/functions.php");
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $responses = array();
    header("Content-Type: JSON");
    $responseList = array("data"=>[]);
    if( isAuthorized() ){
        if( $conn ){
            $json = file_get_contents('php://input');
            $datas = json_decode($json);
            
            $id = mysqli_real_escape_string($conn, $datas->id);           
            if( isset($datas->id)){
                $query = mysqli_query($conn, "DELETE FROM `customers` WHERE id='$id'") or die(mysqli_error($conn));			
                if( $query ){
                    $response["status"] = true;
                    $response["message"] = "Success";
                    array_push($responseList["data"],$response);                    
                    result("Success", $responseList, true);                
                }else{
                    $response["status"] = false;
                    $response["message"] = "Try again";
                    array_push($responseList["data"],$response);                    
                    result("Try again", $responseList, true);       
                }
            }else{
                $response["status"] = false;
                $response["message"] = "Invalid Information";
                array_push($responseList["data"],$response);                    
                result("Invalid Information", $responseList, true);  
            }            
        }else{
            $response["status"] = false;
            $response["message"] = "DB Connection Error";
            array_push($responseList["data"],$response);                    
            result("DB Connection Error", $responseList, true);  
        }
    }else{
        $response["status"] = false;
        $response["message"] = "Unauthorized Link";
        array_push($responseList["data"],$response);                    
        result("Unauthorized Link", $responseList, true);
    }   

?>