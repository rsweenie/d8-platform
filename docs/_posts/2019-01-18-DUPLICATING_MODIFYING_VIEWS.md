---
layout: default
title:  "Duplicating and Modifying Views"
categories: [Block,Views] 
---
{% include home.html %}
# How to use Views
* Version: 1.0
* Created: 01/18/2019
* Last Updated: 01/18/2009
* Intended Audience: UCOM/ITLS

## Summary
Views are used for creating lists of content such as profiles, content pages, news, and spotlights. One such list is on the "/admin/content/" screen of a Drupal 8 site, which shows a list of all the content. You can modify how this list looks with the following steps.

## Prerequisites

 1. manager access to domain
 2. content pre-created of the type being listed in a given view


## Procedure for Duplicating and Modifying a View (of a list of Content)
[Note: the steps for this procedure are taken from the screencast below. *There are many other modifications you can make to a view, depending on your needs.*]
[Bluecast: Modifying views in Drupal 8](https://bluecast.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ce8de2ec-ae7c-428f-af2c-a95401330782)

1. log in to domain
2. structure > views
3. on the view to duplicate and modify, click the dropdown arrow of the "Edit" button under "Operations" and choose "Duplicate"
4. enter a title and click the "Duplicate" button
5. click title link to change it and click "Apply"
6. under "Fields" click "Add"
7. 
    a. on the "Add fields" overlay, search "Headline" by typing in form field
    b. click the checkbox of the "Headline" field and click "Add and configure fields"
8. on the "Configure Field: Content: Headline" overlay, click "Apply"
9. in the "Fields" area, click the dropdown arrow and choose "Rearrange"
10. to rearrange:
    a. on the "Rearrange fields" overlay, click on the four-way arrow on the right to move the "Content: Headline Headline" field up under "Content: Title Title"
    b. click "Apply"
11. use the "Preview" to verify the change
12. to remove a type of content from the current list, click the "Add" button in the Filter Criteria area
13. to add:
    a. Search for "content type" on the "Add filter criteria" overlay 
    b. click the checkbox of the "Content type" result and click "Add and configure filter criteria"
14. to configure the filter:
    a. on the "Configure filter criterion: Content: Content type" overlay, click the checkbox for "Expose this filter to visitors, to allow them to change it"
    b. click the "Is not one of" radio button under "Operator"
    c. click the "Links" checkbox under "Content types"
    d. click the "Expose operator" checkbox
    e. click "Apply"
15. verify the results in "Preview"
16. click "Save" when done





## See Also

* [Views & Blocks](/VIEWS_BLOCKS))
* [Duplicating and Modifying View Displays](DUPLICATING_MODIFYING_VIEW_DISPLAYS)

## Keywords

* view
* block
* configuration

