import React, { useState } from 'react'
import { Autocomplete, verify } from '@lob/react-address-autocomplete'

// Some minor inline styles to make the component more apparent
const appStyles = {
  padding: '1em',
  width: '32em'
}

const Address = () => {
  const [selectedAddress, setSelectedAddress] = useState({})
  const [verificationResult, setVerificationResult] = useState()

  const verifyAddress = () =>
    verify("live_pub_60c1bd6e5d322f65511cea4e75ad0fb", selectedAddress)
      .then((result) => {
        // Simplify response into something readable to the user
        const summary = `This address is ${result.deliverability}`
        setVerificationResult(summary)
      })
      .catch((errorData) => setVerificationResult(errorData.message))
 
  return (
    <div className="App" style={appStyles}>
      <Autocomplete
        apiKey="test_pub_d78b0d98bf600bcc12eb46dd19bc638"
        onSelection={(selected) => setSelectedAddress(selected.value)}
      />
      <p>
        <button onClick={verifyAddress}>Verify</button>
      </p>
      <p>
        {verificationResult}
      </p>
    </div>
  );
}

export default Address