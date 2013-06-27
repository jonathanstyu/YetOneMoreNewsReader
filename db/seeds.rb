User.create(email: "jenny")
User.create(email: "jon")

Feed.create(title: "anime news network", url: "http://www.animenewsnetwork.com/newsroom/rss.xml")
Feed.create(title: "Hackernews", url: "http://feeds.feedburner.com/newsyc20")
Feed.create(title: "NPR news", url: "http://www.npr.org/rss/rss.php?id=100")
Feed.create(title: "CNN money", url: "http://rss.cnn.com/rss/money_latest.rss")

Subscription.create(user_id: 1, feed_id: 1)
Subscription.create(user_id: 1, feed_id: 3)
Subscription.create(user_id: 2, feed_id: 4)
Subscription.create(user_id: 2, feed_id: 2)