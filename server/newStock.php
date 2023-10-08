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
            $qty = mysqli_real_escape_string($conn, $datas->qty);
            $price = mysqli_real_escape_string($conn, $datas->price);           
	                      
            $checkStockName = mysqli_query($conn, "SELECT * FROM stock WHERE name='$name'") or die(mysqli_error($conn));
            if( mysqli_num_rows($checkStockName) == 0 ){
                $query = mysqli_query($conn, "INSERT INTO stock (name, qty, actualprice, status) VALUES('$name', '$qty', '$price', '1')") or die(mysqli_error($conn));		
                if( $query ){                   
                    result("New Stock Created", $response, true);                   
                }else{
                    result("Something went wrong from server side", $response);
                }
            }else{
                result("Stock name already taken or existed", $response);
            }		
            
        }else{
            result("DB Connection Error", $response);
        }
    }else{
        result("Unauthorized Link", $response);
    }   

?>