/**
 * ApiService e uma array que e responsavel por fazer todas as 
 * requisições com o banco (CRUD) e retornar para o usuario a resposta
 */
const axios = require('axios').default;

const ApiService = {

    getUserValues: async (data) => {
        var URL = 'http://localhost:8080/user'
        const AuthStr = 'Bearer ' + localStorage.getItem('@controllertokenacessauth').replace(/(^"|"$)/g, '')
        const dados = await axios.get(`${URL}`, { headers: { Authorization: AuthStr } })
        return dados.data


    },  //faz o upload do arquivo pem
    uploadPem: async (data) => {
        const frm = new FormData()
        frm.append('pem', data);
        frm.append('user_id', localStorage.getItem('user_id'));
        frm.append('token', localStorage.getItem('@controllertokenacessauth'));

        const AuthStr = 'Bearer ' + localStorage.getItem('@controllertokenacessauth').replace(/(^"|"$)/g, '')
        try{

            return  await axios.post('http://localhost:8080/upload', (frm), { headers: { Authorization: AuthStr } });
        }catch{
            return 'error'
        }
    },

    createUser: async (data) => {
        try{
            return await axios.post('http://localhost:8080/register', data)
        }catch{
            return 'error'
        }
        
        
    },
    loginValidator: async (data) => {
        const response = await axios.post('http://localhost:8080/login', data)
        return response.data
    },

    TratarErros: (res) => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res;
    }
}

export default ApiService;