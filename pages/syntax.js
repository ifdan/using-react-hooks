import React, {useEffect ,useState} from 'react';

const Syntax = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log('in useEffect');
    return () => {
      console.log('in useEffect Cleanup');
    }
  }, [])

  return (
    <div>
      <input
        onClick={() => {setIsChecked(!isChecked)}}
        type="checkbox" />
    </div>
  )
};

export default Syntax;