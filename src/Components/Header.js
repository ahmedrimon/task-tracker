import React from 'react';

const Header = ({onAdd, showAdd}) => {


    return (
        <div className='header'>
            <h2>Task Tracker</h2>
            <button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            className='btn' onClick={onAdd}  
            style={{backgroundColor: 'steelblue'}} > Add </button>
        </div>
    );
};

export default Header;