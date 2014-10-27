// $(function(){
//     $('#file_drop_area').dropzone({
//         url:$('#csv_upload_url').val(),
//         paramName:'csv_file',
//         maxFilesize:1, //MB
//         addRemoveLinks:true,
//         thumbnailWidth:100, //px
//         thumbnailHeight:100, //px
//         uploadprogress:function(_file, _progress, _size){
//             _file.previewElement.querySelector("[data-dz-uploadprogress]").style.width = "" + _progress + "%";
//         },
//         success:function(_file, _return, _xml){
//             _file.previewElement.classList.add("dz-success");
//         },
//         error:function(_file, _error_msg){
//             var ref;
//             (ref = _file.previewElement) != null ? ref.parentNode.removeChild(_file.previewElement) : void 0;
//         },
//         removedfile:function(_file){
//             var ref;
//             (ref = _file.previewElement) != null ? ref.parentNode.removeChild(_file.previewElement) : void 0;
//         },
//         complete:function(_file){

//         },
//         dictRemoveFile:'remove',
//         dictCancelUpload:'cancel'
//     });
// });

Dropzone.options.myAwesomeDropzone = {
    maxFilesize: 1, //MB
    addRemoveLinks: true,
    thumbnailWidth: 100, //px
    thumbnailHeight: 100, //px
    dictRemoveFile: 'remove',
    dictCancelUpload: 'cancel',
    accept: function(file, done) {
        console.log("uploaded");
        done();
    },
    init: function() {
        this.on("maxfilesexceeded", function(file) {
            alert("No more files please!");
        });

        this.on("complete", function(_file) {
            if (this.getUploadingFiles().length === 0 && 
                this.getQueuedFiles().length === 0) {
                console.log("complete!");
            }
        });
    }
}