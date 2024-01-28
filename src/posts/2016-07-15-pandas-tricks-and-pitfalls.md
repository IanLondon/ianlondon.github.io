---
category: blog
comments: true
date: "2016-07-15"
slug: pandas-tricks-and-pitfalls
tags: [python, pandas, munging]
title: Data Munging in Pandas - Tricks and Pitfalls
---

Data munging is the least sexiest part of <abbr title="Data Science">"the sexiest job of the 21st century"</abbr>. According to authoritative popular sources like [@BigDataBorat](https://twitter.com/BigDataBorat), data scientists spend 80% of their time cleaning up data. So we need to be really good at it!

![Big Data Borat: In Data Science, 80% of time spent prepare data, 20% of time spent compain about need for prepare data.](../images/big-data-borat.png)

[pandas](http://pandas.pydata.org/) is an awesome python library for manipulating any data that fits in a spreadsheet-like format. If you're familiar with R, it's the R dataframes concept implemented in Python. Since the goal of data munging in data science is often to generate a matrix to be fed into a machine learning model, `pandas` is a valuable tool to data scientists who use python.

At the beginning of my time at Metis's Data Science Bootcamp, I decided to learn everything I could about pandas by diving deep into the docs. The docs are good, but there is a very steep learning curve and the syntax can be tricky sometimes. At Metis, I got the nickname "The Panda King" because I helped my fellow students solve their pandas problems. There was even a Slack emoji made (thanks Hannah):

![The Slack emoji made by Hannah](../images/panda_king.jpg)

---

# Tutorial: Pandas Tricks & Pitfalls

I did a workshop for my class at Metis called "Pandas Tricks & Pitfalls", and the Jupyter Notebooks are available on GitHub for anyone who wants to go through and learn more about pandas. There are two notebooks: the main notebook, `pandas_tricks.ipynb`, which has examples and explanations, and the worksheet notebook `pandas_exercises.ipynb` with exercises you can try as you follow along. Please contact me if you find anything confusing or vague. I'm also always open to answer your pandas questions!

## Start here: [https://github.com/IanLondon/pandas_tricks](https://github.com/IanLondon/pandas_tricks)

## Covered in Pandas Tricks and Pitfalls:

- Understanding `groupby` in pandas
- Working with dates and times
- Binning with `resample` and `cut`
- MultiIndexing
- Some plotting tricks with `matplotlib` and `seaborn`
