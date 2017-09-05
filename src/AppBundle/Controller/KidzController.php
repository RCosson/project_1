<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class KidzController extends Controller {

  /**
   * @Route("/", name="homepage")
   */
  public function homeAction() {
    return $this->render('kidz/home.html.twig');
  }

  /**
   * @Route("/mentions-legales")
   */
  public function mentionsAction() {
    return $this->render('kidz/mentions.html.twig');
  }

  /**
   * @Route("/credits")
   */
  public function creditsAction() {
    return $this->render('kidz/credits.html.twig');
  }
}