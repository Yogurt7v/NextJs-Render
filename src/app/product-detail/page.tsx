import { Product } from "../../components/product";
import { Reviews } from "../../components/reviews";
import { Suspense } from "react";

export default function ProductPageDetails() {
  return (
    <div>
      <h1>Product details page</h1>
      <Suspense fallback={<div>Loading product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
