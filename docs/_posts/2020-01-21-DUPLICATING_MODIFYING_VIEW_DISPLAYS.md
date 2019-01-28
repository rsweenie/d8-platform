---
layout: default
title:  "Duplicating and Modifying View Displays"
categories: [Views, Block] 
---
{% include home.html %}
# How to duplicate and modify a view display and add the block to a panelized page
* Version: 1.0
* Created: 01/21/2019 cmb
* Last Updated: 01/24/2019 
* Intended Audience: UCOM/ITLS

## Summary
Views are used for creating lists of content such as profiles, content pages, news, and spotlights. To create a new such list, either duplicate and modify either a view or a view display. The subsequent block can be added to a panelized page.

## Prerequisites

 1. manager access to domain
 2. content pre-created of the type being listed in a given view
 3. knowledge of creating a [panelized page](panelized-page.html)

## Procedure for Duplicating and Modifying a View Display (of a list of Profiles)
[Note: the steps for this procedure are taken from the screencast below. *There are many other modifications you can make to a view, depending on your needs.*]
<iframe src="https://bluecast.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=1a7c24da-a3cc-4d18-81ad-a9d201189628&v=1" width="720" height="405" style="padding: 0px; border: 1px solid #464646;" frameborder="0" allowfullscreen allow="autoplay"></iframe>

1. log in to domain
2. structure > views
3. click the "Edit" button on the Profiles view
4. click the "Duplicate [Display Name]" button (where [Display Name] is actually the name of the current display)
5. to duplicate:
   1. type in a new Administrative name
   2. change the Administrative description
   3. click "Apply"
6. Click "Add" under Filter Criteria to add a tag
7. in the "Add filter criteria" overlay
   1. type "tag" in the search field
   2. click on the "Profile Tag (field_profile_type)" checkbox
   3. click the "For" dropdown button and choose "This block (overide)"
   4. click the "Apply (this display)" button
8. in the "Configure extra settings for filter criterion Content: Profile Tag (field_profile_type)" overlay
   1. under "Vocabulary," click "Profile Type" radio button
   2. under "Selection type," click on the "Dropdown" radio button
   3. click "Apply and continue"
9. in the "Configure filter criterion Content: Profile Tag (field_profile_type)" overlay
   1. under "Select terms from vocabulary Profile Type," select the tag for your filter
   2. click "Apply (this display)"
10. review results in Preview
11. click "Save"
12. create a Content Page, [following the instructions](content-page.html) (if necessary)
13. while viewing the newly created Content Page, click the "Manage Content" in the Panelizer menu at the bottom
14. click "List (Views)"
15. click on the views display you created, based on the Administrative name you gave it.
16. click "Add"
17. review the result on the page
18. if satisfied, click "Save" in the Panelizer menu
19. view the block on the page
20. to hide the title of the block, click "Edit" in the Panelizer menu
21. click the gear icon on the block you placed
22. click the "DISPLAY TITLE" checkbox to de-select it
23. click "Update"
24. click "Save" in the Panelizer menu
24. view the block on the page

*Note: there are additional steps in the video tutorial to filter views with multiple tags and adding new blocks to the same Content Page. Watch the video to see these additional options.*


## See Also

* [Views & Blocks](views-blocks.html)
* [Duplicating and Modifying Views](duplicating-modifying-views.html)

## Keywords

* view
* block
* configuration

