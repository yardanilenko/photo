const React = require('react');
const Layout = require('./Layout');

function NewAlbum({}) {
  return (
    <Layout>
      <nav>
        <div style={{
          backgroundColor: '#EEDDFF',
          border: '6px solid #7922CC',
          borderRadius: '25px',
          width: '300px',
          height: '300px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <div>
            <div style={{ textAlign: 'center' }}><strong>Название альбома</strong></div>
            <div style={{ margin: '7px' }}>
              <input className="album" type="text" style={{ outline: '0 !important', borderRadius: '10px' }} />
            </div>
            <form style={{ margin: '7px' }}>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Публичный доступ:
                </label>
              </div>
              <div>
                <select className="friends" type="text" id="submit" style={{ outline: '0 !important', borderRadius: '10px', minWidth: '185px' }} disabled>
                  <option selected>Никто</option>
                  <option value="1">OneOne</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
            <div style={{ margin: '7px' }}>
              <button type="button" className="btn btn-info">Сохранить</button>
            </div>
          </div>
        </div>
      </nav>
    </Layout>
  );
}
module.exports = NewAlbum;
