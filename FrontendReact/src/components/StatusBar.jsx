import React from 'react';

function StatusBar() {
  const styles = {
    statusBar: {
      backgroundColor: '#33363F', // Background color of the status bar
      color: 'white',          // Text color
      paddingLeft: '15px',
      padding: '5px',         // Adjust padding as needed
      justifyContent: 'space-between',
    
    },
    statusText: {
      fontSize: '12px',        // Adjust font size as needed
    },
  };

  return (
    <div style={styles.statusBar}>
      <span style={styles.statusText}>4:20</span>
      {/* Add other status bar content here */}
    </div>
  );
}

export default StatusBar;
