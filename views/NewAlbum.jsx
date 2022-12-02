const React = require('react');

function NewAlbum({albums}) {
    return (
        <div className="modal fade" id="newAlbumModal" tabIndex="-1" aria-labelledby="newAlbumModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="album-checkbox-container">
                        <input className="checkbox-album" type="radio" value={"exist"} name="albumType" id="checkAlbum"
                               checked/>
                        <label className="form-check-label" htmlFor="checkAlbum">
                            Добавить в альбом
                        </label>
                        <input className="checkbox-new-album" type="radio" value={"create"} name="albumType"
                               id="checkNewAlbum"
                        />
                        <label className="form-check-label" htmlFor="checkNewAlbum">
                            Создать новый альбом
                        </label>
                    </div>

                    <div className="choose-album-container">
                        <select name="albumId" className="form-select" aria-label="Default select example">
                            <option value={null} selected>Выберите альбом</option>
                            {albums && albums.length && albums.map(el => (
                                <option value={el.id}>{el.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="create-album-container hidden">
                        <div className="">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Название
                                    альбома</label>
                                <input type="text" name="albumName" className="form-control"
                                       id="exampleFormControlInput1"/>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="isPublic"
                                       id="checkboxAccess"/>
                                <label className="form-check-label" htmlFor="checkboxAccess">Public access
                                </label>
                            </div>
                        </div>
                        <div className={"user-access-container"}>
                            <div className="input-group mb-3">
                                <input id="userAccessSearch" type="text" className="form-control"
                                       placeholder="Enter username"
                                       aria-label="Enter username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-secondary" type="button"
                                        id="addUserAccessButton">Выбрать
                                </button>
                            </div>
                            <div id="errorsUserSearchContainer"></div>
                            <ul id="userAccessList"></ul>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Закрыть
                        </button>
                        <button type="submit" className="btn btn-primary">Загрузить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = NewAlbum;
