const postList = document.getElementById('posts');

fetch('https://one-cms.herokuapp.com/api/public/read?api-key=connerhicks')
  .then((response) => response.json())
  .then((posts) => gotPosts(posts));

const gotPosts = async (posts) => {
  posts.forEach((post, i) => {
    let date = new Date(post.createdAt);
    // let time = date.toLocaleTimeString();
    postList.innerHTML += `
    <div class="post">
    <div class="post-title"><h1>${post.title}</h1></div>
    
    <div class="post-body">${post.body}</div>
    </div>
    `;

    if (i === posts.length) {
      insertNow(postInsert);
    }
  });
};
