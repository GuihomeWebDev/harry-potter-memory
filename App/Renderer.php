<?php 

namespace App;

class Renderer
{
    private string $viewPath;
    public function __construct($viewPath)
    {
        $this->viewPath = $viewPath;
    }
    
    // renvoie le contenu de la vue contenu dans le viewPath

    /**
     * @return void
     */
    public function view()
    {
        ob_start();

        require BASE_VIEW_PATH .$this->viewPath . '.html';

        return ob_get_clean();
    }

    //ici la methode make revoie de facon static la vue

    /**
     * @param [type] $viewPath
     * @return void
     */
    public static function make($viewPath)
    {
        return new static($viewPath);
    }

    // la methode to string évite l'erreur "Object of class App\Renderer could not be converted to string"
    /**
     *
     * @return string
     */
    public function __toString()
    {
        return $this->view();
    }    
}