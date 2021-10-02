const fs = require('fs');
const path = require('path');

module.exports.images = fs.readFileSync(path.join(__dirname, 'images.gql'), 'utf8');
module.exports.imagesCount = fs.readFileSync(path.join(__dirname, 'imagesCount.gql'), 'utf8');
module.exports.me = fs.readFileSync(path.join(__dirname, 'me.gql'), 'utf8');
module.exports.productStatuses = fs.readFileSync(path.join(__dirname, 'productStatuses.gql'), 'utf8');
module.exports.productStatusesCount = fs.readFileSync(path.join(__dirname, 'productStatusesCount.gql'), 'utf8');
module.exports.productTypes = fs.readFileSync(path.join(__dirname, 'productTypes.gql'), 'utf8');
module.exports.productTypesCount = fs.readFileSync(path.join(__dirname, 'productTypesCount.gql'), 'utf8');
module.exports.products = fs.readFileSync(path.join(__dirname, 'products.gql'), 'utf8');
module.exports.productsCount = fs.readFileSync(path.join(__dirname, 'productsCount.gql'), 'utf8');
module.exports.tags = fs.readFileSync(path.join(__dirname, 'tags.gql'), 'utf8');
module.exports.tagsCount = fs.readFileSync(path.join(__dirname, 'tagsCount.gql'), 'utf8');
module.exports.users = fs.readFileSync(path.join(__dirname, 'users.gql'), 'utf8');
module.exports.usersCount = fs.readFileSync(path.join(__dirname, 'usersCount.gql'), 'utf8');
