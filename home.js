"use strict";
const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";

document.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.getElementById('post-btn');
    const postText = document.getElementById('post-text');
    const postsContainer = document.getElementById('posts-container');

    postBtn.addEventListener('click', () => {
        const text = postText.value.trim();
        if (text) {
            const postHtml = `
                <div class="post-container">
                    <div class="post-row">
                        <div class="user-profile">
                            <img src="/logo/IMG_6754.jpg" alt="Profile Picture">
                            <div>
                                <p>kady</p>
                                <span>${new Date().toLocaleString()}</span>
                            </div>
                        </div>
                        <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                    </div>
                    <p class="post-text">${text}</p>
                    <div class="post-row">
                        <div class="activity-icons">
                            <div><img src="images/like.png" alt="Likes"> 0</div>
                            <div><img src="images/comments.png" alt="Comments"> 0</div>
                            <div><img src="images/share.png" alt="Shares"> 0</div>
                        </div>
                        <div class="post-profile-icon">
                            <img src="/logo/IMG_6754.jpg" alt="Profile Picture"> <i class="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            `;

            postsContainer.insertAdjacentHTML('afterbegin', postHtml);
            postText.value = '';
        }
    });
});

var settingsMenu = document.querySelector(".settings-menu");


function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

// -----------dark mode button------------

var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
    
}

if(localStorage.getItem("theme") == "light"){

    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){

    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}