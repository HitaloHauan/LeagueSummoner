import api from '../api/api'

class Factory {
    

    async getNicknameBR(values) {
        try {

            let dados = {
                nickname: values.nickname,
                  contry: values.contry
            }
            console.log(dados);

        const response = await api.get(`/summoner/${dados.nickname}`);
        return response.data ? response.data : [];
        } catch (error) {
        let dados = [];
        console.log(error);
        return dados;
        }
    }

}

export default new Factory();