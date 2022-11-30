const React = require('react');

function PersonAlbum () {
    return (

            <main role="main">
             <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading">Название альбома</h1>
                <p>
                <a href="#" className="btn btn-secondary my-2">Редактировать название ольбома</a>
                </p>
              </div>
             </section>

             <div className="container text-center"> 
                <div className="row align-items-center">
                 {/* <div class="overflow-auto scroll-container"> */}
                    <div className="col">
                       <div className="card-1" style={{width: 300}}>
                        <button type="button" className="btn-close" aria-label="Удалить" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
                         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div class="modal-dialog">
                           <div class="modal-content">
                             <div class="modal-header">
                               <h5 class="modal-title" id="exampleModalLabel">Удалить фото?</h5>
                               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                             <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Да</button>
                             </div>
                             </div>
                           </div>
                         </div>  
                        <img src="https://celes.club/uploads/posts/2022-05/thumbs/1653314437_28-celes-club-p-teplii-serii-fon-krasivie-30.jpg" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Заголовок карточки</h5>
                            <a href="#" className="btn btn-primary">Добаввить описание</a>
                        </div>
                       </div>
                    </div>


                    <div className="col">   
                       <div className="card-2" style={{width: 300}}>
                       <button type="button" className="btn-close" aria-label="Удалить" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width: 300}}></button>
                       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div class="modal-dialog">
                           <div class="modal-content">
                             <div class="modal-header">
                               <h5 class="modal-title" id="exampleModalLabel">Удалить фото?</h5>
                               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                             <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Да</button>
                             </div>
                             </div>
                           </div>
                         </div>  
                        <img src="https://celes.club/uploads/posts/2022-05/thumbs/1653314437_28-celes-club-p-teplii-serii-fon-krasivie-30.jpg" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Заголовок карточки</h5>
                            <a href="#" className="btn btn-primary">Добаввить описание</a>
                        </div>
                       </div>
                    </div> 


                    <div className="col"> 
                       <div className="card-3" style={{width: 300}}>
                       <button type="button" className="btn-close" aria-label="Удалить" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
                       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div class="modal-dialog">
                           <div class="modal-content">
                             <div class="modal-header">
                               <h5 class="modal-title" id="exampleModalLabel">Удалить фото?</h5>
                               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                             <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Да</button>
                             </div>
                             </div>
                           </div>
                         </div>
                        <img src="https://celes.club/uploads/posts/2022-05/thumbs/1653314437_28-celes-club-p-teplii-serii-fon-krasivie-30.jpg" className="card-img-top"/>
                        <div className="card-body">
                        <p class="card-text">Небольшой пример текста.</p>
                            <a href="#" className="btn btn-primary">Добаввить описание</a>
                        </div>
                       </div>
                    </div>   
              </div>  
             </div>
            </main>
    )
}

module.exports = PersonAlbum;