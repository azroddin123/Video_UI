
        var vid = document.getElementById('video');
        function cam_start() {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                    vid.srcObject = stream;
                    localstream = stream;
                    vid.play();
                    document.getElementById('message').innerHTML = "Camera Start Event Performed Now"
                    // video.autoplay();
                });
            }
        }
        function cam_close() {
            navigator.mediaDevices.getUserMedia == false;
            vid.source = '';
            localstream.getTracks()[0].stop();
             document.getElementById('message').innerHTML = "Close Camera Event performed Now"
        }
        function cam_capture() {
            document.getElementById('message').innerHTML = "Capture Event is Performed Now";
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            context.drawImage(vid, 0, 0, 500, 400)
        }