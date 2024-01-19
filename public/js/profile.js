const newFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the blogPost form
  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#text-description').value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create post');
    }
  }
};
// delete blog post
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('dataa-id')) {
    const id = event.target.getAttribute('dataa-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.btn-primary')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.profile')
  .addEventListener('click', delButtonHandler);
