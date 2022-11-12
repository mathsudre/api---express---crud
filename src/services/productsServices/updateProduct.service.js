import database from "../../database";

const updateProductService = async (updateInfo,id) => {    
        const {name} = updateInfo;
    try {
        const res = await database.query(    
        "UPDATE products SET name = $1 WHERE id = $2 RETURNING *;",
        [name,id]
    );
    
    if (res.rows.length === 0) {
        throw "id não corresponde a nenhum produto";
    };
    
        return { message: "Produto atualizado com sucesso !!!", product: res.rows[0] };
    } catch (err) {
        throw new Error(err);
    };
};


export default updateProductService;
