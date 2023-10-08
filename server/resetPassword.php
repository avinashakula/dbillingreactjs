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
            $password = mysqli_real_escape_string($conn, $datas->password);
            $newPassword1 = mysqli_real_escape_string($conn, $datas->newPassword1);
            $newPassword2 = mysqli_real_escape_string($conn, $datas->newPassword2);
            $id = mysqli_real_escape_string($conn, $datas->id);
            if( $newPassword1 == $newPassword2 ){
                if( !empty($datas->password) && !empty($datas->id) && !empty($datas->newPassword1) && !empty($datas->newPassword2) ){
                    $confirmPassword = mysqli_query($conn, "SELECT password FROM `admin` WHERE id='$id'") or die(mysqli_error($conn));
                    if( mysqli_num_rows($confirmPassword) == 1 ){ 
                        $res = mysqli_fetch_array($confirmPassword);
                        if( $res['password'] == $password ){
                            $query = mysqli_query($conn, "UPDATE `admin` SET password='$newPassword1' WHERE id='$id'") or die(mysqli_error($conn));			
                            $query ? result("Success", $response, true) : result("Something went wrong try again", $response);
                        }else{
                            result("Invalid Password", $response);
                        } 
                    }else{
                        result("Invalid Account", $response);
                    }                   
                }else{                
                    result("Invalid Information", $response);
                }
            }else{
                result("Password Mismatched", $response);
            }
        }else{
            result("DB Connection Error", $response);
        }
    }else{
        result("Unauthorized Link", $response);
    }   

?>