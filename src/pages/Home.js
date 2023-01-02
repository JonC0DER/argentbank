import React, { Component } from 'react'
import { FeatureItem } from '../component/FeatureItem'
import { Hero } from '../component/Hero'
import featuresItems from '../assets/datas/features-items'

export class Main extends Component {
  render() {
    return (
        <>
            <Hero/>
            <FeatureItem featuresItems={featuresItems}/>
        </>
    )
  }
}

export default Main