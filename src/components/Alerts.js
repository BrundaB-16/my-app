import React from 'react'

function Alerts(props) {
    const capitalize = (wrd) => {
        const lower =wrd.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert &&
 <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
   <strong> {capitalize(props.alert.type)}  </strong>: {props.alert.msg}
</div>
  )
}

export default Alerts
