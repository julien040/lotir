exports = async  function(changeEvent) {
  const { Expo } = require('expo-server-sdk')
  let expo = new Expo({ accessToken: context.values.get("expoKey") });
  let message = []
  if (changeEvent.fullDocument.platform ==="website") {
    const query = {"syncID": changeEvent.fullDocument.id };
    const mongodb = context.services.get("mongodb-atlas");
    const itemsCollection = mongodb.db("store").collection("token");
    const {token} = await itemsCollection.findOne(query)
    message.push({
    to: token,
    title:"New message from computer",
    subtitle: changeEvent.fullDocument.platform.title,
    data: {id: changeEvent.fullDocument.platform.id },
    })
    await expo.sendPushNotificationsAsync(message);
    return {token}
  } else {
    return 
  }
  
  /*
    A Database Trigger will always call a function with a changeEvent.
    Documentation on ChangeEvents: https://docs.mongodb.com/manual/reference/change-events/

    Access the _id of the changed document:
    const docId = changeEvent.documentKey._id;

    Access the latest version of the changed document
    (with Full Document enabled for Insert, Update, and Replace operations):
    const fullDocument = changeEvent.fullDocument;

    const updateDescription = changeEvent.updateDescription;

    See which fields were changed (if any):
    if (updateDescription) {
      const updatedFields = updateDescription.updatedFields; // A document containing updated fields
    }
*/
};
