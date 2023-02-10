
const youtubeUrl = 'www.youtube.com';
const tiktokUrl = 'www.tiktok.com';
const twitterUrl = 'www.twitter.com';
const instagramUrl = 'www.instagram.com';
// const Url = 'www.youtube.com';

if(window.location.hostname === youtubeUrl || window.location.hostname === tiktokUrl || window.location.hostname === twitterUrl || window.location.hostname === instagramUrl){
    document.body.innerHTML = `
    <div class="disable_container">
        <h2>Focus Mode is still on. More to work More to achieve</h2>
    </div>
    `;
    document.head.innerHTML = `
        <style>
            .disable_container{
                height : 100vh;
                width : 100vw;
                display : flex;
                justify_content : center;
                align_items : center;
            }
        </style>
    `;

}

// background : url(`+"./disable-background.jpg"+`);