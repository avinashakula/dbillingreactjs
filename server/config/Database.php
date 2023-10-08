<?php    
    function isAuthorized(){
        if( $_SERVER['HTTP_HOST']=="desireitservices.in" ) return true;
    }    
   $host = "localhost";
   $username = "dbillingreact";
   $password = "lBEhA4[,hPqU";
   $database = "dbilling_react";

   $conn = db_connection();

   function db_connection(){
       static $conn;        
       if( $conn == NULL ){
           $conn = mysqli_connect($GLOBALS['host'], $GLOBALS['username'], $GLOBALS['password'], $GLOBALS['database']);        
       }
       return $conn;
   }
?>