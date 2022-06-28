import { memo } from "react";

export const Small = memo(({value}) => {
    console.log('Llamado');
  return (
    <small>{value}</small>
  )
})
