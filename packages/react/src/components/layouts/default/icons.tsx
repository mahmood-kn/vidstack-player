import * as React from 'react';

import airPlayIconPaths from 'media-icons/dist/icons/airplay.js';
import arrowLeftIconPaths from 'media-icons/dist/icons/arrow-left.js';
import chaptersIconPaths from 'media-icons/dist/icons/chapters.js';
import arrowRightIconPaths from 'media-icons/dist/icons/chevron-right.js';
import googleCastIconPaths from 'media-icons/dist/icons/chromecast.js';
import ccOnIconPaths from 'media-icons/dist/icons/closed-captions-on.js';
import ccIconPaths from 'media-icons/dist/icons/closed-captions.js';
import fastBackwardIconPaths from 'media-icons/dist/icons/fast-backward.js';
import fastForwardIconPaths from 'media-icons/dist/icons/fast-forward.js';
import exitFullscreenIconPaths from 'media-icons/dist/icons/fullscreen-exit.js';
import enterFullscreenIconPaths from 'media-icons/dist/icons/fullscreen.js';
import musicIconPaths from 'media-icons/dist/icons/music.js';
import muteIconPaths from 'media-icons/dist/icons/mute.js';
import odometerIconPaths from 'media-icons/dist/icons/odometer.js';
import pauseIconPaths from 'media-icons/dist/icons/pause.js';
import exitPIPIconPaths from 'media-icons/dist/icons/picture-in-picture-exit.js';
import enterPIPIconPaths from 'media-icons/dist/icons/picture-in-picture.js';
import playIconPaths from 'media-icons/dist/icons/play.js';
import replayIconPaths from 'media-icons/dist/icons/replay.js';
import seekBackwardIconPaths from 'media-icons/dist/icons/seek-backward-10.js';
import seekForwardIconPaths from 'media-icons/dist/icons/seek-forward-10.js';
import qualityIconPaths from 'media-icons/dist/icons/settings-menu.js';
import settingsIconPaths from 'media-icons/dist/icons/settings.js';
import volumeHighIconPaths from 'media-icons/dist/icons/volume-high.js';
import volumeLowIconPaths from 'media-icons/dist/icons/volume-low.js';

import { Icon } from '../../../icon';

function createIcon(paths: string) {
  function DefaultLayoutIcon(props: DefaultLayoutIconProps) {
    return <Icon paths={paths} {...props} />;
  }

  DefaultLayoutIcon.displayName = 'DefaultLayoutIcon';
  return DefaultLayoutIcon;
}

export const defaultLayoutIcons: DefaultLayoutIcons = {
  AirPlayButton: {
    Default: createIcon(airPlayIconPaths),
  },
  GoogleCastButton: {
    Default: createIcon(googleCastIconPaths),
  },
  PlayButton: {
    Play: createIcon(playIconPaths),
    Pause: createIcon(pauseIconPaths),
    Replay: createIcon(replayIconPaths),
  },
  MuteButton: {
    Mute: createIcon(muteIconPaths),
    VolumeLow: createIcon(volumeLowIconPaths),
    VolumeHigh: createIcon(volumeHighIconPaths),
  },
  CaptionButton: {
    On: createIcon(ccOnIconPaths),
    Off: createIcon(ccIconPaths),
  },
  PIPButton: {
    Enter: createIcon(enterPIPIconPaths),
    Exit: createIcon(exitPIPIconPaths),
  },
  FullscreenButton: {
    Enter: createIcon(enterFullscreenIconPaths),
    Exit: createIcon(exitFullscreenIconPaths),
  },
  SeekButton: {
    Backward: createIcon(seekBackwardIconPaths),
    Forward: createIcon(seekForwardIconPaths),
  },
  Menu: {
    Accessibility: createIcon(
      `<path d="M16 8c-.733 0-1.36-.261-1.883-.783a2.573 2.573 0 0 1-.784-1.884c0-.733.262-1.36.784-1.883A2.575 2.575 0 0 1 16 2.667a2.57 2.57 0 0 1 1.884.784c.523.523.784 1.15.783 1.883 0 .733-.261 1.361-.783 1.884A2.561 2.561 0 0 1 16 8Zm-4 20V12H5.333c-.377 0-.694-.128-.949-.384a1.296 1.296 0 0 1-.384-.95c0-.377.128-.694.384-.949s.572-.383.95-.384h21.333c.377 0 .694.128.95.384s.384.573.383.95c0 .377-.128.694-.384.95a1.285 1.285 0 0 1-.95.383H20v16c0 .378-.128.695-.384.95a1.285 1.285 0 0 1-.95.383c-.377 0-.694-.128-.949-.384a1.297 1.297 0 0 1-.384-.95v-6.666h-2.666V28c0 .378-.128.695-.384.95a1.285 1.285 0 0 1-.95.383c-.377 0-.694-.128-.949-.384A1.297 1.297 0 0 1 12 28Z" fill="currentColor"/>`,
    ),
    ArrowLeft: createIcon(arrowLeftIconPaths),
    ArrowRight: createIcon(arrowRightIconPaths),
    Audio: createIcon(musicIconPaths),
    Chapters: createIcon(chaptersIconPaths),
    Quality: createIcon(qualityIconPaths),
    Captions: createIcon(ccIconPaths),
    Settings: createIcon(settingsIconPaths),
    Speed: createIcon(odometerIconPaths),
    Font: createIcon(
      `<path d="M22.6667 10.6667H26.6667V26.6667H28V28H22.6667V26.6667H24V22.6667H18.6667L16.6667 26.6667H18.6667V28H13.3333V26.6667H14.6667L22.6667 10.6667ZM24 12L19.3333 21.3333H24V12ZM6.66667 4H13.3333C14.8133 4 16 5.18667 16 6.66667V21.3333H12V14.6667H8V21.3333H4V6.66667C4 5.18667 5.18667 4 6.66667 4ZM8 6.66667V12H12V6.66667H8Z" fill="currentColor" />`,
    ),
  },
  KeyboardAction: {
    Play: createIcon(playIconPaths),
    Pause: createIcon(pauseIconPaths),
    Mute: createIcon(muteIconPaths),
    VolumeUp: createIcon(volumeHighIconPaths),
    VolumeDown: createIcon(volumeLowIconPaths),
    EnterFullscreen: createIcon(enterFullscreenIconPaths),
    ExitFullscreen: createIcon(exitFullscreenIconPaths),
    EnterPiP: createIcon(enterPIPIconPaths),
    ExitPiP: createIcon(exitPIPIconPaths),
    CaptionsOn: createIcon(ccOnIconPaths),
    CaptionsOff: createIcon(ccIconPaths),
    SeekForward: createIcon(fastForwardIconPaths),
    SeekBackward: createIcon(fastBackwardIconPaths),
  },
};

