const request = require("request")
const ApiBaseurl = 'https://api.got.show'

const service = {

  async getCharactes() {
    const options = {
      method: "GET",
      url: `${ApiBaseurl}/api/book/characters`,
      headers: {
        "Content-Type": "application/json"
      }
    }
    return await new Promise((resolve, reject) => {
      request(options, (err, res, body) => {
        if (err) reject(err)
        resolve(JSON.parse(body))
      })
    })
  }
}

module.exports = service
