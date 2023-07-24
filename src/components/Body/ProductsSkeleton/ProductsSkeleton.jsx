import React from 'react';
import "./ProductsSkeleton.css";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ProductsSkeleton = () => {
  return (
    <div className='skeleton-parent'>
    <SkeletonTheme baseColor="#aaaaaa" highlightColor="#e3e6e6">
            <Skeleton className='product-skeleton' />

    </SkeletonTheme>
    </div>
  )
}

export default ProductsSkeleton