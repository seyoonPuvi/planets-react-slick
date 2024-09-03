// Write your code here
import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="app-cont">
      <h1 className="title">PLANETS</h1>
      <div className="slide-cont" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem planetDetails={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
