const uuidv4 = require('uuid/v4')
const knex = require(`${global.SERVER_ROOT}/services/knex`)

/**
 * Records user activity to DB
 * @string userID
 * @isoDate eventDate
 * @string userActivity
 */
module.exports = async (userID, eventDate, userActivity) => {
  try {
    knex('user_activity').insert({
      id: uuidv4(),
      user_id: userID,
      date: eventDate,
      activity: userActivity
    })
  } catch (error) {
    throw error
  }
}
