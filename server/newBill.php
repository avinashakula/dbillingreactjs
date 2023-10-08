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
            $customername = mysqli_real_escape_string($conn, $datas->customername);
            $customerId = mysqli_real_escape_string($conn, $datas->customerId);
            $mobile = mysqli_real_escape_string($conn, $datas->mobile);
            $state = mysqli_real_escape_string($conn, $datas->state);           
            $city = mysqli_real_escape_string($conn, $datas->city);           
            $address = mysqli_real_escape_string($conn, $datas->address);           
            $pincode = mysqli_real_escape_string($conn, $datas->pincode);
            $gst = mysqli_real_escape_string($conn, $datas->gst);           
            $dispatchThrough = mysqli_real_escape_string($conn, $datas->dispatchThrough);           
            $vehicle = mysqli_real_escape_string($conn, $datas->vehicle);           
            $transaction = mysqli_real_escape_string($conn, $datas->transaction);           
            $openingBalance = mysqli_real_escape_string($conn, $datas->openingBalance);           
            $billInfo = mysqli_real_escape_string($conn, $datas->billInfo);           
            $total = mysqli_real_escape_string($conn, $datas->billTotal);           
            $qty = mysqli_real_escape_string($conn, $datas->billQty);
            $finalTotal = mysqli_real_escape_string($conn, $datas->billFinalTotal);
            $date = "";
            $status = "1";
            $login = mysqli_real_escape_string($conn, $datas->login);            
            $fullPayment = mysqli_real_escape_string($conn, $datas->fullPayment);           
            $partialPayment = mysqli_real_escape_string($conn, $datas->partialPayment);           
            $pendingAmount = mysqli_real_escape_string($conn, $datas->pendingAmount);           
            $refId = mysqli_real_escape_string($conn, $datas->refId);           
            $finalBillAmount = mysqli_real_escape_string($conn, $datas->finalBillAmount);           
            $hamaliCharges = mysqli_real_escape_string($conn, $datas->hamaliCharges);    
            $custGivenAmount = mysqli_real_escape_string($conn, $datas->custGivenAmount);           
            $transportInformation = mysqli_real_escape_string($conn, $datas->transportInformation);           


            $query = mysqli_query($conn, "INSERT INTO customers (name, mobile, address, gst, state, pincode, city, type) VALUES('$name', '$mobile', '$address', '$gstin', '$state', '$pincode', '$city', '$type')") or die(mysqli_error($conn));		
	
            if( $query ){
                $response["name"] = $datas->name;
                $response["mobile"] = $datas->mobile;
                result("New Record Created", $response, true);                   
            }else{
                result("Something went wrong from server side", $response);
            }
        }else{
            result("DB Connection Error", $response);
        }
    }else{
        result("Unauthorized Link", $response);
    }   

?>