import React from 'react'

function OrderUiRow({item, key}) {
  return (
    <tr className={key}>
      <td>{item.customer_id}</td>

    </tr>
  )
}

export default OrderUiRow