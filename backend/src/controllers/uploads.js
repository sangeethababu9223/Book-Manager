export const bookUploads = (req, res) => {
    if (!req.file) {
        return res.send({
          success: false
        });
    
      } else {
        return res.send({
          success: true
        })
      }
};