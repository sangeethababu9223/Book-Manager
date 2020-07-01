import multer from 'multer';
export const bookUploads = (req, res) => {
    if (!req.file) {
        console.log("No file is available!");
        return res.send({
          success: false
        });
    
      } else {
        console.log('File is available!');
        return res.send({
          success: true
        })
      }
};