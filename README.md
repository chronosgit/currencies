# Currencies

## About

**Currencies** - is a web application, which shows National Bank's data about current currencies. It provides convenient UI, responsive experience and features, such as: filtering posts, pagination and ability to like / dislike certain post.

### Header

![Header](/src/assets/docs/header.png)
1. Logo image redirects to home page on click.
2. Central link redirects to '/favourites' page on click.
3. Rightmost link redirects to this repository.

### Post

![Header](/src/assets/docs/post.png)
1. Each page renders a list of posts.
2. Page includes information about full name, title and pricing of a currency.
3. User can like / dislike each post.

### Local storage

![Header](/src/assets/docs/local-storage.png)
1. Local storage saves liked posts by unique ID.
2. Dislike removes exact post from local storage.
3. Refreshing a page doesn't remove data from local storage.

### Filters
![Header](/src/assets/docs/filters.png)
1. Three filters are available: by full name, title or no filter.
2. Clicking immediately updates both all posts and posts, currently viewed by user.

### Pagination
![Header](/src/assets/docs/pagination.png)
1. After getting all posts, pagination renders exact amount pages possible.
2. When user clicks on any item, posts, which are currently showed to user, are dynamically updated.

## Get started
 
1. Install packages, eg. ```npm install```.
2. Run *development* server with hot-reloads, eg. ```npm run serve```.
3. **OR,** run *production* server, eg. ```npm run build```.

## Reference

1. [Official project configuration reference.](https://cli.vuejs.org/config/)
2. [API reference.](https://www.nationalbank.kz/ru/page/rss)
3. [Vue documentation.](https://vuejs.org/)
4. [Pinia documentation](https://pinia.vuejs.org/)P
