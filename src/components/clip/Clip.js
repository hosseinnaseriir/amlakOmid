import { 
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    LoadingSpinner,
    BigPlayButton,
        } from 'video-react';
import 'video-react/dist/video-react.css';
import './Clip.css'
function Clip({src,cover=null}) { 
    return (
        <Player className="Clip mt-4 p-0 overflow-hidden rounded-5 he-video" 
            poster={cover} 
        >
                <source src={src} />
                <BigPlayButton position="center" />
                <LoadingSpinner />
                <ControlBar autoHide={true} className="dir-l"  >
                    <ReplayControl seconds={5} order={1.1} />
                    <ForwardControl seconds={5} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[2, 1.5, 1, 0.8]} order={7.1} />
                </ControlBar>
        </Player>
    );
  }
  
  export default Clip;