import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const name = file.originalname
        cb(null, name)
    }
})

const filterImg = function (req, file, cb) {

    const { mimetype } = file
    if (mimetype.includes('image')) {
        cb(null, true)
    }
    else { cb(new Error('Solo se aceptas imagenes')) }

}

export const upload = multer({ storage: storage, fileFilter: filterImg })