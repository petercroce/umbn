import React from 'react';
import Radium from 'radium';

function Eye() {
  return (
    <div style={styles.container}>
      <svg style={[styles.eye.closed, styles.eye]} key="eye-closed" id="closed" data-name="closed" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 400 221">
        <title>Closed</title>
        <path fill="white"
          d="M309.85,132.38l-21.33,12.38c.28.6.58,1.34.94,2,3.6,7,7.22,14.08,10.81,21.13,2.41,4.74,1,9.79-3.4,12.12a9.2,9.2,0,0,1-12.52-3.91c-3.74-7.25-7.38-14.55-11.06-21.83-.41-.8-.85-1.59-1.34-2.51-3.94,1.33-7.8,2.7-11.71,3.94s-7.69,2.3-11.7,3.48c2.56,9.52,5.12,18.88,7.58,28.26a8.84,8.84,0,0,1-5.6,11c-5.06,1.74-10.22-1.21-11.76-6.82-2.52-9.22-5-18.45-7.48-27.68-.08-.31-.18-.62-.33-1.13L209.3,165c0,.91,0,1.86,0,2.82,0,9.66,0,19.31,0,29,0,5.23-3.27,9.07-7.86,9.53-5.56.55-9.88-3.33-9.93-9.13-.08-9.74,0-19.48,0-29.21,0-1,0-1.95,0-2.93l-21.78-2.08-5.78,21.35c-.69,2.54-1.32,5.1-2.06,7.64-1.47,5.07-6.4,8.06-11,6.75a9.07,9.07,0,0,1-6.22-11.3c2.3-8.85,4.74-17.66,7.12-26.49.13-.47.22-.94.38-1.64-4-1.15-7.94-2.21-11.83-3.43s-7.61-2.58-11.59-3.95L120,168.76c-1.28,2.49-2.49,5-3.84,7.48-2.63,4.8-8.07,6.55-12.69,4.13S97.67,173,100.25,168c4-7.76,8-15.51,12-23.17L90.83,132.05C86.54,138,82.22,144,77.86,150a8.46,8.46,0,0,1-8.63,3.67,9.14,9.14,0,0,1-5.65-14.44c3.9-5.42,7.77-10.87,11.65-16.31.47-.66.92-1.34,1.39-2-2.58-2.45-5.13-4.79-7.58-7.23-3.9-3.87-4-8.94-.32-12.75s8.67-3.6,12.77.27a166.66,166.66,0,0,0,63.88,37.5,177.11,177.11,0,0,0,71.56,7.78c35.55-3.28,67.31-15.89,94.93-38.64,2.67-2.2,5.17-4.61,7.7-7a8.67,8.67,0,0,1,12.25-.12c3.61,3.32,3.86,8.32.58,12.2-2.5,3-5,5.91-7.56,8.87l-1-.7c.43.66.83,1.35,1.29,2,3.76,5.32,7.52,10.64,11.32,15.94a9,9,0,0,1,1.62,7.72,8.65,8.65,0,0,1-6.74,6.85c-3.61.8-6.54-.71-8.65-3.54-3.8-5.09-7.43-10.3-11.14-15.46C310.95,133.84,310.4,133.12,309.85,132.38Z"/>
      </svg>
      <svg style={[styles.eye.half, styles.eye]} key="eye-half" id="half" data-name="half" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 400 221">
        <title>Half</title>
        <path fill="white"
          d="M334.15,104c-.07-.19-.16-.37-.24-.56a7.78,7.78,0,0,0-.16-1.07C308.29,71.5,258.16,50.5,200.47,50.5c-39.11,0-74.76,9.65-101.59,25.49l0,0A131.76,131.76,0,0,0,79.06,90.2l.12.18L79,90.26c-3,2.63-10.62,9.92-11,10.84-.83.84-.48,1.85-.91,3a8.41,8.41,0,0,0,.59,7.08c0,.13,0,.25.06.38,25.47,30.87,75.59,51.87,133.29,51.87,39.11,0,74.75-9.65,101.59-25.49l0,0a131.75,131.75,0,0,0,19.78-14.2l-.12-.18.19.12c3-2.63,9.79-10.23,10.15-11.31A8.44,8.44,0,0,0,334.15,104ZM145.41,140.72a170.26,170.26,0,0,1-33.73-14.94c12.15,2.61,26.68,5.19,43,7.07v0a51.46,51.46,0,0,0,9.94,12.84A174.18,174.18,0,0,1,145.41,140.72Zm52.92-.25A31.33,31.33,0,0,1,180.72,135c7.37.39,15,.63,22.79.63,4.09,0,8.25-.07,12.44-.2A32.24,32.24,0,0,1,198.33,140.47Zm34,5.54a51.31,51.31,0,0,0,9.81-12.22,365.82,365.82,0,0,0,42.7-6.68A166.72,166.72,0,0,1,232.33,146Zm16.1-30.24c-6.49.76-12.9,1.32-19.22,1.72a410.32,410.32,0,0,1-61.27-.79c-6.25-.54-12.26-1.2-18-1.94v0A429.21,429.21,0,0,1,91.2,103c27-22,58.06-34.14,92.8-37.32a175.13,175.13,0,0,1,70.24,7.57A165,165,0,0,1,309.17,103,330.06,330.06,0,0,1,248.43,115.77Z"/>
      </svg>
      <svg style={[styles.eye.open, styles.eye]} key="eye-open" id="open" data-name="open" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 400 221">
        <title>Open</title>
        <path fill="white"
          d="M336.42,74.71a9.14,9.14,0,0,0-5.65-14.44,8.46,8.46,0,0,0-8.63,3.67c-4.36,6-8.68,12-13,17.93L287.75,69.08c4-7.66,8-15.41,12-23.17,2.58-5,1.25-10-3.22-12.36s-10.06-.67-12.69,4.13c-1.34,2.46-2.56,5-3.84,7.48l-8.68,16.9c-4-1.36-7.76-2.74-11.59-3.95s-7.84-2.28-11.83-3.43c.16-.7.25-1.18.38-1.64,2.38-8.83,4.82-17.64,7.12-26.49a9.07,9.07,0,0,0-6.22-11.3c-4.64-1.31-9.57,1.69-11,6.75-.73,2.53-1.37,5.09-2.06,7.64L230.31,51,208.53,48.9c0-1,0-2,0-2.93,0-9.74.05-19.48,0-29.21,0-5.79-4.37-9.67-9.93-9.13-4.59.45-7.84,4.29-7.86,9.53-.05,9.66,0,19.31,0,29,0,1,0,1.91,0,2.82L169,51.08c-.15-.51-.25-.81-.33-1.13-2.49-9.23-5-18.46-7.48-27.68-1.54-5.61-6.7-8.56-11.76-6.82a8.84,8.84,0,0,0-5.6,11c2.46,9.39,5,18.74,7.58,28.26-4,1.19-7.87,2.27-11.7,3.48s-7.77,2.61-11.71,3.94c-.49-.92-.93-1.71-1.34-2.51C123,52.32,119.4,45,115.66,37.77a9.2,9.2,0,0,0-12.52-3.91c-4.38,2.33-5.81,7.38-3.4,12.12,3.59,7.05,7.21,14.08,10.81,21.13.36.71.66,1.44.94,2L90.15,81.54c-.55-.75-1.1-1.46-1.63-2.19C84.82,74.18,81.19,69,77.39,63.89c-2.11-2.83-5-4.34-8.65-3.54A8.65,8.65,0,0,0,62,67.19a9,9,0,0,0,1.62,7.72c3.8,5.29,7.55,10.62,11.32,15.94.46.64.86,1.33,1.29,2l-1-.7c-2.52,3-5.05,5.9-7.56,8.87a8.58,8.58,0,0,0-1.41,9.59s0,.09,0,.14l.15.18a9.26,9.26,0,0,0,1.82,2.29c.13.12.27.23.41.34C95,143.7,144.46,164,201.08,164c39.57,0,75.63-9.91,102.78-26.16l0,0a133.35,133.35,0,0,0,20-14.58l-.12-.19.19.13a110.18,110.18,0,0,0,8.48-8.4,8.57,8.57,0,0,0,1.35-9.45,9.81,9.81,0,0,0-2.84-5.06c-2.45-2.44-5-4.78-7.58-7.23.46-.67.91-1.36,1.39-2C328.65,85.58,332.52,80.13,336.42,74.71ZM145.36,140.65a167.2,167.2,0,0,1-59-33.05c.57-.5,1.15-1,1.74-1.49a168.7,168.7,0,0,1,75.56-35.85,52.89,52.89,0,0,0,3.89,76A176.08,176.08,0,0,1,145.36,140.65Zm54.91-1.25c-18.12-.09-32.28-14.88-32.07-33.5.2-18,14.78-32.7,32.43-32.62A32.74,32.74,0,0,1,233,106.6C232.91,125.21,218.65,139.48,200.27,139.39Zm33.5,6.72a52.91,52.91,0,0,0,18.14-39.48,51.92,51.92,0,0,0-14-35.91q8.41,1.84,16.73,4.52a167.2,167.2,0,0,1,59,33.05c-.57.5-1.15,1-1.74,1.49A168.83,168.83,0,0,1,233.77,146.11Z"/>
      </svg>
    </div>
  )
}

