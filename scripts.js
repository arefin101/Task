
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }

  function previewFile() {

    const preview = document.querySelector('.file-upload-image');

    const file = document.querySelector('.file-upload-input').files[0];

    const reader = new FileReader();
  
    reader.addEventListener("load", () => {

        $('.image-upload-wrap').hide();
      
        preview.src = reader.result;

        $('.file-upload-content').show();

    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }

  }
  
  