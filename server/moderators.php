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
                $query = $type = "moderator" ? "AND type='moderator'" : "";                
            }           
            $query = mysqli_query($conn, "SELECT * FROM `admin` WHERE status='1' $query") or die(mysqli_error($conn));			
            if( mysqli_num_rows($query) > 0 ){   
                $responseList = array("data"=>[]);
                while( $res = mysqli_fetch_array($query)){                    
                    $response["id"] = $res['id'];                    
                    $response["name"] = $res['name'];
                    $response["address"] = $res['address'];
                    $response["phone"] = $res['phone'];
                    $response["email"] = $res['email'];
                    $response["username"] = $res['username'];
                    $response["password"] = $res['password'];
                    $response["created"] = $res['created'];
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