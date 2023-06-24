import axios from 'axios';

function getClients(userID, setClients) {
    if (userID) {
        axios.get(`${process.env.REACT_APP_API_URL}clients/${userID}/`)
            .then((res) => {
                setClients(res.data);
            })
            .catch((err) => console.log(err));
    }
}

export default getClients;