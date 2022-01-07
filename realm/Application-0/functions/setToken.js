exports = async function(id, token){
  const mongodb = context.services.get("mongodb-atlas");
  const t = mongodb.db("store").collection("token");
  const query = { "syncID": id };
  const update = {
  "$set": {
    token:token,
    }
  };
  const options = { "upsert": true };
  await t.updateOne(query, update, options)
  
  
  return {id, token};
};