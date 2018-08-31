# Front Page Classic: How-To

* Version: 1.0
* Created: 08/30/2018
* Last Updated: 08/30/2018
* Intended Audience: UCOM

## Summary

The front page classic layout handles the styling without specific content types. However, it does require specific heading tags and classes in some cases.

## Procedure

1. Login

2. Create content > content > slideshow

3. Create a slideshow from slides

4. Caption for each slide must be formatted the following way
    * H2 - white text on top
    * H1 - yellow big text
    * Example
        ```html
        <h2>white text is h2</h2>
        <h1>yellowish h1</h1>
        ```

5. For featured stories: create content > content > copy box    

6. Insert an image, size 386px x 176px

7. Add text. It must be formatted the following way:
    * H2 for headline
    * P for copy
    * Add a blank p or hit enter
    * In a paragraph tag with `class="margin-top-10"`, add an a tag with `class="orange-text-link"`
    * EITHER: change to source view, and _then_ add divs with classes OR: add an image, and _then_ switch to source view
    * Add a div around drupal’s image code with `class="image"`
    * Add a div around the content after the image with `class="content"`
    * Example
        ```html
        <div class="image">
            ~ drupal image code ~
        <div>
        <div class="content">
            <h2>Student Stories</h2>
            <p>Students such as Lydia Holtz share how they have discovered and explored their passions at Creighton.</p>
            <p class=”margin-top-10”>
                <a class="orange-text-link" href="google.com">Read More</a>
            </p>
        </div>
        ```

8. Save

9. Repeat two more times, for a total of 3 formatted copy boxes

10. Create content > content > content page

11. Give it a title

12. Add content for the area to the left of the CTA buttons in following format:
    * H3 (area headline)
    * P content of paragraph
    * P with a tag with class of button-blue for button link/content
    * Example:
        ```html
        <h3>Each of us is here for a reason.</h3>
        <p>Maybe you already know yours, or maybe you're still discovering it. Either way, at Creighton College of Arts and Sciences, you can create an incredible future filled with possibilities and the ability to make a difference.</p>
        <p>
            <a class="button-blue" href="google.com">Learn More</a>
        </p>
        ```

13. Save

14. Change layout > creighton front page > front page classic

15. Click `x` by block inlineSlideshow and block tabbed accordion

16. Drag body to region first_content

17. Click Save

18. Manage content > entity Block > content

19. In entity field, type in the name of the slideshow block, select it, set region to TOP, click Add

20. Save

21. Manage content > entity Block > content

22. Type in the name of the desired featured link buttons, select them, set region to CALLS_TO_ACTION, click add

23. Repeat 3 times

24. Manage content > entity Block > content

25. In entity field type in the name of the copy box that goes on the far left, select it, set region to MIDDLE_LEFT, click add

26. Manage content > entity Block > content

27. in entity field type in what you named the copy box that goes on the far left, select it, set region to MIDDLE_CENTER click add

28. Manage content > entity Block > content

29. in entity field type in what you named the copy box that goes on the far left, select it, set region to MIDDLE_RIGHT click add

30. Manage content > entity Block > content

31. in entity field type in what you named the green callout box, select it, set region to BOTTOM_CALLOUT click add

32. Save

## Keywords

* front page
* layout
* panelizer
