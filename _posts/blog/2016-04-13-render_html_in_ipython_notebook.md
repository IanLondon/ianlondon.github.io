---
layout: post
title: Scraping and Rendering HTML in iPython Notebook
modified:
categories: blog/
excerpt:
tags: [selenium]
image:
  feature:
date: 2016-04-11T12:35:45-04:00
comments: true
---


# Requirements:

You need to have to have `selenium` installed first: run `pip install selenium` in the terminal or with iPython run `!pip install selenium`.

# Getting an HTML selection with selenium

First, set up a Firefox webdriver and point it to our URL of interest.


```python
from selenium import webdriver

driver = webdriver.Firefox()

driver.get('https://en.wikipedia.org/wiki/International_Space_Station')
```

Let's select the first `<table>` element from Wikipedia's ISS article as an example.


```python
iss_table = driver.find_element_by_xpath('//table')
```

Now we want to see if our XPath selector got us what we were looking for.

We can look at the raw HTML of that first `<table>` and see it it's what we wanted. To get the raw HTML of a selected element, we can get its `outerHTML` attribute:


```python
iss_table_html = iss_table.get_attribute('outerHTML')

print iss_table_html[:200]
print '\n. . .\n'
print iss_table_html[-200:]
```

    <table class="infobox" style="font-size:88%; width:22em; text-align:left">
    <caption>International Space Station</caption>
    <tbody><tr>
    <td colspan="3" style="text-align:center;"><a href="/wiki/File:Int

    . . .

    ex.php?title=International_Space_Station&amp;action=edit">[update]</a></sup><br>
    (<a href="/wiki/Exploded_view" title="Exploded view" class="mw-redirect">exploded view</a>)</td>
    </tr>
    </tbody></table>


# Rendering the selected HTML in the notebook

Reading raw HTML isn't very nice.

Let's take advantage of some iPython Notebook magic: since we're viewing the notebook in a web browser, we can also render HTML content directly in the notebook.

We lose whatever CSS styling was in the scraped website, as well as anything loaded from relative links, but we can see the general structure which is often all we want anyway.

This can make it much easier to see what our XPath selectors are actually pulling from the site. Is it what we intended? Scraping HTML is a messy business and selectors often surprise you, so it's nice to be able to get visual feedback.

Here is the same table as above, rendered in HTML in the iPython notebook. Relative links won't work, but in the example below the image of the ISS shows up correctly because its `src` is an absolute link.


```python
# for ipython notebook display
from IPython.core.display import display, HTML

display(HTML(iss_table_html))
```


