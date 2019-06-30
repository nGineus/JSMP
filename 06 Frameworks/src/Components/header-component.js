import React from 'react';

const HeaderComponent = () => {
  const styles = {
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif'
  };
  return (
    <div className="header-style">
      <h1 className={styles}>Nots App</h1>
      <div className="btn-group action-block">
        <button type="button"
                className="btn btn-info"
        >All
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
        >Completed
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
        >Archived
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
