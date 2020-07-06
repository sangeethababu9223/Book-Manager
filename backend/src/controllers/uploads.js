export const bookUploads = (req, res) => {
  console.log("Come along");
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