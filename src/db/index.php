<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conect to DB
$server = "localhost"; $user = "root"; $password = ""; $nameDB = "konecta";
$conectionDB = new mysqli($server, $user, $password, $nameDB);


// Consult data
if (isset($_GET["consult"])){
    $sqlProducts = mysqli_query($conectionDB,"SELECT * FROM products WHERE id=".$_GET["consult"]);
    if(mysqli_num_rows($sqlProducts) > 0){
        $products = mysqli_fetch_all($sqlProducts,MYSQLI_ASSOC);
        echo json_encode($products);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Delete data
if (isset($_GET["delete"])){
    $sqlProducts = mysqli_query($conectionDB,"DELETE FROM products WHERE id=".$_GET["delete"]);
    if($sqlProducts){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Create data
if(isset($_GET["insert"])){
    $data = json_decode(file_get_contents("php://input"));
    $name_p=$data->name_p;
    $reference=$data->reference;
    $price=$data->price;
    $weight_p=$data->weight_p;
    $category=$data->category;
    $stock=$data->stock;
    $created_data=$data->created_data;
        if(($name_p!="")&&($reference!="")&&($price!="")&&($weight_p!="")&&($category!="")&&($stock!="")&&($created_data!="") ){
            
    $sqlProducts = mysqli_query($conectionDB,"INSERT INTO products(name_p,reference,price, weight_p, category,stock,created_data) VALUES('$name_p','$reference', '$price', '$weight_p', '$category', '$stock', '$created_data') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}
// Refresh data
if(isset($_GET["refresh"])){
    
    $data = json_decode(file_get_contents("php://input"));
    $id=(isset($data->id))?$data->id:$_GET["refresh"];
    $name_p=$data->name_p;
    $reference=$data->reference;
    $price=$data->price;
    $weight_p=$data->weight_p;
    $category=$data->category;
    $stock=$data->stock;
    $created_data=$data->created_data;
    
    $sqlProducts = mysqli_query($conectionDB,"UPDATE products SET name_p='$name_p',reference='$reference', price='$price', weight_p='$weight_p', category='$category', stock='$stock', created_data='$created_data' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consult all data
$sqlProducts = mysqli_query($conectionDB,"SELECT * FROM products ");
if(mysqli_num_rows($sqlProducts) > 0){
    $products = mysqli_fetch_all($sqlProducts,MYSQLI_ASSOC);
    echo json_encode($products);
}
else{ echo json_encode([["success"=>0]]); }


?>