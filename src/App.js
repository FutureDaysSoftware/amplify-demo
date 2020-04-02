import React from 'react'
import './App.css'
import Amplify, { graphqlOperation } from 'aws-amplify'
import * as subscriptions from './graphql/subscriptions'
import awsConfig from './aws-exports'
import { Connect } from 'aws-amplify-react'

// components
import ListRefillLocations from './components/ListRefillLocations'

import { listRefillLocations } from './graphql/queries'
Amplify.configure(awsConfig)

function App() {
  return (
    <Connect
      query={graphqlOperation(listRefillLocations)}
      subscription={graphqlOperation(subscriptions.onCreateRefillLocation)}
      onSubscriptionMsg={(prev, { onCreateRefillLocation }) => {
        console.log('Subscription data:', onCreateRefillLocation)
        return prev
      }}
    >
      {({ data: { listRefillLocations }, loading, error }) => {
        if (error) return <h3>Error</h3>
        if (loading || !listRefillLocations) return <h3>Loading...</h3>
        return (
          <ListRefillLocations
            refillLocations={
              listRefillLocations ? listRefillLocations.items : []
            }
          />
        )
      }}
    </Connect>
  )
}

export default App
