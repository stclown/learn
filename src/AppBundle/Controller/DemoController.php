<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DemoController extends Controller
{
    /**
     * @Route("/demo-index", name="demo")
     */
    public function indexAction()
    {
        return $this->render('demo/body.html.twig', array(
            // ...
        ));
    }

	/**
	 * @Route("/demo-aside-left", name="demo-aside-left")
	 */
	public function asideLeftAction()
	{
		return $this->render('AppBundle:Demo:aside-left.html.twig', array(
			// ...
		));
	}

}
