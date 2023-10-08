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
            $username = mysqli_real_escape_string($conn, $datas->username);
            $password = mysqli_real_escape_string($conn, $datas->password);

            $date = date('Y-m-d');
            if (  !empty($username) && !empty($password) ){
                $query = mysqli_query($conn, "SELECT * FROM `admin` WHERE username='$username' AND password='$password'") or die(mysqli_error($conn));			
                if( mysqli_num_rows($query) == 1 ){                			
                    $res = mysqli_fetch_array($query);
                    $response["login_id"] = $res['id'];
                    $response["login_username"] = $res['username'];
                    result("Success", $response, true);
                }else{                    
                    result("Invalid Credentials", $response);
                }			
            }else{
                result("All fields are mandatory", $response);
            }
        }else{
            result("DB Connection Error", $response);
        }
    }else{
        result("Unauthorized Link", $response);
    }   

?>