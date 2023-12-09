import React from 'react'

const Description = ({productDetails}) => {
    const {name, spec} = productDetails[0];
  return (
    <div>
    <table className="table p-4 bg-white rounded-lg shadow text-center">
  <thead>
    <tr>
      <th className="border-b-2 p-4  whitespace-nowrap font-normal text-gray-900">
        #
      </th>
      <th className="border-b-2 p-4  whitespace-nowrap font-normal text-gray-900">
        Specs
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-gray-700">
      <td className="border-b-2 p-4 ">Name</td>
      <td className="border-b-2 p-4 ">{name}</td>
    </tr>
    <tr className="text-gray-700">
      <td className="border-b-2 p-4 ">Display</td>
      <td className="border-b-2 p-4 ">{`${spec[0]?.value} ${spec[1]?.value}`}</td>
    </tr>
    <tr className="text-gray-700">
      <td className="border-b-2 p-4 ">Camera</td>
      <td className="border-b-2 p-4">{spec[2]?.value}</td>
    </tr>
    <tr className="text-gray-700">
      <td className="border-b-2 p-4 ">RAM</td>
      <td className="border-b-2 p-4">{spec[4]?.value}</td>
    </tr>
    <tr className="text-gray-700">
      <td className="border-b-2 p-4 ">Battery</td>
      <td className="border-b-2 p-4">{spec[6]?.value}</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default Description