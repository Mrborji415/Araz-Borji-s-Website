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
                    ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
                </div>
            `;
        });

        const images = document.querySelectorAll('.post-image');
        images.forEach(image => {
            image.onload = function() {
                const width = image.naturalWidth;
                const height = image.naturalHeight;

                if (width > 600 || height > 600) {
                    image.style.width = '600px';
                    image.style.height = '600px';
                    image.style.objectFit = 'cover';
                }
            };
        });
    })
    .catch(error => console.error('Error loading posts:', error));
