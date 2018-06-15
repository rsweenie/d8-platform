<?php

/**
 * @file
 * Contains \Drupal\responsive_table_filter\Plugin\Filter\FilterResponsiveTable.
 */

namespace Drupal\responsive_table_filter\Plugin\Filter;

use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;

/**
 * Provides a filter that wraps <table> tags with a <figure> tag.
 *
 * @Filter(
 *   id = "filter_responsive_table",
 *   title = @Translation("Responsive Table filter"),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE
 * )
 */
class FilterResponsiveTable extends FilterBase {

  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode) {
    $result = new FilterProcessResult($text);
    $text = preg_replace_callback('@<table([^>]*)>(.+?)</table>@s', [$this, 'processTableCallback'], $text);

    $result->setProcessedText($text);
    return $result;
  }

  /**
   * {@inheritdoc}
   */
  public function tips($long = FALSE, $context = []) {
    return $this->t('Wraps a %table tags with a %figure tag.', [
      '%table' => '<table>',
      '%figure' => '<figure>',
    ]);
  }

  /**
   * Callback to replace content of the <table> elements.
   *
   * @param array $matches
   *   An array of matches passed by preg_replace_callback().
   *
   * @return string
   *   A formatted string.
   */
  private function processTableCallback(array $matches) {
    $attributes = $matches[1];
    $text = $matches[2];
    $text = '<figure class="responsive-figure-table"><table' . $attributes . '>' . $text . '</table></figure>';

    return $text;
  }

}
