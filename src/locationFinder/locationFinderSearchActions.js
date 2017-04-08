import 'isomorphic-fetch'

const getFindLocations = q => ({
    type: 'GET_FIND',
    payload: new Promise(resolve => {
        setTimeout(() => fetch(`http://api.openweathermap.org/data/2.5/find?q=${q}&APPID=9f585babc59bf435c42319b4e9b69766`).then(response => {
            resolve(response.json());
        }), 1000);
    })
});

export { getFindLocations }