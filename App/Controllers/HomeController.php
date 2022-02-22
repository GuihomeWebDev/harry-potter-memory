<?php 

namespace App\Controllers;

use App\Renderer;

class HomeController
{
    /**
     * @return void
     */
    public function index()
    {
         return Renderer::make('index');
    }
   
}