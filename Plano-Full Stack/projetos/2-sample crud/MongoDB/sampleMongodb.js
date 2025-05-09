const { MongoClient, ObjectId } = require('mongodb');
const url = `mongodb://localhost:27017/vendas`;
const MongodbClient = new MongoClient(url);

async function conection(collectionName) {
    try {
        await MongodbClient.connect();
        const db = MongodbClient.db();
        
        const collection = db.collection(`${collectionName}`);

        return collection;

    } catch (error) {
        console.log("ERRo..."+error);
        MongodbClient.close();
    }
}

const crud = {
    creat: async (collectionName, document) => {
        const collection = await conection(collectionName);
        const feedBack = await collection.insertOne(document);
        
        console.log(feedBack.insertedId);
        MongodbClient.close();
        return feedBack
    },
    read: async (collectionName) => {
        const collection = await conection(collectionName);
        const data = (await collection.find({}).toArray());

        console.log(data);
        MongodbClient.close();
        return data;
    },
    update: async (collectionName, id, document) => {
        const collection = await conection(collectionName);
        const feedBack = await collection.updateOne(id, document);

        console.log(feedBack);
        MongodbClient.close();
        return feedBack;
    },
    delete: async (collectionName, id) => {
        const collection = await conection(collectionName);
        const feedBack = await collection.deleteOne(id);

        console.log(feedBack);
        MongodbClient.close();
        return feedBack;
    }

}


let novoProduto = { "id": 19, "nome": "IPhone XR", "preco": 3999.99,"temDesconto": "true", "qtd": "Ola"}
//crud.creat('Produtos', novoProduto);

let idDelete = {_id: new ObjectId('680bdf017fa3a55a0616a395') }
//crud.delete('Produtos', idDelete);

let idUpdate = {_id: new ObjectId('680bdce5053249dad9c9eac9') }
const profutoAtualizado =  {$set: {"preco": 340.84} }
//crud.update('Produtos', idUpdate, profutoAtualizado);

crud.read('Produtos');