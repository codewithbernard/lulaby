const axios = require('axios');
const _ = require('lodash');

module.exports = {
  async getFavoriteArtists(token) {
    const response = await axios.get(
      'https://api.spotify.com/v1/me/top/artists?limit=5',
      {
        headers: { Authorization: `Bearer ${token}`}
      }
    );
    return _.map(response.data.items, item => item.name);
  }
}
