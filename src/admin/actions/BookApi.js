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

    editBook: function(data) {
        return axios.put(`http://localhost:3001/books/${data.id}`, data)
            .then(response => 'Saved')
            .catch(reason  => {
                throw reason;
            })
    },

    editCategory: function(data) {
        return axios.put(`http://localhost:3001/categories/${data.id}`, data)
            .then(response => 'Saved')
            .catch(reason  => {
                throw reason;
            })
    },

    editAuthor: function(data) {
        return axios.put(`http://localhost:3001/authors/${data.id}`, data)
            .then(response => 'Saved')
            .catch(reason  => {
                throw reason;
            })
    },
    addBook: function(data) {
        return axios.post(`http://localhost:3001/books/`, data)
            .then(response => 'Added')
            .catch(reason  => {
                throw reason;
            })
    },

    addCategory: function(data) {
        return axios.post(`http://localhost:3001/categories/`, data)
            .then(response => 'Added')
            .catch(reason  => {
                throw reason;
            })
    },

    addAuthor: function(data) {
        return axios.post(`http://localhost:3001/authors/`, data)
            .then(response => 'Added')
            .catch(reason  => {
                throw reason;
            })
    },
    deleteBook: function(id) {
        return axios.delete(`http://localhost:3001/books/${id}`)
            .then(response => ({
                text: 'Deleted',
                dataType: 'books'
            }))
            .catch(reason  => {
                throw reason;
            })
    },

    deleteCategory: function(id) {
        return axios.delete(`http://localhost:3001/categories/${id}`)
            .then(response => ({
                text: 'Deleted',
                dataType: 'categories'
            }))
            .catch(reason  => {
                throw reason;
            })
    },

    deleteAuthor: function(id) {
        return axios.delete(`http://localhost:3001/authors/${id}`)
            .then(response => ({
                text: 'Deleted',
                dataType: 'authors'
            }))
            .catch(reason  => {
                throw reason;
            })
    }


}

export default BookApi;