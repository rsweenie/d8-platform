---
layout: default
---
# UCOM Drupal 8 Documentation

## Table of Contents

* [Building a site in Acquia Cloud Site Factory](BUILDING_SITE_IN_ACSF)

* [Testing Procedures](TESTING)

* [Views and Blocks](VIEWS_BLOCKS)

* [Using the Front Page Classic Layout](FRONT_PAGE_CLASSIC)

* [Creating a featured content group](FEATURED_CONTENT_GROUP)

* [Creating a promo box](PROMO_BOX.md)

* [Creating a quote box](QUOTE_BOX.md)

* [Clearing Cache](CLEAR_CACHE.md)

* [Social Media Links](SOCIAL_LINKS_FOOTER.md)

* [Header Alert](HEADER_ALERT.md)

* [Content Page](CONTENT_PAGE.md)

* [Tabs or Accordion](TABBED_ACCORDION.md)

* [Copy box](COPY_BOX.md)


{% for post in site.posts %}	
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p><small><strong>{{ post.date | date: "%B %e, %Y" }}</strong> . {{ post.category }} . <a href="http://erjjones.github.com{{ post.url }}#disqus_thread"></a></small></p>			
{% endfor %}

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>