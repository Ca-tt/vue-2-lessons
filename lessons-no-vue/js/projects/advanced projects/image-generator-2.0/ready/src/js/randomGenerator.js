import { createApi } from 'unsplash-js';
import { image } from './global.js';

async function getPhotos() {
  let accessKey = 'YdoVc2h7SPatg2coPtJ-Pu248Vu5tU-h75sHUwYkK4I';

  let unsplash = createApi({
    accessKey: accessKey,
  });

  let randomPhoto = await unsplash.photos.getRandom({});

  let photoSrc = randomPhoto.response.links.download;
  image.src = photoSrc;
}

getPhotos();
