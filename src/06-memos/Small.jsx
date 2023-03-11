import { memo } from "react";
//memoriza este componente

// memo -> solo ejecutar cuando las propertys cambian
export const Small = memo(({ value }) => {
    console.log("se renderizo ... ");
    return (
        <small>{ value }</small>
    )
})
