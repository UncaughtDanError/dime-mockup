import React from 'react'
import { Star } from 'react-feather'

class Stars extends React.Component {
    render() {
        let percentage = Math.round((this.props.stars / 5) * 100);
        return (
            <div className='star-rating'>
                <div className='container'>
                {Array.from(Array(5).keys()).map((_, i) => (
                    <Star key={i} className='star' />
                ))}
                <div className='overlay' style={{ width: `${100 - percentage}%` }} />
                </div>
                <div className='container-over'>
                {Array.from(Array(5).keys()).map((_, i) => (
                    <Star key={i+5} className='star-over' />
                ))}
                </div>
            </div>
        );
    }
}

export default Stars;