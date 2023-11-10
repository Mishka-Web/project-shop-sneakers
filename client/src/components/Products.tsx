export default function Products() {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		fetchProducts().then(res => setProducts(res));
	}, [products]);

	async function fetchProducts() {
		const { data } = await axios<IProduct[]>(
			{
				method: "get",
				url: "http://localhost:3001/api/products"
			}
		);
		return data;
	}

	return (
		<></>
	);
}
