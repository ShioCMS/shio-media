const API_URL = 'http://localhost:2711/api/v2';

export  function getPhotos() {
    return fetch(`${API_URL}/photos`)
      .then(res => res.json())
      .then(json => json);
};

export async function uploadPhoto(file) {
    if (!file)
        return null;

    const photoFormData = new FormData();

    photoFormData.append("photo", file);


    const response = await fetch(`${API_URL}/photos`, {
        method: 'POST',
        body: photoFormData,
    });

    return response.json();
};