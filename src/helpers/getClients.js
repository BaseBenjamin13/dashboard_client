import axios from 'axios';

function getClients(userID, setClients, token) {
    if (userID) {
        axios.get(`${process.env.REACT_APP_API_URL}clients/${userID}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setClients(res.data);
        })
            .catch((err) => console.log(err));
    }
}

export default getClients;