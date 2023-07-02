export const SET_COMPRESSOR_SHOW = 'SET_COMPRESSOR_SHOW';

export function setCompressorShow(show) {
  console.log("Set compressor show");
  return { type: SET_COMPRESSOR_SHOW, show };
}
