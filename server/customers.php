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
            $type = mysqli_real_escape_string($conn, $datas->type);
            if( !$type ){
                $query = "";
            }else{
                $query = "AND type='$type'";
            }
           
            $query = mysqli_query($conn, "SELECT * FROM `customers` WHERE status='1' $query") or die(mysqli_error($conn));			
            if( mysqli_num_rows($query) > 0 ){       
                header("Content-Type: JSON");
                $responseList = array("data"=>[]);

                while( $res = mysqli_fetch_array($query)){
                    $response["id"] = $res['id'];
                    $response["mobile"] = $res['mobile'];
                    $response["name"] = $res['name'];
                    $response["address"] = $res['address'];
                    $response["gst"] = $res['gst'];
                    $response["state"] = $res['state'];
                    $response["pincode"] = $res['pincode'];
                    $response["city"] = $res['city'];
                    $response["type"] = $res['type'];
                    array_push($responseList["data"],$response);
                }
                result("Success", $responseList, true);   
            }else{
                result("No Records Available", $responses);
            }
        }else{
            result("DB Connection Error", $responses);
        }
    }else{
        result("Unauthorized Link", $responses);
    }   

?>