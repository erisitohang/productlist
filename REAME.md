# Product List

## Requirements

* Node v10
* npm v6
* mongodb

## Getting Started
After ensuring that you meet the above requirements, follow the below procedures for installing  ProductList
### Clone this repo
```shell
$ git clone https://github.com/erisitohang/productlist.git productlist
$ cd productlist
```
### Run NPM
This assumes you have npm installed and configured to run globally
```shell
$ npm install
```
### Environment Configuration
```shell
$ cp .env.example .env
```
After this file copy, update the attributes in .env to match your environment, database

### Seed the Database
```shell
$ node server/seeds/index.js
```

### Run application

```shell
$ npm run start
```

### Open Application
Application on http://localhost:3000

## Backend

### Pagination
When returning data for collection-based endpoints, results are paginated, 9 items per page.
```json
{
    "products": [
        {
            "_id": "5b28588982af52768bf80854",
            "name": "Step 1 Eye & Lip Equalizer Primer",
            "slug": "make-up-for-ever-step-1-eye-and-lip-equalizer-primer",
            "description": "description",
            "image": "https://static-reg.lximg.com/images/product_images/33430_MakeUpForEver_WEB_6a0ab88de6b12047ab071b0216560b676b9f809d_1523779569.png",
            "price": 117,
            "qty": 99,
            "categories": ["makeup", "lips", "lipstick"],
            "created_at": "2018-06-19T01:12:41.474Z",
            "updated_at": "2018-06-19T01:12:41.474Z"
        }
    ],
     "paginate": {
            "page": 1,
            "pages": 63
        }
}
```

### Usage
#### Product list
GET /api/v1/products
#### Response
```json
{
    "products": [
        {
            "_id": "5b28588982af52768bf80854",
            "name": "Step 1 Eye & Lip Equalizer Primer",
            "slug": "make-up-for-ever-step-1-eye-and-lip-equalizer-primer",
            "description": "description",
            "image": "https://static-reg.lximg.com/images/product_images/33430_MakeUpForEver_WEB_6a0ab88de6b12047ab071b0216560b676b9f809d_1523779569.png",
            "price": 117,
            "qty": 99,
            "categories": ["makeup", "lips", "lipstick"],
            "created_at": "2018-06-19T01:12:41.474Z",
            "updated_at": "2018-06-19T01:12:41.474Z"
        }
    ],
     "paginate": {
            "page": 1,
            "pages": 63
        }
}
````
### List product category
GET GET /api/v1/products?cat=face
#### Response
```json
{
    "products": [
        {
            "_id": "5b28588982af52768bf80854",
            "name": "Step 1 Eye & Lip Equalizer Primer",
            "slug": "make-up-for-ever-step-1-eye-and-lip-equalizer-primer",
            "description": "description",
            "image": "https://static-reg.lximg.com/images/product_images/33430_MakeUpForEver_WEB_6a0ab88de6b12047ab071b0216560b676b9f809d_1523779569.png",
            "price": 117,
            "qty": 99,
            "categories": ["makeup", "lips", "lipstick"],
            "created_at": "2018-06-19T01:12:41.474Z",
            "updated_at": "2018-06-19T01:12:41.474Z"
        }
    ],
     "paginate": {
            "page": 1,
            "pages": 63
        }
}
````

### Full filter
GET /api/v1/products/?page=2&sort=price&dir=asc&cat=makeup&price_min=25&price_max=50
#### Response
```json
{
    "products": [
        {
            "_id": "5b28588982af52768bf80854",
            "name": "Step 1 Eye & Lip Equalizer Primer",
            "slug": "make-up-for-ever-step-1-eye-and-lip-equalizer-primer",
            "description": "description",
            "image": "https://static-reg.lximg.com/images/product_images/33430_MakeUpForEver_WEB_6a0ab88de6b12047ab071b0216560b676b9f809d_1523779569.png",
            "price": 117,
            "qty": 99,
            "categories": ["makeup", "lips", "lipstick"],
            "created_at": "2018-06-19T01:12:41.474Z",
            "updated_at": "2018-06-19T01:12:41.474Z"
        }
    ],
     "paginate": {
            "page": 1,
            "pages": 63
        }
}
```

### Query List

| query         | Type          | Description  |
| ------------- |-------------| -----|
| page          | number        | Current page|
| sort      | string      |   Sorting field |
| dir | string     |    Ordering method (asc|desc)  |
| price_min | number     |    Minimum price amount  |
| price_max | number     |    Maximum price amount  |