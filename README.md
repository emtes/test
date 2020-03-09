# Reddify
Reddify uses [Spotify's](https://developer.spotify.com/documentation/web-api/) API to gather the user's top tracks. We use [lyrics.ovh](https://lyricsovh.docs.apiary.io/#) to get the lyrics for a given song and send it to our own AWS Lambda. In Lambda we host a python script that responds to our application with the most frequent noun in order of appearance from the lyrics. See [NLTK](https://www.nltk.org/) for a natural language processing library. We use this noun and [Reddit's](https://www.reddit.com/search/?q=EXAMPLE&type=sr) community search URL to recommend communities the user might like!
