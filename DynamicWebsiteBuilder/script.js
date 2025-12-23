function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000) + "m";
    } 
    if (views >= 1000) {
        return (views / 1000) + "k";
    }
    return views.toString();
}

function createCard(thumbnail, title, channel, views, months) {
    const container = document.querySelector('.container');
    container.innerHTML = `<div class="card">
            <div class="image"><img src="${thumbnail}" alt=""></div>
            <div class="another">
            <div class="title"><h2>${title}</h2></div>
            <div class="channel"><p>${channel}</p></div>
            <div class="views"><p>${formatViews(views) + " views"}.</p></div>
            <div class="months">${months}</div>
            </div>`
}

createCard('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA',
    'installing vs code and how websites work | sigman web development', 'CodeWithHarry',2000000,'2 years old'
);
