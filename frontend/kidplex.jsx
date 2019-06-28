import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//TESTING
import { getVideo, getVideos } from './util/video_api_util';
//

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
            },
            session: { id: window.currentUser.id },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //for testing
        window.getState = store.getState;
        window.dispatch = store.dispatch;
        window.getVideos = getVideos;
        window.getVideo = getVideo;
    //
    
    ReactDOM.render(<Root store={store}/>, root);
});
