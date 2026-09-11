const postResult = document.querySelector("#post-result");

async function addPost() {
  const newPost = {
    userId: 1,
    title: "Fix my bugs",
    completed: false,
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      },
    );

    if (!response.ok) {
      throw new Error(`Unable to add post (${response.status})`);
    }

    const createdPost = await response.json();
    postResult.textContent = JSON.stringify(createdPost);
  } catch (error) {
    postResult.classList.add("error-message");
    postResult.textContent = `Error: ${error.message}`;
  }
}

addPost();
