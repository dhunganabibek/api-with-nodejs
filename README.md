# Wep api with nodeJS


# Using Express for making apis.
```java script

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)
```

# Persistence API


- saving in tet file
- saving in json file
- using database