export interface DefaultLayoutIconProps
  extends React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> {}

export interface DefaultLayoutIcon {
  (props: DefaultLayoutIconProps): React.ReactNode;
}

export interface DefaultAirPlayButtonIcons {
  Default: DefaultLayoutIcon;
  Connecting?: DefaultLayoutIcon;
  Connected?: DefaultLayoutIcon;
}

export interface DefaultGoogleCastButtonIcons {
  Default: DefaultLayoutIcon;
  Connecting?: DefaultLayoutIcon;
  Connected?: DefaultLayoutIcon;
}

export interface DefaultPlayButtonIcons {
  Play: DefaultLayoutIcon;
  Pause: DefaultLayoutIcon;
  Replay: DefaultLayoutIcon;
}

export interface DefaultMuteButtonIcons {
  Mute: DefaultLayoutIcon;
  VolumeLow: DefaultLayoutIcon;
  VolumeHigh: DefaultLayoutIcon;
}

export interface DefaultCaptionButtonIcons {
  On: DefaultLayoutIcon;
  Off: DefaultLayoutIcon;
}

export interface DefaultPIPButtonIcons {
  Enter: DefaultLayoutIcon;
  Exit: DefaultLayoutIcon;
}

export interface DefaultFullscreenButtonIcons {
  Enter: DefaultLayoutIcon;
  Exit: DefaultLayoutIcon;
}

export interface DefaultSeekButtonIcons {
  Backward: DefaultLayoutIcon;
  Forward: DefaultLayoutIcon;
}

export interface DefaultMenuIcons {
  Accessibility: DefaultLayoutIcon;
  ArrowLeft: DefaultLayoutIcon;
  ArrowRight: DefaultLayoutIcon;
  Audio: DefaultLayoutIcon;
  Chapters: DefaultLayoutIcon;
  Quality: DefaultLayoutIcon;
  Captions: DefaultLayoutIcon;
  Settings: DefaultLayoutIcon;
  Speed: DefaultLayoutIcon;
  Font: DefaultLayoutIcon;
}

export interface DefaultKeyboardActionIcons {
  Play: DefaultLayoutIcon;
  Pause: DefaultLayoutIcon;
  Mute: DefaultLayoutIcon;
  VolumeUp: DefaultLayoutIcon;
  VolumeDown: DefaultLayoutIcon;
  EnterFullscreen: DefaultLayoutIcon;
  ExitFullscreen: DefaultLayoutIcon;
  EnterPiP: DefaultLayoutIcon;
  ExitPiP: DefaultLayoutIcon;
  CaptionsOn: DefaultLayoutIcon;
  CaptionsOff: DefaultLayoutIcon;
  SeekForward: DefaultLayoutIcon;
  SeekBackward: DefaultLayoutIcon;
}

export interface DefaultLayoutIcons {
  AirPlayButton: DefaultAirPlayButtonIcons;
  GoogleCastButton: DefaultGoogleCastButtonIcons;
  PlayButton: DefaultPlayButtonIcons;
  MuteButton: DefaultMuteButtonIcons;
  CaptionButton: DefaultCaptionButtonIcons;
  PIPButton: DefaultPIPButtonIcons;
  FullscreenButton: DefaultFullscreenButtonIcons;
  SeekButton: DefaultSeekButtonIcons;
  Menu: DefaultMenuIcons;
  KeyboardAction?: DefaultKeyboardActionIcons;
}
