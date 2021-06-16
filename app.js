const postList = document.getElementById('posts');

fetch('https://one-cms.herokuapp.com/api/public/read?api-key=connerhicks')
  .then((response) => response.json())
  .then((posts) => gotPosts(posts));

const gotPosts = async (posts) => {
  posts.forEach((post, i) => {
    let date = new Date(post.createdAt);
    // let time = date.toLocaleTimeString();
    postList.innerHTML += `
    <h1>${post.title}</h1>
    
    <p>${post.body}</p>
    `;

    if (i === posts.length) {
      insertNow(postInsert);
    }
  });
};
