import React, {useState} from 'react';
import classes from './SiteDisabler.module.css';

const SiteDisabler = () => {
    const [sitename,updateSiteName] = useState('');

    const sendSiteName = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/blocksite/sites/',{
            method : 'POST',
            body : JSON.stringify({
                siteName : sitename
            }),
            headers : {
                "Content-type" : "application/json",
            },
            })
            const data = await response.json();
            console.log("site to remove is : " , data);
        }catch(error){
            console.log(error);
        }
    }

    const sendOnClick = () => {
        if(sitename !== ""){
            sendSiteName();
        }
    }

    return (
        <div className={classes.siteDisablerContainer}>
            <h2 style={{textAlign : 'center'}}>Select Sites you want to disable during focus mode:</h2>
            <div className={classes.disableItems}>
                <div className={classes.disableItem}>
                    {/* Site name */}
                    <h3 className={classes.disableItemTitle}>www.youtube.com</h3>
                    {/* delete todo item */}
                    <p className={classes.deleteLink}>Delete</p>
                </div>

            </div>
        </div>
    )
}

export default SiteDisabler;
