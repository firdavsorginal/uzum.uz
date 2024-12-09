import Product from '../../companents/Product/Product'
import Banner from '../../companents/Banner/Banner'
const Home = ({data}) => {
  return (
    <div>
      <Banner/>
      <Product data={data}/>
    </div>
  )
}

export default Home