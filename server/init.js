Meteor.startup(() => {
  console.log('Starting upload server...')

  UploadServer.init({
    tmpDir: process.env.PWD + '/public/uploads/tmp',
    uploadDir: process.env.PWD + '/public/uploads',
    validateRequest: (req) => {
      console.log('Validating Request...')
    },
    validateFile: (file, req) => {
      console.log('Validating file...')
      console.log(file)
    },
    checkCreateDirectories: true,
    getDirectory: function(fileInfo, formData) {
      if (formData && formData.directoryName != null) {
        return formData.directoryName;
      }
      return "";
    },
    getFileName: function(fileInfo, formData) {
      if (formData && formData.prefix != null) {
        return formData.prefix + '_' + fileInfo.name;
      }
      return fileInfo.name;
    },
    finished: function(fileInfo, formData) {
      console.log('Finished')
      if (formData && formData._id != null) {
        // Items.update({_id: formData._id}, { $push: { uploads: fileInfo }});
      }
    },
    cacheTime: 100,
    mimeTypes: {
      "xml": "application/xml",
      "vcf": "text/x-card"
    }

  })

})