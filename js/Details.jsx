// @flow


import React from 'react';

const Details = (props) => {
  const { title, description, year, poster, trailer } = props.show;
  return (
    <div className="details" >
      <pre><code>  {JSON.stringify(props, null, 4)}</code> </pre>
    </div>
  );
}
export default Details;
