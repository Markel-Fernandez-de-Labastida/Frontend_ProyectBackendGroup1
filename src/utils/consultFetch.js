const consultFetch = async (url, method = 'GET', body = {}, header = {}) => {
    let option;

    if (method === 'POST' || method === 'PUT') {
        option = {
            method: method,
            body: JSON.stringify(body),
            headers: {
                ...header,
               "Content-Type": "application/json"
            }
        }
    } else if (method === 'DELETE' || method === 'GET') {
        option = {
            method: method,
            headers: {
                ...header,
                "Content-Type": "application/json"
            }
        }
    }

    try {
        const answer = await fetch(url, option);
        if (!answer.ok) {
            throw ({
                ok: false,
                msg: 'Respuesta no válida.'
            })
        }
        return await answer.json();
    } catch (error) {
        console.log(error);
        throw ({
            ok: false,
            msg: 'Error en la consulta.'
        })
    }
}


module.exports = {
    consultFetch
}