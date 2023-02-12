import React from 'react';

const SiteInputBox = () => {
    return (
        <div className={classes.inputBox}>
            {/* text box to include site name */}
            <input type="text" className={classes.siteNameBox} placeholder='Enter site name' />
            {/* button to send the data to the backend */}
            <h2 className={classes.addButton}>Add it</h2>
        </div>
    )
}

export default SiteInputBox
