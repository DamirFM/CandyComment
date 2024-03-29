const newFormHandler = async (event) => {
  event.preventDefault();

  // grab data from comment form
  const comment_body = document.querySelector('#text-comment').value.trim();
  const blogPost_id = event.target.getAttribute('data-id')

  // check for new comment
  if (comment_body && blogPost_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_body, blogPost_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // stay on the same page
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

// delete comment
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('dataa-id')) {
    const id = event.target.getAttribute('dataa-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('#btn-comment')
  // click for button
  .addEventListener('click', newFormHandler);

document
  .querySelector('.profile')
  .addEventListener('click', delButtonHandler);
