import React, {useEffect, useState} from 'react';
import classes from './SiteDisabler.module.css';

const SiteDisabler = () => {
    // const [sitename,updateSiteName] = useState('');
    const [entertainmentSites,updateEntertainmentSites] = useState([
        'www.youtube.com',
        'www.netflix.com',
        'www.open.spotify.com',
        'www.animeflv.net',
        'www.desicinemas.tv',
        'www.disneyplus.com',
        'www.hotstar.com/',
    ]);
    const [socialmediaSites,updateSocialMediaSites] = useState([
        'www.facebook.com',
        'www.instagram.com',
        'www.twitter.com',
        'www.tiktok.com',
        'www.linkedin.com',
        'www.reddit.com/'
    ]);
    const [nepalnewsSites,updateNepalNewsSites] = useState([
        'www.onlinekhabar.com',
        'www.nagariknews.nagariknetwork.com',
        'www.setopati.com',
        'www.kathmandupost.com',
        'www.nayapatrikadaily.com',
        'www.ratopati.com',
        'www.ekantipur.com'
    ]);
    const [sportssites,updateSportsSites] = useState([
        'https://www.espn.com',
        'www.gamingtoday.com', 
        'www.cricbuzz.com',
        'www.espncricinfo.com',
        'www.sports.ndtv.com',
        'www.skysports.com',
        'www.talksports.com/'
    ]);

    const onEntertainmentDelete = (id) => {
        console.log("My id is : ",id);
        let arr = [];
        for(let i in entertainmentSites){
            console.log("Array id is : ",i);
            if(parseInt(i)!==parseInt(id)){
                console.log("Yeah");
                arr.push(entertainmentSites[i]);
            }
        }
        console.log(arr);
        updateEntertainmentSites(arr);
    }

    const onSocialDelete = (id) => {
        console.log("My id is : ",id);
        let arr = [];
        for(let i in socialmediaSites){
            console.log("Array id is : ",i);
            if(parseInt(i)!==parseInt(id)){
                console.log("Yeah");
                arr.push(socialmediaSites[i]);
            }
        }
        console.log(arr);
        updateSocialMediaSites(arr);
    }

    const onNewsDelete = (id) => {
        console.log("My id is : ",id);
        let arr = [];
        for(let i in nepalnewsSites){
            console.log("Array id is : ",i);
            if(parseInt(i)!==parseInt(id)){
                console.log("Yeah");
                arr.push(nepalnewsSites[i]);
            }
        }
        console.log(arr);
        updateNepalNewsSites(arr);
    }

    const onSportsDelete = (id) => {
        console.log("My id is : ",id);
        let arr = [];
        for(let i in sportssites){
            console.log("Array id is : ",i);
            if(parseInt(i)!==parseInt(id)){
                console.log("Yeah");
                arr.push(sportssites[i]);
            }
        }
        console.log(arr);
        updateSportsSites(arr);
    }

    useEffect(() => {
        sendSiteName();
    })

    const sendSiteName = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/blocksite/sites/',{
            method : 'POST',
            body : JSON.stringify({
                entertainment : entertainmentSites,
                social : socialmediaSites,
                news : nepalnewsSites,
                sports : sportssites
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


    return (
        <div className={classes.siteDisablerContainer}>
            <h2 style={{textAlign : 'center'}}>Select Sites you want to disable during focus mode:</h2>
            <div className={classes.disableItems}>
                {/* <div className={classes.disableItem}> */}
                    {/* Site name */}
                    {/* <h3 className={classes.disableItemTitle}>www.youtube.com</h3> */}
                    {/* delete todo item */}
                    {/* <p className={classes.deleteLink}>Delete</p> */}
                {/* </div> */}
                {/* entertainment */}
                <div className={classes.entertainmentSites}>
                        <div className={classes.siteTitle}>
                            <h3 className={classes.siteTitleHeading}>Entertainment Sites</h3>
                        </div>
                        {
                            entertainmentSites.map((sites,id) => {
                                return(
                                    <div className={classes.disableItem} key={id}>
                                        <input type="checkbox" checked="true" className={classes.sitescheckbox} />
                                        {/* Site name */} 
                                        <h3 className={classes.disableItemTitle}>{sites}</h3>
                                        {/* delete todo item */}
                                        <p className={classes.deleteLink} onClick={() => onEntertainmentDelete(id)}>Delete</p>
                                    </div>
                                );
                            })
                        }
                </div>
                {/* social media */}
                <div className={classes.entertainmentSites}>
                        <div className={classes.siteTitle}>
                            <h3 className={classes.siteTitleHeading}>Social Sites</h3>
                        </div>
                        {
                            socialmediaSites.map((sites,id) => {
                                return(
                                    <div className={classes.disableItem} key={id}>
                                        <input type="checkbox" checked="true" className={classes.sitescheckbox} />
                                        {/* Site name */} 
                                        <h3 className={classes.disableItemTitle}>{sites}</h3>
                                        {/* delete todo item */}
                                        <p className={classes.deleteLink} onClick={() => onSocialDelete(id)}>Delete</p>
                                    </div>
                                );
                            })
                        }
                </div>
                {/* nepal news */}
                <div className={classes.entertainmentSites}>
                        <div className={classes.siteTitle}>
                            <h3 className={classes.siteTitleHeading}>Nepali News Sites</h3>
                        </div>
                        {
                            nepalnewsSites.map((sites,id) => {
                                return(
                                    <div className={classes.disableItem} key={id}>
                                        <input type="checkbox" checked="true" className={classes.sitescheckbox} />
                                        {/* Site name */} 
                                        <h3 className={classes.disableItemTitle}>{sites}</h3>
                                        {/* delete todo item */}
                                        <p className={classes.deleteLink} onClick={() => onNewsDelete(id)}>Delete</p>
                                    </div>
                                );
                            })
                        }
                </div>
                {/* sports */}
                <div className={classes.sportsSites}>
                        <div className={classes.siteTitle}>
                            <h3 className={classes.siteTitleHeading}>Sports Sites</h3>
                        </div>
                        {
                            sportssites.map((sites,id) => {
                                return(
                                    <div className={classes.disableItem} key={id}>
                                        <input type="checkbox" checked="true" className={classes.sitescheckbox} />
                                        {/* Site name */} 
                                        <h3 className={classes.disableItemTitle}>{sites}</h3>
                                        {/* delete todo item */}
                                        <p className={classes.deleteLink} onClick={() => onSportsDelete(id)}>Delete</p>
                                    </div>
                                );
                            })
                        }
                </div>

            </div>
        </div>
    )
}

export default SiteDisabler;
