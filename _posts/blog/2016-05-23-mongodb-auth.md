---
layout: post
title: How to connect to your remote MongoDB server
modified:
categories: blog/
excerpt:
tags: [mongodb, aws, server, unix]
image:
  feature:
date: 2016-05-23T11:42:00-00:00
---

I have MongoDB running on my Ubuntu server in Amazon EC2. Since there's no simple all-in-one tutorial out there explaining how to set up user authentication for Mongo so that you can read and write to your MongoDB server from your laptop, I decided to write one.

If you haven't installed MongoDB yet, follow the steps at [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) first.

# 1. Set up your user

First `ssh` into your server and enter the mongo shell by typing `mongo`. For this example, I will set up a user named `ian` and give that user read & write access to the `cool_db` database.

``` javascript
use cool_db

db.createUser({
    user: 'ian',
    pwd: 'secretPassword',
    roles: [{ role: 'readWrite', db:'cool_db'}]
})
```

# 2. Enable auth and open MongoDB access up to all IPs

Edit your MongoDB config file. On Ubuntu:

`sudo vim /etc/mongod.conf`

* Look for the `net` line and comment out the `bindIp` line under it, which is currently limiting MongoDB connections to *localhost*:

**Warning:** do *not* comment out the `bindIp` line without enabling authorization. Otherwise you will be opening up the whole internet to have full admin access to all mongo databases on your MongoDB server!

``` text
# network interfaces
net:
  port: 27017
#  bindIp: 127.0.0.1  <- comment out this line
```

* Scroll down to the `#security:` section and add the following line. Make sure to un-comment the `security:` line.

``` text
security:
  authorization: 'enabled'
```

# 3. Open port 27017 on your EC2 instance

* Go to your EC2 dashboard:  [https://console.aws.amazon.com/ec2/](https://console.aws.amazon.com/ec2/)
* Go to `Instances` and scroll down to see your instance's Security Groups. Eg, it will be something like `launch-wizard-4`
* Go to `Netword & Security` -> `Security Groups` -> `Inbound` tab -> `Edit` button.
* Make a new Custom TCP on port 27017, Source: Anywhere, 0.0.0.0/0

# 4. Last step: restart mongo daemon (mongod)

`sudo service mongod restart`

Make sure you can still log in with `mongo` while ssh'd into the box.

If anything goes wrong, look at the log: `tail -f /var/log/mongodb/mongod.log` (note: non-Ubuntu machines will keep the log in another directory...)

***

# Logging in using the `mongo` shell on your laptop

You can close out of ssh and go back to your local console. To enter the remote Mongo database we just set up, you can use the mongo shell:

`mongo -u ian -p secretPassword 123.45.67.89/cool_db`

Where `123.45.67.89` is your server's public IP address.

Now you can read and write within the `cool_db` database from your laptop without `ssh`!

# Using `pymongo` with your remote MongoDB server

``` python
import pymongo

client = pymongo.MongoClient("mongodb://ian:secretPassword@123.45.67.89/cool_db") # defaults to port 27017

db = client.cool_db

# print the number of documents in a collection
print db.cool_collection.count()
```

And that's it!
