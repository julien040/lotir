
exports = async function(platform, id, title, image){
  const imgbbUploader = require("imgbb-uploader");
  const options = {
  apiKey: context.values.get("imgBB"),
  base64string:image,
  };
  const data = await imgbbUploader(options)
  .catch((error) => console.error(error));
  await context.functions.execute("addMessage", platform, id, title, data.url);
  const urlToReturn = data.url;
  return {urlToReturn};
};