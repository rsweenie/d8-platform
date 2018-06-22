<?php

namespace Drupal\cu_footer_contact\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a Footer Contact Block.
 *
 * @Block(
 *   id = "footercontactblock",
 *   admin_label = @Translation("Footer Contact block"),
 *   category = @Translation("CU Footer Contact"),
 * )
 */
class FooterContactBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
      '#markup' => $this->t('<p>2500 California Plaza | Omaha, NE 68178</p><p>402.280.2700 | <a href="https://www.creighton.edu">creighton.edu</a> | <a href="https://www.creighton.edu/ask">Ask a Question</a></p><h5>© 2018 Creighton University</h5>'),
    );
  }

}