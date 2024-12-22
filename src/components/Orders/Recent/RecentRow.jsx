import React from 'react'

function RecentRow({item}) {
  return (
    <tr>
        <td>{item.created_at}</td>
        <td>{item.username}</td>
        <td>{item.price}$</td>
    </tr>
  )
}

export default RecentRow