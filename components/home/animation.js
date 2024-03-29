import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/animation.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson} // 여기에 들어가는거! 
      play
      style={{ width: '100%', height: '100%' }}
    />
  )
}