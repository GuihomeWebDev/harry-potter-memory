<?php 

namespace App\Exceptions;


class RouteNotFoundException extends \Exception
{
    public  $message = 'la route n\'existe pas';
}

