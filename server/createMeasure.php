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
            $name = mysqli_real_escape_string($conn, $datas->name);                   
            if( !empty( $datas->name) ){
                $checkStockName = mysqli_query($conn, "SELECT * FROM quantity WHERE quantity='$name'") or die(mysqli_error($conn));
                if( mysqli_num_rows($checkStockName) == 0 ){
                    $query = mysqli_query($conn, "INSERT INTO quantity (quantity, status) VALUES('$name', '1')") or die(mysqli_error($conn));		
                    if( $query ){                   
                        result("New Measurement Created", $response, true);                   
                    }else{
                        result("Something went wrong from server side", $response);
                    }
                }else{
                    result("Measurement name already taken or existed", $response);
                }
            }else{
                result("All fields are mandagory", $response);
            }
        }else{
            result("DB Connection Error", $response);
        }
    }else{
        result("Unauthorized Link", $response);
    }   

?>