import React, { useRef,  } from "react"
// import { Link } from "gatsby"
import Styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'

const Page = Styled.div`
  display: block;
  position: relative;
  width: 100%;
`



const IndexPage = () => {
  // const refCanvas = useRef('refCanvas')
  const canvasContainer = useRef()

  const width = 1080
  const height = 565

  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
  const ctx = canvas.getContext('2d')
  canvas.style.border = 'solid 1px lime'

  const image = document.createElement('img')
  image.style.width = `${width}px`
  image.style.height = `${height}px`
  image.setAttribute('src', '/images/kilimanjaro.jpg')

  setTimeout(() => {
    ctx.drawImage(image, 0, 0)
    canvasContainer.current.appendChild(canvas)
    // canvasContainer.current.appendChild(image)
    const imgData = ctx.getImageData(0,0, width, height)

    const colors = []
    console.log('imgData', imgData)
    for (let i = 0; i < (imgData.data.length / 4); i += 1) {
      colors.push([
        imgData.data[(i * 4) + 0],
        imgData.data[(i * 4) + 1],
        imgData.data[(i * 4) + 2],
        imgData.data[(i * 4) + 3],
      ])
    }

    const sortedCanvas = document.createElement('canvas')
    sortedCanvas.setAttribute('width', width)
    sortedCanvas.setAttribute('height', height)
    const sorted_ctx = sortedCanvas.getContext('2d')
    sortedCanvas.style.border = 'solid 1px tomato'

    const newData = ctx.createImageData(width, height)

    console.log({ newData, colors })
    const rects = colors
      .sort((a, b) => {
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 0
      })

    console.log({ rects, newData })
    console.log(imgData.data.length, newData.data.length)
    setTimeout(() => {
      for (let i = 0; i < rects.length; i++) {
        newData.data[(i * 4) + 0] = rects[i][0]
        newData.data[(i * 4) + 1] = rects[i][1]
        newData.data[(i * 4) + 2] = rects[i][2]
        newData.data[(i * 4) + 3] = rects[i][3]
      }
      setTimeout(() => {
        canvasContainer.current.appendChild(sortedCanvas)
        sorted_ctx.putImageData(newData, 0, 0)
      }, 5000)
    }, 5000)

    console.log(imgData)
  }, 1000)


  console.log({ ctx })


  return (
    <Page>
      <Layout>
        <SEO title="Home" />

        <Header />

        <h1>Pixel sorter</h1>
        {/* <img src="/images/kilimanjaro.jpg" /> */}

        {/* <canvas ref={ refCanvas } /> */}
        <div ref={ canvasContainer }></div>


      </Layout>

    </Page>
  )
}

export default IndexPage
