import Featured from '@/components/Featured'
import Header from '@/components/Header'
import NewProduct from '@/components/NewProduct'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'

export default function Home({ featuredProduct, newProducts }) {
	return (
		<>
			<Header />
			<Featured product={featuredProduct} />
			<NewProduct products={newProducts} />
		</>
	)
}

export async function getServerSideProps() {
	const featuredProductId = '6461ebe17075e0c86277e363'
	await mongooseConnect()
	const featuredProduct = await Product.findById(featuredProductId)
	const newProducts = await Product.find({}, null, {
		sort: {
			_id: -1,
		},
		limit: 10,
	})

	return {
		props: {
			featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
			newProducts: JSON.parse(JSON.stringify(newProducts)),
		},
	}
}
