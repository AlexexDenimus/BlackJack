const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadFeature = requestHandler => async (type, resource, params) => {
  if ((type === 'CREATE' || type === 'UPDATE') && resource === 'barbers') {
    // notice that following condition can be true only when `<ImageInput source="pictures" />` component has parameter `multiple={true}`
    // if parameter `multiple` is false, then data.pictures is not an array, but single object
    if (params.data.picture) {
      if (type === 'UPDATE' && params.data.picture.src !== params.previousData.picture.src) {
        // only freshly dropped pictures are instance of File
        //   const formerPicture = params.data.picture.filter(p => !(p.rawFile instanceof File));
        const newPicture = params.data.picture.rawFile;

        const base64 = await convertFileToBase64(newPicture);

        const base64Picture = {
          src: base64,
          name: params.data.picture.alt,
          type: params.data.picture.rawFile.type,
        };

        return requestHandler(type, resource, {
          ...params,
          data: {
            ...params.data,
            picture: base64Picture,
          },
        });
      }
    }
  }
  // for other request types and resources, fall back to the default request handler
  return requestHandler(type, resource, params);
};

export default addUploadFeature;
