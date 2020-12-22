const { db } = require('../config/mongo')
const { ObjectID } = require('mongodb')

const DataProfile = db.collection('Profile')

class ProfileController {
  static async AllDataProfile(req, res, next) {
    try {
      const dataBase = await DataProfile.findOne()
      res.status(200).json(dataBase)
    } catch (err) {
      console.log(err)
    }
  }
}

module.export = ProfileController