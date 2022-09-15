import React from 'lib-app/react';
import pictureData from './imgtest.png';
export default function () {
  return <img src={pictureData} style={{ width: '500px', borderRadius: '10px' }} />;
}
