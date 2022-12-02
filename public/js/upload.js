const form = document.querySelector('#uploadForm');
const filesToUpload = document.querySelector('#filesToUpload');
const previewContainer = document.querySelector('#previewContainer');
const createNewAlbumCheckbox = document.querySelector('#checkNewAlbum');
const label = document.querySelector(".file_input+label")
const submitButton = document.querySelector("#submitButton")
const albumTypeRadio = document.querySelectorAll('[name="albumType"]')
let fholoList = [];

albumTypeRadio.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.value === 'create') {
            document.querySelector('.choose-album-container').classList.add('hidden');
            document.querySelector('.create-album-container').classList.remove('hidden');
        } else {
            document.querySelector('.choose-album-container').classList.remove('hidden');
            document.querySelector('.create-album-container').classList.add('hidden');
        }
    });
});

filesToUpload.addEventListener('change', (event) => {
    const files = event.target.files;
    const filesList = Array.from(files).filter((el) => fholoList.every(e => e.name !== el.name));
    fholoList.push(...filesList);
    label.classList.add("small");
    submitButton.classList.remove('hidden')
    filesList.forEach((file, index) => {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            const div = document.createElement('div');
            div.classList.add('image-preview-container');
            const img = document.createElement('img');
            img.src = event.target.result;
            div.appendChild(img);
            console.log(file)
            const template = `
                <div class="checkbox-container">
                  <input class="checkbox-preview" type="radio" name="flexRadioDefault" value=${btoa(file.name) + file.size} id="flexRadioDefault${btoa(file.name) + file.size}">
                  <label class="form-check-label" for="flexRadioDefault${btoa(file.name) + file.size}">
                  </label>
                </div>`
            div.innerHTML += template;
            previewContainer.appendChild(div);
        });
        reader.readAsDataURL(file);
    });
})

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const previewIndex = document.querySelector('.checkbox-preview:checked')?.value || null;
    // TODO submit from modal
    // TODO get album id from select or new album: albumId
    handleSubmit(fholoList, {
        previewIndex,
        albumId: evt.target.albumId.value,
    })

})

function handleSubmit(acceptedFiles, {
    previewIndex,
    albumId,
}) {
    const data = new FormData();

    for (const file of acceptedFiles) {
        data.append('photos', file, file.name);
    }
    if (previewIndex) data.append('previewIndex', previewIndex);
    if (albumId) data.append('albumId', albumId);


    return fetch('/api/upload', {
        method: 'POST',
        body: data,
    }).then((response) => {
        console.log(response)
        if (response.ok) {
            window.location.href = '/profile'
        } else {
            console.log('Error');
        }
    }).catch((error) => {
        console.log(error);
    });
}