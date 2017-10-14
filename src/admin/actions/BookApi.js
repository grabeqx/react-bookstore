import axios from 'axios';

const BookApi = {

    getDataList: function(type) {
        return axios.get(`http://localhost:3001/${type}`)
            .then(response => response.data)
            .catch(reason => {
                throw reason;
            })
    },

    getData: function({type, id}) {
        return axios.get(`http://localhost:3001/${type}/${id}`)
            .then(response => response.data)
            .catch(reason => {
                throw reason;
            })
    }


}

export default BookApi;