export default async function fetchArtists() {
  _fetchData = async () => {
    let artistsFetch = fetch("http://artreart.com/api/artists/")
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        return resJson;
      })
      .catch(err => {
        console.error(err);
      });
  };

  return _fetchData();
}
