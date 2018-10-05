# [Title]

* Version: 1.0
* Created: 10/02/2018
* Last Updated: 10/02/2018
* Intended Audience: DoIT

## Summary

Adding a new layout type to panelizer.

## Prerequisites

 1. Have the repo locally, and set up. 
 2. Second prerequisite
 3. Third prerequisite

## Procedure

1. Create a twig file (html.twig) in docroot > themes > custom > cu2017 > templates > layouts
    1a. the name should reflect column and section count, look at other existing files to judge.
2. Register the layout you created in cu2017.layouts.yml
    2a.Scroll to the bottom 
    2b. add the following
    ⋅⋅⋅name-of-twig-file:
    ⋅⋅⋅label: User readable label of layout 
    ⋅⋅⋅category: which catigory it belongs in [columns:1, columns:2, columns":3, creighton ⋅⋅⋅layouts creighton front page]or make your own
    ⋅⋅⋅template: templates/name-of-twig-file
    ⋅⋅⋅path: templates/layouts/icons
    ⋅⋅⋅icon: 9-three-section-split-preview.png //filler for now
    ⋅⋅⋅regions:
    ⋅⋅⋅⋅region_name:
    ⋅⋅⋅⋅⋅label: Region Label User seen
    ⋅⋅⋅⋅⋅anoter_region_name:
    ⋅⋅⋅⋅⋅label: Another Region Label User seen  
3. Step 3
    * bulleted item
    * another bullet
    * [Link to google](http://www.google.com)

## Keywords

* Layout
* Panelizer
* Twig
