const { mysqlDB } = require('../config');

class mysqlIterator {
    insert = async (tableName, values) => {
        return await new Promise((resolve, reject) => {
            try {
                const sqlCode = `insert into ${tableName} values (${values});`;

                mysqlDB.query(sqlCode, (erro, results) => {
                    if (erro) {
                        reject('Erro: '+erro);
                    }

                    resolve(results);

                });
            } catch (erro) {
                reject('Erro: '+erro);
            }
        })
    }

    select = async (tableName, {colums=['*'], conditions=''}) => {
        return await new Promise((resolve, reject) => {
            try {
                const sqlCode = `select ${colums} from ${tableName} ${conditions};`;

                mysqlDB.query(sqlCode, (erro, results) => {
                    if (erro) {
                        reject('Erro: '+erro.sqlMessage);
                    }

                    resolve(results);

                });
            } catch (erro) {
                reject('Erro: '+erro.sqlMessage);
            }
        })
    }
}

module.exports = new mysqlIterator();