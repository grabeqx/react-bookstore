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
    },

    saveBook: function(data) {
        return axios.put(`http://localhost:3001/books/${data.id}`, data)
            .then(response => 'Saved')
            .catch(reason  => {
                throw reason;
            })
    },

    saveCategory: function(data) {
        return axios.put(`http://localhost:3001/categories/${data.id}`, data)
            .then(response => 'Saved')
            .catch(reason  => {
                throw reason;
            })
    },

    saveAuthor: function(data) {
        return axios.put(`http://localhost:3001/authors/${data.id}`, data)
            .then(response => 'Saved')
            .catch(reason  => {
                throw reason;
            })
    }


}

export default BookApi;