    import React, { useEffect, useState } from 'react';
    import { withStreamlitConnection } from 'streamlit-component-lib';
    
    const MyComponent = (props) => {
      const [value, setValue] = useState(props.args["initial"] || "");
    
      useEffect(() => {
        props.streamlit.setComponentValue(value);
      }, [value, props.streamlit]);
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    
      return (
        <div>
          <input type="text" value={value} onChange={handleChange} />
        </div>
      );
    };
    
    export default withStreamlitConnection(MyComponent);