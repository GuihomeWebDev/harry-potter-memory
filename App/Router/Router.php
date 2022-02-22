<?php 

namespace App\Router;

use App\Exceptions\RouteNotFoundException;
use Exception;

//cette classe va nous permettre de gérer les routes

class Router 
{
    private array $routes;

    //on crée une méthode pour ajouter une route
    public function register(string $path, array $action):void
    {
       $this->routes[$path] = $action;
    }

    //on crée une méthode pour récupérer une route
    public function resolve(string $uri)
    {
        $path = explode('?', $uri)[0];
        $action = $this->routes[$path] ?? null;
        //on vérifie si la route existe
        if(is_callable($action)) {
            return $action();
        } 
        //si la route n'existe pas on lève une exception
        if(is_array($action)) {
            [$className, $method] = $action;

            if(class_exists($className) && method_exists($className, $method)) {
                $class = new $className();
                return call_user_func_array([$class, $method], []);
            }
        }
        //si la route n'existe pas on lève une exception
         throw new RouteNotFoundException();
        
    }

}