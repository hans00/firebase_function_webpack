import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export default functions.https.onRequest(async (req, res) => {
	const { msg = '' } = req.body
	res.send({msg})
})
