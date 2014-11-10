function MinomushiController($scope, $http, $timeout) {

  $scope.isDownloadAreaShow = false;
  $scope.isDownloadButtonShow = true;
  $scope.isDownloadProgressShow = false;
  $scope.isClearLinkShow = false;
  $scope.send = function send() {};

  alertify.set({
    delay: 5000
  });

  Dropzone.options.myAwesomeDropzone = {
    maxFilesize: 1, //MB
    thumbnailWidth: 100, //px
    thumbnailHeight: 100, //px
    dictCancelUpload: 'cancel',
    init: function() {
      this.on("maxfilesexceeded", function(file) {
        alert("No more files please!");
      });

      this.on("complete", function(_file) {
        if (this.getUploadingFiles().length === 0 &&
          this.getQueuedFiles().length === 0) {
          // コールバックの中から$scopeにアクセスする
          $scope.$apply(function() {
            $scope.isDownloadAreaShow = true;
          });
          
          alertify.log("upload completed successfully.");

          // ダウンロードリンクまでスクロールする
          $("html, body").animate({
            scrollTop: $("#downloadFromHere").offset().top
          }, 1000);
        }
      });
    }
  }

  $scope.onClickDownload = function(kind) {
    $scope.isDownloadButtonShow = false;
    $scope.isDownloadProgressShow = true;

    $timeout(function() {
      $scope.isDownloadButtonShow = true;
      $scope.isDownloadProgressShow = false;
      $scope.isClearLinkShow = true;
      $("html, body").animate({
        scrollTop: $("#pageEnd").offset().top
      }, 1000);
    }, 8000);
    location.href = "/download/" + kind;
  }

  $scope.onClickClear = function() {
    $http.post('/clear', {}).success(function(data, status, headers, config) {
      alertify.log(data.message);
    }).error(function(data, status, headers, config) {
      alertify.error("");
    });
  }
}