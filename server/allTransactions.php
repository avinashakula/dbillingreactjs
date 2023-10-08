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
            $date1 = mysqli_real_escape_string($conn, $datas->date1);
            $date2 = mysqli_real_escape_string($conn, $datas->date2);
            $transaction = mysqli_real_escape_string($conn, $datas->transaction);
            $typeOfLogin = mysqli_real_escape_string($conn, $datas->typeOfLogin);
            
            if( !empty($date1) && !empty($date2) && !empty($transaction) ){
                if( $typeOfLogin == "admin" ){
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date2') AND transaction='$transaction'";
                }else{
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date2') AND login='$typeOfLogin' AND transaction='$transaction'";
                }										
            }else if( !empty($date1) && !empty($date2) && empty($transaction) ){
                if( $typeOfLogin == "admin" ){
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date2')";
                }else{
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date2') AND login='$typeOfLogin'";
                }	
            }else if( !empty($date1) && empty($date2) && empty($transaction) ){    
                if( $typeOfLogin == "admin" ){
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date1')";
                }else{
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date1') AND login='$typeOfLogin'";
                }	
            }else if( empty($date1) && !empty($date2) && empty($transaction) ){
                if( $typeOfLogin == "admin" ){
                    $qry = "AND (`date` BETWEEN '$date2' AND '$date2')";
                }else{
                    $qry = "AND (`date` BETWEEN '$date2' AND '$date2') AND login='$typeOfLogin'";
                }
            }else if( !empty($date1) && empty($date2) && !empty($transaction) ){    
                if( $typeOfLogin == "admin" ){
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date1') AND transaction='$transaction'";
                }else{
                    $qry = "AND (`date` BETWEEN '$date1' AND '$date1') AND login='$typeOfLogin' AND transaction='$transaction'";
                }
            }else if( empty($date1) && !empty($date2) && !empty($transaction) ){
                if( $typeOfLogin == "admin" ){
                    $qry = "AND (`date` BETWEEN '$date2' AND '$date2') AND transaction='$transaction'";
                }else{
                    $qry = "AND (`date` BETWEEN '$date2' AND '$date2') AND login='$typeOfLogin' AND transaction='$transaction'";
                }
            }else{ 
                if( $login == "admin" ){
                    $qry = "";
                }else{
                    $qry = "AND login='$login'";
                }
            }
           
            $query = mysqli_query($conn, "SELECT * FROM `invoices` WHERE status='1' $qry") or die(mysqli_error($conn));			
            if( mysqli_num_rows($query) > 0 ){       
                header("Content-Type: JSON");
                $responseList = array("data"=>[]);

                while( $res = mysqli_fetch_array($query)){
                    $response["id"] = $res['id'];
                    $response["customer"] = $res['customer'];
                    $response["mobile"] = $res['mobile'];
                    $response["info"] = $res['info'];
                    $response["total"] = $res['total'];
                    $response["qty"] = $res['qty'];
                    $response["total"] = $res['finaltotal'];
                    $response["typeOfPayment"] = $res['fullPayment'];
                    $response["partialPayment"] = $res['partialPayment'];
                    $response["transaction"] = $res['transaction'];
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