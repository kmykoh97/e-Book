/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Advertisement } from 'semantic-ui-react'
import AdsPicture from '../../static/database/img/ads.png';



const Ads = () => (
  <Advertisement unit='small rectangle'>
    <img src={AdsPicture} />
  </Advertisement>
)



export default Ads