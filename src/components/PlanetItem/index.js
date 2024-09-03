// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-card">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
