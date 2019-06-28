import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

const receiveVideo = video =>({
    type: RECEIVE_VIDEO,
    video
});
const receiveVideos = videos =>({
    type: RECEIVE_VIDEOS,
    videos
});

export const getVideo = videoId => dispatch => {
    return APIUtil.getVideo(videoId).then(video => dispatch(receiveVideo(video)));
}
export const getVideos = () => dispatch => {
    return APIUtil.getVideos().then(videos => dispatch(receiveVideos(videos)));
}
