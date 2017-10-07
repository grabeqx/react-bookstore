import axios from 'axios';

const BookApi = {

    getProducts: function() {
        return axios.get('http://localhost:3001/books')
            .then(response => response.data)
    }

}

export default BookApi;