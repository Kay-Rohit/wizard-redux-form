const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    }
    if (!values.city) {
      errors.city = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.sec){
      errors.sec = 'Required'
    } else if (!/^[A-E]$/i.test(values.sec)) {
      errors.sec = `${values.sec} is not a valid section`
    }
    if (!values.roll){
      errors.roll = 'Required'
    } else if (/^[0-9]{1-3}$/i.test(values.roll)) {
      errors.roll = `${values.roll} is invalid!`
    }
    if (!values.sem){
      errors.sem = 'Required'
    } else if (!/^[1-8]$/i.test(values.sem)) {
      errors.sem = `${values.sem} is not a valid semester!`
    }
    if (!values.phone){
      errors.phone = 'Required'
    } else if (!/^[0-9]{10}$/i.test(values.phone)) {
      errors.sec = `${values.phone} is not a valid mobile number!`
    }
    
    return errors;
  }
  
  export default validate;