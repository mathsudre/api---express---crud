import database from "../../database";

const updateCategoryService = async (updateInfo,id) => {    
        const {name} = updateInfo;
    try {
        const res = await database.query(    
        "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;",
        [name,id]
    );
    
    if (res.rows.length === 0) {
        throw "id não corresponde a nenhuma categoria";
    };
    
        return { message: "Categoria atualizada com sucesso !!!", category: res.rows[0] };
    } catch (err) {
        throw new Error(err);
    };
};


export default updateCategoryService
