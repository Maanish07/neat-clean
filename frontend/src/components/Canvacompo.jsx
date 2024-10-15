import React from 'react'

const Canvacompo = () => {
    const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    

  }, []);
  return (
    <div>
      <div style={{ width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }} // Adjust width and height as needed
        data-engine="three.js r162"
        width="1904"
        height="850"
      />
    </div>
    </div>
  )
}

export default Canvacompo
