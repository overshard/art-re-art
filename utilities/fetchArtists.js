export default async function fetchArtists() {
  _fetchData = async () => {
    let artistsFetch = fetch("http://artreart.com/api/artists/")
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });

    let artistMediumFetch = fetch("http://artreart.com/api/artistmedium/")
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });

    let eventsFetch = fetch("http://artreart.com/api/events/")
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });

    return Promise.all([artistsFetch, artistMediumFetch, eventsFetch])
      .then(([artistsResponse, artistMediumResponse, eventsresponse]) => {
        let artists = artistsResponse.map(artist => {
          let mediums = artist.medium.map(mediumUrl => {
            let medium =  artistMediumResponse.find(medium => {
              return mediumUrl === medium.url;
            });
            return medium.title;
          });
          artist.medium = mediums;
          return artist;
        });
        return artists;
      })
      .catch(err => {
        console.error(err);
      });
  };

  return _fetchData();
}
