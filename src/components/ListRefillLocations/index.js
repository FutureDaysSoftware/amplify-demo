import React, { useState } from 'react'
import { graphqlOperation, API } from 'aws-amplify'
import { createRefillLocation } from '../../graphql/mutations'

const initialFormState = {
  name: '',
  description: '',
  streetAddress: '',
  zipCode: '',
  city: '',
  countryCode: ''
}

const ListRefillLocations = ({ refillLocations }) => {
  const [formData, setFormData] = useState(initialFormState)
  const {
    name,
    description,
    streetAddress,
    zipCode,
    city,
    countryCode
  } = formData

  const isInvalid =
    !name || !description || !streetAddress || !zipCode || !city || !countryCode
  const [locations, setLocations] = useState(refillLocations)

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await API.graphql(
        graphqlOperation(createRefillLocation, { input: formData })
      )
      setFormData(initialFormState)
      console.log(data)
    } catch (err) {
      setFormData(initialFormState)
      console.log(err)
    }
  }

  return (
    <div style={{ marginBottom: 20, textAlign: 'center' }}>
      <h1>Welcome to refillapp</h1>
      <div>
        <h2>Add a new bottle location</h2>
        <form
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex' }}>
            <label>name</label>
            <input
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <label>description</label>
            <input
              name="description"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <label>streetAddress</label>
            <input
              name="streetAddress"
              autoComplete="off"
              value={streetAddress}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <label>zipCode</label>
            <input
              name="zipCode"
              autoComplete="off"
              value={zipCode}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <label>city</label>
            <input
              name="city"
              autoComplete="off"
              value={city}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <label>countryCode</label>
            <input
              name="countryCode"
              autoComplete="off"
              value={countryCode}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={isInvalid}
            style={{
              color: 'white',
              border: 'none',
              background: 'black',
              padding: 10
            }}
          >
            Submit New Local
          </button>
        </form>
      </div>
      <div>
        <h2>Here are all bottle locations</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          {locations.length &&
            locations.map(local => (
              <div
                key={local.id + local.name}
                style={{
                  border: '2px solid black',
                  marginTop: 10,
                  width: 400
                }}
              >
                <h3>{local.name}</h3>
                <h3>{local.description}</h3>
                <h4>
                  Address:{' '}
                  {`${local.streetAddress} ${local.city} ${local.stateProvinceOrRegion} ${local.zipCode}`}
                </h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ListRefillLocations
