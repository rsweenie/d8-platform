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

    * Create a slideshow from slides

    * Caption for each slide must be formatted the following way:
        * H2 - white text on top
        * H1 - yellow big text
        * Example
            ```html
            <h2>white text is h2</h2>
            <h1>yellowish h1</h1>
            ```

3. For featured stories: create content > content > copy box

    * Insert an image, size 386px x 176px

    * Add text. It must be formatted the following way:
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
    * Save

    * Repeat two more times, for a total of 3 formatted copy boxes

4. Create content > content > content page

    * Give it a title

    * Add content for the area to the left of the CTA buttons in following format:
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

    * Save

5. Change layout > creighton front page > front page classic
    * Click `x` by block inlineSlideshow and block tabbed accordion
    * Drag body to region `first_content`
    * Save

6. Manage content > entity Block > content
    * In entity field, type in the name of the slideshow block and select it
    * Set the region to `TOP`
    * Click Add
    * Save

7. Manage content > entity Block > content
    * Type in the name of the desired featured link buttons and select them
    * Set region to `CALLS_TO_ACTION`
    * Click Add
    * Repeat for the desired number of featured link buttons

8. Manage content > entity Block > content
    * In entity field, type in the name of the copy box that goes on the far left and select it
    * Set region to `MIDDLE_LEFT`
    * Click Add

9. Manage content > entity Block > content
    * In entity field, type in the name of the copy box that goes on the far left and select it
    * Set region to `MIDDLE_CENTER`
    * Click Add

10. Manage content > entity Block > content
    * In entity field, type in what you named the copy box that goes on the far left and select it
    * Set region to `MIDDLE_RIGHT`
    * Click Add

11. Manage content > entity Block > content
    * In entity field, type in the name of the green callout box and select it
    * Set region to `BOTTOM_CALLOUT`
    * Click Add

12. Save

## Keywords

* front page
* layout
* panelizer

[Home](https://cu-webteam.github.io/d8-platform/UCOM)
