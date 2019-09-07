const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({ //values of these variables are stored in .ENV and it is "gitignored"
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

var theStorageObjectThingy = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'Project2_Ironhack',  // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage: theStorageObjectThingy });

module.exports = uploadCloud;
