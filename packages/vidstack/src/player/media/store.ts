import { createStore, tick } from 'maverick.js';

import type { MediaState } from './state';
import { createTimeRanges, getTimeRangesEnd, getTimeRangesStart } from './time-ranges';

export interface MediaStore extends MediaState {}

export const mediaStore = createStore<MediaStore>({
  autoplay: false,
  autoplayError: undefined,
  buffered: createTimeRanges(),
  duration: 0,
  canLoad: false,
  canFullscreen: false,
  canPlay: false,
  controls: false,
  poster: '',
  currentTime: 0,
  ended: false,
  error: undefined,
  fullscreen: false,
  loop: false,
  logLevel: __DEV__ ? 'warn' : 'silent',
  mediaType: 'unknown',
  muted: false,
  paused: true,
  played: createTimeRanges(),
  playing: false,
  playsinline: false,
  preload: 'metadata',
  seekable: createTimeRanges(),
  seeking: false,
  source: { src: '', type: '' },
  sources: [],
  started: false,
  volume: 1,
  waiting: false,
  get canSeek() {
    return /unknown|on-demand|:dvr/.test(this.streamType) && Number.isFinite(this.duration);
  },
  get viewType() {
    return this.providedViewType !== 'unknown' ? this.providedViewType : this.mediaType;
  },
  get streamType() {
    return this.providedStreamType !== 'unknown'
      ? this.providedStreamType
      : this.inferredStreamType;
  },
  get currentSrc() {
    return this.source;
  },
  get bufferedStart() {
    return getTimeRangesStart(this.buffered) ?? 0;
  },
  get bufferedEnd() {
    return getTimeRangesEnd(this.buffered) ?? 0;
  },
  get seekableStart() {
    return getTimeRangesStart(this.seekable) ?? 0;
  },
  get seekableEnd() {
    return this.canPlay ? getTimeRangesEnd(this.seekable) ?? Infinity : 0;
  },
  // ~~ user props ~~
  userIdle: false,
  userBehindLiveEdge: false,
  // ~~ live props ~~
  liveTolerance: 15,
  get live() {
    return this.streamType.includes('live');
  },
  get liveWindow() {
    const time = this.duration;
    return Number.isFinite(time) ? time - this.seekableStart : 0;
  },
  get liveEdge() {
    return (
      this.live &&
      (!this.canSeek ||
        (!this.userBehindLiveEdge &&
          Math.abs(this.duration - this.currentTime) <= this.liveTolerance))
    );
  },
  // ~~ internal props ~~
  attemptingAutoplay: false,
  canLoadPoster: null,
  providedViewType: 'unknown',
  providedStreamType: 'unknown',
  inferredStreamType: 'unknown',
});

const DO_NOT_RESET_ON_SRC_CHANGE = new Set<keyof MediaStore>([
  'autoplay',
  'canFullscreen',
  'canLoad',
  'controls',
  'loop',
  'logLevel',
  'muted',
  'playsinline',
  'preload',
  'poster',
  'source',
  'sources',
  'volume',
  'canLoadPoster',
  'providedStreamType',
  'providedViewType',
]);

/**
 * Resets all media state and leaves general player state intact (i.e., `autoplay`, `volume`, etc.).
 */
export function softResetMediaStore($media: MediaStore) {
  mediaStore.reset($media, (prop) => !DO_NOT_RESET_ON_SRC_CHANGE.has(prop));
  tick();
}
