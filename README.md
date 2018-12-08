# %project_name%

%description%

---

## Firebase Setup

> Install `firebase-tools` first.
> 

```sh
# Link project
firebase use --add
```


## Cloud Functions

> Code in directory `functions/src/events`.
> 

### Code Usage

```js
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export default functions.https.onRequest(async (req, res) => {
    const { msg = '' } = req.body
    res.send({msg})
})
```

### Command Usage

> In directory `functions`.

```sh
# For local Web API test
npm run serve

# For local cli test
npm run shell

# Deploy to Firebase
npm run deploy
```

