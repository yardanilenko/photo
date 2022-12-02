const React = require('react');
const Layout = require('./Layout');
const NewAlbum = require('./NewAlbum')

function UploadPhoto({}) {
    return (
        <Layout>
            <script defer src="/js/upload.js"/>
            <div className="container carouselContainer">
                <form id="uploadForm">
                    <input className="form-control file_input" id="filesToUpload" type="file" name="photos" multiple
                           accept="png,jpg,jpeg"/>
                    <label className="form-check-label" htmlFor="filesToUpload">+ Добавить</label>
                    <div id="previewContainer" className="preview-container"></div>
                    <button id="submitButton" type="button" className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#newAlbumModal">Продолжить
                    </button>
                    <NewAlbum/>
                </form>
            </div>
        </Layout>
    );
}

module.exports = UploadPhoto;
