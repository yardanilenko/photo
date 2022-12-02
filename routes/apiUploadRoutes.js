const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const {Photo, Album} = require('../db/models/indexmodels');


const route = express.Router();


route.post('/api/upload', upload.array('photos', 100), async (req, res, next) => {
    // {
    //     fieldname: 'photos',
    //     originalname: 'AlbumView.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'uploads/',
    //     filename: '1551185e23a54cffdc345e24dd396bb3',
    //     path: 'uploads/1551185e23a54cffdc345e24dd396bb3',
    //     size: 120968
    // }
    // req.body will contain the text fields, if there were any: previewIndex, albumId

    // let previewImageDB;
    // 1 previewImage  = req.files.find(file => btoa(file.originalname)+file.size === req.body.previewIndex)
    // 2 allPhotos = req.files.filter((file, index) => btoa(file.originalname)+file.size !== req.body.previewIndex)
    // 3 if (previewImage) const previewImageDB = await insert previewImage
    // 4 const photos = await insert allPhotos
    // 5 if (previewImageDB) await update previewImage with id
    // 5 else await update first photo with photos[0].id

    // TODO save photos to db (forEach or bulkInsert)
    // TODO update album preview_id from saved photo filtered by previewIndex
    try{
    let previewImageDB;
    const allPhotos = req.files.filter((file, index) => btoa(file.originalname)+file.size !== req.body.previewIndex);
    const previewImage = req.files.find(file => btoa(file.originalname)+file.size === req.body.previewIndex);
        console.log(previewImage.filename)
    if (previewImage) {
        previewImageDB = await Photo.create({name: previewImage.originalname, storage_file_name: previewImage.filename, album_id: req.body.albumId});
    }
    const photos = await Photo.bulkCreate(allPhotos.map(file => ({name: file.originalname, storage_file_name: file.filename, album_id: req.body.albumId})));
    if (previewImageDB) {
        await Album.update({preview_id: previewImageDB.id}, {where: {id: req.body.albumId}});
    }else {
        await Album.update({preview_id: photos[0].id}, {where: {id: req.body.albumId}});
    }
    } catch (err) {
       console.log(err)
    }
    res.send({
        success: true,
    });
})


module.exports = route;
