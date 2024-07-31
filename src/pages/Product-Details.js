import { Link, useParams } from "react-router-dom";

function ProductDetailsPage(){
    const params = useParams();
    const productId = params.productId;
    return(
        <>
        <h1>The Product Details Page</h1>
        <p>{productId}</p>
        <p><Link to=".." relative="path">Back</Link></p>
        </>
    )
}

export default ProductDetailsPage;