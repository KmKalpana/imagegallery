import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './image.css'
import Img1 from './Image/img1.jpg'
import Img2 from './Image/img2.jpg'
import Img3 from './Image/img3.jpg'
import Img4 from './Image/img4.jpg'
import Img5 from './Image/img5.jpg'
import Img6 from './Image/img6.jpg'
import Img7 from './Image/img7.jpg'
import Img8 from './Image/img8.jpg'
import Img9 from './Image/img9.jpg'
function Image () {
  const ImageData = [
    {
      imgsrc: Img1
    },
    {
      imgsrc: Img2
    },
    {
      imgsrc: Img3
    },
    {
      imgsrc: Img4
    },
    {
      imgsrc: Img5
    },
    {
      imgsrc: Img6
    },
    {
      imgsrc: Img7
    },
    {
      imgsrc: Img8
    },
    {
      imgsrc: Img9
    }
  ]
  return (
    <div className='Gallery'>
      {ImageData.map((data, index) => {
        return (
          <div id='main'>
            <div className='pics' key={index}>
              <img src={data.imgsrc} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Image
