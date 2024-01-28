---
category: blog
comments: true
date: "2016-04-14"
slug: pickling-in-python-basics
tags: [basics, pickle]
title: Pickling in Python - The Very Basics
---

You just ran through a time-consuming process to load a bunch of data into a python object. Maybe you scraped data from thousands of websites. Maybe you computed a zillion digits of pi. If your laptop battery dies or if python crashes, your information will be lost.

Pickling allows you to save a python object as a binary file on your hard drive. After you pickle your object, you can kill your python session, reboot your computer if you want, and later load your object into python again.

You could back up your pickle file to Google Drive or DropBox or a plain old USB stick if you wanted. You could email it to a friend.

A word of warning: don't load pickles that you don't trust. Malicious people can make malicious pickles that may execute unexpected code on your computer (SQL injection, password brute forcing, etc). Stay away from bad pickles.

```python
import pickle

# make an example object to pickle
some_obj = {'x':[4,2,1.5,1], 'y':[32,[101],17], 'foo':True, 'spam':False}
```

To save a pickle, use `pickle.dump`.

A convention is to name pickle files `*.pickle`, but you can name it whatever you want.

Make sure to `open` the file in `'wb'` mode (write binary). This is more cross-platform friendly than `'w'` mode (write text) which might not work on Windows, etc.

```python
with open('mypickle.pickle', 'wb') as f:
    pickle.dump(some_obj, f)

# note that this will overwrite any existing file
# in the current working directory called 'mypickle.pickle'
```

For the purposes of demonstration, I'll delete the original object from memory to show you that it's really gone.

```python
del some_obj

print some_obj
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-3080f97d7e85> in <module>()
          1 del some_obj
          2
    ----> 3 print some_obj


    NameError: name 'some_obj' is not defined

Loading the pickled file from your hard drive is as simple as `pickle.load` and specifying the file path:

```python
with open('mypickle.pickle') as f:
    loaded_obj = pickle.load(f)

print 'loaded_obj is', loaded_obj
```

    loaded_obj is {'y': [32, [101], 17], 'x': [4, 2, 1.5, 1], 'foo': True, 'spam': False}

# Pickling pandas DataFrames

Pandas has a very easy to use pickling functions. First we'll make an example dataframe:

```python
import pandas as pd

df = pd.DataFrame([range(11), range(100,110)], columns=list('abcdefghijk'))

df
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
      <th>d</th>
      <th>e</th>
      <th>f</th>
      <th>g</th>
      <th>h</th>
      <th>i</th>
      <th>j</th>
      <th>k</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>10</td>
    </tr>
    <tr>
      <th>1</th>
      <td>100</td>
      <td>101</td>
      <td>102</td>
      <td>103</td>
      <td>104</td>
      <td>105</td>
      <td>106</td>
      <td>107</td>
      <td>108</td>
      <td>109</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

### pandas.DataFrame.to_pickle

Save the dataframe to a pickle file called `my_df.pickle` in the current working directory.

Then for the purposes of demonstration again, I'll delete the original DataFrame

```python
df.to_pickle('my_df.pickle')

del df
```

### pandas.DataFrame.read_pickle

To load the pickled dataframe, simply do:

```python
df2 = pd.read_pickle('my_df.pickle')

df2
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
      <th>d</th>
      <th>e</th>
      <th>f</th>
      <th>g</th>
      <th>h</th>
      <th>i</th>
      <th>j</th>
      <th>k</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>10</td>
    </tr>
    <tr>
      <th>1</th>
      <td>100</td>
      <td>101</td>
      <td>102</td>
      <td>103</td>
      <td>104</td>
      <td>105</td>
      <td>106</td>
      <td>107</td>
      <td>108</td>
      <td>109</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>

And that's all you need to know for simple pickling in python.

It's an easy way to back up important objects, pass objects between scripts, or even email a python object to another pythonista (but they shouldn't open it unless they're sure you haven't given them a malicious pickle...)
