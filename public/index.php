<?php

use App\Router\Router;
use App\Exceptions\RouteNotFoundException;


//utilisation de composer autoload pour l' auto-chargement des classes (norme psr) ici la psr4
include '../vendor/autoload.php';
// creation de la constante vers les vues (on va s'en servir dans renderer.php)
define('BASE_VIEW_PATH', dirname((__DIR__)) . DIRECTORY_SEPARATOR . 'App' . DIRECTORY_SEPARATOR . 'templates' .DIRECTORY_SEPARATOR);

//routing voir router.php
$router = new Router();
//la methode register revois la route (/ )" et on lui passe la méthode index de la classe HomeController
$router->register('/', ['App\Controllers\HomeController', 'index']);

// ici on "attrape le retour de la methode resolve soit la route / sinon on renvoie une erreur (methode pedagogique à ne pas utiliser en production)
 try {
   echo $router->resolve($_SERVER['REQUEST_URI']);
 } catch (RouteNotFoundException $e) {
    echo $e->getMessage();
 }
