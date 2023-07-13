import React, {useState} from 'react'

const ObjectState = () => {
  
  let initialName = {firstName:"", lastName:""};
  const [ name, setName ] = useState(initialName);

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={ name.firstName }
          onChange={ e => setName( { ...name, firstName: e.target.value } ) }
        />
        
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={ name.lastName }
          onChange={ e => setName( { ...name, lastName: e.target.value } ) }        
        />
        <p>First Name : { name.firstName}</p>
        <p>Last Name : { name.lastName}</p>
      </form>

    </div>
  )
}

export default ObjectState