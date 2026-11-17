/**
 * Crisp Tournament Vector SVG Chess Pieces & Web Audio Sound Synthesizer
 * Zero external image/audio asset dependencies — works 100% offline & on GitHub Pages.
 */

(function (global) {
  'use strict';

  const PIECE_SVGS = {
    wp: `<svg viewBox="0 0 45 45" class="piece-svg"><path d="M 22.5,9 C 19.5,9 17,11.5 17,14.5 C 17,16.8 18.4,18.7 20.4,19.5 C 17.5,21 15.5,24 15.5,27.5 C 15.5,29.5 16.5,31 16.5,31 L 12.5,36 L 32.5,36 L 28.5,31 C 28.5,31 29.5,29.5 29.5,27.5 C 29.5,24 27.5,21 24.6,19.5 C 26.6,18.7 28,16.8 28,14.5 C 28,11.5 25.5,9 22.5,9 z" fill="#fff" stroke="#1e293b" stroke-width="1.8" stroke-linecap="round"/><path d="M 11,36 L 34,36 L 34,39.5 L 11,39.5 Z" fill="#fff" stroke="#1e293b" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    wr: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#fff" stroke="#1e293b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z"/><path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z"/><path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"/><path d="M 34,14 L 31,17 L 14,17 L 11,14"/><path d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"/><path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"/><path d="M 11,14 L 34,14" fill="none"/></g></svg>`,
    wn: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#fff" stroke="#1e293b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"/><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"/><circle cx="15.5" cy="14.5" r="1.2" fill="#1e293b"/></g></svg>`,
    wb: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#fff" stroke="#1e293b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"/><path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/><circle cx="22.5" cy="8" r="2.2"/><path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" fill="none"/></g></svg>`,
    wq: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#fff" stroke="#1e293b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"/><path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"/><path d="M 11.5,30 C 15,29 30,29 33.5,30" fill="none"/><path d="M 12,33.5 C 18,32.5 27,32.5 33,33.5" fill="none"/><circle cx="6" cy="12" r="1.8"/><circle cx="14" cy="9" r="1.8"/><circle cx="22.5" cy="8" r="1.8"/><circle cx="31" cy="9" r="1.8"/><circle cx="39" cy="12" r="1.8"/></g></svg>`,
    wk: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#fff" stroke="#1e293b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 22.5,11.63 L 22.5,6" fill="none"/><path d="M 20,8 L 25,8" fill="none"/><path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"/><path d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z"/><path d="M 11.5,30 C 17,27 27,27 32.5,30" fill="none"/><path d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5" fill="none"/><path d="M 11.5,37 C 17,34 27,34 32.5,37" fill="none"/></g></svg>`,

    bp: `<svg viewBox="0 0 45 45" class="piece-svg"><path d="M 22.5,9 C 19.5,9 17,11.5 17,14.5 C 17,16.8 18.4,18.7 20.4,19.5 C 17.5,21 15.5,24 15.5,27.5 C 15.5,29.5 16.5,31 16.5,31 L 12.5,36 L 32.5,36 L 28.5,31 C 28.5,31 29.5,29.5 29.5,27.5 C 29.5,24 27.5,21 24.6,19.5 C 26.6,18.7 28,16.8 28,14.5 C 28,11.5 25.5,9 22.5,9 z" fill="#1e293b" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round"/><path d="M 11,36 L 34,36 L 34,39.5 L 11,39.5 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.8" stroke-linejoin="round"/><path d="M 16,35.5 L 29,35.5" stroke="#94a3b8" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    br: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#1e293b" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z"/><path d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z"/><path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z"/><path d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z"/><path d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z"/><path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z"/><path d="M 12,35.5 L 33,35.5 M 13,31.5 L 32,31.5 M 14,29.5 L 31,29.5 M 14,16.5 L 31,16.5 M 11,14 L 34,14" fill="none" stroke="#cbd5e1" stroke-width="1.1"/></g></svg>`,
    bn: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#1e293b" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"/><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"/><circle cx="15.5" cy="14.5" r="1.3" fill="#cbd5e1" stroke="none"/><path d="M 16,36.5 L 36,36.5" stroke="#cbd5e1" stroke-width="1.2"/></g></svg>`,
    bb: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#1e293b" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"/><path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/><circle cx="22.5" cy="8" r="2.2"/><path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" fill="none" stroke="#cbd5e1" stroke-width="1.3"/></g></svg>`,
    bq: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#1e293b" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"/><path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"/><circle cx="6" cy="12" r="1.8"/><circle cx="14" cy="9" r="1.8"/><circle cx="22.5" cy="8" r="1.8"/><circle cx="31" cy="9" r="1.8"/><circle cx="39" cy="12" r="1.8"/><path d="M 11,29 C 17.5,27.5 27.5,27.5 34,29 M 12,33 C 18,31.5 27,31.5 33,33 M 11.5,36.5 C 18,35.5 27,35.5 33.5,36.5" fill="none" stroke="#cbd5e1" stroke-width="1.2"/></g></svg>`,
    bk: `<svg viewBox="0 0 45 45" class="piece-svg"><g fill="#1e293b" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M 22.5,11.63 L 22.5,6" fill="none"/><path d="M 20,8 L 25,8" fill="none"/><path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"/><path d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z"/><path d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37" fill="none" stroke="#cbd5e1" stroke-width="1.2"/></g></svg>`
  };

  function getPieceSvg(color, type) {
    const key = (color + type).toLowerCase();
    return PIECE_SVGS[key] || '';
  }

  /**
   * Synthesized Web Audio sound effects (no external MP3 files required)
   */
  class SoundFX {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    _getContext() {
      if (!this.enabled) return null;
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    }

    _tone(freq, duration, type = 'sine', gainVal = 0.12, delay = 0) {
      const ctx = this._getContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime + delay;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(gainVal, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
      } catch (_) {}
    }

    move() {
      this._tone(240, 0.065, 'triangle', 0.14);
    }

    capture() {
      this._tone(160, 0.08, 'sawtooth', 0.12);
      this._tone(290, 0.05, 'triangle', 0.1, 0.02);
    }

    check() {
      this._tone(587.33, 0.12, 'triangle', 0.14);
      this._tone(880, 0.16, 'sine', 0.12, 0.06);
    }

    wrong() {
      this._tone(210, 0.14, 'sawtooth', 0.11);
      this._tone(155, 0.22, 'sawtooth', 0.11, 0.11);
    }

    solved() {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((f, idx) => {
        this._tone(f, 0.2, 'triangle', 0.14, idx * 0.075);
      });
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getPieceSvg, SoundFX };
  } else {
    global.getPieceSvg = getPieceSvg;
    global.SoundFX = SoundFX;
  }
})(typeof window !== 'undefined' ? window : globalThis);
