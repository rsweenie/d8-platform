---
layout: default
title:  "Duplicating and Modifying Views"
categories: [Views,Blocks] 
---
{% include home.html %}
# How duplicate and modify views
* Version: 1.0
* Created: 01/18/2019 cmb
* Last Updated: 01/23/2019
* Intended Audience: UCOM/ITLS

## Summary
Views are used for creating lists of content such as profiles, content pages, news, and spotlights. One such list is on the "/admin/content/" screen of a Drupal 8 site, which shows a list of all the content. You can modify how this list looks with the following steps.

## Prerequisites

 1. manager access to domain
 2. content pre-created of the type being listed in a given view


## Procedure for Duplicating and Modifying a View (of a list of Content)
[Note: the steps for this procedure are taken from the screencast below. *There are many other modifications you can make to a view, depending on your needs.*]
<iframe src="https://bluecast.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ce8de2ec-ae7c-428f-af2c-a95401330782&v=1" width="720" height="405" style="padding: 0px; border: 1px solid #464646;" frameborder="0" allowfullscreen allow="autoplay"></iframe>

1. log in to domain
2. structure > views
3. on the view to duplicate and modify, click the dropdown arrow of the "Edit" button under "Operations" and choose "Duplicate"
4. enter a title and click the "Duplicate" button
5. click title link to change it and click "Apply"
6. under "Fields" click "Add"
7. to add fields:
    1. on the "Add fields" overlay, search "Headline" by typing in form field
    2. click the checkbox of the "Headline" field and click "Add and configure fields"
8. on the "Configure Field: Content: Headline" overlay, click "Apply"
9. in the "Fields" area, click the dropdown arrow and choose "Rearrange"
10. to rearrange:
    1. on the "Rearrange fields" overlay, click on the four-way arrow on the right to move the "Content: Headline Headline" field up under "Content: Title Title"
    2. click "Apply"
11. use the "Preview" to verify the change
12. to remove a type of content from the current list, click the "Add" button in the Filter Criteria area
13. to add:
    1. Search for "content type" on the "Add filter criteria" overlay 
    2. click the checkbox of the "Content type" result and click "Add and configure filter criteria"
14. to configure the filter:
    1. on the "Configure filter criterion: Content: Content type" overlay, click the checkbox for "Expose this filter to visitors, to allow them to change it"
    2. click the "Is not one of" radio button under "Operator"
    3. click the "Links" checkbox under "Content types"
    4. click the "Expose operator" checkbox
    5. click "Apply"
15. verify the results in "Preview"
16. click "Save" when done


## See Also

* [Views & Blocks](views-blocks.html)
* [Duplicating and Modifying View Displays](duplicating-modifying-view-displays.html)

## Keywords

* view
* block
* configuration

