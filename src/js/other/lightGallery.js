import { flsModules } from './modules.js';

import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js';
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js';
import lgAutoplay from 'lightgallery/plugins/autoplay/lg-autoplay.min.js';
import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js';
import lgPager from 'lightgallery/plugins/pager/lg-pager.min.js';
import lgShare from 'lightgallery/plugins/share/lg-share.min.js';
import lgVideo from 'lightgallery/plugins/video/lg-video.min.js';
import lgComment from 'lightgallery/plugins/comment/lg-comment.min.js';
// import lgMediumZoom from "lightgallery/plugins/mediumZoom/lg-medium-zoom.min.js";
// import lgRotate from "lightgallery/plugins/rotate/lg-rotate.min.js";

const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
    let galleryItems = [];
    galleries.forEach(gallery => {
        galleryItems.push({
            gallery,
            galleryClass: lightGallery(gallery, {
                plugins: [
                    // lgMediumZoom, // отдельно надо ибо будет все закрывать
                    //   lgRotate,
                    lgZoom,
                    lgThumbnail,
                    lgAutoplay,
                    lgFullscreen,
                    lgPager,
                    lgShare,
                    lgVideo,
                    lgComment
                ],
                licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
                speed: 500,
                zoomFromOrigin: true,
                allowMediaOverlap: true,
                autoplay: true,
                autoplayControls: true,
                pager: true,
                fullScreen: true,
                share: true,
                controls: true,
                download: true,
                zoom: true,
                enableDrag: true,
                thumbnail: true,
                showThumbByDefault: true,
                videojs: true,
                closable: true,
                commentBox: true,
                fbComments: true
                // rotate: true,
                // iframeMaxWidth: "100%",
                // backdropDuration: 500,
                // mediumZoom: {
                //     background: "#fff",
                // },
            })
        });
    });
    flsModules.gallery = galleryItems;

    (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
}
