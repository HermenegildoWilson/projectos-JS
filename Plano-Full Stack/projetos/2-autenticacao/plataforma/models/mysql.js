const { mysqlDB } = require('../config');

class iterator {
    select = async (table, {columns=['*'], condition=''}) => {
        return await new Promise((res, rej) => {
            try{
                const sqlCode = `select ${columns} from ${table} ${condition};`;

                mysqlDB.query(sqlCode, (erro, results) => {
                    if (erro) {
                        if (erro.sqlMessage) {
                            return rej(erro.sqlMessage);
                        }
                        return rej(erro);
                    }

                    return res(results);

                });
            }catch(erro) {
                if (erro.sqlMessage) {
                    return rej(erro.sqlMessage);
                }
                return rej(erro);
            }
        });
    }

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
}

module.exports = new iterator();