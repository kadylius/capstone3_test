document.addEventListener('DOMContentLoaded', function() {
    const postBtn = document.getElementById('post-btn');
    const postText = document.querySelector('.post-input-container textarea');
    const postsContainer = document.querySelector('.main-content');

    postBtn.addEventListener('click', function() {
        const text = postText.value.trim();

        if (text) {
            const postHtml = `
                <div class="post-container">
                    <div class="post-row">
                        <div class="user-profile">
                            <img src="images/profile-pic.png" alt="Profile Picture">
                            <div>
                                <p>John Nicholson</p>
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
                            <img src="images/profile-pic.png" alt="Profile Picture"> <i class="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            `;

            postsContainer.insertAdjacentHTML('afterbegin', postHtml);
            postText.value = '';
        }
    });
});