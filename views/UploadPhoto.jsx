const React = require('react');
const Layout = require('./Layout');

function UploadPhoto({}) {
    return (
        <Layout>
          <div className="container">
              <input type="file" name="photo" multiple={true}/>
              <button className="btn btn-outline-primary">Добавить в альбом</button>
              <button className="btn btn-outline-primary">Создать новый</button>
          </div>
        </Layout>
    );
}

module.exports = UploadPhoto;
