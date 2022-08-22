<?php
  require __DIR__ . '/database.php';

  $data = [];
    
  $data = $database;

  header('Content-Type: application/json');
  
  echo json_encode($data);
?>