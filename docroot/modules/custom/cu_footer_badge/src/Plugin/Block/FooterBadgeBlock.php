<?php

namespace Drupal\cu_footer_badge\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a Footer Badge Block.
 *
 * @Block(
 *   id = "footer_badge_block",
 *   admin_label = @Translation("Footer Badge block"),
 *   category = @Translation("CU Footer Badge"),
 * )
 */
class FooterBadgeBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
      '#markup' => $this->t('<img src="/modules/custom/cu_footer_badge/images/badge.png" />'),
    );
  }

}