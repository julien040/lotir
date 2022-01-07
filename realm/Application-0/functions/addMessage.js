exports = async function(platform,id, title, body){
    const mongodb = context.services.get("mongodb-atlas");
    const messages = mongodb.db("store").collection("messages");
    const item = {
      platform:platform,
      id:id,
      title:title,
      body:body,
      time:new Date()
    }
    await messages.insertOne(item)
    return item
};