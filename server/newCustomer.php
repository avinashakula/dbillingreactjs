<?php

    include("./config/Database.php");
    include("./utils/functions.php");

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: Content-Type");

    $response = array();
    if( isAuthorized() ){
        if( $conn ){
            $json = file_get_contents('php://input');
            $datas = json_decode($json);
            if( $datas->mobile ){
                $type = json_encode($datas->typeofperson);
                $mobile = mysqli_real_escape_string($conn, $datas->mobile);
                $name = mysqli_real_escape_string($conn, $datas->name);
                $address = mysqli_real_escape_string($conn, $datas->address);
                $gstin = mysqli_real_escape_string($conn, $datas->gstin);
                $state = mysqli_real_escape_string($conn, $datas->state);
                $pincode = mysqli_real_escape_string($conn, $datas->pincode);
                $city = mysqli_real_escape_string($conn, $datas->city);
                            
                $get = mysqli_query($conn, "SELECT * FROM customers WHERE mobile='$mobile'") or die(mysqli_error($conn));
                $getResultCount = mysqli_num_rows($get);
                if( $getResultCount == 0 ){
                    $query = mysqli_query($conn, "INSERT INTO customers (name, mobile, address, gst, state, pincode, city, type) VALUES('$name', '$mobile', '$address', '$gstin', '$state', '$pincode', '$city', '$type')") or die(mysqli_error($conn));		
                    if( $query ){
                        $response["name"] = $datas->name;
                        $response["mobile"] = $datas->mobile;
                        result("New Record Created", $response, true);                   
                    }else{
                        result("Something went wrong from server side", $response);
                    }
                }else{
                    result("Mobile already taken", $response);
                }
                
            }else{
                result("All inputs are mandatory", $response);
            }
          
        }else{
            result("DB Connection Error", $response);
        }
    }else{
        result("Unauthorized Link", $response);
    }   

?>