document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (firstName && lastName && email && message) {
            addComment(firstName, lastName, message);
            commentForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function addComment(firstName, lastName, message, parentElement = commentsContainer) {
        const newComment = document.createElement('div');
        newComment.classList.add('single-comments', 'left');
        newComment.innerHTML = `
            <div class="main">
                <div class="head">
                    <img src="img/default-avatar.png" alt="#"/>
                </div>
                <div class="body">
                    <h4>${firstName} ${lastName}</h4>
                    <div class="comment-meta">
                        <span class="meta"><i class="fa fa-calendar"></i> ${new Date().toLocaleDateString()}</span>
                        <span class="meta"><i class="fa fa-clock-o"></i> ${new Date().toLocaleTimeString()}</span>
                    </div>
                    <p>${message}</p>
                    <a href="#" class="reply-button"><i class="fa fa-reply"></i> reply</a>
                    <div class="reply-form-container" style="display: none;">
                        <form class="reply-form">
                            <div class="form-group">
                                <input type="text" class="reply-first-name" placeholder="First name" required="required">
                            </div>
                            <div class="form-group">
                                <input type="text" class="reply-last-name" placeholder="Last name" required="required">
                            </div>
                            <div class="form-group">
                                <textarea class="reply-message" rows="3" placeholder="Type Your Reply Here" required="required"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn primary reply-submit"><i class="fa fa-send"></i> Submit Reply</button>
                            </div>
                        </form>
                    </div>
                    <div class="replies"></div>
                </div>
            </div>
        `;

        parentElement.appendChild(newComment);

        const replyButton = newComment.querySelector('.reply-button');
        const replyFormContainer = newComment.querySelector('.reply-form-container');
        const replyForm = newComment.querySelector('.reply-form');

        replyButton.addEventListener('click', (e) => {
            e.preventDefault();
            replyFormContainer.style.display = replyFormContainer.style.display === 'none' ? 'block' : 'none';
        });

        replyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const replyFirstName = replyForm.querySelector('.reply-first-name').value.trim();
            const replyLastName = replyForm.querySelector('.reply-last-name').value.trim();
            const replyMessage = replyForm.querySelector('.reply-message').value.trim();

            if (replyFirstName && replyLastName && replyMessage) {
                addComment(replyFirstName, replyLastName, replyMessage, newComment.querySelector('.replies'));
                replyForm.reset();
                replyFormContainer.style.display = 'none';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
