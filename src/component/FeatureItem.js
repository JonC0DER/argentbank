import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * this component take a data array as state
 * and display the features (image, title, text)
 */
export class FeatureItem extends Component {

    render() {

        return (
            <section className ="features">
                <h2 className="sr-only">Features</h2>
                {this.props.featuresItems.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <img src={feature.img}
                        alt="Chat Icon" className="feature-icon"/>
                        <h3 className="feature-item-title">{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </section>
        )
    }
}

FeatureItem.propTypes = {
    featuresItems: PropTypes.arrayOf(
        PropTypes.exact({
            img: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    )
}