const aws = require ("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const uuid = require('uuid').v4

const {S3_ENDPOINT, BUCKET_NAME} = process.env;
//console.log(S3_ENDPOINT, BUCKET_NAME)
const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);
const s3 = new aws.S3({
    endpoint: spacesEndpoint
})

const upload = multer({
    storage: multerS3({
        s3,
        bucket: BUCKET_NAME,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {
                fieldname: file.fieldname
            })
        },  
        key: (req, file, cb) =>{
            
            cb(null, uuid() + path.extname(file.originalname).toLowerCase());
        }
    }),
    limits:{fileSize: 10000000},
    fileFilter:(req,file,cb)=>{
        const filetypes = /jpeg|jpg|png|gif|bmp|epub|azw|ibook|zip|rar|mac|pdf|docx|doc|dot|dotm|xlsx|xlsm|xltx|xltm|xlam|xlsb|pptx|pptm|ppt|pdf|pdx|pef|txt|mat|vi|ino|c|cpp|hex/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Estás intentando subir un archivo no soportado, intenta subir otro");
    }
}).single('upload')

module.exports = {upload, s3} 