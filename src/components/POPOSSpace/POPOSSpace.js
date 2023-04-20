import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
    return (
      <section className='POPOSSpace'>
        <h1>
          <Link to={`/details/${id}`} className='POPOSSpace-title'>
            {name}
          </Link>
        </h1>
        <Link to={`/details/${id}`}>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="350" height="300" alt="Hello" />
        </figure>
        </Link>
        <div className='POPOSSpace-info'>
          <address>{address}</address>
          <p className='hours'>{hours}</p>
        </div>
      </section>
    )
}

export default POPOSSpace