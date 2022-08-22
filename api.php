<?php
  require __DIR__ . '/database.php';

    //creo un array vuoto      
    $data = [];
    
    //vedo se nella chiamata axios league a qualche valore 
    if(!empty($_GET) && $_GET['league'] !== 'All'){
        
        foreach ($database as $data) {
            
            // controllo che siamo uguali le parole quella cercata dall'utente e quella del database
            if ($data['league'] === $_GET['league']) {
                
              $filtredArray[] = $data;
            }
        }

        $data = $filtredArray;

    } else {
        
      $data = $database;
    }

  header('Content-Type: application/json');
  
  echo json_encode($data);
?>