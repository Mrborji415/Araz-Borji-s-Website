fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('posts');
        posts.forEach(post => {
            container.innerHTML += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <p><small>Published on: ${post.date}</small></p>
                    ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
                </div>
            `;
        });
    })
    .catch(error => console.error('Error loading posts:', error));