const openKeyframes = Radium.keyframes ({
  '0%':   { opacity: 1 },
  '89%':  { opacity: 1 },
  '90%':  { opacity: 0 },
  '91%':  { opacity: 0 },
  '100%': { opacity: 0 },
});

const halfKeyframes = Radium.keyframes ({
  '0%':   { opacity: 0 },
  '89%':  { opacity: 0 },
  '90%':  { opacity: 1 },
  '91%':  { opacity: 0 },
  '100%': { opacity: 0 },
});

const closedKeyframes = Radium.keyframes ({
  '0%':   { opacity: 0 },
  '89%':  { opacity: 0 },
  '90%':  { opacity: 0 },
  '91%':  { opacity: 1 },
  '100%': { opacity: 1 },
});

const styles = {
  container: {
    position: 'relative',
    minHeight: '40vh',
    overflow: 'hidden',
    '@media (max-width: 480px)': { // mobile
      minHeight: '25vh',
    },
  },
  eye: {
    position: 'absolute',
    top: 0,
    left: 0,
    closed: {
      opacity: 1,
      animation: 'x 1s 2',
      animationName: closedKeyframes,
    },
    half: {
      opacity: 0,
      animation: 'x 1s 2',
      animationName: halfKeyframes,
    },
    open: {
      opacity: 0,
      animation: 'x 1s 2',
      animationName: openKeyframes,
      ':hover': {
        backgroundColor: '#52a5b4',
        opacity: 1,
      },
      ':active': {
        backgroundColor: '#52a5b4',
        opacity: 1,
      },
    },
  },
}

export default Radium(Eye);