<table class="infobox" style="font-size:88%; width:22em; text-align:left">
<caption>International Space Station</caption>
<tbody><tr>
<td colspan="3" style="text-align:center;"><a href="/wiki/File:International_Space_Station_after_undocking_of_STS-132.jpg" class="image"><img alt="A rearward view of the International Space Station backdropped by the limb of the Earth. In view are the station's four large, gold-coloured solar array wings, two on either side of the station, mounted to a central truss structure. Further along the truss are six large, white radiators, three next to each pair of arrays. In between the solar arrays and radiators is a cluster of pressurised modules arranged in an elongated T shape, also attached to the truss. A set of blue solar arrays are mounted to the module at the aft end of the cluster." src="//upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/300px-International_Space_Station_after_undocking_of_STS-132.jpg" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/450px-International_Space_Station_after_undocking_of_STS-132.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/600px-International_Space_Station_after_undocking_of_STS-132.jpg 2x" data-file-width="3319" data-file-height="2116" height="191" width="300"></a></td>
</tr>
<tr>
<td colspan="3" style="font-size:90%; line-height:15px; text-align:center;">The International Space Station on 23 May 2010 as seen from the departing <a href="/wiki/Space_Shuttle" title="Space Shuttle">Space Shuttle</a>&nbsp;<a href="/wiki/Space_Shuttle_Atlantis" title="Space Shuttle Atlantis"><i>Atlantis</i></a> during <a href="/wiki/STS-132" title="STS-132">STS-132</a>.</td>
</tr>
<tr>
<th style="text-align:center;" colspan="3">Station statistics</th>
</tr>
<tr>
<th><a href="/wiki/International_Designator" title="International Designator">COSPAR ID</a></th>
<td>1998-067A</td>
</tr>
<tr>
<th><a href="/wiki/Call_sign" title="Call sign">Call sign</a></th>
<td><i>Alpha</i>, <i>Station</i></td>
</tr>
<tr>
<th>Crew</th>
<td>Fully crewed: 6<br>
Currently aboard: 6<br>
(<a href="/wiki/Expedition_47" title="Expedition 47">Expedition 47</a>)</td>
</tr>
<tr>
<th><a href="/wiki/Rocket_launch" title="Rocket launch">Launch</a></th>
<td>20 November 1998</td>
</tr>
<tr>
<th><a href="/wiki/Launch_pad" title="Launch pad">Launch pad</a></th>
<td><span class="nowrap"><a href="/wiki/Baikonur_Cosmodrome" title="Baikonur Cosmodrome">Baikonur</a> <a href="/wiki/Gagarin%27s_Start" title="Gagarin's Start">1/5</a> and <a href="/wiki/Baikonur_Cosmodrome_Site_81" title="Baikonur Cosmodrome Site 81">81/23</a><br>
<a href="/wiki/Kennedy_Space_Center" title="Kennedy Space Center">Kennedy</a> <a href="/wiki/Kennedy_Space_Center_Launch_Complex_39" title="Kennedy Space Center Launch Complex 39">LC-39</a></span></td>
</tr>
<tr>
<th><a href="/wiki/Mass" title="Mass">Mass</a></th>
<td>Appx. 419,455&nbsp;kg (924,740&nbsp;lb)<sup id="cite_ref-ISS_stats_1-0" class="reference"><a href="#cite_note-ISS_stats-1">[1]</a></sup></td>
</tr>
<tr>
<th>Length</th>
<td>72.8&nbsp;m (239&nbsp;ft)</td>
</tr>
<tr>
<th>Width</th>
<td>108.5&nbsp;m (356&nbsp;ft)</td>
</tr>
<tr>
<th>Height</th>
<td>c. 20&nbsp;m (c. 66&nbsp;ft)<br>
<small>nadir–zenith, arrays forward–aft</small><br>
<small>(27 November 2009)<sup class="noprint Inline-Template" style="margin-left:0.1em; white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Precise_language" title="Wikipedia:Manual of Style/Dates and numbers"><span title="MRM-1 &amp; MRM-2">dated info</span></a></i>]</sup></small></td>
</tr>
<tr>
<th>Pressurised <a href="/wiki/Volume" title="Volume">volume</a></th>
<td>916&nbsp;m<sup>3</sup> (32,300&nbsp;cu&nbsp;ft)<br>
<small>(3 November 2014)</small></td>
</tr>
<tr>
<th><a href="/wiki/Atmospheric_pressure" title="Atmospheric pressure">Atmospheric pressure</a></th>
<td>101.3&nbsp;<a href="/wiki/Pascal_(unit)" title="Pascal (unit)">kPa</a> (29.91&nbsp;<a href="/wiki/Inch_of_mercury" title="Inch of mercury">inHg</a>, 1 <a href="/wiki/Atmosphere_(unit)" title="Atmosphere (unit)">atm</a>)</td>
</tr>
<tr>
<th><a href="/wiki/Apsis" title="Apsis">Perigee</a></th>
<td>409&nbsp;km (254&nbsp;mi) <a href="/wiki/Above_mean_sea_level" title="Above mean sea level" class="mw-redirect">AMSL</a><sup id="cite_ref-heavens-above_2-0" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup></td>
</tr>
<tr>
<th><a href="/wiki/Apsis" title="Apsis">Apogee</a></th>
<td>416&nbsp;km (258&nbsp;mi) <a href="/wiki/Above_mean_sea_level" title="Above mean sea level" class="mw-redirect">AMSL</a><sup id="cite_ref-heavens-above_2-1" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup></td>
</tr>
<tr>
<th>Orbital <a href="/wiki/Inclination" title="Inclination" class="mw-redirect">inclination</a></th>
<td>51.65&nbsp;<a href="/wiki/Degree_(angle)" title="Degree (angle)">degrees</a><sup id="cite_ref-heavens-above_2-2" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup></td>
</tr>
<tr>
<th>Average speed</th>
<td>7.66 kilometres per second (27,600&nbsp;km/h; 17,100&nbsp;mph)<sup id="cite_ref-heavens-above_2-3" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup></td>
</tr>
<tr>
<th><a href="/wiki/Orbital_period" title="Orbital period">Orbital period</a></th>
<td>92.69&nbsp;minutes<sup id="cite_ref-heavens-above_2-4" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup></td>
</tr>
<tr>
<th>Orbit epoch</th>
<td>25 January 2015<sup id="cite_ref-heavens-above_2-5" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup></td>
</tr>
<tr>
<th>Days in orbit</th>
<td>6353<br>
<small>(12 April)</small></td>
</tr>
<tr>
<th>Days occupied</th>
<td>5640<br>
<small>(12 April)</small></td>
</tr>
<tr>
<th>Number of orbits</th>
<td>95912<sup id="cite_ref-heavens-above_2-6" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup></td>
</tr>
<tr>
<th><a href="/wiki/Orbital_decay" title="Orbital decay">Orbital decay</a></th>
<td>2&nbsp;km/month</td>
</tr>
<tr>
<td style="font-size:90%; line-height:15px; text-align:center;" colspan="3">Statistics as of 9 March 2011<br>
(unless noted otherwise)</td>
</tr>
<tr>
<td style="font-size:90%; line-height:15px; text-align:center;" colspan="3">References: <sup id="cite_ref-ISS_stats_1-1" class="reference"><a href="#cite_note-ISS_stats-1">[1]</a></sup><sup id="cite_ref-heavens-above_2-7" class="reference"><a href="#cite_note-heavens-above-2">[2]</a></sup><sup id="cite_ref-ISStD_3-0" class="reference"><a href="#cite_note-ISStD-3">[3]</a></sup><sup id="cite_ref-OnOrbit_4-0" class="reference"><a href="#cite_note-OnOrbit-4">[4]</a></sup><sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[5]</a></sup><sup id="cite_ref-6" class="reference"><a href="#cite_note-6">[6]</a></sup></td>
</tr>
<tr>
<th style="text-align:center;" colspan="3">Configuration</th>
</tr>
<tr>
<td style="text-align:center;" colspan="3"><a href="/wiki/File:ISS_configuration_2015-05_en.svg" class="image" title="Station elements as of  May 2015[update](exploded view)"><img alt="The components of the ISS in an exploded diagram, with modules on-orbit highlighted in orange, and those still awaiting launch in blue or pink" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ISS_configuration_2015-05_en.svg/300px-ISS_configuration_2015-05_en.svg.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ISS_configuration_2015-05_en.svg/450px-ISS_configuration_2015-05_en.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ISS_configuration_2015-05_en.svg/600px-ISS_configuration_2015-05_en.svg.png 2x" data-file-width="1257" data-file-height="864" height="206" width="300"></a></td>
</tr>
<tr>
<td colspan="3" style="font-size:90%; line-height:15px; text-align:center;">Station elements as of May 2015<sup class="plainlinks noprint asof-tag update" style="display:none;"><a class="external text" href="//en.wikipedia.org/w/index.php?title=International_Space_Station&amp;action=edit">[update]</a></sup><br>
(<a href="/wiki/Exploded_view" title="Exploded view" class="mw-redirect">exploded view</a>)</td>
</tr>
</tbody></table>


Much nicer!


```python

```
