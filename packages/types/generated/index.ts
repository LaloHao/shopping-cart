import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export { schema, typeDefs } from './schema';
export * from './mutations';
export * from './queries';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type AuthToken = {
  __typename?: 'AuthToken';
  token: Scalars['String'];
};

export type CreateImagesMutationResponse = {
  __typename?: 'CreateImagesMutationResponse';
  images: Array<Image>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateProductStatusesMutationResponse = {
  __typename?: 'CreateProductStatusesMutationResponse';
  info: CreateInfo;
  productStatuses: Array<ProductStatus>;
};

export type CreateProductTypesMutationResponse = {
  __typename?: 'CreateProductTypesMutationResponse';
  info: CreateInfo;
  productTypes: Array<ProductType>;
};

export type CreateProductsMutationResponse = {
  __typename?: 'CreateProductsMutationResponse';
  info: CreateInfo;
  products: Array<Product>;
};

export type CreateTagsMutationResponse = {
  __typename?: 'CreateTagsMutationResponse';
  info: CreateInfo;
  tags: Array<Tag>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  features: Array<Maybe<Product>>;
  featuresConnection: ImageFeaturesConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Maybe<Product>>;
  productsConnection: ImageProductsConnection;
  updatedAt: Scalars['DateTime'];
};


export type ImageFeaturesArgs = {
  options?: Maybe<ProductOptions>;
  where?: Maybe<ProductWhere>;
};


export type ImageFeaturesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort>>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
};


export type ImageProductsArgs = {
  options?: Maybe<ProductOptions>;
  where?: Maybe<ProductWhere>;
};


export type ImageProductsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageProductsConnectionSort>>;
  where?: Maybe<ImageProductsConnectionWhere>;
};

export type ImageConnectInput = {
  features?: Maybe<Array<ImageFeaturesConnectFieldInput>>;
  products?: Maybe<Array<ImageProductsConnectFieldInput>>;
};

export type ImageConnectWhere = {
  node: ImageWhere;
};

export type ImageCreateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  features?: Maybe<ImageFeaturesFieldInput>;
  name: Scalars['String'];
  products?: Maybe<ImageProductsFieldInput>;
};

export type ImageDeleteInput = {
  features?: Maybe<Array<ImageFeaturesDeleteFieldInput>>;
  products?: Maybe<Array<ImageProductsDeleteFieldInput>>;
};

export type ImageDisconnectInput = {
  features?: Maybe<Array<ImageFeaturesDisconnectFieldInput>>;
  products?: Maybe<Array<ImageProductsDisconnectFieldInput>>;
};

export type ImageFeaturesConnectFieldInput = {
  connect?: Maybe<Array<ProductConnectInput>>;
  where?: Maybe<ProductConnectWhere>;
};

export type ImageFeaturesConnection = {
  __typename?: 'ImageFeaturesConnection';
  edges: Array<ImageFeaturesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ImageFeaturesConnectionSort = {
  node?: Maybe<ProductSort>;
};

export type ImageFeaturesConnectionWhere = {
  AND?: Maybe<Array<ImageFeaturesConnectionWhere>>;
  OR?: Maybe<Array<ImageFeaturesConnectionWhere>>;
  node?: Maybe<ProductWhere>;
  node_NOT?: Maybe<ProductWhere>;
};

export type ImageFeaturesCreateFieldInput = {
  node: ProductCreateInput;
};

export type ImageFeaturesDeleteFieldInput = {
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
};

export type ImageFeaturesDisconnectFieldInput = {
  disconnect?: Maybe<ProductDisconnectInput>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
};

export type ImageFeaturesFieldInput = {
  connect?: Maybe<Array<ImageFeaturesConnectFieldInput>>;
  create?: Maybe<Array<ImageFeaturesCreateFieldInput>>;
};

export type ImageFeaturesRelationship = {
  __typename?: 'ImageFeaturesRelationship';
  cursor: Scalars['String'];
  node: Product;
};

export type ImageFeaturesUpdateConnectionInput = {
  node?: Maybe<ProductUpdateInput>;
};

export type ImageFeaturesUpdateFieldInput = {
  connect?: Maybe<Array<ImageFeaturesConnectFieldInput>>;
  create?: Maybe<Array<ImageFeaturesCreateFieldInput>>;
  delete?: Maybe<Array<ImageFeaturesDeleteFieldInput>>;
  disconnect?: Maybe<Array<ImageFeaturesDisconnectFieldInput>>;
  update?: Maybe<ImageFeaturesUpdateConnectionInput>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
};

export type ImageOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more ImageSort objects to sort Images by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ImageSort>>>;
};

export type ImageProductsConnectFieldInput = {
  connect?: Maybe<Array<ProductConnectInput>>;
  where?: Maybe<ProductConnectWhere>;
};

export type ImageProductsConnection = {
  __typename?: 'ImageProductsConnection';
  edges: Array<ImageProductsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ImageProductsConnectionSort = {
  node?: Maybe<ProductSort>;
};

export type ImageProductsConnectionWhere = {
  AND?: Maybe<Array<ImageProductsConnectionWhere>>;
  OR?: Maybe<Array<ImageProductsConnectionWhere>>;
  node?: Maybe<ProductWhere>;
  node_NOT?: Maybe<ProductWhere>;
};

export type ImageProductsCreateFieldInput = {
  node: ProductCreateInput;
};

export type ImageProductsDeleteFieldInput = {
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<ImageProductsConnectionWhere>;
};

export type ImageProductsDisconnectFieldInput = {
  disconnect?: Maybe<ProductDisconnectInput>;
  where?: Maybe<ImageProductsConnectionWhere>;
};

export type ImageProductsFieldInput = {
  connect?: Maybe<Array<ImageProductsConnectFieldInput>>;
  create?: Maybe<Array<ImageProductsCreateFieldInput>>;
};

export type ImageProductsRelationship = {
  __typename?: 'ImageProductsRelationship';
  cursor: Scalars['String'];
  node: Product;
};

export type ImageProductsUpdateConnectionInput = {
  node?: Maybe<ProductUpdateInput>;
};

export type ImageProductsUpdateFieldInput = {
  connect?: Maybe<Array<ImageProductsConnectFieldInput>>;
  create?: Maybe<Array<ImageProductsCreateFieldInput>>;
  delete?: Maybe<Array<ImageProductsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ImageProductsDisconnectFieldInput>>;
  update?: Maybe<ImageProductsUpdateConnectionInput>;
  where?: Maybe<ImageProductsConnectionWhere>;
};

export type ImageRelationInput = {
  features?: Maybe<Array<ImageFeaturesCreateFieldInput>>;
  products?: Maybe<Array<ImageProductsCreateFieldInput>>;
};

/** Fields to sort Images by. The order in which sorts are applied is not guaranteed when specifying many fields in one ImageSort object. */
export type ImageSort = {
  createdAt?: Maybe<SortDirection>;
  deletedAt?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type ImageUpdateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<ImageFeaturesUpdateFieldInput>>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<ImageProductsUpdateFieldInput>>;
};

export type ImageWhere = {
  AND?: Maybe<Array<ImageWhere>>;
  OR?: Maybe<Array<ImageWhere>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_GT?: Maybe<Scalars['DateTime']>;
  deletedAt_GTE?: Maybe<Scalars['DateTime']>;
  deletedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt_LT?: Maybe<Scalars['DateTime']>;
  deletedAt_LTE?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  description?: Maybe<Scalars['String']>;
  description_CONTAINS?: Maybe<Scalars['String']>;
  description_ENDS_WITH?: Maybe<Scalars['String']>;
  description_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT?: Maybe<Scalars['String']>;
  description_NOT_CONTAINS?: Maybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  description_STARTS_WITH?: Maybe<Scalars['String']>;
  features?: Maybe<ProductWhere>;
  featuresConnection?: Maybe<ImageFeaturesConnectionWhere>;
  featuresConnection_NOT?: Maybe<ImageFeaturesConnectionWhere>;
  features_NOT?: Maybe<ProductWhere>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  products?: Maybe<ProductWhere>;
  productsConnection?: Maybe<ImageProductsConnectionWhere>;
  productsConnection_NOT?: Maybe<ImageProductsConnectionWhere>;
  products_NOT?: Maybe<ProductWhere>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createImages: CreateImagesMutationResponse;
  createProductStatuses: CreateProductStatusesMutationResponse;
  createProductTypes: CreateProductTypesMutationResponse;
  createProducts: CreateProductsMutationResponse;
  createTags: CreateTagsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteImages: DeleteInfo;
  deleteProductStatuses: DeleteInfo;
  deleteProductTypes: DeleteInfo;
  deleteProducts: DeleteInfo;
  deleteTags: DeleteInfo;
  deleteUsers: DeleteInfo;
  login?: Maybe<AuthToken>;
  signUp?: Maybe<AuthToken>;
  updateImages: UpdateImagesMutationResponse;
  updateProductStatuses: UpdateProductStatusesMutationResponse;
  updateProductTypes: UpdateProductTypesMutationResponse;
  updateProducts: UpdateProductsMutationResponse;
  updateTags: UpdateTagsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateImagesArgs = {
  input: Array<ImageCreateInput>;
};


export type MutationCreateProductStatusesArgs = {
  input: Array<ProductStatusCreateInput>;
};


export type MutationCreateProductTypesArgs = {
  input: Array<ProductTypeCreateInput>;
};


export type MutationCreateProductsArgs = {
  input: Array<ProductCreateInput>;
};


export type MutationCreateTagsArgs = {
  input: Array<TagCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteImagesArgs = {
  delete?: Maybe<ImageDeleteInput>;
  where?: Maybe<ImageWhere>;
};


export type MutationDeleteProductStatusesArgs = {
  delete?: Maybe<ProductStatusDeleteInput>;
  where?: Maybe<ProductStatusWhere>;
};


export type MutationDeleteProductTypesArgs = {
  delete?: Maybe<ProductTypeDeleteInput>;
  where?: Maybe<ProductTypeWhere>;
};


export type MutationDeleteProductsArgs = {
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<ProductWhere>;
};


export type MutationDeleteTagsArgs = {
  delete?: Maybe<TagDeleteInput>;
  where?: Maybe<TagWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: Maybe<UserDeleteInput>;
  where?: Maybe<UserWhere>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSignUpArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateImagesArgs = {
  connect?: Maybe<ImageConnectInput>;
  create?: Maybe<ImageRelationInput>;
  delete?: Maybe<ImageDeleteInput>;
  disconnect?: Maybe<ImageDisconnectInput>;
  update?: Maybe<ImageUpdateInput>;
  where?: Maybe<ImageWhere>;
};


export type MutationUpdateProductStatusesArgs = {
  connect?: Maybe<ProductStatusConnectInput>;
  create?: Maybe<ProductStatusRelationInput>;
  delete?: Maybe<ProductStatusDeleteInput>;
  disconnect?: Maybe<ProductStatusDisconnectInput>;
  update?: Maybe<ProductStatusUpdateInput>;
  where?: Maybe<ProductStatusWhere>;
};


export type MutationUpdateProductTypesArgs = {
  connect?: Maybe<ProductTypeConnectInput>;
  create?: Maybe<ProductTypeRelationInput>;
  delete?: Maybe<ProductTypeDeleteInput>;
  disconnect?: Maybe<ProductTypeDisconnectInput>;
  update?: Maybe<ProductTypeUpdateInput>;
  where?: Maybe<ProductTypeWhere>;
};


export type MutationUpdateProductsArgs = {
  connect?: Maybe<ProductConnectInput>;
  create?: Maybe<ProductRelationInput>;
  delete?: Maybe<ProductDeleteInput>;
  disconnect?: Maybe<ProductDisconnectInput>;
  update?: Maybe<ProductUpdateInput>;
  where?: Maybe<ProductWhere>;
};


export type MutationUpdateTagsArgs = {
  connect?: Maybe<TagConnectInput>;
  create?: Maybe<TagRelationInput>;
  delete?: Maybe<TagDeleteInput>;
  disconnect?: Maybe<TagDisconnectInput>;
  update?: Maybe<TagUpdateInput>;
  where?: Maybe<TagWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: Maybe<UserConnectInput>;
  create?: Maybe<UserRelationInput>;
  delete?: Maybe<UserDeleteInput>;
  disconnect?: Maybe<UserDisconnectInput>;
  update?: Maybe<UserUpdateInput>;
  where?: Maybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  featuredImage?: Maybe<Image>;
  featuredImageConnection: ProductFeaturedImageConnection;
  id: Scalars['ID'];
  images: Array<Maybe<Image>>;
  imagesConnection: ProductImagesConnection;
  inventory: Scalars['Int'];
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<User>;
  publishedByConnection: ProductPublishedByConnection;
  status: ProductStatus;
  statusConnection: ProductStatusConnection;
  tags: Array<Maybe<Tag>>;
  tagsConnection: ProductTagsConnection;
  type: ProductType;
  typeConnection: ProductTypeConnection;
  updatedAt: Scalars['DateTime'];
};


export type ProductFeaturedImageArgs = {
  options?: Maybe<ImageOptions>;
  where?: Maybe<ImageWhere>;
};


export type ProductFeaturedImageConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort>>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
};


export type ProductImagesArgs = {
  options?: Maybe<ImageOptions>;
  where?: Maybe<ImageWhere>;
};


export type ProductImagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductImagesConnectionSort>>;
  where?: Maybe<ProductImagesConnectionWhere>;
};


export type ProductPublishedByArgs = {
  options?: Maybe<UserOptions>;
  where?: Maybe<UserWhere>;
};


export type ProductPublishedByConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductPublishedByConnectionSort>>;
  where?: Maybe<ProductPublishedByConnectionWhere>;
};


export type ProductStatusArgs = {
  options?: Maybe<ProductStatusOptions>;
  where?: Maybe<ProductStatusWhere>;
};


export type ProductStatusConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductStatusConnectionSort>>;
  where?: Maybe<ProductStatusConnectionWhere>;
};


export type ProductTagsArgs = {
  options?: Maybe<TagOptions>;
  where?: Maybe<TagWhere>;
};


export type ProductTagsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductTagsConnectionSort>>;
  where?: Maybe<ProductTagsConnectionWhere>;
};


export type ProductTypeArgs = {
  options?: Maybe<ProductTypeOptions>;
  where?: Maybe<ProductTypeWhere>;
};


export type ProductTypeConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductTypeConnectionSort>>;
  where?: Maybe<ProductTypeConnectionWhere>;
};

export type ProductConnectInput = {
  featuredImage?: Maybe<ProductFeaturedImageConnectFieldInput>;
  images?: Maybe<Array<ProductImagesConnectFieldInput>>;
  publishedBy?: Maybe<ProductPublishedByConnectFieldInput>;
  status?: Maybe<ProductStatusConnectFieldInput>;
  tags?: Maybe<Array<ProductTagsConnectFieldInput>>;
  type?: Maybe<ProductTypeConnectFieldInput>;
};

export type ProductConnectWhere = {
  node: ProductWhere;
};

export type ProductCreateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  featuredImage?: Maybe<ProductFeaturedImageFieldInput>;
  images?: Maybe<ProductImagesFieldInput>;
  inventory: Scalars['Int'];
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<ProductPublishedByFieldInput>;
  status?: Maybe<ProductStatusFieldInput>;
  tags?: Maybe<ProductTagsFieldInput>;
  type?: Maybe<ProductTypeFieldInput>;
};

export type ProductDeleteInput = {
  featuredImage?: Maybe<ProductFeaturedImageDeleteFieldInput>;
  images?: Maybe<Array<ProductImagesDeleteFieldInput>>;
  publishedBy?: Maybe<ProductPublishedByDeleteFieldInput>;
  status?: Maybe<ProductStatusDeleteFieldInput>;
  tags?: Maybe<Array<ProductTagsDeleteFieldInput>>;
  type?: Maybe<ProductTypeDeleteFieldInput>;
};

export type ProductDisconnectInput = {
  featuredImage?: Maybe<ProductFeaturedImageDisconnectFieldInput>;
  images?: Maybe<Array<ProductImagesDisconnectFieldInput>>;
  publishedBy?: Maybe<ProductPublishedByDisconnectFieldInput>;
  status?: Maybe<ProductStatusDisconnectFieldInput>;
  tags?: Maybe<Array<ProductTagsDisconnectFieldInput>>;
  type?: Maybe<ProductTypeDisconnectFieldInput>;
};

export type ProductFeaturedImageConnectFieldInput = {
  connect?: Maybe<ImageConnectInput>;
  where?: Maybe<ImageConnectWhere>;
};

export type ProductFeaturedImageConnection = {
  __typename?: 'ProductFeaturedImageConnection';
  edges: Array<ProductFeaturedImageRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductFeaturedImageConnectionSort = {
  node?: Maybe<ImageSort>;
};

export type ProductFeaturedImageConnectionWhere = {
  AND?: Maybe<Array<ProductFeaturedImageConnectionWhere>>;
  OR?: Maybe<Array<ProductFeaturedImageConnectionWhere>>;
  node?: Maybe<ImageWhere>;
  node_NOT?: Maybe<ImageWhere>;
};

export type ProductFeaturedImageCreateFieldInput = {
  node: ImageCreateInput;
};

export type ProductFeaturedImageDeleteFieldInput = {
  delete?: Maybe<ImageDeleteInput>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
};

export type ProductFeaturedImageDisconnectFieldInput = {
  disconnect?: Maybe<ImageDisconnectInput>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
};

export type ProductFeaturedImageFieldInput = {
  connect?: Maybe<ProductFeaturedImageConnectFieldInput>;
  create?: Maybe<ProductFeaturedImageCreateFieldInput>;
};

export type ProductFeaturedImageRelationship = {
  __typename?: 'ProductFeaturedImageRelationship';
  cursor: Scalars['String'];
  node: Image;
};

export type ProductFeaturedImageUpdateConnectionInput = {
  node?: Maybe<ImageUpdateInput>;
};

export type ProductFeaturedImageUpdateFieldInput = {
  connect?: Maybe<ProductFeaturedImageConnectFieldInput>;
  create?: Maybe<ProductFeaturedImageCreateFieldInput>;
  delete?: Maybe<ProductFeaturedImageDeleteFieldInput>;
  disconnect?: Maybe<ProductFeaturedImageDisconnectFieldInput>;
  update?: Maybe<ProductFeaturedImageUpdateConnectionInput>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
};

export type ProductImagesConnectFieldInput = {
  connect?: Maybe<Array<ImageConnectInput>>;
  where?: Maybe<ImageConnectWhere>;
};

export type ProductImagesConnection = {
  __typename?: 'ProductImagesConnection';
  edges: Array<ProductImagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductImagesConnectionSort = {
  node?: Maybe<ImageSort>;
};

export type ProductImagesConnectionWhere = {
  AND?: Maybe<Array<ProductImagesConnectionWhere>>;
  OR?: Maybe<Array<ProductImagesConnectionWhere>>;
  node?: Maybe<ImageWhere>;
  node_NOT?: Maybe<ImageWhere>;
};

export type ProductImagesCreateFieldInput = {
  node: ImageCreateInput;
};

export type ProductImagesDeleteFieldInput = {
  delete?: Maybe<ImageDeleteInput>;
  where?: Maybe<ProductImagesConnectionWhere>;
};

export type ProductImagesDisconnectFieldInput = {
  disconnect?: Maybe<ImageDisconnectInput>;
  where?: Maybe<ProductImagesConnectionWhere>;
};

export type ProductImagesFieldInput = {
  connect?: Maybe<Array<ProductImagesConnectFieldInput>>;
  create?: Maybe<Array<ProductImagesCreateFieldInput>>;
};

export type ProductImagesRelationship = {
  __typename?: 'ProductImagesRelationship';
  cursor: Scalars['String'];
  node: Image;
};

export type ProductImagesUpdateConnectionInput = {
  node?: Maybe<ImageUpdateInput>;
};

export type ProductImagesUpdateFieldInput = {
  connect?: Maybe<Array<ProductImagesConnectFieldInput>>;
  create?: Maybe<Array<ProductImagesCreateFieldInput>>;
  delete?: Maybe<Array<ProductImagesDeleteFieldInput>>;
  disconnect?: Maybe<Array<ProductImagesDisconnectFieldInput>>;
  update?: Maybe<ProductImagesUpdateConnectionInput>;
  where?: Maybe<ProductImagesConnectionWhere>;
};

export type ProductOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more ProductSort objects to sort Products by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ProductSort>>>;
};

export type ProductPublishedByConnectFieldInput = {
  connect?: Maybe<UserConnectInput>;
  where?: Maybe<UserConnectWhere>;
};

export type ProductPublishedByConnection = {
  __typename?: 'ProductPublishedByConnection';
  edges: Array<ProductPublishedByRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductPublishedByConnectionSort = {
  node?: Maybe<UserSort>;
};

export type ProductPublishedByConnectionWhere = {
  AND?: Maybe<Array<ProductPublishedByConnectionWhere>>;
  OR?: Maybe<Array<ProductPublishedByConnectionWhere>>;
  node?: Maybe<UserWhere>;
  node_NOT?: Maybe<UserWhere>;
};

export type ProductPublishedByCreateFieldInput = {
  node: UserCreateInput;
};

export type ProductPublishedByDeleteFieldInput = {
  delete?: Maybe<UserDeleteInput>;
  where?: Maybe<ProductPublishedByConnectionWhere>;
};

export type ProductPublishedByDisconnectFieldInput = {
  disconnect?: Maybe<UserDisconnectInput>;
  where?: Maybe<ProductPublishedByConnectionWhere>;
};

export type ProductPublishedByFieldInput = {
  connect?: Maybe<ProductPublishedByConnectFieldInput>;
  create?: Maybe<ProductPublishedByCreateFieldInput>;
};

export type ProductPublishedByRelationship = {
  __typename?: 'ProductPublishedByRelationship';
  cursor: Scalars['String'];
  node: User;
};

export type ProductPublishedByUpdateConnectionInput = {
  node?: Maybe<UserUpdateInput>;
};

export type ProductPublishedByUpdateFieldInput = {
  connect?: Maybe<ProductPublishedByConnectFieldInput>;
  create?: Maybe<ProductPublishedByCreateFieldInput>;
  delete?: Maybe<ProductPublishedByDeleteFieldInput>;
  disconnect?: Maybe<ProductPublishedByDisconnectFieldInput>;
  update?: Maybe<ProductPublishedByUpdateConnectionInput>;
  where?: Maybe<ProductPublishedByConnectionWhere>;
};

export type ProductRelationInput = {
  featuredImage?: Maybe<ProductFeaturedImageCreateFieldInput>;
  images?: Maybe<Array<ProductImagesCreateFieldInput>>;
  publishedBy?: Maybe<ProductPublishedByCreateFieldInput>;
  status?: Maybe<ProductStatusCreateFieldInput>;
  tags?: Maybe<Array<ProductTagsCreateFieldInput>>;
  type?: Maybe<ProductTypeCreateFieldInput>;
};

/** Fields to sort Products by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProductSort object. */
export type ProductSort = {
  createdAt?: Maybe<SortDirection>;
  deletedAt?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  inventory?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  publishedAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type ProductStatus = {
  __typename?: 'ProductStatus';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Maybe<Product>>;
  productsConnection: ProductStatusProductsConnection;
  updatedAt: Scalars['DateTime'];
};


export type ProductStatusProductsArgs = {
  options?: Maybe<ProductOptions>;
  where?: Maybe<ProductWhere>;
};


export type ProductStatusProductsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductStatusProductsConnectionSort>>;
  where?: Maybe<ProductStatusProductsConnectionWhere>;
};

export type ProductStatusConnectFieldInput = {
  connect?: Maybe<ProductStatusConnectInput>;
  where?: Maybe<ProductStatusConnectWhere>;
};

export type ProductStatusConnectInput = {
  products?: Maybe<Array<ProductStatusProductsConnectFieldInput>>;
};

export type ProductStatusConnectWhere = {
  node: ProductStatusWhere;
};

export type ProductStatusConnection = {
  __typename?: 'ProductStatusConnection';
  edges: Array<ProductStatusRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductStatusConnectionSort = {
  node?: Maybe<ProductStatusSort>;
};

export type ProductStatusConnectionWhere = {
  AND?: Maybe<Array<ProductStatusConnectionWhere>>;
  OR?: Maybe<Array<ProductStatusConnectionWhere>>;
  node?: Maybe<ProductStatusWhere>;
  node_NOT?: Maybe<ProductStatusWhere>;
};

export type ProductStatusCreateFieldInput = {
  node: ProductStatusCreateInput;
};

export type ProductStatusCreateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  products?: Maybe<ProductStatusProductsFieldInput>;
};

export type ProductStatusDeleteFieldInput = {
  delete?: Maybe<ProductStatusDeleteInput>;
  where?: Maybe<ProductStatusConnectionWhere>;
};

export type ProductStatusDeleteInput = {
  products?: Maybe<Array<ProductStatusProductsDeleteFieldInput>>;
};

export type ProductStatusDisconnectFieldInput = {
  disconnect?: Maybe<ProductStatusDisconnectInput>;
  where?: Maybe<ProductStatusConnectionWhere>;
};

export type ProductStatusDisconnectInput = {
  products?: Maybe<Array<ProductStatusProductsDisconnectFieldInput>>;
};

export type ProductStatusFieldInput = {
  connect?: Maybe<ProductStatusConnectFieldInput>;
  create?: Maybe<ProductStatusCreateFieldInput>;
};

export type ProductStatusOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more ProductStatusSort objects to sort ProductStatuses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ProductStatusSort>>>;
};

export type ProductStatusProductsConnectFieldInput = {
  connect?: Maybe<Array<ProductConnectInput>>;
  where?: Maybe<ProductConnectWhere>;
};

export type ProductStatusProductsConnection = {
  __typename?: 'ProductStatusProductsConnection';
  edges: Array<ProductStatusProductsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductStatusProductsConnectionSort = {
  node?: Maybe<ProductSort>;
};

export type ProductStatusProductsConnectionWhere = {
  AND?: Maybe<Array<ProductStatusProductsConnectionWhere>>;
  OR?: Maybe<Array<ProductStatusProductsConnectionWhere>>;
  node?: Maybe<ProductWhere>;
  node_NOT?: Maybe<ProductWhere>;
};

export type ProductStatusProductsCreateFieldInput = {
  node: ProductCreateInput;
};

export type ProductStatusProductsDeleteFieldInput = {
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<ProductStatusProductsConnectionWhere>;
};

export type ProductStatusProductsDisconnectFieldInput = {
  disconnect?: Maybe<ProductDisconnectInput>;
  where?: Maybe<ProductStatusProductsConnectionWhere>;
};

export type ProductStatusProductsFieldInput = {
  connect?: Maybe<Array<ProductStatusProductsConnectFieldInput>>;
  create?: Maybe<Array<ProductStatusProductsCreateFieldInput>>;
};

export type ProductStatusProductsRelationship = {
  __typename?: 'ProductStatusProductsRelationship';
  cursor: Scalars['String'];
  node: Product;
};

export type ProductStatusProductsUpdateConnectionInput = {
  node?: Maybe<ProductUpdateInput>;
};

export type ProductStatusProductsUpdateFieldInput = {
  connect?: Maybe<Array<ProductStatusProductsConnectFieldInput>>;
  create?: Maybe<Array<ProductStatusProductsCreateFieldInput>>;
  delete?: Maybe<Array<ProductStatusProductsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ProductStatusProductsDisconnectFieldInput>>;
  update?: Maybe<ProductStatusProductsUpdateConnectionInput>;
  where?: Maybe<ProductStatusProductsConnectionWhere>;
};

export type ProductStatusRelationInput = {
  products?: Maybe<Array<ProductStatusProductsCreateFieldInput>>;
};

export type ProductStatusRelationship = {
  __typename?: 'ProductStatusRelationship';
  cursor: Scalars['String'];
  node: ProductStatus;
};

/** Fields to sort ProductStatuses by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProductStatusSort object. */
export type ProductStatusSort = {
  createdAt?: Maybe<SortDirection>;
  deletedAt?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type ProductStatusUpdateConnectionInput = {
  node?: Maybe<ProductStatusUpdateInput>;
};

export type ProductStatusUpdateFieldInput = {
  connect?: Maybe<ProductStatusConnectFieldInput>;
  create?: Maybe<ProductStatusCreateFieldInput>;
  delete?: Maybe<ProductStatusDeleteFieldInput>;
  disconnect?: Maybe<ProductStatusDisconnectFieldInput>;
  update?: Maybe<ProductStatusUpdateConnectionInput>;
  where?: Maybe<ProductStatusConnectionWhere>;
};

export type ProductStatusUpdateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<ProductStatusProductsUpdateFieldInput>>;
};

export type ProductStatusWhere = {
  AND?: Maybe<Array<ProductStatusWhere>>;
  OR?: Maybe<Array<ProductStatusWhere>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_GT?: Maybe<Scalars['DateTime']>;
  deletedAt_GTE?: Maybe<Scalars['DateTime']>;
  deletedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt_LT?: Maybe<Scalars['DateTime']>;
  deletedAt_LTE?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  description?: Maybe<Scalars['String']>;
  description_CONTAINS?: Maybe<Scalars['String']>;
  description_ENDS_WITH?: Maybe<Scalars['String']>;
  description_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT?: Maybe<Scalars['String']>;
  description_NOT_CONTAINS?: Maybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  description_STARTS_WITH?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  products?: Maybe<ProductWhere>;
  productsConnection?: Maybe<ProductStatusProductsConnectionWhere>;
  productsConnection_NOT?: Maybe<ProductStatusProductsConnectionWhere>;
  products_NOT?: Maybe<ProductWhere>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type ProductTagsConnectFieldInput = {
  connect?: Maybe<Array<TagConnectInput>>;
  where?: Maybe<TagConnectWhere>;
};

export type ProductTagsConnection = {
  __typename?: 'ProductTagsConnection';
  edges: Array<ProductTagsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductTagsConnectionSort = {
  node?: Maybe<TagSort>;
};

export type ProductTagsConnectionWhere = {
  AND?: Maybe<Array<ProductTagsConnectionWhere>>;
  OR?: Maybe<Array<ProductTagsConnectionWhere>>;
  node?: Maybe<TagWhere>;
  node_NOT?: Maybe<TagWhere>;
};

export type ProductTagsCreateFieldInput = {
  node: TagCreateInput;
};

export type ProductTagsDeleteFieldInput = {
  delete?: Maybe<TagDeleteInput>;
  where?: Maybe<ProductTagsConnectionWhere>;
};

export type ProductTagsDisconnectFieldInput = {
  disconnect?: Maybe<TagDisconnectInput>;
  where?: Maybe<ProductTagsConnectionWhere>;
};

export type ProductTagsFieldInput = {
  connect?: Maybe<Array<ProductTagsConnectFieldInput>>;
  create?: Maybe<Array<ProductTagsCreateFieldInput>>;
};

export type ProductTagsRelationship = {
  __typename?: 'ProductTagsRelationship';
  cursor: Scalars['String'];
  node: Tag;
};

export type ProductTagsUpdateConnectionInput = {
  node?: Maybe<TagUpdateInput>;
};

export type ProductTagsUpdateFieldInput = {
  connect?: Maybe<Array<ProductTagsConnectFieldInput>>;
  create?: Maybe<Array<ProductTagsCreateFieldInput>>;
  delete?: Maybe<Array<ProductTagsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ProductTagsDisconnectFieldInput>>;
  update?: Maybe<ProductTagsUpdateConnectionInput>;
  where?: Maybe<ProductTagsConnectionWhere>;
};

export type ProductType = {
  __typename?: 'ProductType';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Maybe<Product>>;
  productsConnection: ProductTypeProductsConnection;
  updatedAt: Scalars['DateTime'];
};


export type ProductTypeProductsArgs = {
  options?: Maybe<ProductOptions>;
  where?: Maybe<ProductWhere>;
};


export type ProductTypeProductsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductTypeProductsConnectionSort>>;
  where?: Maybe<ProductTypeProductsConnectionWhere>;
};

export type ProductTypeConnectFieldInput = {
  connect?: Maybe<ProductTypeConnectInput>;
  where?: Maybe<ProductTypeConnectWhere>;
};

export type ProductTypeConnectInput = {
  products?: Maybe<Array<ProductTypeProductsConnectFieldInput>>;
};

export type ProductTypeConnectWhere = {
  node: ProductTypeWhere;
};

export type ProductTypeConnection = {
  __typename?: 'ProductTypeConnection';
  edges: Array<ProductTypeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductTypeConnectionSort = {
  node?: Maybe<ProductTypeSort>;
};

export type ProductTypeConnectionWhere = {
  AND?: Maybe<Array<ProductTypeConnectionWhere>>;
  OR?: Maybe<Array<ProductTypeConnectionWhere>>;
  node?: Maybe<ProductTypeWhere>;
  node_NOT?: Maybe<ProductTypeWhere>;
};

export type ProductTypeCreateFieldInput = {
  node: ProductTypeCreateInput;
};

export type ProductTypeCreateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  products?: Maybe<ProductTypeProductsFieldInput>;
};

export type ProductTypeDeleteFieldInput = {
  delete?: Maybe<ProductTypeDeleteInput>;
  where?: Maybe<ProductTypeConnectionWhere>;
};

export type ProductTypeDeleteInput = {
  products?: Maybe<Array<ProductTypeProductsDeleteFieldInput>>;
};

export type ProductTypeDisconnectFieldInput = {
  disconnect?: Maybe<ProductTypeDisconnectInput>;
  where?: Maybe<ProductTypeConnectionWhere>;
};

export type ProductTypeDisconnectInput = {
  products?: Maybe<Array<ProductTypeProductsDisconnectFieldInput>>;
};

export type ProductTypeFieldInput = {
  connect?: Maybe<ProductTypeConnectFieldInput>;
  create?: Maybe<ProductTypeCreateFieldInput>;
};

export type ProductTypeOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more ProductTypeSort objects to sort ProductTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ProductTypeSort>>>;
};

export type ProductTypeProductsConnectFieldInput = {
  connect?: Maybe<Array<ProductConnectInput>>;
  where?: Maybe<ProductConnectWhere>;
};

export type ProductTypeProductsConnection = {
  __typename?: 'ProductTypeProductsConnection';
  edges: Array<ProductTypeProductsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductTypeProductsConnectionSort = {
  node?: Maybe<ProductSort>;
};

export type ProductTypeProductsConnectionWhere = {
  AND?: Maybe<Array<ProductTypeProductsConnectionWhere>>;
  OR?: Maybe<Array<ProductTypeProductsConnectionWhere>>;
  node?: Maybe<ProductWhere>;
  node_NOT?: Maybe<ProductWhere>;
};

export type ProductTypeProductsCreateFieldInput = {
  node: ProductCreateInput;
};

export type ProductTypeProductsDeleteFieldInput = {
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<ProductTypeProductsConnectionWhere>;
};

export type ProductTypeProductsDisconnectFieldInput = {
  disconnect?: Maybe<ProductDisconnectInput>;
  where?: Maybe<ProductTypeProductsConnectionWhere>;
};

export type ProductTypeProductsFieldInput = {
  connect?: Maybe<Array<ProductTypeProductsConnectFieldInput>>;
  create?: Maybe<Array<ProductTypeProductsCreateFieldInput>>;
};

export type ProductTypeProductsRelationship = {
  __typename?: 'ProductTypeProductsRelationship';
  cursor: Scalars['String'];
  node: Product;
};

export type ProductTypeProductsUpdateConnectionInput = {
  node?: Maybe<ProductUpdateInput>;
};

export type ProductTypeProductsUpdateFieldInput = {
  connect?: Maybe<Array<ProductTypeProductsConnectFieldInput>>;
  create?: Maybe<Array<ProductTypeProductsCreateFieldInput>>;
  delete?: Maybe<Array<ProductTypeProductsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ProductTypeProductsDisconnectFieldInput>>;
  update?: Maybe<ProductTypeProductsUpdateConnectionInput>;
  where?: Maybe<ProductTypeProductsConnectionWhere>;
};

export type ProductTypeRelationInput = {
  products?: Maybe<Array<ProductTypeProductsCreateFieldInput>>;
};

export type ProductTypeRelationship = {
  __typename?: 'ProductTypeRelationship';
  cursor: Scalars['String'];
  node: ProductType;
};

/** Fields to sort ProductTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProductTypeSort object. */
export type ProductTypeSort = {
  createdAt?: Maybe<SortDirection>;
  deletedAt?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type ProductTypeUpdateConnectionInput = {
  node?: Maybe<ProductTypeUpdateInput>;
};

export type ProductTypeUpdateFieldInput = {
  connect?: Maybe<ProductTypeConnectFieldInput>;
  create?: Maybe<ProductTypeCreateFieldInput>;
  delete?: Maybe<ProductTypeDeleteFieldInput>;
  disconnect?: Maybe<ProductTypeDisconnectFieldInput>;
  update?: Maybe<ProductTypeUpdateConnectionInput>;
  where?: Maybe<ProductTypeConnectionWhere>;
};

export type ProductTypeUpdateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<ProductTypeProductsUpdateFieldInput>>;
};

export type ProductTypeWhere = {
  AND?: Maybe<Array<ProductTypeWhere>>;
  OR?: Maybe<Array<ProductTypeWhere>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_GT?: Maybe<Scalars['DateTime']>;
  deletedAt_GTE?: Maybe<Scalars['DateTime']>;
  deletedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt_LT?: Maybe<Scalars['DateTime']>;
  deletedAt_LTE?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  description?: Maybe<Scalars['String']>;
  description_CONTAINS?: Maybe<Scalars['String']>;
  description_ENDS_WITH?: Maybe<Scalars['String']>;
  description_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT?: Maybe<Scalars['String']>;
  description_NOT_CONTAINS?: Maybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  description_STARTS_WITH?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  products?: Maybe<ProductWhere>;
  productsConnection?: Maybe<ProductTypeProductsConnectionWhere>;
  productsConnection_NOT?: Maybe<ProductTypeProductsConnectionWhere>;
  products_NOT?: Maybe<ProductWhere>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type ProductUpdateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<ProductFeaturedImageUpdateFieldInput>;
  images?: Maybe<Array<ProductImagesUpdateFieldInput>>;
  inventory?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<ProductPublishedByUpdateFieldInput>;
  status?: Maybe<ProductStatusUpdateFieldInput>;
  tags?: Maybe<Array<ProductTagsUpdateFieldInput>>;
  type?: Maybe<ProductTypeUpdateFieldInput>;
};

export type ProductWhere = {
  AND?: Maybe<Array<ProductWhere>>;
  OR?: Maybe<Array<ProductWhere>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_GT?: Maybe<Scalars['DateTime']>;
  deletedAt_GTE?: Maybe<Scalars['DateTime']>;
  deletedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt_LT?: Maybe<Scalars['DateTime']>;
  deletedAt_LTE?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  description?: Maybe<Scalars['String']>;
  description_CONTAINS?: Maybe<Scalars['String']>;
  description_ENDS_WITH?: Maybe<Scalars['String']>;
  description_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT?: Maybe<Scalars['String']>;
  description_NOT_CONTAINS?: Maybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  description_STARTS_WITH?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<ImageWhere>;
  featuredImageConnection?: Maybe<ProductFeaturedImageConnectionWhere>;
  featuredImageConnection_NOT?: Maybe<ProductFeaturedImageConnectionWhere>;
  featuredImage_NOT?: Maybe<ImageWhere>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  images?: Maybe<ImageWhere>;
  imagesConnection?: Maybe<ProductImagesConnectionWhere>;
  imagesConnection_NOT?: Maybe<ProductImagesConnectionWhere>;
  images_NOT?: Maybe<ImageWhere>;
  inventory?: Maybe<Scalars['Int']>;
  inventory_GT?: Maybe<Scalars['Int']>;
  inventory_GTE?: Maybe<Scalars['Int']>;
  inventory_IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  inventory_LT?: Maybe<Scalars['Int']>;
  inventory_LTE?: Maybe<Scalars['Int']>;
  inventory_NOT?: Maybe<Scalars['Int']>;
  inventory_NOT_IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_GT?: Maybe<Scalars['DateTime']>;
  publishedAt_GTE?: Maybe<Scalars['DateTime']>;
  publishedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_LT?: Maybe<Scalars['DateTime']>;
  publishedAt_LTE?: Maybe<Scalars['DateTime']>;
  publishedAt_NOT?: Maybe<Scalars['DateTime']>;
  publishedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhere>;
  publishedByConnection?: Maybe<ProductPublishedByConnectionWhere>;
  publishedByConnection_NOT?: Maybe<ProductPublishedByConnectionWhere>;
  publishedBy_NOT?: Maybe<UserWhere>;
  status?: Maybe<ProductStatusWhere>;
  statusConnection?: Maybe<ProductStatusConnectionWhere>;
  statusConnection_NOT?: Maybe<ProductStatusConnectionWhere>;
  status_NOT?: Maybe<ProductStatusWhere>;
  tags?: Maybe<TagWhere>;
  tagsConnection?: Maybe<ProductTagsConnectionWhere>;
  tagsConnection_NOT?: Maybe<ProductTagsConnectionWhere>;
  tags_NOT?: Maybe<TagWhere>;
  type?: Maybe<ProductTypeWhere>;
  typeConnection?: Maybe<ProductTypeConnectionWhere>;
  typeConnection_NOT?: Maybe<ProductTypeConnectionWhere>;
  type_NOT?: Maybe<ProductTypeWhere>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type Query = {
  __typename?: 'Query';
  images: Array<Image>;
  imagesCount: Scalars['Int'];
  me?: Maybe<User>;
  productStatuses: Array<ProductStatus>;
  productStatusesCount: Scalars['Int'];
  productTypes: Array<ProductType>;
  productTypesCount: Scalars['Int'];
  products: Array<Product>;
  productsCount: Scalars['Int'];
  tags: Array<Tag>;
  tagsCount: Scalars['Int'];
  users: Array<User>;
  usersCount: Scalars['Int'];
};


export type QueryImagesArgs = {
  options?: Maybe<ImageOptions>;
  where?: Maybe<ImageWhere>;
};


export type QueryImagesCountArgs = {
  where?: Maybe<ImageWhere>;
};


export type QueryProductStatusesArgs = {
  options?: Maybe<ProductStatusOptions>;
  where?: Maybe<ProductStatusWhere>;
};


export type QueryProductStatusesCountArgs = {
  where?: Maybe<ProductStatusWhere>;
};


export type QueryProductTypesArgs = {
  options?: Maybe<ProductTypeOptions>;
  where?: Maybe<ProductTypeWhere>;
};


export type QueryProductTypesCountArgs = {
  where?: Maybe<ProductTypeWhere>;
};


export type QueryProductsArgs = {
  options?: Maybe<ProductOptions>;
  where?: Maybe<ProductWhere>;
};


export type QueryProductsCountArgs = {
  where?: Maybe<ProductWhere>;
};


export type QueryTagsArgs = {
  options?: Maybe<TagOptions>;
  where?: Maybe<TagWhere>;
};


export type QueryTagsCountArgs = {
  where?: Maybe<TagWhere>;
};


export type QueryUsersArgs = {
  options?: Maybe<UserOptions>;
  where?: Maybe<UserWhere>;
};


export type QueryUsersCountArgs = {
  where?: Maybe<UserWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  tags: Array<Maybe<Product>>;
  tagsConnection: TagTagsConnection;
  updatedAt: Scalars['DateTime'];
};


export type TagTagsArgs = {
  options?: Maybe<ProductOptions>;
  where?: Maybe<ProductWhere>;
};


export type TagTagsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<TagTagsConnectionSort>>;
  where?: Maybe<TagTagsConnectionWhere>;
};

export type TagConnectInput = {
  tags?: Maybe<Array<TagTagsConnectFieldInput>>;
};

export type TagConnectWhere = {
  node: TagWhere;
};

export type TagCreateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  tags?: Maybe<TagTagsFieldInput>;
};

export type TagDeleteInput = {
  tags?: Maybe<Array<TagTagsDeleteFieldInput>>;
};

export type TagDisconnectInput = {
  tags?: Maybe<Array<TagTagsDisconnectFieldInput>>;
};

export type TagOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more TagSort objects to sort Tags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<TagSort>>>;
};

export type TagRelationInput = {
  tags?: Maybe<Array<TagTagsCreateFieldInput>>;
};

/** Fields to sort Tags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagSort object. */
export type TagSort = {
  createdAt?: Maybe<SortDirection>;
  deletedAt?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type TagTagsConnectFieldInput = {
  connect?: Maybe<Array<ProductConnectInput>>;
  where?: Maybe<ProductConnectWhere>;
};

export type TagTagsConnection = {
  __typename?: 'TagTagsConnection';
  edges: Array<TagTagsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagTagsConnectionSort = {
  node?: Maybe<ProductSort>;
};

export type TagTagsConnectionWhere = {
  AND?: Maybe<Array<TagTagsConnectionWhere>>;
  OR?: Maybe<Array<TagTagsConnectionWhere>>;
  node?: Maybe<ProductWhere>;
  node_NOT?: Maybe<ProductWhere>;
};

export type TagTagsCreateFieldInput = {
  node: ProductCreateInput;
};

export type TagTagsDeleteFieldInput = {
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<TagTagsConnectionWhere>;
};

export type TagTagsDisconnectFieldInput = {
  disconnect?: Maybe<ProductDisconnectInput>;
  where?: Maybe<TagTagsConnectionWhere>;
};

export type TagTagsFieldInput = {
  connect?: Maybe<Array<TagTagsConnectFieldInput>>;
  create?: Maybe<Array<TagTagsCreateFieldInput>>;
};

export type TagTagsRelationship = {
  __typename?: 'TagTagsRelationship';
  cursor: Scalars['String'];
  node: Product;
};

export type TagTagsUpdateConnectionInput = {
  node?: Maybe<ProductUpdateInput>;
};

export type TagTagsUpdateFieldInput = {
  connect?: Maybe<Array<TagTagsConnectFieldInput>>;
  create?: Maybe<Array<TagTagsCreateFieldInput>>;
  delete?: Maybe<Array<TagTagsDeleteFieldInput>>;
  disconnect?: Maybe<Array<TagTagsDisconnectFieldInput>>;
  update?: Maybe<TagTagsUpdateConnectionInput>;
  where?: Maybe<TagTagsConnectionWhere>;
};

export type TagUpdateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<TagTagsUpdateFieldInput>>;
};

export type TagWhere = {
  AND?: Maybe<Array<TagWhere>>;
  OR?: Maybe<Array<TagWhere>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_GT?: Maybe<Scalars['DateTime']>;
  deletedAt_GTE?: Maybe<Scalars['DateTime']>;
  deletedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt_LT?: Maybe<Scalars['DateTime']>;
  deletedAt_LTE?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  description?: Maybe<Scalars['String']>;
  description_CONTAINS?: Maybe<Scalars['String']>;
  description_ENDS_WITH?: Maybe<Scalars['String']>;
  description_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT?: Maybe<Scalars['String']>;
  description_NOT_CONTAINS?: Maybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  description_STARTS_WITH?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  tags?: Maybe<ProductWhere>;
  tagsConnection?: Maybe<TagTagsConnectionWhere>;
  tagsConnection_NOT?: Maybe<TagTagsConnectionWhere>;
  tags_NOT?: Maybe<ProductWhere>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type UpdateImagesMutationResponse = {
  __typename?: 'UpdateImagesMutationResponse';
  images: Array<Image>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateProductStatusesMutationResponse = {
  __typename?: 'UpdateProductStatusesMutationResponse';
  info: UpdateInfo;
  productStatuses: Array<ProductStatus>;
};

export type UpdateProductTypesMutationResponse = {
  __typename?: 'UpdateProductTypesMutationResponse';
  info: UpdateInfo;
  productTypes: Array<ProductType>;
};

export type UpdateProductsMutationResponse = {
  __typename?: 'UpdateProductsMutationResponse';
  info: UpdateInfo;
  products: Array<Product>;
};

export type UpdateTagsMutationResponse = {
  __typename?: 'UpdateTagsMutationResponse';
  info: UpdateInfo;
  tags: Array<Tag>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  images: Array<Maybe<Image>>;
  imagesConnection: UserImagesConnection;
  name: Scalars['String'];
  products: Array<Maybe<Product>>;
  productsConnection: UserProductsConnection;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};


export type UserImagesArgs = {
  options?: Maybe<ImageOptions>;
  where?: Maybe<ImageWhere>;
};


export type UserImagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<UserImagesConnectionSort>>;
  where?: Maybe<UserImagesConnectionWhere>;
};


export type UserProductsArgs = {
  options?: Maybe<ProductOptions>;
  where?: Maybe<ProductWhere>;
};


export type UserProductsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<UserProductsConnectionSort>>;
  where?: Maybe<UserProductsConnectionWhere>;
};

export type UserConnectInput = {
  images?: Maybe<Array<UserImagesConnectFieldInput>>;
  products?: Maybe<Array<UserProductsConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<UserImagesFieldInput>;
  name: Scalars['String'];
  products?: Maybe<UserProductsFieldInput>;
  username: Scalars['String'];
};

export type UserDeleteInput = {
  images?: Maybe<Array<UserImagesDeleteFieldInput>>;
  products?: Maybe<Array<UserProductsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  images?: Maybe<Array<UserImagesDisconnectFieldInput>>;
  products?: Maybe<Array<UserProductsDisconnectFieldInput>>;
};

export type UserImagesConnectFieldInput = {
  connect?: Maybe<Array<ImageConnectInput>>;
  where?: Maybe<ImageConnectWhere>;
};

export type UserImagesConnection = {
  __typename?: 'UserImagesConnection';
  edges: Array<UserImagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserImagesConnectionSort = {
  node?: Maybe<ImageSort>;
};

export type UserImagesConnectionWhere = {
  AND?: Maybe<Array<UserImagesConnectionWhere>>;
  OR?: Maybe<Array<UserImagesConnectionWhere>>;
  node?: Maybe<ImageWhere>;
  node_NOT?: Maybe<ImageWhere>;
};

export type UserImagesCreateFieldInput = {
  node: ImageCreateInput;
};

export type UserImagesDeleteFieldInput = {
  delete?: Maybe<ImageDeleteInput>;
  where?: Maybe<UserImagesConnectionWhere>;
};

export type UserImagesDisconnectFieldInput = {
  disconnect?: Maybe<ImageDisconnectInput>;
  where?: Maybe<UserImagesConnectionWhere>;
};

export type UserImagesFieldInput = {
  connect?: Maybe<Array<UserImagesConnectFieldInput>>;
  create?: Maybe<Array<UserImagesCreateFieldInput>>;
};

export type UserImagesRelationship = {
  __typename?: 'UserImagesRelationship';
  cursor: Scalars['String'];
  node: Image;
};

export type UserImagesUpdateConnectionInput = {
  node?: Maybe<ImageUpdateInput>;
};

export type UserImagesUpdateFieldInput = {
  connect?: Maybe<Array<UserImagesConnectFieldInput>>;
  create?: Maybe<Array<UserImagesCreateFieldInput>>;
  delete?: Maybe<Array<UserImagesDeleteFieldInput>>;
  disconnect?: Maybe<Array<UserImagesDisconnectFieldInput>>;
  update?: Maybe<UserImagesUpdateConnectionInput>;
  where?: Maybe<UserImagesConnectionWhere>;
};

export type UserOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<UserSort>>>;
};

export type UserProductsConnectFieldInput = {
  connect?: Maybe<Array<ProductConnectInput>>;
  where?: Maybe<ProductConnectWhere>;
};

export type UserProductsConnection = {
  __typename?: 'UserProductsConnection';
  edges: Array<UserProductsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserProductsConnectionSort = {
  node?: Maybe<ProductSort>;
};

export type UserProductsConnectionWhere = {
  AND?: Maybe<Array<UserProductsConnectionWhere>>;
  OR?: Maybe<Array<UserProductsConnectionWhere>>;
  node?: Maybe<ProductWhere>;
  node_NOT?: Maybe<ProductWhere>;
};

export type UserProductsCreateFieldInput = {
  node: ProductCreateInput;
};

export type UserProductsDeleteFieldInput = {
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<UserProductsConnectionWhere>;
};

export type UserProductsDisconnectFieldInput = {
  disconnect?: Maybe<ProductDisconnectInput>;
  where?: Maybe<UserProductsConnectionWhere>;
};

export type UserProductsFieldInput = {
  connect?: Maybe<Array<UserProductsConnectFieldInput>>;
  create?: Maybe<Array<UserProductsCreateFieldInput>>;
};

export type UserProductsRelationship = {
  __typename?: 'UserProductsRelationship';
  cursor: Scalars['String'];
  node: Product;
};

export type UserProductsUpdateConnectionInput = {
  node?: Maybe<ProductUpdateInput>;
};

export type UserProductsUpdateFieldInput = {
  connect?: Maybe<Array<UserProductsConnectFieldInput>>;
  create?: Maybe<Array<UserProductsCreateFieldInput>>;
  delete?: Maybe<Array<UserProductsDeleteFieldInput>>;
  disconnect?: Maybe<Array<UserProductsDisconnectFieldInput>>;
  update?: Maybe<UserProductsUpdateConnectionInput>;
  where?: Maybe<UserProductsConnectionWhere>;
};

export type UserRelationInput = {
  images?: Maybe<Array<UserImagesCreateFieldInput>>;
  products?: Maybe<Array<UserProductsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  createdAt?: Maybe<SortDirection>;
  deletedAt?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
  username?: Maybe<SortDirection>;
};

export type UserUpdateInput = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<UserImagesUpdateFieldInput>>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<UserProductsUpdateFieldInput>>;
  username?: Maybe<Scalars['String']>;
};

export type UserWhere = {
  AND?: Maybe<Array<UserWhere>>;
  OR?: Maybe<Array<UserWhere>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_GT?: Maybe<Scalars['DateTime']>;
  deletedAt_GTE?: Maybe<Scalars['DateTime']>;
  deletedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deletedAt_LT?: Maybe<Scalars['DateTime']>;
  deletedAt_LTE?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT?: Maybe<Scalars['DateTime']>;
  deletedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  images?: Maybe<ImageWhere>;
  imagesConnection?: Maybe<UserImagesConnectionWhere>;
  imagesConnection_NOT?: Maybe<UserImagesConnectionWhere>;
  images_NOT?: Maybe<ImageWhere>;
  name?: Maybe<Scalars['String']>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  products?: Maybe<ProductWhere>;
  productsConnection?: Maybe<UserProductsConnectionWhere>;
  productsConnection_NOT?: Maybe<UserProductsConnectionWhere>;
  products_NOT?: Maybe<ProductWhere>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  username?: Maybe<Scalars['String']>;
  username_CONTAINS?: Maybe<Scalars['String']>;
  username_ENDS_WITH?: Maybe<Scalars['String']>;
  username_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  username_NOT?: Maybe<Scalars['String']>;
  username_NOT_CONTAINS?: Maybe<Scalars['String']>;
  username_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  username_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  username_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  username_STARTS_WITH?: Maybe<Scalars['String']>;
};

export type CreateImagesMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where1?: Maybe<ImageFeaturesConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where3?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where4?: Maybe<ImageWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where6?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where7?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where8?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where9?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where10?: Maybe<ImageProductsConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where11?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where12?: Maybe<ProductFeaturedImageConnectionWhere>;
  options3?: Maybe<ImageOptions>;
  where13?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where14?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where15?: Maybe<UserProductsConnectionWhere>;
  options4?: Maybe<UserOptions>;
  where16?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where17?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where18?: Maybe<ProductStatusProductsConnectionWhere>;
  options5?: Maybe<ProductStatusOptions>;
  where19?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where20?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where22?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where23?: Maybe<ProductTypeProductsConnectionWhere>;
  options6?: Maybe<ProductTypeOptions>;
  where24?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where25?: Maybe<ProductTypeConnectionWhere>;
  options7?: Maybe<ProductOptions>;
  where26?: Maybe<ProductWhere>;
  options8?: Maybe<ProductTypeOptions>;
  where27?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where28?: Maybe<ProductTypeConnectionWhere>;
  options9?: Maybe<ProductOptions>;
  where29?: Maybe<ProductWhere>;
  options10?: Maybe<TagOptions>;
  where30?: Maybe<TagWhere>;
  options11?: Maybe<ProductOptions>;
  where31?: Maybe<ProductWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where32?: Maybe<ProductStatusWhere>;
  options13?: Maybe<ProductOptions>;
  where33?: Maybe<ProductWhere>;
  options14?: Maybe<UserOptions>;
  where34?: Maybe<UserWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where39?: Maybe<ProductImagesConnectionWhere>;
  options19?: Maybe<UserOptions>;
  where40?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where41?: Maybe<ProductPublishedByConnectionWhere>;
  options20?: Maybe<ProductStatusOptions>;
  where42?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where43?: Maybe<ProductStatusConnectionWhere>;
  options21?: Maybe<TagOptions>;
  where44?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where45?: Maybe<ProductTagsConnectionWhere>;
  options22?: Maybe<ProductTypeOptions>;
  where46?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where47?: Maybe<ProductTypeConnectionWhere>;
  options23?: Maybe<ProductOptions>;
  where48?: Maybe<ProductWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where49?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ProductOptions>;
  where50?: Maybe<ProductWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where51?: Maybe<ImageProductsConnectionWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where52?: Maybe<ProductFeaturedImageConnectionWhere>;
  options25?: Maybe<ProductOptions>;
  where53?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where54?: Maybe<ImageWhere>;
  options27?: Maybe<ProductOptions>;
  where55?: Maybe<ProductWhere>;
  input: Array<ImageCreateInput> | ImageCreateInput;
}>;


export type CreateImagesMutation = { __typename?: 'Mutation', createImages: { __typename?: 'CreateImagesMutationResponse', images: Array<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string, node: { __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>>, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } } }> } }>> }> }>> }>, info: { __typename?: 'CreateInfo', bookmark?: Maybe<string>, nodesCreated: number, relationshipsCreated: number } } };

export type CreateProductStatusesMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  options32?: Maybe<ProductOptions>;
  where64?: Maybe<ProductWhere>;
  after32?: Maybe<Scalars['String']>;
  first32?: Maybe<Scalars['Int']>;
  sort32?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where65?: Maybe<ProductStatusProductsConnectionWhere>;
  input: Array<ProductStatusCreateInput> | ProductStatusCreateInput;
}>;


export type CreateProductStatusesMutation = { __typename?: 'Mutation', createProductStatuses: { __typename?: 'CreateProductStatusesMutationResponse', info: { __typename?: 'CreateInfo', bookmark?: Maybe<string>, nodesCreated: number, relationshipsCreated: number }, productStatuses: Array<{ __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }>>, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }> } };

export type CreateProductTypesMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  options32?: Maybe<ProductOptions>;
  where64?: Maybe<ProductWhere>;
  after32?: Maybe<Scalars['String']>;
  first32?: Maybe<Scalars['Int']>;
  sort32?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where65?: Maybe<ProductTypeProductsConnectionWhere>;
  input: Array<ProductTypeCreateInput> | ProductTypeCreateInput;
}>;


export type CreateProductTypesMutation = { __typename?: 'Mutation', createProductTypes: { __typename?: 'CreateProductTypesMutationResponse', info: { __typename?: 'CreateInfo', bookmark?: Maybe<string>, nodesCreated: number, relationshipsCreated: number }, productTypes: Array<{ __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }>>, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }> } };

export type CreateProductsMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  input: Array<ProductCreateInput> | ProductCreateInput;
}>;


export type CreateProductsMutation = { __typename?: 'Mutation', createProducts: { __typename?: 'CreateProductsMutationResponse', info: { __typename?: 'CreateInfo', bookmark?: Maybe<string>, nodesCreated: number, relationshipsCreated: number }, products: Array<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }> } };

export type CreateTagsMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where1?: Maybe<ImageWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where3?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where4?: Maybe<ImageFeaturesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where6?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where7?: Maybe<ImageWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where8?: Maybe<UserImagesConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where9?: Maybe<ProductPublishedByConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where10?: Maybe<ProductStatusConnectionWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<TagTagsConnectionSort> | TagTagsConnectionSort>;
  where11?: Maybe<TagTagsConnectionWhere>;
  options2?: Maybe<TagOptions>;
  where12?: Maybe<TagWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where13?: Maybe<ProductTagsConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where14?: Maybe<ProductTypeConnectionWhere>;
  options3?: Maybe<ProductOptions>;
  where15?: Maybe<ProductWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where16?: Maybe<ProductTypeProductsConnectionWhere>;
  options4?: Maybe<ProductTypeOptions>;
  where17?: Maybe<ProductTypeWhere>;
  options5?: Maybe<ProductOptions>;
  where18?: Maybe<ProductWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where19?: Maybe<ProductStatusProductsConnectionWhere>;
  options6?: Maybe<ProductStatusOptions>;
  where20?: Maybe<ProductStatusWhere>;
  options7?: Maybe<ProductOptions>;
  where21?: Maybe<ProductWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where22?: Maybe<UserProductsConnectionWhere>;
  options8?: Maybe<UserOptions>;
  where23?: Maybe<UserWhere>;
  options9?: Maybe<ProductOptions>;
  where24?: Maybe<ProductWhere>;
  options10?: Maybe<ImageOptions>;
  where25?: Maybe<ImageWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where26?: Maybe<ProductImagesConnectionWhere>;
  options11?: Maybe<UserOptions>;
  where27?: Maybe<UserWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where28?: Maybe<ProductPublishedByConnectionWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where29?: Maybe<ProductStatusWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where30?: Maybe<ProductStatusConnectionWhere>;
  options13?: Maybe<TagOptions>;
  where31?: Maybe<TagWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where32?: Maybe<ProductTagsConnectionWhere>;
  options14?: Maybe<ProductTypeOptions>;
  where33?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where34?: Maybe<ProductTypeConnectionWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where39?: Maybe<ProductFeaturedImageConnectionWhere>;
  options19?: Maybe<ImageOptions>;
  where40?: Maybe<ImageWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where41?: Maybe<ProductImagesConnectionWhere>;
  options20?: Maybe<UserOptions>;
  where42?: Maybe<UserWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where43?: Maybe<ProductPublishedByConnectionWhere>;
  options21?: Maybe<ProductStatusOptions>;
  where44?: Maybe<ProductStatusWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where45?: Maybe<ProductStatusConnectionWhere>;
  options22?: Maybe<TagOptions>;
  where46?: Maybe<TagWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where47?: Maybe<ProductTagsConnectionWhere>;
  options23?: Maybe<ProductTypeOptions>;
  where48?: Maybe<ProductTypeWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where49?: Maybe<ProductTypeConnectionWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where50?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where51?: Maybe<ImageWhere>;
  options25?: Maybe<ProductOptions>;
  where52?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where53?: Maybe<ImageWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where54?: Maybe<ProductFeaturedImageConnectionWhere>;
  options27?: Maybe<ImageOptions>;
  where55?: Maybe<ImageWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where56?: Maybe<ProductImagesConnectionWhere>;
  options28?: Maybe<UserOptions>;
  where57?: Maybe<UserWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where58?: Maybe<ProductPublishedByConnectionWhere>;
  options29?: Maybe<ProductStatusOptions>;
  where59?: Maybe<ProductStatusWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where60?: Maybe<ProductStatusConnectionWhere>;
  options30?: Maybe<ProductTypeOptions>;
  where61?: Maybe<ProductTypeWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where62?: Maybe<ProductTypeConnectionWhere>;
  options31?: Maybe<ProductOptions>;
  where63?: Maybe<ProductWhere>;
  input: Array<TagCreateInput> | TagCreateInput;
}>;


export type CreateTagsMutation = { __typename?: 'Mutation', createTags: { __typename?: 'CreateTagsMutationResponse', info: { __typename?: 'CreateInfo', bookmark?: Maybe<string>, nodesCreated: number, relationshipsCreated: number }, tags: Array<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tagsConnection: { __typename?: 'TagTagsConnection', totalCount: number, edges: Array<{ __typename?: 'TagTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } } }>>, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } } }>>, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }> } };

export type CreateUsersMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where1?: Maybe<ImageFeaturesConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where3?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where4?: Maybe<ImageWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where6?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where7?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where8?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where9?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where10?: Maybe<ImageProductsConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where11?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where12?: Maybe<ProductFeaturedImageConnectionWhere>;
  options3?: Maybe<ImageOptions>;
  where13?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where14?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where15?: Maybe<UserProductsConnectionWhere>;
  options4?: Maybe<UserOptions>;
  where16?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where17?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where18?: Maybe<ProductStatusProductsConnectionWhere>;
  options5?: Maybe<ProductStatusOptions>;
  where19?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where20?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where22?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where23?: Maybe<ProductTypeProductsConnectionWhere>;
  options6?: Maybe<ProductTypeOptions>;
  where24?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where25?: Maybe<ProductTypeConnectionWhere>;
  options7?: Maybe<ProductOptions>;
  where26?: Maybe<ProductWhere>;
  options8?: Maybe<ProductTypeOptions>;
  where27?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where28?: Maybe<ProductTypeConnectionWhere>;
  options9?: Maybe<ProductOptions>;
  where29?: Maybe<ProductWhere>;
  options10?: Maybe<TagOptions>;
  where30?: Maybe<TagWhere>;
  options11?: Maybe<ProductOptions>;
  where31?: Maybe<ProductWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where32?: Maybe<ProductStatusWhere>;
  options13?: Maybe<ProductOptions>;
  where33?: Maybe<ProductWhere>;
  options14?: Maybe<UserOptions>;
  where34?: Maybe<UserWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where39?: Maybe<ProductImagesConnectionWhere>;
  options19?: Maybe<UserOptions>;
  where40?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where41?: Maybe<ProductPublishedByConnectionWhere>;
  options20?: Maybe<ProductStatusOptions>;
  where42?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where43?: Maybe<ProductStatusConnectionWhere>;
  options21?: Maybe<TagOptions>;
  where44?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where45?: Maybe<ProductTagsConnectionWhere>;
  options22?: Maybe<ProductTypeOptions>;
  where46?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where47?: Maybe<ProductTypeConnectionWhere>;
  options23?: Maybe<ProductOptions>;
  where48?: Maybe<ProductWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where49?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ProductOptions>;
  where50?: Maybe<ProductWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where51?: Maybe<ImageProductsConnectionWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where52?: Maybe<ProductFeaturedImageConnectionWhere>;
  options25?: Maybe<ProductOptions>;
  where53?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where54?: Maybe<ImageWhere>;
  options27?: Maybe<ProductOptions>;
  where55?: Maybe<ProductWhere>;
  options28?: Maybe<ImageOptions>;
  where56?: Maybe<ImageWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where57?: Maybe<UserImagesConnectionWhere>;
  options29?: Maybe<ProductOptions>;
  where58?: Maybe<ProductWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where59?: Maybe<UserProductsConnectionWhere>;
  input: Array<UserCreateInput> | UserCreateInput;
}>;


export type CreateUsersMutation = { __typename?: 'Mutation', createUsers: { __typename?: 'CreateUsersMutationResponse', info: { __typename?: 'CreateInfo', bookmark?: Maybe<string>, nodesCreated: number, relationshipsCreated: number }, users: Array<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string, node: { __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>>, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } } }> } }>> }> }>> }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }> } };

export type DeleteImagesMutationVariables = Exact<{
  delete?: Maybe<ImageDeleteInput>;
  where?: Maybe<ImageWhere>;
}>;


export type DeleteImagesMutation = { __typename?: 'Mutation', deleteImages: { __typename?: 'DeleteInfo', bookmark?: Maybe<string>, nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteProductStatusesMutationVariables = Exact<{
  delete?: Maybe<ProductStatusDeleteInput>;
  where?: Maybe<ProductStatusWhere>;
}>;


export type DeleteProductStatusesMutation = { __typename?: 'Mutation', deleteProductStatuses: { __typename?: 'DeleteInfo', bookmark?: Maybe<string>, nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteProductTypesMutationVariables = Exact<{
  delete?: Maybe<ProductTypeDeleteInput>;
  where?: Maybe<ProductTypeWhere>;
}>;


export type DeleteProductTypesMutation = { __typename?: 'Mutation', deleteProductTypes: { __typename?: 'DeleteInfo', bookmark?: Maybe<string>, nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteProductsMutationVariables = Exact<{
  delete?: Maybe<ProductDeleteInput>;
  where?: Maybe<ProductWhere>;
}>;


export type DeleteProductsMutation = { __typename?: 'Mutation', deleteProducts: { __typename?: 'DeleteInfo', bookmark?: Maybe<string>, nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteTagsMutationVariables = Exact<{
  delete?: Maybe<TagDeleteInput>;
  where?: Maybe<TagWhere>;
}>;


export type DeleteTagsMutation = { __typename?: 'Mutation', deleteTags: { __typename?: 'DeleteInfo', bookmark?: Maybe<string>, nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteUsersMutationVariables = Exact<{
  delete?: Maybe<UserDeleteInput>;
  where?: Maybe<UserWhere>;
}>;


export type DeleteUsersMutation = { __typename?: 'Mutation', deleteUsers: { __typename?: 'DeleteInfo', bookmark?: Maybe<string>, nodesDeleted: number, relationshipsDeleted: number } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: Maybe<{ __typename?: 'AuthToken', token: string }> };

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: Maybe<{ __typename?: 'AuthToken', token: string }> };

export type UpdateImagesMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where1?: Maybe<ImageFeaturesConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where3?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where4?: Maybe<ImageWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where6?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where7?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where8?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where9?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where10?: Maybe<ImageProductsConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where11?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where12?: Maybe<ProductFeaturedImageConnectionWhere>;
  options3?: Maybe<ImageOptions>;
  where13?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where14?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where15?: Maybe<UserProductsConnectionWhere>;
  options4?: Maybe<UserOptions>;
  where16?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where17?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where18?: Maybe<ProductStatusProductsConnectionWhere>;
  options5?: Maybe<ProductStatusOptions>;
  where19?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where20?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where22?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where23?: Maybe<ProductTypeProductsConnectionWhere>;
  options6?: Maybe<ProductTypeOptions>;
  where24?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where25?: Maybe<ProductTypeConnectionWhere>;
  options7?: Maybe<ProductOptions>;
  where26?: Maybe<ProductWhere>;
  options8?: Maybe<ProductTypeOptions>;
  where27?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where28?: Maybe<ProductTypeConnectionWhere>;
  options9?: Maybe<ProductOptions>;
  where29?: Maybe<ProductWhere>;
  options10?: Maybe<TagOptions>;
  where30?: Maybe<TagWhere>;
  options11?: Maybe<ProductOptions>;
  where31?: Maybe<ProductWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where32?: Maybe<ProductStatusWhere>;
  options13?: Maybe<ProductOptions>;
  where33?: Maybe<ProductWhere>;
  options14?: Maybe<UserOptions>;
  where34?: Maybe<UserWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where39?: Maybe<ProductImagesConnectionWhere>;
  options19?: Maybe<UserOptions>;
  where40?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where41?: Maybe<ProductPublishedByConnectionWhere>;
  options20?: Maybe<ProductStatusOptions>;
  where42?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where43?: Maybe<ProductStatusConnectionWhere>;
  options21?: Maybe<TagOptions>;
  where44?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where45?: Maybe<ProductTagsConnectionWhere>;
  options22?: Maybe<ProductTypeOptions>;
  where46?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where47?: Maybe<ProductTypeConnectionWhere>;
  options23?: Maybe<ProductOptions>;
  where48?: Maybe<ProductWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where49?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ProductOptions>;
  where50?: Maybe<ProductWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where51?: Maybe<ImageProductsConnectionWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where52?: Maybe<ProductFeaturedImageConnectionWhere>;
  options25?: Maybe<ProductOptions>;
  where53?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where54?: Maybe<ImageWhere>;
  options27?: Maybe<ProductOptions>;
  where55?: Maybe<ProductWhere>;
  connect?: Maybe<ImageConnectInput>;
  create?: Maybe<ImageRelationInput>;
  delete?: Maybe<ImageDeleteInput>;
  disconnect?: Maybe<ImageDisconnectInput>;
  update?: Maybe<ImageUpdateInput>;
  where56?: Maybe<ImageWhere>;
}>;


export type UpdateImagesMutation = { __typename?: 'Mutation', updateImages: { __typename?: 'UpdateImagesMutationResponse', images: Array<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string, node: { __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>>, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } } }> } }>> }> }>> }>, info: { __typename?: 'UpdateInfo', bookmark?: Maybe<string>, nodesCreated: number, nodesDeleted: number, relationshipsCreated: number, relationshipsDeleted: number } } };

export type UpdateProductStatusesMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  options32?: Maybe<ProductOptions>;
  where64?: Maybe<ProductWhere>;
  after32?: Maybe<Scalars['String']>;
  first32?: Maybe<Scalars['Int']>;
  sort32?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where65?: Maybe<ProductStatusProductsConnectionWhere>;
  connect?: Maybe<ProductStatusConnectInput>;
  create?: Maybe<ProductStatusRelationInput>;
  delete?: Maybe<ProductStatusDeleteInput>;
  disconnect?: Maybe<ProductStatusDisconnectInput>;
  update?: Maybe<ProductStatusUpdateInput>;
  where66?: Maybe<ProductStatusWhere>;
}>;


export type UpdateProductStatusesMutation = { __typename?: 'Mutation', updateProductStatuses: { __typename?: 'UpdateProductStatusesMutationResponse', info: { __typename?: 'UpdateInfo', bookmark?: Maybe<string>, nodesCreated: number, nodesDeleted: number, relationshipsCreated: number, relationshipsDeleted: number }, productStatuses: Array<{ __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }>>, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }> } };

export type UpdateProductTypesMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  options32?: Maybe<ProductOptions>;
  where64?: Maybe<ProductWhere>;
  after32?: Maybe<Scalars['String']>;
  first32?: Maybe<Scalars['Int']>;
  sort32?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where65?: Maybe<ProductTypeProductsConnectionWhere>;
  connect?: Maybe<ProductTypeConnectInput>;
  create?: Maybe<ProductTypeRelationInput>;
  delete?: Maybe<ProductTypeDeleteInput>;
  disconnect?: Maybe<ProductTypeDisconnectInput>;
  update?: Maybe<ProductTypeUpdateInput>;
  where66?: Maybe<ProductTypeWhere>;
}>;


export type UpdateProductTypesMutation = { __typename?: 'Mutation', updateProductTypes: { __typename?: 'UpdateProductTypesMutationResponse', info: { __typename?: 'UpdateInfo', bookmark?: Maybe<string>, nodesCreated: number, nodesDeleted: number, relationshipsCreated: number, relationshipsDeleted: number }, productTypes: Array<{ __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }>>, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }> } };

export type UpdateProductsMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  connect?: Maybe<ProductConnectInput>;
  create?: Maybe<ProductRelationInput>;
  delete?: Maybe<ProductDeleteInput>;
  disconnect?: Maybe<ProductDisconnectInput>;
  update?: Maybe<ProductUpdateInput>;
  where64?: Maybe<ProductWhere>;
}>;


export type UpdateProductsMutation = { __typename?: 'Mutation', updateProducts: { __typename?: 'UpdateProductsMutationResponse', info: { __typename?: 'UpdateInfo', bookmark?: Maybe<string>, nodesCreated: number, nodesDeleted: number, relationshipsCreated: number, relationshipsDeleted: number }, products: Array<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }> } };

export type UpdateTagsMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where1?: Maybe<ImageWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where3?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where4?: Maybe<ImageFeaturesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where6?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where7?: Maybe<ImageWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where8?: Maybe<UserImagesConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where9?: Maybe<ProductPublishedByConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where10?: Maybe<ProductStatusConnectionWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<TagTagsConnectionSort> | TagTagsConnectionSort>;
  where11?: Maybe<TagTagsConnectionWhere>;
  options2?: Maybe<TagOptions>;
  where12?: Maybe<TagWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where13?: Maybe<ProductTagsConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where14?: Maybe<ProductTypeConnectionWhere>;
  options3?: Maybe<ProductOptions>;
  where15?: Maybe<ProductWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where16?: Maybe<ProductTypeProductsConnectionWhere>;
  options4?: Maybe<ProductTypeOptions>;
  where17?: Maybe<ProductTypeWhere>;
  options5?: Maybe<ProductOptions>;
  where18?: Maybe<ProductWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where19?: Maybe<ProductStatusProductsConnectionWhere>;
  options6?: Maybe<ProductStatusOptions>;
  where20?: Maybe<ProductStatusWhere>;
  options7?: Maybe<ProductOptions>;
  where21?: Maybe<ProductWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where22?: Maybe<UserProductsConnectionWhere>;
  options8?: Maybe<UserOptions>;
  where23?: Maybe<UserWhere>;
  options9?: Maybe<ProductOptions>;
  where24?: Maybe<ProductWhere>;
  options10?: Maybe<ImageOptions>;
  where25?: Maybe<ImageWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where26?: Maybe<ProductImagesConnectionWhere>;
  options11?: Maybe<UserOptions>;
  where27?: Maybe<UserWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where28?: Maybe<ProductPublishedByConnectionWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where29?: Maybe<ProductStatusWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where30?: Maybe<ProductStatusConnectionWhere>;
  options13?: Maybe<TagOptions>;
  where31?: Maybe<TagWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where32?: Maybe<ProductTagsConnectionWhere>;
  options14?: Maybe<ProductTypeOptions>;
  where33?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where34?: Maybe<ProductTypeConnectionWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where39?: Maybe<ProductFeaturedImageConnectionWhere>;
  options19?: Maybe<ImageOptions>;
  where40?: Maybe<ImageWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where41?: Maybe<ProductImagesConnectionWhere>;
  options20?: Maybe<UserOptions>;
  where42?: Maybe<UserWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where43?: Maybe<ProductPublishedByConnectionWhere>;
  options21?: Maybe<ProductStatusOptions>;
  where44?: Maybe<ProductStatusWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where45?: Maybe<ProductStatusConnectionWhere>;
  options22?: Maybe<TagOptions>;
  where46?: Maybe<TagWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where47?: Maybe<ProductTagsConnectionWhere>;
  options23?: Maybe<ProductTypeOptions>;
  where48?: Maybe<ProductTypeWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where49?: Maybe<ProductTypeConnectionWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where50?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where51?: Maybe<ImageWhere>;
  options25?: Maybe<ProductOptions>;
  where52?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where53?: Maybe<ImageWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where54?: Maybe<ProductFeaturedImageConnectionWhere>;
  options27?: Maybe<ImageOptions>;
  where55?: Maybe<ImageWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where56?: Maybe<ProductImagesConnectionWhere>;
  options28?: Maybe<UserOptions>;
  where57?: Maybe<UserWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where58?: Maybe<ProductPublishedByConnectionWhere>;
  options29?: Maybe<ProductStatusOptions>;
  where59?: Maybe<ProductStatusWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where60?: Maybe<ProductStatusConnectionWhere>;
  options30?: Maybe<ProductTypeOptions>;
  where61?: Maybe<ProductTypeWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where62?: Maybe<ProductTypeConnectionWhere>;
  options31?: Maybe<ProductOptions>;
  where63?: Maybe<ProductWhere>;
  connect?: Maybe<TagConnectInput>;
  create?: Maybe<TagRelationInput>;
  delete?: Maybe<TagDeleteInput>;
  disconnect?: Maybe<TagDisconnectInput>;
  update?: Maybe<TagUpdateInput>;
  where64?: Maybe<TagWhere>;
}>;


export type UpdateTagsMutation = { __typename?: 'Mutation', updateTags: { __typename?: 'UpdateTagsMutationResponse', info: { __typename?: 'UpdateInfo', bookmark?: Maybe<string>, nodesCreated: number, nodesDeleted: number, relationshipsCreated: number, relationshipsDeleted: number }, tags: Array<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tagsConnection: { __typename?: 'TagTagsConnection', totalCount: number, edges: Array<{ __typename?: 'TagTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } } }>>, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } } }>>, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }> } };

export type UpdateUsersMutationVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where1?: Maybe<ImageFeaturesConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where3?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where4?: Maybe<ImageWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where6?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where7?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where8?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where9?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where10?: Maybe<ImageProductsConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where11?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where12?: Maybe<ProductFeaturedImageConnectionWhere>;
  options3?: Maybe<ImageOptions>;
  where13?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where14?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where15?: Maybe<UserProductsConnectionWhere>;
  options4?: Maybe<UserOptions>;
  where16?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where17?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where18?: Maybe<ProductStatusProductsConnectionWhere>;
  options5?: Maybe<ProductStatusOptions>;
  where19?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where20?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where22?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where23?: Maybe<ProductTypeProductsConnectionWhere>;
  options6?: Maybe<ProductTypeOptions>;
  where24?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where25?: Maybe<ProductTypeConnectionWhere>;
  options7?: Maybe<ProductOptions>;
  where26?: Maybe<ProductWhere>;
  options8?: Maybe<ProductTypeOptions>;
  where27?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where28?: Maybe<ProductTypeConnectionWhere>;
  options9?: Maybe<ProductOptions>;
  where29?: Maybe<ProductWhere>;
  options10?: Maybe<TagOptions>;
  where30?: Maybe<TagWhere>;
  options11?: Maybe<ProductOptions>;
  where31?: Maybe<ProductWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where32?: Maybe<ProductStatusWhere>;
  options13?: Maybe<ProductOptions>;
  where33?: Maybe<ProductWhere>;
  options14?: Maybe<UserOptions>;
  where34?: Maybe<UserWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where39?: Maybe<ProductImagesConnectionWhere>;
  options19?: Maybe<UserOptions>;
  where40?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where41?: Maybe<ProductPublishedByConnectionWhere>;
  options20?: Maybe<ProductStatusOptions>;
  where42?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where43?: Maybe<ProductStatusConnectionWhere>;
  options21?: Maybe<TagOptions>;
  where44?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where45?: Maybe<ProductTagsConnectionWhere>;
  options22?: Maybe<ProductTypeOptions>;
  where46?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where47?: Maybe<ProductTypeConnectionWhere>;
  options23?: Maybe<ProductOptions>;
  where48?: Maybe<ProductWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where49?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ProductOptions>;
  where50?: Maybe<ProductWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where51?: Maybe<ImageProductsConnectionWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where52?: Maybe<ProductFeaturedImageConnectionWhere>;
  options25?: Maybe<ProductOptions>;
  where53?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where54?: Maybe<ImageWhere>;
  options27?: Maybe<ProductOptions>;
  where55?: Maybe<ProductWhere>;
  options28?: Maybe<ImageOptions>;
  where56?: Maybe<ImageWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where57?: Maybe<UserImagesConnectionWhere>;
  options29?: Maybe<ProductOptions>;
  where58?: Maybe<ProductWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where59?: Maybe<UserProductsConnectionWhere>;
  connect?: Maybe<UserConnectInput>;
  create?: Maybe<UserRelationInput>;
  delete?: Maybe<UserDeleteInput>;
  disconnect?: Maybe<UserDisconnectInput>;
  update?: Maybe<UserUpdateInput>;
  where60?: Maybe<UserWhere>;
}>;


export type UpdateUsersMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', info: { __typename?: 'UpdateInfo', bookmark?: Maybe<string>, nodesCreated: number, nodesDeleted: number, relationshipsCreated: number, relationshipsDeleted: number }, users: Array<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string, node: { __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>>, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } } }> } }>> }> }>> }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }> } };

export type ImagesQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where1?: Maybe<ImageFeaturesConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where3?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where4?: Maybe<ImageWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where6?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where7?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where8?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where9?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where10?: Maybe<ImageProductsConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where11?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where12?: Maybe<ProductFeaturedImageConnectionWhere>;
  options3?: Maybe<ImageOptions>;
  where13?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where14?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where15?: Maybe<UserProductsConnectionWhere>;
  options4?: Maybe<UserOptions>;
  where16?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where17?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where18?: Maybe<ProductStatusProductsConnectionWhere>;
  options5?: Maybe<ProductStatusOptions>;
  where19?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where20?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where22?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where23?: Maybe<ProductTypeProductsConnectionWhere>;
  options6?: Maybe<ProductTypeOptions>;
  where24?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where25?: Maybe<ProductTypeConnectionWhere>;
  options7?: Maybe<ProductOptions>;
  where26?: Maybe<ProductWhere>;
  options8?: Maybe<ProductTypeOptions>;
  where27?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where28?: Maybe<ProductTypeConnectionWhere>;
  options9?: Maybe<ProductOptions>;
  where29?: Maybe<ProductWhere>;
  options10?: Maybe<TagOptions>;
  where30?: Maybe<TagWhere>;
  options11?: Maybe<ProductOptions>;
  where31?: Maybe<ProductWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where32?: Maybe<ProductStatusWhere>;
  options13?: Maybe<ProductOptions>;
  where33?: Maybe<ProductWhere>;
  options14?: Maybe<UserOptions>;
  where34?: Maybe<UserWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where39?: Maybe<ProductImagesConnectionWhere>;
  options19?: Maybe<UserOptions>;
  where40?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where41?: Maybe<ProductPublishedByConnectionWhere>;
  options20?: Maybe<ProductStatusOptions>;
  where42?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where43?: Maybe<ProductStatusConnectionWhere>;
  options21?: Maybe<TagOptions>;
  where44?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where45?: Maybe<ProductTagsConnectionWhere>;
  options22?: Maybe<ProductTypeOptions>;
  where46?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where47?: Maybe<ProductTypeConnectionWhere>;
  options23?: Maybe<ProductOptions>;
  where48?: Maybe<ProductWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where49?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ProductOptions>;
  where50?: Maybe<ProductWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where51?: Maybe<ImageProductsConnectionWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where52?: Maybe<ProductFeaturedImageConnectionWhere>;
  options25?: Maybe<ProductOptions>;
  where53?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where54?: Maybe<ImageWhere>;
  options27?: Maybe<ProductOptions>;
  where55?: Maybe<ProductWhere>;
  options28?: Maybe<ImageOptions>;
  where56?: Maybe<ImageWhere>;
}>;


export type ImagesQuery = { __typename?: 'Query', images: Array<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string, node: { __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>>, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } } }> } }>> }> }>> }> };

export type ImagesCountQueryVariables = Exact<{
  where?: Maybe<ImageWhere>;
}>;


export type ImagesCountQuery = { __typename?: 'Query', imagesCount: number };

export type MeQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where1?: Maybe<ImageFeaturesConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where3?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where4?: Maybe<ImageWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where6?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where7?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where8?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where9?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where10?: Maybe<ImageProductsConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where11?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where12?: Maybe<ProductFeaturedImageConnectionWhere>;
  options3?: Maybe<ImageOptions>;
  where13?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where14?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where15?: Maybe<UserProductsConnectionWhere>;
  options4?: Maybe<UserOptions>;
  where16?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where17?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where18?: Maybe<ProductStatusProductsConnectionWhere>;
  options5?: Maybe<ProductStatusOptions>;
  where19?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where20?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where22?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where23?: Maybe<ProductTypeProductsConnectionWhere>;
  options6?: Maybe<ProductTypeOptions>;
  where24?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where25?: Maybe<ProductTypeConnectionWhere>;
  options7?: Maybe<ProductOptions>;
  where26?: Maybe<ProductWhere>;
  options8?: Maybe<ProductTypeOptions>;
  where27?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where28?: Maybe<ProductTypeConnectionWhere>;
  options9?: Maybe<ProductOptions>;
  where29?: Maybe<ProductWhere>;
  options10?: Maybe<TagOptions>;
  where30?: Maybe<TagWhere>;
  options11?: Maybe<ProductOptions>;
  where31?: Maybe<ProductWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where32?: Maybe<ProductStatusWhere>;
  options13?: Maybe<ProductOptions>;
  where33?: Maybe<ProductWhere>;
  options14?: Maybe<UserOptions>;
  where34?: Maybe<UserWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where39?: Maybe<ProductImagesConnectionWhere>;
  options19?: Maybe<UserOptions>;
  where40?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where41?: Maybe<ProductPublishedByConnectionWhere>;
  options20?: Maybe<ProductStatusOptions>;
  where42?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where43?: Maybe<ProductStatusConnectionWhere>;
  options21?: Maybe<TagOptions>;
  where44?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where45?: Maybe<ProductTagsConnectionWhere>;
  options22?: Maybe<ProductTypeOptions>;
  where46?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where47?: Maybe<ProductTypeConnectionWhere>;
  options23?: Maybe<ProductOptions>;
  where48?: Maybe<ProductWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where49?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ProductOptions>;
  where50?: Maybe<ProductWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where51?: Maybe<ImageProductsConnectionWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where52?: Maybe<ProductFeaturedImageConnectionWhere>;
  options25?: Maybe<ProductOptions>;
  where53?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where54?: Maybe<ImageWhere>;
  options27?: Maybe<ProductOptions>;
  where55?: Maybe<ProductWhere>;
  options28?: Maybe<ImageOptions>;
  where56?: Maybe<ImageWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where57?: Maybe<UserImagesConnectionWhere>;
  options29?: Maybe<ProductOptions>;
  where58?: Maybe<ProductWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where59?: Maybe<UserProductsConnectionWhere>;
}>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string, node: { __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>>, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } } }> } }>> }> }>> }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }> };

export type ProductStatusesQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  options32?: Maybe<ProductOptions>;
  where64?: Maybe<ProductWhere>;
  after32?: Maybe<Scalars['String']>;
  first32?: Maybe<Scalars['Int']>;
  sort32?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where65?: Maybe<ProductStatusProductsConnectionWhere>;
  options33?: Maybe<ProductStatusOptions>;
  where66?: Maybe<ProductStatusWhere>;
}>;


export type ProductStatusesQuery = { __typename?: 'Query', productStatuses: Array<{ __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }>>, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }> };

export type ProductStatusesCountQueryVariables = Exact<{
  where?: Maybe<ProductStatusWhere>;
}>;


export type ProductStatusesCountQuery = { __typename?: 'Query', productStatusesCount: number };

export type ProductTypesQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  options32?: Maybe<ProductOptions>;
  where64?: Maybe<ProductWhere>;
  after32?: Maybe<Scalars['String']>;
  first32?: Maybe<Scalars['Int']>;
  sort32?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where65?: Maybe<ProductTypeProductsConnectionWhere>;
  options33?: Maybe<ProductTypeOptions>;
  where66?: Maybe<ProductTypeWhere>;
}>;


export type ProductTypesQuery = { __typename?: 'Query', productTypes: Array<{ __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }>>, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }> };

export type ProductTypesCountQueryVariables = Exact<{
  where?: Maybe<ProductTypeWhere>;
}>;


export type ProductTypesCountQuery = { __typename?: 'Query', productTypesCount: number };

export type ProductsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where?: Maybe<ProductFeaturedImageConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where1?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where2?: Maybe<ImageFeaturesConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where3?: Maybe<ProductImagesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where4?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where5?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where6?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where7?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where8?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where9?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where10?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where11?: Maybe<ProductFeaturedImageConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where12?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where13?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where14?: Maybe<UserProductsConnectionWhere>;
  options3?: Maybe<UserOptions>;
  where15?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where16?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where17?: Maybe<ProductStatusProductsConnectionWhere>;
  options4?: Maybe<ProductStatusOptions>;
  where18?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where19?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where20?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where22?: Maybe<ProductTypeProductsConnectionWhere>;
  options5?: Maybe<ProductTypeOptions>;
  where23?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where24?: Maybe<ProductTypeConnectionWhere>;
  options6?: Maybe<ProductOptions>;
  where25?: Maybe<ProductWhere>;
  options7?: Maybe<ProductTypeOptions>;
  where26?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where27?: Maybe<ProductTypeConnectionWhere>;
  options8?: Maybe<ProductOptions>;
  where28?: Maybe<ProductWhere>;
  options9?: Maybe<TagOptions>;
  where29?: Maybe<TagWhere>;
  options10?: Maybe<ProductOptions>;
  where30?: Maybe<ProductWhere>;
  options11?: Maybe<ProductStatusOptions>;
  where31?: Maybe<ProductStatusWhere>;
  options12?: Maybe<ProductOptions>;
  where32?: Maybe<ProductWhere>;
  options13?: Maybe<UserOptions>;
  where33?: Maybe<UserWhere>;
  options14?: Maybe<ProductOptions>;
  where34?: Maybe<ProductWhere>;
  options15?: Maybe<ImageOptions>;
  where35?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where36?: Maybe<ProductImagesConnectionWhere>;
  options16?: Maybe<UserOptions>;
  where37?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where38?: Maybe<ProductPublishedByConnectionWhere>;
  options17?: Maybe<ProductStatusOptions>;
  where39?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where40?: Maybe<ProductStatusConnectionWhere>;
  options18?: Maybe<TagOptions>;
  where41?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where42?: Maybe<ProductTagsConnectionWhere>;
  options19?: Maybe<ProductTypeOptions>;
  where43?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where44?: Maybe<ProductTypeConnectionWhere>;
  options20?: Maybe<ProductOptions>;
  where45?: Maybe<ProductWhere>;
  options21?: Maybe<ImageOptions>;
  where46?: Maybe<ImageWhere>;
  options22?: Maybe<ProductOptions>;
  where47?: Maybe<ProductWhere>;
  options23?: Maybe<ImageOptions>;
  where48?: Maybe<ImageWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where49?: Maybe<ProductFeaturedImageConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where50?: Maybe<ImageWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where51?: Maybe<ProductImagesConnectionWhere>;
  options25?: Maybe<UserOptions>;
  where52?: Maybe<UserWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where53?: Maybe<ProductPublishedByConnectionWhere>;
  options26?: Maybe<ProductStatusOptions>;
  where54?: Maybe<ProductStatusWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where55?: Maybe<ProductStatusConnectionWhere>;
  options27?: Maybe<TagOptions>;
  where56?: Maybe<TagWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where57?: Maybe<ProductTagsConnectionWhere>;
  options28?: Maybe<ProductTypeOptions>;
  where58?: Maybe<ProductTypeWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where59?: Maybe<ProductTypeConnectionWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where60?: Maybe<ImageFeaturesConnectionWhere>;
  options29?: Maybe<ImageOptions>;
  where61?: Maybe<ImageWhere>;
  options30?: Maybe<ProductOptions>;
  where62?: Maybe<ProductWhere>;
  options31?: Maybe<ImageOptions>;
  where63?: Maybe<ImageWhere>;
  options32?: Maybe<ProductOptions>;
  where64?: Maybe<ProductWhere>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }> }> };

export type ProductsCountQueryVariables = Exact<{
  where?: Maybe<ProductWhere>;
}>;


export type ProductsCountQuery = { __typename?: 'Query', productsCount: number };

export type TagsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where1?: Maybe<ImageWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where3?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where4?: Maybe<ImageFeaturesConnectionWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where6?: Maybe<ImageProductsConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where7?: Maybe<ImageWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where8?: Maybe<UserImagesConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where9?: Maybe<ProductPublishedByConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where10?: Maybe<ProductStatusConnectionWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<TagTagsConnectionSort> | TagTagsConnectionSort>;
  where11?: Maybe<TagTagsConnectionWhere>;
  options2?: Maybe<TagOptions>;
  where12?: Maybe<TagWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where13?: Maybe<ProductTagsConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where14?: Maybe<ProductTypeConnectionWhere>;
  options3?: Maybe<ProductOptions>;
  where15?: Maybe<ProductWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where16?: Maybe<ProductTypeProductsConnectionWhere>;
  options4?: Maybe<ProductTypeOptions>;
  where17?: Maybe<ProductTypeWhere>;
  options5?: Maybe<ProductOptions>;
  where18?: Maybe<ProductWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where19?: Maybe<ProductStatusProductsConnectionWhere>;
  options6?: Maybe<ProductStatusOptions>;
  where20?: Maybe<ProductStatusWhere>;
  options7?: Maybe<ProductOptions>;
  where21?: Maybe<ProductWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where22?: Maybe<UserProductsConnectionWhere>;
  options8?: Maybe<UserOptions>;
  where23?: Maybe<UserWhere>;
  options9?: Maybe<ProductOptions>;
  where24?: Maybe<ProductWhere>;
  options10?: Maybe<ImageOptions>;
  where25?: Maybe<ImageWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where26?: Maybe<ProductImagesConnectionWhere>;
  options11?: Maybe<UserOptions>;
  where27?: Maybe<UserWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where28?: Maybe<ProductPublishedByConnectionWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where29?: Maybe<ProductStatusWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where30?: Maybe<ProductStatusConnectionWhere>;
  options13?: Maybe<TagOptions>;
  where31?: Maybe<TagWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where32?: Maybe<ProductTagsConnectionWhere>;
  options14?: Maybe<ProductTypeOptions>;
  where33?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where34?: Maybe<ProductTypeConnectionWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where39?: Maybe<ProductFeaturedImageConnectionWhere>;
  options19?: Maybe<ImageOptions>;
  where40?: Maybe<ImageWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where41?: Maybe<ProductImagesConnectionWhere>;
  options20?: Maybe<UserOptions>;
  where42?: Maybe<UserWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where43?: Maybe<ProductPublishedByConnectionWhere>;
  options21?: Maybe<ProductStatusOptions>;
  where44?: Maybe<ProductStatusWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where45?: Maybe<ProductStatusConnectionWhere>;
  options22?: Maybe<TagOptions>;
  where46?: Maybe<TagWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where47?: Maybe<ProductTagsConnectionWhere>;
  options23?: Maybe<ProductTypeOptions>;
  where48?: Maybe<ProductTypeWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where49?: Maybe<ProductTypeConnectionWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where50?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ImageOptions>;
  where51?: Maybe<ImageWhere>;
  options25?: Maybe<ProductOptions>;
  where52?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where53?: Maybe<ImageWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where54?: Maybe<ProductFeaturedImageConnectionWhere>;
  options27?: Maybe<ImageOptions>;
  where55?: Maybe<ImageWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where56?: Maybe<ProductImagesConnectionWhere>;
  options28?: Maybe<UserOptions>;
  where57?: Maybe<UserWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where58?: Maybe<ProductPublishedByConnectionWhere>;
  options29?: Maybe<ProductStatusOptions>;
  where59?: Maybe<ProductStatusWhere>;
  after30?: Maybe<Scalars['String']>;
  first30?: Maybe<Scalars['Int']>;
  sort30?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where60?: Maybe<ProductStatusConnectionWhere>;
  options30?: Maybe<ProductTypeOptions>;
  where61?: Maybe<ProductTypeWhere>;
  after31?: Maybe<Scalars['String']>;
  first31?: Maybe<Scalars['Int']>;
  sort31?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where62?: Maybe<ProductTypeConnectionWhere>;
  options31?: Maybe<ProductOptions>;
  where63?: Maybe<ProductWhere>;
  options32?: Maybe<TagOptions>;
  where64?: Maybe<TagWhere>;
}>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string, node: { __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tagsConnection: { __typename?: 'TagTagsConnection', totalCount: number, edges: Array<{ __typename?: 'TagTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } } }>>, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } } }>>, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } } }> } }> }>> }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }> };

export type TagsCountQueryVariables = Exact<{
  where?: Maybe<TagWhere>;
}>;


export type TagsCountQuery = { __typename?: 'Query', tagsCount: number };

export type UsersQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where?: Maybe<ImageFeaturesConnectionWhere>;
  after1?: Maybe<Scalars['String']>;
  first1?: Maybe<Scalars['Int']>;
  sort1?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where1?: Maybe<ImageFeaturesConnectionWhere>;
  after2?: Maybe<Scalars['String']>;
  first2?: Maybe<Scalars['Int']>;
  sort2?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where2?: Maybe<ProductFeaturedImageConnectionWhere>;
  after3?: Maybe<Scalars['String']>;
  first3?: Maybe<Scalars['Int']>;
  sort3?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where3?: Maybe<ImageProductsConnectionWhere>;
  options?: Maybe<ImageOptions>;
  where4?: Maybe<ImageWhere>;
  after4?: Maybe<Scalars['String']>;
  first4?: Maybe<Scalars['Int']>;
  sort4?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where5?: Maybe<ProductImagesConnectionWhere>;
  options1?: Maybe<ImageOptions>;
  where6?: Maybe<ImageWhere>;
  after5?: Maybe<Scalars['String']>;
  first5?: Maybe<Scalars['Int']>;
  sort5?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where7?: Maybe<UserImagesConnectionWhere>;
  after6?: Maybe<Scalars['String']>;
  first6?: Maybe<Scalars['Int']>;
  sort6?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where8?: Maybe<ProductPublishedByConnectionWhere>;
  after7?: Maybe<Scalars['String']>;
  first7?: Maybe<Scalars['Int']>;
  sort7?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where9?: Maybe<ProductStatusConnectionWhere>;
  after8?: Maybe<Scalars['String']>;
  first8?: Maybe<Scalars['Int']>;
  sort8?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where10?: Maybe<ImageProductsConnectionWhere>;
  options2?: Maybe<ImageOptions>;
  where11?: Maybe<ImageWhere>;
  after9?: Maybe<Scalars['String']>;
  first9?: Maybe<Scalars['Int']>;
  sort9?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where12?: Maybe<ProductFeaturedImageConnectionWhere>;
  options3?: Maybe<ImageOptions>;
  where13?: Maybe<ImageWhere>;
  after10?: Maybe<Scalars['String']>;
  first10?: Maybe<Scalars['Int']>;
  sort10?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where14?: Maybe<ProductImagesConnectionWhere>;
  after11?: Maybe<Scalars['String']>;
  first11?: Maybe<Scalars['Int']>;
  sort11?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where15?: Maybe<UserProductsConnectionWhere>;
  options4?: Maybe<UserOptions>;
  where16?: Maybe<UserWhere>;
  after12?: Maybe<Scalars['String']>;
  first12?: Maybe<Scalars['Int']>;
  sort12?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where17?: Maybe<ProductPublishedByConnectionWhere>;
  after13?: Maybe<Scalars['String']>;
  first13?: Maybe<Scalars['Int']>;
  sort13?: Maybe<Array<ProductStatusProductsConnectionSort> | ProductStatusProductsConnectionSort>;
  where18?: Maybe<ProductStatusProductsConnectionWhere>;
  options5?: Maybe<ProductStatusOptions>;
  where19?: Maybe<ProductStatusWhere>;
  after14?: Maybe<Scalars['String']>;
  first14?: Maybe<Scalars['Int']>;
  sort14?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where20?: Maybe<ProductStatusConnectionWhere>;
  after15?: Maybe<Scalars['String']>;
  first15?: Maybe<Scalars['Int']>;
  sort15?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where21?: Maybe<ProductTagsConnectionWhere>;
  after16?: Maybe<Scalars['String']>;
  first16?: Maybe<Scalars['Int']>;
  sort16?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where22?: Maybe<ProductTagsConnectionWhere>;
  after17?: Maybe<Scalars['String']>;
  first17?: Maybe<Scalars['Int']>;
  sort17?: Maybe<Array<ProductTypeProductsConnectionSort> | ProductTypeProductsConnectionSort>;
  where23?: Maybe<ProductTypeProductsConnectionWhere>;
  options6?: Maybe<ProductTypeOptions>;
  where24?: Maybe<ProductTypeWhere>;
  after18?: Maybe<Scalars['String']>;
  first18?: Maybe<Scalars['Int']>;
  sort18?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where25?: Maybe<ProductTypeConnectionWhere>;
  options7?: Maybe<ProductOptions>;
  where26?: Maybe<ProductWhere>;
  options8?: Maybe<ProductTypeOptions>;
  where27?: Maybe<ProductTypeWhere>;
  after19?: Maybe<Scalars['String']>;
  first19?: Maybe<Scalars['Int']>;
  sort19?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where28?: Maybe<ProductTypeConnectionWhere>;
  options9?: Maybe<ProductOptions>;
  where29?: Maybe<ProductWhere>;
  options10?: Maybe<TagOptions>;
  where30?: Maybe<TagWhere>;
  options11?: Maybe<ProductOptions>;
  where31?: Maybe<ProductWhere>;
  options12?: Maybe<ProductStatusOptions>;
  where32?: Maybe<ProductStatusWhere>;
  options13?: Maybe<ProductOptions>;
  where33?: Maybe<ProductWhere>;
  options14?: Maybe<UserOptions>;
  where34?: Maybe<UserWhere>;
  options15?: Maybe<ProductOptions>;
  where35?: Maybe<ProductWhere>;
  options16?: Maybe<ImageOptions>;
  where36?: Maybe<ImageWhere>;
  options17?: Maybe<ProductOptions>;
  where37?: Maybe<ProductWhere>;
  options18?: Maybe<ImageOptions>;
  where38?: Maybe<ImageWhere>;
  after20?: Maybe<Scalars['String']>;
  first20?: Maybe<Scalars['Int']>;
  sort20?: Maybe<Array<ProductImagesConnectionSort> | ProductImagesConnectionSort>;
  where39?: Maybe<ProductImagesConnectionWhere>;
  options19?: Maybe<UserOptions>;
  where40?: Maybe<UserWhere>;
  after21?: Maybe<Scalars['String']>;
  first21?: Maybe<Scalars['Int']>;
  sort21?: Maybe<Array<ProductPublishedByConnectionSort> | ProductPublishedByConnectionSort>;
  where41?: Maybe<ProductPublishedByConnectionWhere>;
  options20?: Maybe<ProductStatusOptions>;
  where42?: Maybe<ProductStatusWhere>;
  after22?: Maybe<Scalars['String']>;
  first22?: Maybe<Scalars['Int']>;
  sort22?: Maybe<Array<ProductStatusConnectionSort> | ProductStatusConnectionSort>;
  where43?: Maybe<ProductStatusConnectionWhere>;
  options21?: Maybe<TagOptions>;
  where44?: Maybe<TagWhere>;
  after23?: Maybe<Scalars['String']>;
  first23?: Maybe<Scalars['Int']>;
  sort23?: Maybe<Array<ProductTagsConnectionSort> | ProductTagsConnectionSort>;
  where45?: Maybe<ProductTagsConnectionWhere>;
  options22?: Maybe<ProductTypeOptions>;
  where46?: Maybe<ProductTypeWhere>;
  after24?: Maybe<Scalars['String']>;
  first24?: Maybe<Scalars['Int']>;
  sort24?: Maybe<Array<ProductTypeConnectionSort> | ProductTypeConnectionSort>;
  where47?: Maybe<ProductTypeConnectionWhere>;
  options23?: Maybe<ProductOptions>;
  where48?: Maybe<ProductWhere>;
  after25?: Maybe<Scalars['String']>;
  first25?: Maybe<Scalars['Int']>;
  sort25?: Maybe<Array<ImageFeaturesConnectionSort> | ImageFeaturesConnectionSort>;
  where49?: Maybe<ImageFeaturesConnectionWhere>;
  options24?: Maybe<ProductOptions>;
  where50?: Maybe<ProductWhere>;
  after26?: Maybe<Scalars['String']>;
  first26?: Maybe<Scalars['Int']>;
  sort26?: Maybe<Array<ImageProductsConnectionSort> | ImageProductsConnectionSort>;
  where51?: Maybe<ImageProductsConnectionWhere>;
  after27?: Maybe<Scalars['String']>;
  first27?: Maybe<Scalars['Int']>;
  sort27?: Maybe<Array<ProductFeaturedImageConnectionSort> | ProductFeaturedImageConnectionSort>;
  where52?: Maybe<ProductFeaturedImageConnectionWhere>;
  options25?: Maybe<ProductOptions>;
  where53?: Maybe<ProductWhere>;
  options26?: Maybe<ImageOptions>;
  where54?: Maybe<ImageWhere>;
  options27?: Maybe<ProductOptions>;
  where55?: Maybe<ProductWhere>;
  options28?: Maybe<ImageOptions>;
  where56?: Maybe<ImageWhere>;
  after28?: Maybe<Scalars['String']>;
  first28?: Maybe<Scalars['Int']>;
  sort28?: Maybe<Array<UserImagesConnectionSort> | UserImagesConnectionSort>;
  where57?: Maybe<UserImagesConnectionWhere>;
  options29?: Maybe<ProductOptions>;
  where58?: Maybe<ProductWhere>;
  after29?: Maybe<Scalars['String']>;
  first29?: Maybe<Scalars['Int']>;
  sort29?: Maybe<Array<UserProductsConnectionSort> | UserProductsConnectionSort>;
  where59?: Maybe<UserProductsConnectionWhere>;
  options30?: Maybe<UserOptions>;
  where60?: Maybe<UserWhere>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, edges: Array<{ __typename?: 'ProductFeaturedImageRelationship', cursor: string, node: { __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, features: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number, edges: Array<{ __typename?: 'ImageFeaturesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number, edges: Array<{ __typename?: 'ImageProductsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number, edges: Array<{ __typename?: 'ProductImagesRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number, edges: Array<{ __typename?: 'ProductPublishedByRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number, edges: Array<{ __typename?: 'ProductStatusRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, tags: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, featuredImage?: Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } }>, featuredImageConnection: { __typename?: 'ProductFeaturedImageConnection', totalCount: number }, images: Array<Maybe<{ __typename?: 'Image', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductStatusProductsConnection', totalCount: number } }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTagsRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any, productsConnection: { __typename?: 'ProductTypeProductsConnection', totalCount: number } }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number, edges: Array<{ __typename?: 'ProductTypeRelationship', cursor: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } }>> }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>> }>> }>> } }>> }> }>> }> }>> }>>, imagesConnection: { __typename?: 'ProductImagesConnection', totalCount: number }, publishedBy?: Maybe<{ __typename?: 'User', createdAt: any, deletedAt?: Maybe<any>, id: string, name: string, updatedAt: any, username: string }>, publishedByConnection: { __typename?: 'ProductPublishedByConnection', totalCount: number }, status: { __typename?: 'ProductStatus', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, statusConnection: { __typename?: 'ProductStatusConnection', totalCount: number }, tags: Array<Maybe<{ __typename?: 'Tag', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }>>, tagsConnection: { __typename?: 'ProductTagsConnection', totalCount: number }, type: { __typename?: 'ProductType', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, name: string, updatedAt: any }, typeConnection: { __typename?: 'ProductTypeConnection', totalCount: number } }>>, featuresConnection: { __typename?: 'ImageFeaturesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'ImageProductsConnection', totalCount: number } } }> } }>> }> }>> }>>, imagesConnection: { __typename?: 'UserImagesConnection', totalCount: number }, products: Array<Maybe<{ __typename?: 'Product', createdAt: any, deletedAt?: Maybe<any>, description: string, id: string, inventory: number, name: string, publishedAt?: Maybe<any>, updatedAt: any }>>, productsConnection: { __typename?: 'UserProductsConnection', totalCount: number } }> };

export type UsersCountQueryVariables = Exact<{
  where?: Maybe<UserWhere>;
}>;


export type UsersCountQuery = { __typename?: 'Query', usersCount: number };


export const CreateImagesDocument = gql`
    mutation createImages($after: String, $first: Int, $sort: [ImageFeaturesConnectionSort!], $where: ImageFeaturesConnectionWhere, $after1: String, $first1: Int, $sort1: [ImageFeaturesConnectionSort!], $where1: ImageFeaturesConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageProductsConnectionSort!], $where3: ImageProductsConnectionWhere, $options: ImageOptions, $where4: ImageWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $options1: ImageOptions, $where6: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where7: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where8: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where9: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where10: ImageProductsConnectionWhere, $options2: ImageOptions, $where11: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where12: ProductFeaturedImageConnectionWhere, $options3: ImageOptions, $where13: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where14: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where15: UserProductsConnectionWhere, $options4: UserOptions, $where16: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where17: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where18: ProductStatusProductsConnectionWhere, $options5: ProductStatusOptions, $where19: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where20: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where22: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where23: ProductTypeProductsConnectionWhere, $options6: ProductTypeOptions, $where24: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where25: ProductTypeConnectionWhere, $options7: ProductOptions, $where26: ProductWhere, $options8: ProductTypeOptions, $where27: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where28: ProductTypeConnectionWhere, $options9: ProductOptions, $where29: ProductWhere, $options10: TagOptions, $where30: TagWhere, $options11: ProductOptions, $where31: ProductWhere, $options12: ProductStatusOptions, $where32: ProductStatusWhere, $options13: ProductOptions, $where33: ProductWhere, $options14: UserOptions, $where34: UserWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where39: ProductImagesConnectionWhere, $options19: UserOptions, $where40: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where41: ProductPublishedByConnectionWhere, $options20: ProductStatusOptions, $where42: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where43: ProductStatusConnectionWhere, $options21: TagOptions, $where44: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where45: ProductTagsConnectionWhere, $options22: ProductTypeOptions, $where46: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where47: ProductTypeConnectionWhere, $options23: ProductOptions, $where48: ProductWhere, $after25: String, $first25: Int, $sort25: [ImageFeaturesConnectionSort!], $where49: ImageFeaturesConnectionWhere, $options24: ProductOptions, $where50: ProductWhere, $after26: String, $first26: Int, $sort26: [ImageProductsConnectionSort!], $where51: ImageProductsConnectionWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where52: ProductFeaturedImageConnectionWhere, $options25: ProductOptions, $where53: ProductWhere, $options26: ImageOptions, $where54: ImageWhere, $options27: ProductOptions, $where55: ProductWhere, $input: [ImageCreateInput!]!) {
  createImages(input: $input) {
    images {
      createdAt
      deletedAt
      description
      features(options: $options27, where: $where55) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options26, where: $where54) {
          createdAt
          deletedAt
          description
          features(options: $options25, where: $where53) {
            createdAt
            deletedAt
            description
            featuredImageConnection(
              after: $after27
              first: $first27
              sort: $sort27
              where: $where52
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  features(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    images(options: $options18, where: $where38) {
                      createdAt
                      deletedAt
                      description
                      featuresConnection(after: $after, first: $first, sort: $sort, where: $where) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      name
                      products(options: $options17, where: $where37) {
                        createdAt
                        deletedAt
                        description
                        featuredImage(options: $options16, where: $where36) {
                          createdAt
                          deletedAt
                          description
                          featuresConnection(after: $after1, first: $first1, sort: $sort1, where: $where1) {
                            totalCount
                          }
                          id
                          name
                          products(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after2
                              first: $first2
                              sort: $sort2
                              where: $where2
                            ) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            images(options: $options, where: $where4) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              productsConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              updatedAt
                            }
                            imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                              edges {
                                cursor
                              }
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              id
                              images(options: $options1, where: $where6) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                updatedAt
                              }
                              imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where7) {
                                totalCount
                              }
                              name
                              products(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                description
                                id
                                inventory
                                name
                                publishedAt
                                publishedByConnection(
                                  after: $after6
                                  first: $first6
                                  sort: $sort6
                                  where: $where8
                                ) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                status(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  products(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where9) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    tags(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        featuredImage(options: $options2, where: $where11) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after8
                                            first: $first8
                                            sort: $sort8
                                            where: $where10
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        featuredImageConnection(
                                          after: $after9
                                          first: $first9
                                          sort: $sort9
                                          where: $where12
                                        ) {
                                          totalCount
                                        }
                                        id
                                        images(options: $options3, where: $where13) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          updatedAt
                                        }
                                        imagesConnection(
                                          after: $after10
                                          first: $first10
                                          sort: $sort10
                                          where: $where14
                                        ) {
                                          totalCount
                                        }
                                        inventory
                                        name
                                        publishedAt
                                        publishedBy(options: $options4, where: $where16) {
                                          createdAt
                                          deletedAt
                                          id
                                          name
                                          productsConnection(
                                            after: $after11
                                            first: $first11
                                            sort: $sort11
                                            where: $where15
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                          username
                                        }
                                        publishedByConnection(
                                          after: $after12
                                          first: $first12
                                          sort: $sort12
                                          where: $where17
                                        ) {
                                          totalCount
                                        }
                                        status(options: $options5, where: $where19) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after13
                                            first: $first13
                                            sort: $sort13
                                            where: $where18
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        statusConnection(
                                          after: $after14
                                          first: $first14
                                          sort: $sort14
                                          where: $where20
                                        ) {
                                          totalCount
                                        }
                                        tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where21) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        type(options: $options8, where: $where27) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          products(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            inventory
                                            name
                                            publishedAt
                                            tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where22) {
                                              totalCount
                                            }
                                            type(options: $options6, where: $where24) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after17
                                                first: $first17
                                                sort: $sort17
                                                where: $where23
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where25) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where28) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                              }
                              updatedAt
                              username
                            }
                            updatedAt
                          }
                          updatedAt
                        }
                        id
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    imagesConnection(
                      after: $after20
                      first: $first20
                      sort: $sort20
                      where: $where39
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options19, where: $where40) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after21
                      first: $first21
                      sort: $sort21
                      where: $where41
                    ) {
                      totalCount
                    }
                    status(options: $options20, where: $where42) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after22
                      first: $first22
                      sort: $sort22
                      where: $where43
                    ) {
                      totalCount
                    }
                    tags(options: $options21, where: $where44) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where45) {
                      totalCount
                    }
                    type(options: $options22, where: $where46) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                      totalCount
                    }
                    updatedAt
                  }
                  featuresConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  name
                  products(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    inventory
                    name
                    publishedAt
                    updatedAt
                  }
                  productsConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      id
      name
      updatedAt
    }
    info {
      bookmark
      nodesCreated
      relationshipsCreated
    }
  }
}
    `;
export type CreateImagesMutationFn = Apollo.MutationFunction<CreateImagesMutation, CreateImagesMutationVariables>;
export type CreateImagesMutationResult = Apollo.MutationResult<CreateImagesMutation>;
export type CreateImagesMutationOptions = Apollo.BaseMutationOptions<CreateImagesMutation, CreateImagesMutationVariables>;
export const CreateProductStatusesDocument = gql`
    mutation createProductStatuses($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $options32: ProductOptions, $where64: ProductWhere, $after32: String, $first32: Int, $sort32: [ProductStatusProductsConnectionSort!], $where65: ProductStatusProductsConnectionWhere, $input: [ProductStatusCreateInput!]!) {
  createProductStatuses(input: $input) {
    info {
      bookmark
      nodesCreated
      relationshipsCreated
    }
    productStatuses {
      createdAt
      deletedAt
      description
      id
      name
      products(options: $options32, where: $where64) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options31, where: $where63) {
          createdAt
          deletedAt
          description
          features(options: $options30, where: $where62) {
            createdAt
            deletedAt
            description
            featuredImage(options: $options29, where: $where61) {
              createdAt
              deletedAt
              description
              featuresConnection(
                after: $after31
                first: $first31
                sort: $sort31
                where: $where60
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    featuredImage(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      products(options: $options22, where: $where47) {
                        createdAt
                        deletedAt
                        description
                        featuredImageConnection(
                          after: $after
                          first: $first
                          sort: $sort
                          where: $where
                        ) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        images(options: $options21, where: $where46) {
                          createdAt
                          deletedAt
                          description
                          features(options: $options20, where: $where45) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after1
                              first: $first1
                              sort: $sort1
                              where: $where1
                            ) {
                              totalCount
                            }
                            id
                            images(options: $options15, where: $where35) {
                              createdAt
                              deletedAt
                              description
                              featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              name
                              products(options: $options14, where: $where34) {
                                createdAt
                                deletedAt
                                description
                                id
                                imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                inventory
                                name
                                publishedAt
                                publishedBy(options: $options13, where: $where33) {
                                  createdAt
                                  deletedAt
                                  id
                                  images(options: $options, where: $where5) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    updatedAt
                                  }
                                  imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                    totalCount
                                  }
                                  name
                                  products(options: $options12, where: $where32) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    publishedByConnection(
                                      after: $after6
                                      first: $first6
                                      sort: $sort6
                                      where: $where7
                                    ) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    status(options: $options11, where: $where31) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      products(options: $options10, where: $where30) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        inventory
                                        name
                                        publishedAt
                                        statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        tags(options: $options9, where: $where29) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          tags(options: $options8, where: $where28) {
                                            createdAt
                                            deletedAt
                                            description
                                            featuredImage(options: $options1, where: $where10) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            featuredImageConnection(
                                              after: $after9
                                              first: $first9
                                              sort: $sort9
                                              where: $where11
                                            ) {
                                              totalCount
                                            }
                                            id
                                            images(options: $options2, where: $where12) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              updatedAt
                                            }
                                            imagesConnection(
                                              after: $after10
                                              first: $first10
                                              sort: $sort10
                                              where: $where13
                                            ) {
                                              totalCount
                                            }
                                            inventory
                                            name
                                            publishedAt
                                            publishedBy(options: $options3, where: $where15) {
                                              createdAt
                                              deletedAt
                                              id
                                              name
                                              productsConnection(
                                                after: $after11
                                                first: $first11
                                                sort: $sort11
                                                where: $where14
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                              username
                                            }
                                            publishedByConnection(
                                              after: $after12
                                              first: $first12
                                              sort: $sort12
                                              where: $where16
                                            ) {
                                              totalCount
                                            }
                                            status(options: $options4, where: $where18) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after13
                                                first: $first13
                                                sort: $sort13
                                                where: $where17
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            statusConnection(
                                              after: $after14
                                              first: $first14
                                              sort: $sort14
                                              where: $where19
                                            ) {
                                              totalCount
                                            }
                                            tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            type(options: $options7, where: $where26) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              products(options: $options6, where: $where25) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                inventory
                                                name
                                                publishedAt
                                                tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                  totalCount
                                                }
                                                type(options: $options5, where: $where23) {
                                                  createdAt
                                                  deletedAt
                                                  description
                                                  id
                                                  name
                                                  productsConnection(
                                                    after: $after17
                                                    first: $first17
                                                    sort: $sort17
                                                    where: $where22
                                                  ) {
                                                    totalCount
                                                  }
                                                  updatedAt
                                                }
                                                typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                  edges {
                                                    cursor
                                                  }
                                                  pageInfo {
                                                    endCursor
                                                    hasNextPage
                                                    hasPreviousPage
                                                    startCursor
                                                  }
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                  username
                                }
                                updatedAt
                              }
                              updatedAt
                            }
                            imagesConnection(
                              after: $after20
                              first: $first20
                              sort: $sort20
                              where: $where36
                            ) {
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options16, where: $where37) {
                              createdAt
                              deletedAt
                              id
                              name
                              updatedAt
                              username
                            }
                            publishedByConnection(
                              after: $after21
                              first: $first21
                              sort: $sort21
                              where: $where38
                            ) {
                              totalCount
                            }
                            status(options: $options17, where: $where39) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            statusConnection(
                              after: $after22
                              first: $first22
                              sort: $sort22
                              where: $where40
                            ) {
                              totalCount
                            }
                            tags(options: $options18, where: $where41) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                              totalCount
                            }
                            type(options: $options19, where: $where43) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                              totalCount
                            }
                            updatedAt
                          }
                          id
                          name
                          updatedAt
                        }
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    featuredImageConnection(
                      after: $after25
                      first: $first25
                      sort: $sort25
                      where: $where49
                    ) {
                      totalCount
                    }
                    id
                    images(options: $options24, where: $where50) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    imagesConnection(
                      after: $after26
                      first: $first26
                      sort: $sort26
                      where: $where51
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options25, where: $where52) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after27
                      first: $first27
                      sort: $sort27
                      where: $where53
                    ) {
                      totalCount
                    }
                    status(options: $options26, where: $where54) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after28
                      first: $first28
                      sort: $sort28
                      where: $where55
                    ) {
                      totalCount
                    }
                    tags(options: $options27, where: $where56) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                      totalCount
                    }
                    type(options: $options28, where: $where58) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              name
              updatedAt
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      productsConnection(
        after: $after32
        first: $first32
        sort: $sort32
        where: $where65
      ) {
        totalCount
      }
      updatedAt
    }
  }
}
    `;
export type CreateProductStatusesMutationFn = Apollo.MutationFunction<CreateProductStatusesMutation, CreateProductStatusesMutationVariables>;
export type CreateProductStatusesMutationResult = Apollo.MutationResult<CreateProductStatusesMutation>;
export type CreateProductStatusesMutationOptions = Apollo.BaseMutationOptions<CreateProductStatusesMutation, CreateProductStatusesMutationVariables>;
export const CreateProductTypesDocument = gql`
    mutation createProductTypes($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $options32: ProductOptions, $where64: ProductWhere, $after32: String, $first32: Int, $sort32: [ProductTypeProductsConnectionSort!], $where65: ProductTypeProductsConnectionWhere, $input: [ProductTypeCreateInput!]!) {
  createProductTypes(input: $input) {
    info {
      bookmark
      nodesCreated
      relationshipsCreated
    }
    productTypes {
      createdAt
      deletedAt
      description
      id
      name
      products(options: $options32, where: $where64) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options31, where: $where63) {
          createdAt
          deletedAt
          description
          features(options: $options30, where: $where62) {
            createdAt
            deletedAt
            description
            featuredImage(options: $options29, where: $where61) {
              createdAt
              deletedAt
              description
              featuresConnection(
                after: $after31
                first: $first31
                sort: $sort31
                where: $where60
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    featuredImage(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      products(options: $options22, where: $where47) {
                        createdAt
                        deletedAt
                        description
                        featuredImageConnection(
                          after: $after
                          first: $first
                          sort: $sort
                          where: $where
                        ) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        images(options: $options21, where: $where46) {
                          createdAt
                          deletedAt
                          description
                          features(options: $options20, where: $where45) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after1
                              first: $first1
                              sort: $sort1
                              where: $where1
                            ) {
                              totalCount
                            }
                            id
                            images(options: $options15, where: $where35) {
                              createdAt
                              deletedAt
                              description
                              featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              name
                              products(options: $options14, where: $where34) {
                                createdAt
                                deletedAt
                                description
                                id
                                imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                inventory
                                name
                                publishedAt
                                publishedBy(options: $options13, where: $where33) {
                                  createdAt
                                  deletedAt
                                  id
                                  images(options: $options, where: $where5) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    updatedAt
                                  }
                                  imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                    totalCount
                                  }
                                  name
                                  products(options: $options12, where: $where32) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    publishedByConnection(
                                      after: $after6
                                      first: $first6
                                      sort: $sort6
                                      where: $where7
                                    ) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    status(options: $options11, where: $where31) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      products(options: $options10, where: $where30) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        inventory
                                        name
                                        publishedAt
                                        statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        tags(options: $options9, where: $where29) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          tags(options: $options8, where: $where28) {
                                            createdAt
                                            deletedAt
                                            description
                                            featuredImage(options: $options1, where: $where10) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            featuredImageConnection(
                                              after: $after9
                                              first: $first9
                                              sort: $sort9
                                              where: $where11
                                            ) {
                                              totalCount
                                            }
                                            id
                                            images(options: $options2, where: $where12) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              updatedAt
                                            }
                                            imagesConnection(
                                              after: $after10
                                              first: $first10
                                              sort: $sort10
                                              where: $where13
                                            ) {
                                              totalCount
                                            }
                                            inventory
                                            name
                                            publishedAt
                                            publishedBy(options: $options3, where: $where15) {
                                              createdAt
                                              deletedAt
                                              id
                                              name
                                              productsConnection(
                                                after: $after11
                                                first: $first11
                                                sort: $sort11
                                                where: $where14
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                              username
                                            }
                                            publishedByConnection(
                                              after: $after12
                                              first: $first12
                                              sort: $sort12
                                              where: $where16
                                            ) {
                                              totalCount
                                            }
                                            status(options: $options4, where: $where18) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after13
                                                first: $first13
                                                sort: $sort13
                                                where: $where17
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            statusConnection(
                                              after: $after14
                                              first: $first14
                                              sort: $sort14
                                              where: $where19
                                            ) {
                                              totalCount
                                            }
                                            tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            type(options: $options7, where: $where26) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              products(options: $options6, where: $where25) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                inventory
                                                name
                                                publishedAt
                                                tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                  totalCount
                                                }
                                                type(options: $options5, where: $where23) {
                                                  createdAt
                                                  deletedAt
                                                  description
                                                  id
                                                  name
                                                  productsConnection(
                                                    after: $after17
                                                    first: $first17
                                                    sort: $sort17
                                                    where: $where22
                                                  ) {
                                                    totalCount
                                                  }
                                                  updatedAt
                                                }
                                                typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                  edges {
                                                    cursor
                                                  }
                                                  pageInfo {
                                                    endCursor
                                                    hasNextPage
                                                    hasPreviousPage
                                                    startCursor
                                                  }
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                  username
                                }
                                updatedAt
                              }
                              updatedAt
                            }
                            imagesConnection(
                              after: $after20
                              first: $first20
                              sort: $sort20
                              where: $where36
                            ) {
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options16, where: $where37) {
                              createdAt
                              deletedAt
                              id
                              name
                              updatedAt
                              username
                            }
                            publishedByConnection(
                              after: $after21
                              first: $first21
                              sort: $sort21
                              where: $where38
                            ) {
                              totalCount
                            }
                            status(options: $options17, where: $where39) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            statusConnection(
                              after: $after22
                              first: $first22
                              sort: $sort22
                              where: $where40
                            ) {
                              totalCount
                            }
                            tags(options: $options18, where: $where41) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                              totalCount
                            }
                            type(options: $options19, where: $where43) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                              totalCount
                            }
                            updatedAt
                          }
                          id
                          name
                          updatedAt
                        }
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    featuredImageConnection(
                      after: $after25
                      first: $first25
                      sort: $sort25
                      where: $where49
                    ) {
                      totalCount
                    }
                    id
                    images(options: $options24, where: $where50) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    imagesConnection(
                      after: $after26
                      first: $first26
                      sort: $sort26
                      where: $where51
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options25, where: $where52) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after27
                      first: $first27
                      sort: $sort27
                      where: $where53
                    ) {
                      totalCount
                    }
                    status(options: $options26, where: $where54) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after28
                      first: $first28
                      sort: $sort28
                      where: $where55
                    ) {
                      totalCount
                    }
                    tags(options: $options27, where: $where56) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                      totalCount
                    }
                    type(options: $options28, where: $where58) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              name
              updatedAt
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      productsConnection(
        after: $after32
        first: $first32
        sort: $sort32
        where: $where65
      ) {
        totalCount
      }
      updatedAt
    }
  }
}
    `;
export type CreateProductTypesMutationFn = Apollo.MutationFunction<CreateProductTypesMutation, CreateProductTypesMutationVariables>;
export type CreateProductTypesMutationResult = Apollo.MutationResult<CreateProductTypesMutation>;
export type CreateProductTypesMutationOptions = Apollo.BaseMutationOptions<CreateProductTypesMutation, CreateProductTypesMutationVariables>;
export const CreateProductsDocument = gql`
    mutation createProducts($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $input: [ProductCreateInput!]!) {
  createProducts(input: $input) {
    info {
      bookmark
      nodesCreated
      relationshipsCreated
    }
    products {
      createdAt
      deletedAt
      description
      featuredImage(options: $options31, where: $where63) {
        createdAt
        deletedAt
        description
        features(options: $options30, where: $where62) {
          createdAt
          deletedAt
          description
          featuredImage(options: $options29, where: $where61) {
            createdAt
            deletedAt
            description
            featuresConnection(
              after: $after31
              first: $first31
              sort: $sort31
              where: $where60
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  featuredImage(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    products(options: $options22, where: $where47) {
                      createdAt
                      deletedAt
                      description
                      featuredImageConnection(
                        after: $after
                        first: $first
                        sort: $sort
                        where: $where
                      ) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      images(options: $options21, where: $where46) {
                        createdAt
                        deletedAt
                        description
                        features(options: $options20, where: $where45) {
                          createdAt
                          deletedAt
                          description
                          featuredImageConnection(
                            after: $after1
                            first: $first1
                            sort: $sort1
                            where: $where1
                          ) {
                            totalCount
                          }
                          id
                          images(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            name
                            products(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              description
                              id
                              imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              inventory
                              name
                              publishedAt
                              publishedBy(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                id
                                images(options: $options, where: $where5) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  updatedAt
                                }
                                imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                  totalCount
                                }
                                name
                                products(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  publishedByConnection(
                                    after: $after6
                                    first: $first6
                                    sort: $sort6
                                    where: $where7
                                  ) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  status(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    products(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      inventory
                                      name
                                      publishedAt
                                      statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        tags(options: $options8, where: $where28) {
                                          createdAt
                                          deletedAt
                                          description
                                          featuredImage(options: $options1, where: $where10) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          featuredImageConnection(
                                            after: $after9
                                            first: $first9
                                            sort: $sort9
                                            where: $where11
                                          ) {
                                            totalCount
                                          }
                                          id
                                          images(options: $options2, where: $where12) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            updatedAt
                                          }
                                          imagesConnection(
                                            after: $after10
                                            first: $first10
                                            sort: $sort10
                                            where: $where13
                                          ) {
                                            totalCount
                                          }
                                          inventory
                                          name
                                          publishedAt
                                          publishedBy(options: $options3, where: $where15) {
                                            createdAt
                                            deletedAt
                                            id
                                            name
                                            productsConnection(
                                              after: $after11
                                              first: $first11
                                              sort: $sort11
                                              where: $where14
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                            username
                                          }
                                          publishedByConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where16
                                          ) {
                                            totalCount
                                          }
                                          status(options: $options4, where: $where18) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after13
                                              first: $first13
                                              sort: $sort13
                                              where: $where17
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          statusConnection(
                                            after: $after14
                                            first: $first14
                                            sort: $sort14
                                            where: $where19
                                          ) {
                                            totalCount
                                          }
                                          tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          type(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            products(options: $options6, where: $where25) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              inventory
                                              name
                                              publishedAt
                                              tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                totalCount
                                              }
                                              type(options: $options5, where: $where23) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                name
                                                productsConnection(
                                                  after: $after17
                                                  first: $first17
                                                  sort: $sort17
                                                  where: $where22
                                                ) {
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                edges {
                                                  cursor
                                                }
                                                pageInfo {
                                                  endCursor
                                                  hasNextPage
                                                  hasPreviousPage
                                                  startCursor
                                                }
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            updatedAt
                                          }
                                          typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                                username
                              }
                              updatedAt
                            }
                            updatedAt
                          }
                          imagesConnection(
                            after: $after20
                            first: $first20
                            sort: $sort20
                            where: $where36
                          ) {
                            totalCount
                          }
                          inventory
                          name
                          publishedAt
                          publishedBy(options: $options16, where: $where37) {
                            createdAt
                            deletedAt
                            id
                            name
                            updatedAt
                            username
                          }
                          publishedByConnection(
                            after: $after21
                            first: $first21
                            sort: $sort21
                            where: $where38
                          ) {
                            totalCount
                          }
                          status(options: $options17, where: $where39) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          statusConnection(
                            after: $after22
                            first: $first22
                            sort: $sort22
                            where: $where40
                          ) {
                            totalCount
                          }
                          tags(options: $options18, where: $where41) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                            totalCount
                          }
                          type(options: $options19, where: $where43) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                            totalCount
                          }
                          updatedAt
                        }
                        id
                        name
                        updatedAt
                      }
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    updatedAt
                  }
                  featuredImageConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  images(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  imagesConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  inventory
                  name
                  publishedAt
                  publishedBy(options: $options25, where: $where52) {
                    createdAt
                    deletedAt
                    id
                    name
                    updatedAt
                    username
                  }
                  publishedByConnection(
                    after: $after27
                    first: $first27
                    sort: $sort27
                    where: $where53
                  ) {
                    totalCount
                  }
                  status(options: $options26, where: $where54) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  statusConnection(
                    after: $after28
                    first: $first28
                    sort: $sort28
                    where: $where55
                  ) {
                    totalCount
                  }
                  tags(options: $options27, where: $where56) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                    totalCount
                  }
                  type(options: $options28, where: $where58) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            name
            updatedAt
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      id
      inventory
      name
      publishedAt
      updatedAt
    }
  }
}
    `;
export type CreateProductsMutationFn = Apollo.MutationFunction<CreateProductsMutation, CreateProductsMutationVariables>;
export type CreateProductsMutationResult = Apollo.MutationResult<CreateProductsMutation>;
export type CreateProductsMutationOptions = Apollo.BaseMutationOptions<CreateProductsMutation, CreateProductsMutationVariables>;
export const CreateTagsDocument = gql`
    mutation createTags($after: String, $first: Int, $sort: [ImageProductsConnectionSort!], $where: ImageProductsConnectionWhere, $options: ImageOptions, $where1: ImageWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where3: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageFeaturesConnectionSort!], $where4: ImageFeaturesConnectionWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $after5: String, $first5: Int, $sort5: [ImageProductsConnectionSort!], $where6: ImageProductsConnectionWhere, $options1: ImageOptions, $where7: ImageWhere, $after6: String, $first6: Int, $sort6: [UserImagesConnectionSort!], $where8: UserImagesConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductPublishedByConnectionSort!], $where9: ProductPublishedByConnectionWhere, $after8: String, $first8: Int, $sort8: [ProductStatusConnectionSort!], $where10: ProductStatusConnectionWhere, $after9: String, $first9: Int, $sort9: [TagTagsConnectionSort!], $where11: TagTagsConnectionWhere, $options2: TagOptions, $where12: TagWhere, $after10: String, $first10: Int, $sort10: [ProductTagsConnectionSort!], $where13: ProductTagsConnectionWhere, $after11: String, $first11: Int, $sort11: [ProductTypeConnectionSort!], $where14: ProductTypeConnectionWhere, $options3: ProductOptions, $where15: ProductWhere, $after12: String, $first12: Int, $sort12: [ProductTypeProductsConnectionSort!], $where16: ProductTypeProductsConnectionWhere, $options4: ProductTypeOptions, $where17: ProductTypeWhere, $options5: ProductOptions, $where18: ProductWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where19: ProductStatusProductsConnectionWhere, $options6: ProductStatusOptions, $where20: ProductStatusWhere, $options7: ProductOptions, $where21: ProductWhere, $after14: String, $first14: Int, $sort14: [UserProductsConnectionSort!], $where22: UserProductsConnectionWhere, $options8: UserOptions, $where23: UserWhere, $options9: ProductOptions, $where24: ProductWhere, $options10: ImageOptions, $where25: ImageWhere, $after15: String, $first15: Int, $sort15: [ProductImagesConnectionSort!], $where26: ProductImagesConnectionWhere, $options11: UserOptions, $where27: UserWhere, $after16: String, $first16: Int, $sort16: [ProductPublishedByConnectionSort!], $where28: ProductPublishedByConnectionWhere, $options12: ProductStatusOptions, $where29: ProductStatusWhere, $after17: String, $first17: Int, $sort17: [ProductStatusConnectionSort!], $where30: ProductStatusConnectionWhere, $options13: TagOptions, $where31: TagWhere, $after18: String, $first18: Int, $sort18: [ProductTagsConnectionSort!], $where32: ProductTagsConnectionWhere, $options14: ProductTypeOptions, $where33: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where34: ProductTypeConnectionWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductFeaturedImageConnectionSort!], $where39: ProductFeaturedImageConnectionWhere, $options19: ImageOptions, $where40: ImageWhere, $after21: String, $first21: Int, $sort21: [ProductImagesConnectionSort!], $where41: ProductImagesConnectionWhere, $options20: UserOptions, $where42: UserWhere, $after22: String, $first22: Int, $sort22: [ProductPublishedByConnectionSort!], $where43: ProductPublishedByConnectionWhere, $options21: ProductStatusOptions, $where44: ProductStatusWhere, $after23: String, $first23: Int, $sort23: [ProductStatusConnectionSort!], $where45: ProductStatusConnectionWhere, $options22: TagOptions, $where46: TagWhere, $after24: String, $first24: Int, $sort24: [ProductTagsConnectionSort!], $where47: ProductTagsConnectionWhere, $options23: ProductTypeOptions, $where48: ProductTypeWhere, $after25: String, $first25: Int, $sort25: [ProductTypeConnectionSort!], $where49: ProductTypeConnectionWhere, $after26: String, $first26: Int, $sort26: [ImageFeaturesConnectionSort!], $where50: ImageFeaturesConnectionWhere, $options24: ImageOptions, $where51: ImageWhere, $options25: ProductOptions, $where52: ProductWhere, $options26: ImageOptions, $where53: ImageWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where54: ProductFeaturedImageConnectionWhere, $options27: ImageOptions, $where55: ImageWhere, $after28: String, $first28: Int, $sort28: [ProductImagesConnectionSort!], $where56: ProductImagesConnectionWhere, $options28: UserOptions, $where57: UserWhere, $after29: String, $first29: Int, $sort29: [ProductPublishedByConnectionSort!], $where58: ProductPublishedByConnectionWhere, $options29: ProductStatusOptions, $where59: ProductStatusWhere, $after30: String, $first30: Int, $sort30: [ProductStatusConnectionSort!], $where60: ProductStatusConnectionWhere, $options30: ProductTypeOptions, $where61: ProductTypeWhere, $after31: String, $first31: Int, $sort31: [ProductTypeConnectionSort!], $where62: ProductTypeConnectionWhere, $options31: ProductOptions, $where63: ProductWhere, $input: [TagCreateInput!]!) {
  createTags(input: $input) {
    info {
      bookmark
      nodesCreated
      relationshipsCreated
    }
    tags {
      createdAt
      deletedAt
      description
      id
      name
      tags(options: $options31, where: $where63) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options26, where: $where53) {
          createdAt
          deletedAt
          description
          features(options: $options25, where: $where52) {
            createdAt
            deletedAt
            description
            featuredImage(options: $options24, where: $where51) {
              createdAt
              deletedAt
              description
              featuresConnection(
                after: $after26
                first: $first26
                sort: $sort26
                where: $where50
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    featuredImage(options: $options18, where: $where38) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      products(options: $options17, where: $where37) {
                        createdAt
                        deletedAt
                        description
                        featuredImage(options: $options, where: $where1) {
                          createdAt
                          deletedAt
                          description
                          id
                          name
                          productsConnection(after: $after, first: $first, sort: $sort, where: $where) {
                            edges {
                              cursor
                            }
                            pageInfo {
                              endCursor
                              hasNextPage
                              hasPreviousPage
                              startCursor
                            }
                            totalCount
                          }
                          updatedAt
                        }
                        featuredImageConnection(
                          after: $after1
                          first: $first1
                          sort: $sort1
                          where: $where2
                        ) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        images(options: $options16, where: $where36) {
                          createdAt
                          deletedAt
                          description
                          features(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after2
                              first: $first2
                              sort: $sort2
                              where: $where3
                            ) {
                              totalCount
                            }
                            id
                            images(options: $options10, where: $where25) {
                              createdAt
                              deletedAt
                              description
                              featuresConnection(after: $after3, first: $first3, sort: $sort3, where: $where4) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              name
                              products(options: $options9, where: $where24) {
                                createdAt
                                deletedAt
                                description
                                id
                                imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                inventory
                                name
                                publishedAt
                                publishedBy(options: $options8, where: $where23) {
                                  createdAt
                                  deletedAt
                                  id
                                  images(options: $options1, where: $where7) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    productsConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                      totalCount
                                    }
                                    updatedAt
                                  }
                                  imagesConnection(after: $after6, first: $first6, sort: $sort6, where: $where8) {
                                    totalCount
                                  }
                                  name
                                  products(options: $options7, where: $where21) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    publishedByConnection(
                                      after: $after7
                                      first: $first7
                                      sort: $sort7
                                      where: $where9
                                    ) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    status(options: $options6, where: $where20) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      products(options: $options5, where: $where18) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        inventory
                                        name
                                        publishedAt
                                        statusConnection(after: $after8, first: $first8, sort: $sort8, where: $where10) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        tags(options: $options2, where: $where12) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          tagsConnection(after: $after9, first: $first9, sort: $sort9, where: $where11) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        tagsConnection(after: $after10, first: $first10, sort: $sort10, where: $where13) {
                                          totalCount
                                        }
                                        type(options: $options4, where: $where17) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          products(options: $options3, where: $where15) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            inventory
                                            name
                                            publishedAt
                                            typeConnection(after: $after11, first: $first11, sort: $sort11, where: $where14) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          productsConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where16
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      productsConnection(
                                        after: $after13
                                        first: $first13
                                        sort: $sort13
                                        where: $where19
                                      ) {
                                        totalCount
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  productsConnection(
                                    after: $after14
                                    first: $first14
                                    sort: $sort14
                                    where: $where22
                                  ) {
                                    totalCount
                                  }
                                  updatedAt
                                  username
                                }
                                updatedAt
                              }
                              updatedAt
                            }
                            imagesConnection(
                              after: $after15
                              first: $first15
                              sort: $sort15
                              where: $where26
                            ) {
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options11, where: $where27) {
                              createdAt
                              deletedAt
                              id
                              name
                              updatedAt
                              username
                            }
                            publishedByConnection(
                              after: $after16
                              first: $first16
                              sort: $sort16
                              where: $where28
                            ) {
                              totalCount
                            }
                            status(options: $options12, where: $where29) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            statusConnection(
                              after: $after17
                              first: $first17
                              sort: $sort17
                              where: $where30
                            ) {
                              totalCount
                            }
                            tags(options: $options13, where: $where31) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            tagsConnection(after: $after18, first: $first18, sort: $sort18, where: $where32) {
                              totalCount
                            }
                            type(options: $options14, where: $where33) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where34) {
                              totalCount
                            }
                            updatedAt
                          }
                          id
                          name
                          updatedAt
                        }
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    featuredImageConnection(
                      after: $after20
                      first: $first20
                      sort: $sort20
                      where: $where39
                    ) {
                      totalCount
                    }
                    id
                    images(options: $options19, where: $where40) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    imagesConnection(
                      after: $after21
                      first: $first21
                      sort: $sort21
                      where: $where41
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options20, where: $where42) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after22
                      first: $first22
                      sort: $sort22
                      where: $where43
                    ) {
                      totalCount
                    }
                    status(options: $options21, where: $where44) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after23
                      first: $first23
                      sort: $sort23
                      where: $where45
                    ) {
                      totalCount
                    }
                    tags(options: $options22, where: $where46) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                      totalCount
                    }
                    type(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after25, first: $first25, sort: $sort25, where: $where49) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              name
              updatedAt
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        featuredImageConnection(
          after: $after27
          first: $first27
          sort: $sort27
          where: $where54
        ) {
          totalCount
        }
        id
        images(options: $options27, where: $where55) {
          createdAt
          deletedAt
          description
          id
          name
          updatedAt
        }
        imagesConnection(
          after: $after28
          first: $first28
          sort: $sort28
          where: $where56
        ) {
          totalCount
        }
        inventory
        name
        publishedAt
        publishedBy(options: $options28, where: $where57) {
          createdAt
          deletedAt
          id
          name
          updatedAt
          username
        }
        publishedByConnection(
          after: $after29
          first: $first29
          sort: $sort29
          where: $where58
        ) {
          totalCount
        }
        status(options: $options29, where: $where59) {
          createdAt
          deletedAt
          description
          id
          name
          updatedAt
        }
        statusConnection(
          after: $after30
          first: $first30
          sort: $sort30
          where: $where60
        ) {
          totalCount
        }
        type(options: $options30, where: $where61) {
          createdAt
          deletedAt
          description
          id
          name
          updatedAt
        }
        typeConnection(after: $after31, first: $first31, sort: $sort31, where: $where62) {
          totalCount
        }
        updatedAt
      }
      updatedAt
    }
  }
}
    `;
export type CreateTagsMutationFn = Apollo.MutationFunction<CreateTagsMutation, CreateTagsMutationVariables>;
export type CreateTagsMutationResult = Apollo.MutationResult<CreateTagsMutation>;
export type CreateTagsMutationOptions = Apollo.BaseMutationOptions<CreateTagsMutation, CreateTagsMutationVariables>;
export const CreateUsersDocument = gql`
    mutation createUsers($after: String, $first: Int, $sort: [ImageFeaturesConnectionSort!], $where: ImageFeaturesConnectionWhere, $after1: String, $first1: Int, $sort1: [ImageFeaturesConnectionSort!], $where1: ImageFeaturesConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageProductsConnectionSort!], $where3: ImageProductsConnectionWhere, $options: ImageOptions, $where4: ImageWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $options1: ImageOptions, $where6: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where7: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where8: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where9: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where10: ImageProductsConnectionWhere, $options2: ImageOptions, $where11: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where12: ProductFeaturedImageConnectionWhere, $options3: ImageOptions, $where13: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where14: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where15: UserProductsConnectionWhere, $options4: UserOptions, $where16: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where17: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where18: ProductStatusProductsConnectionWhere, $options5: ProductStatusOptions, $where19: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where20: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where22: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where23: ProductTypeProductsConnectionWhere, $options6: ProductTypeOptions, $where24: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where25: ProductTypeConnectionWhere, $options7: ProductOptions, $where26: ProductWhere, $options8: ProductTypeOptions, $where27: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where28: ProductTypeConnectionWhere, $options9: ProductOptions, $where29: ProductWhere, $options10: TagOptions, $where30: TagWhere, $options11: ProductOptions, $where31: ProductWhere, $options12: ProductStatusOptions, $where32: ProductStatusWhere, $options13: ProductOptions, $where33: ProductWhere, $options14: UserOptions, $where34: UserWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where39: ProductImagesConnectionWhere, $options19: UserOptions, $where40: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where41: ProductPublishedByConnectionWhere, $options20: ProductStatusOptions, $where42: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where43: ProductStatusConnectionWhere, $options21: TagOptions, $where44: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where45: ProductTagsConnectionWhere, $options22: ProductTypeOptions, $where46: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where47: ProductTypeConnectionWhere, $options23: ProductOptions, $where48: ProductWhere, $after25: String, $first25: Int, $sort25: [ImageFeaturesConnectionSort!], $where49: ImageFeaturesConnectionWhere, $options24: ProductOptions, $where50: ProductWhere, $after26: String, $first26: Int, $sort26: [ImageProductsConnectionSort!], $where51: ImageProductsConnectionWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where52: ProductFeaturedImageConnectionWhere, $options25: ProductOptions, $where53: ProductWhere, $options26: ImageOptions, $where54: ImageWhere, $options27: ProductOptions, $where55: ProductWhere, $options28: ImageOptions, $where56: ImageWhere, $after28: String, $first28: Int, $sort28: [UserImagesConnectionSort!], $where57: UserImagesConnectionWhere, $options29: ProductOptions, $where58: ProductWhere, $after29: String, $first29: Int, $sort29: [UserProductsConnectionSort!], $where59: UserProductsConnectionWhere, $input: [UserCreateInput!]!) {
  createUsers(input: $input) {
    info {
      bookmark
      nodesCreated
      relationshipsCreated
    }
    users {
      createdAt
      deletedAt
      id
      images(options: $options28, where: $where56) {
        createdAt
        deletedAt
        description
        features(options: $options27, where: $where55) {
          createdAt
          deletedAt
          description
          featuredImage(options: $options26, where: $where54) {
            createdAt
            deletedAt
            description
            features(options: $options25, where: $where53) {
              createdAt
              deletedAt
              description
              featuredImageConnection(
                after: $after27
                first: $first27
                sort: $sort27
                where: $where52
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    features(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      images(options: $options18, where: $where38) {
                        createdAt
                        deletedAt
                        description
                        featuresConnection(after: $after, first: $first, sort: $sort, where: $where) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        name
                        products(options: $options17, where: $where37) {
                          createdAt
                          deletedAt
                          description
                          featuredImage(options: $options16, where: $where36) {
                            createdAt
                            deletedAt
                            description
                            featuresConnection(after: $after1, first: $first1, sort: $sort1, where: $where1) {
                              totalCount
                            }
                            id
                            name
                            products(options: $options15, where: $where35) {
                              createdAt
                              deletedAt
                              description
                              featuredImageConnection(
                                after: $after2
                                first: $first2
                                sort: $sort2
                                where: $where2
                              ) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              images(options: $options, where: $where4) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                productsConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                updatedAt
                              }
                              imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              inventory
                              name
                              publishedAt
                              publishedBy(options: $options14, where: $where34) {
                                createdAt
                                deletedAt
                                id
                                images(options: $options1, where: $where6) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  updatedAt
                                }
                                imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where7) {
                                  totalCount
                                }
                                name
                                products(options: $options13, where: $where33) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  publishedByConnection(
                                    after: $after6
                                    first: $first6
                                    sort: $sort6
                                    where: $where8
                                  ) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  status(options: $options12, where: $where32) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    products(options: $options11, where: $where31) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      inventory
                                      name
                                      publishedAt
                                      statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where9) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      tags(options: $options10, where: $where30) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        tags(options: $options9, where: $where29) {
                                          createdAt
                                          deletedAt
                                          description
                                          featuredImage(options: $options2, where: $where11) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after8
                                              first: $first8
                                              sort: $sort8
                                              where: $where10
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          featuredImageConnection(
                                            after: $after9
                                            first: $first9
                                            sort: $sort9
                                            where: $where12
                                          ) {
                                            totalCount
                                          }
                                          id
                                          images(options: $options3, where: $where13) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            updatedAt
                                          }
                                          imagesConnection(
                                            after: $after10
                                            first: $first10
                                            sort: $sort10
                                            where: $where14
                                          ) {
                                            totalCount
                                          }
                                          inventory
                                          name
                                          publishedAt
                                          publishedBy(options: $options4, where: $where16) {
                                            createdAt
                                            deletedAt
                                            id
                                            name
                                            productsConnection(
                                              after: $after11
                                              first: $first11
                                              sort: $sort11
                                              where: $where15
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                            username
                                          }
                                          publishedByConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where17
                                          ) {
                                            totalCount
                                          }
                                          status(options: $options5, where: $where19) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after13
                                              first: $first13
                                              sort: $sort13
                                              where: $where18
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          statusConnection(
                                            after: $after14
                                            first: $first14
                                            sort: $sort14
                                            where: $where20
                                          ) {
                                            totalCount
                                          }
                                          tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where21) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          type(options: $options8, where: $where27) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            products(options: $options7, where: $where26) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              inventory
                                              name
                                              publishedAt
                                              tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where22) {
                                                totalCount
                                              }
                                              type(options: $options6, where: $where24) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                name
                                                productsConnection(
                                                  after: $after17
                                                  first: $first17
                                                  sort: $sort17
                                                  where: $where23
                                                ) {
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where25) {
                                                edges {
                                                  cursor
                                                }
                                                pageInfo {
                                                  endCursor
                                                  hasNextPage
                                                  hasPreviousPage
                                                  startCursor
                                                }
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            updatedAt
                                          }
                                          typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where28) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                                username
                              }
                              updatedAt
                            }
                            updatedAt
                          }
                          id
                          inventory
                          name
                          publishedAt
                          updatedAt
                        }
                        updatedAt
                      }
                      imagesConnection(
                        after: $after20
                        first: $first20
                        sort: $sort20
                        where: $where39
                      ) {
                        totalCount
                      }
                      inventory
                      name
                      publishedAt
                      publishedBy(options: $options19, where: $where40) {
                        createdAt
                        deletedAt
                        id
                        name
                        updatedAt
                        username
                      }
                      publishedByConnection(
                        after: $after21
                        first: $first21
                        sort: $sort21
                        where: $where41
                      ) {
                        totalCount
                      }
                      status(options: $options20, where: $where42) {
                        createdAt
                        deletedAt
                        description
                        id
                        name
                        updatedAt
                      }
                      statusConnection(
                        after: $after22
                        first: $first22
                        sort: $sort22
                        where: $where43
                      ) {
                        totalCount
                      }
                      tags(options: $options21, where: $where44) {
                        createdAt
                        deletedAt
                        description
                        id
                        name
                        updatedAt
                      }
                      tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where45) {
                        totalCount
                      }
                      type(options: $options22, where: $where46) {
                        createdAt
                        deletedAt
                        description
                        id
                        name
                        updatedAt
                      }
                      typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                        totalCount
                      }
                      updatedAt
                    }
                    featuresConnection(
                      after: $after25
                      first: $first25
                      sort: $sort25
                      where: $where49
                    ) {
                      totalCount
                    }
                    id
                    name
                    products(options: $options24, where: $where50) {
                      createdAt
                      deletedAt
                      description
                      id
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    productsConnection(
                      after: $after26
                      first: $first26
                      sort: $sort26
                      where: $where51
                    ) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              inventory
              name
              publishedAt
              updatedAt
            }
            id
            name
            updatedAt
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      imagesConnection(
        after: $after28
        first: $first28
        sort: $sort28
        where: $where57
      ) {
        totalCount
      }
      name
      products(options: $options29, where: $where58) {
        createdAt
        deletedAt
        description
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      productsConnection(
        after: $after29
        first: $first29
        sort: $sort29
        where: $where59
      ) {
        totalCount
      }
      updatedAt
      username
    }
  }
}
    `;
export type CreateUsersMutationFn = Apollo.MutationFunction<CreateUsersMutation, CreateUsersMutationVariables>;
export type CreateUsersMutationResult = Apollo.MutationResult<CreateUsersMutation>;
export type CreateUsersMutationOptions = Apollo.BaseMutationOptions<CreateUsersMutation, CreateUsersMutationVariables>;
export const DeleteImagesDocument = gql`
    mutation deleteImages($delete: ImageDeleteInput, $where: ImageWhere) {
  deleteImages(delete: $delete, where: $where) {
    bookmark
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteImagesMutationFn = Apollo.MutationFunction<DeleteImagesMutation, DeleteImagesMutationVariables>;
export type DeleteImagesMutationResult = Apollo.MutationResult<DeleteImagesMutation>;
export type DeleteImagesMutationOptions = Apollo.BaseMutationOptions<DeleteImagesMutation, DeleteImagesMutationVariables>;
export const DeleteProductStatusesDocument = gql`
    mutation deleteProductStatuses($delete: ProductStatusDeleteInput, $where: ProductStatusWhere) {
  deleteProductStatuses(delete: $delete, where: $where) {
    bookmark
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteProductStatusesMutationFn = Apollo.MutationFunction<DeleteProductStatusesMutation, DeleteProductStatusesMutationVariables>;
export type DeleteProductStatusesMutationResult = Apollo.MutationResult<DeleteProductStatusesMutation>;
export type DeleteProductStatusesMutationOptions = Apollo.BaseMutationOptions<DeleteProductStatusesMutation, DeleteProductStatusesMutationVariables>;
export const DeleteProductTypesDocument = gql`
    mutation deleteProductTypes($delete: ProductTypeDeleteInput, $where: ProductTypeWhere) {
  deleteProductTypes(delete: $delete, where: $where) {
    bookmark
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteProductTypesMutationFn = Apollo.MutationFunction<DeleteProductTypesMutation, DeleteProductTypesMutationVariables>;
export type DeleteProductTypesMutationResult = Apollo.MutationResult<DeleteProductTypesMutation>;
export type DeleteProductTypesMutationOptions = Apollo.BaseMutationOptions<DeleteProductTypesMutation, DeleteProductTypesMutationVariables>;
export const DeleteProductsDocument = gql`
    mutation deleteProducts($delete: ProductDeleteInput, $where: ProductWhere) {
  deleteProducts(delete: $delete, where: $where) {
    bookmark
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteProductsMutationFn = Apollo.MutationFunction<DeleteProductsMutation, DeleteProductsMutationVariables>;
export type DeleteProductsMutationResult = Apollo.MutationResult<DeleteProductsMutation>;
export type DeleteProductsMutationOptions = Apollo.BaseMutationOptions<DeleteProductsMutation, DeleteProductsMutationVariables>;
export const DeleteTagsDocument = gql`
    mutation deleteTags($delete: TagDeleteInput, $where: TagWhere) {
  deleteTags(delete: $delete, where: $where) {
    bookmark
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteTagsMutationFn = Apollo.MutationFunction<DeleteTagsMutation, DeleteTagsMutationVariables>;
export type DeleteTagsMutationResult = Apollo.MutationResult<DeleteTagsMutation>;
export type DeleteTagsMutationOptions = Apollo.BaseMutationOptions<DeleteTagsMutation, DeleteTagsMutationVariables>;
export const DeleteUsersDocument = gql`
    mutation deleteUsers($delete: UserDeleteInput, $where: UserWhere) {
  deleteUsers(delete: $delete, where: $where) {
    bookmark
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteUsersMutationFn = Apollo.MutationFunction<DeleteUsersMutation, DeleteUsersMutationVariables>;
export type DeleteUsersMutationResult = Apollo.MutationResult<DeleteUsersMutation>;
export type DeleteUsersMutationOptions = Apollo.BaseMutationOptions<DeleteUsersMutation, DeleteUsersMutationVariables>;
export const LoginDocument = gql`
    mutation login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($name: String!, $password: String!, $username: String!) {
  signUp(name: $name, password: $password, username: $username) {
    token
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateImagesDocument = gql`
    mutation updateImages($after: String, $first: Int, $sort: [ImageFeaturesConnectionSort!], $where: ImageFeaturesConnectionWhere, $after1: String, $first1: Int, $sort1: [ImageFeaturesConnectionSort!], $where1: ImageFeaturesConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageProductsConnectionSort!], $where3: ImageProductsConnectionWhere, $options: ImageOptions, $where4: ImageWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $options1: ImageOptions, $where6: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where7: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where8: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where9: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where10: ImageProductsConnectionWhere, $options2: ImageOptions, $where11: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where12: ProductFeaturedImageConnectionWhere, $options3: ImageOptions, $where13: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where14: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where15: UserProductsConnectionWhere, $options4: UserOptions, $where16: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where17: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where18: ProductStatusProductsConnectionWhere, $options5: ProductStatusOptions, $where19: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where20: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where22: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where23: ProductTypeProductsConnectionWhere, $options6: ProductTypeOptions, $where24: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where25: ProductTypeConnectionWhere, $options7: ProductOptions, $where26: ProductWhere, $options8: ProductTypeOptions, $where27: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where28: ProductTypeConnectionWhere, $options9: ProductOptions, $where29: ProductWhere, $options10: TagOptions, $where30: TagWhere, $options11: ProductOptions, $where31: ProductWhere, $options12: ProductStatusOptions, $where32: ProductStatusWhere, $options13: ProductOptions, $where33: ProductWhere, $options14: UserOptions, $where34: UserWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where39: ProductImagesConnectionWhere, $options19: UserOptions, $where40: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where41: ProductPublishedByConnectionWhere, $options20: ProductStatusOptions, $where42: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where43: ProductStatusConnectionWhere, $options21: TagOptions, $where44: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where45: ProductTagsConnectionWhere, $options22: ProductTypeOptions, $where46: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where47: ProductTypeConnectionWhere, $options23: ProductOptions, $where48: ProductWhere, $after25: String, $first25: Int, $sort25: [ImageFeaturesConnectionSort!], $where49: ImageFeaturesConnectionWhere, $options24: ProductOptions, $where50: ProductWhere, $after26: String, $first26: Int, $sort26: [ImageProductsConnectionSort!], $where51: ImageProductsConnectionWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where52: ProductFeaturedImageConnectionWhere, $options25: ProductOptions, $where53: ProductWhere, $options26: ImageOptions, $where54: ImageWhere, $options27: ProductOptions, $where55: ProductWhere, $connect: ImageConnectInput, $create: ImageRelationInput, $delete: ImageDeleteInput, $disconnect: ImageDisconnectInput, $update: ImageUpdateInput, $where56: ImageWhere) {
  updateImages(
    connect: $connect
    create: $create
    delete: $delete
    disconnect: $disconnect
    update: $update
    where: $where56
  ) {
    images {
      createdAt
      deletedAt
      description
      features(options: $options27, where: $where55) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options26, where: $where54) {
          createdAt
          deletedAt
          description
          features(options: $options25, where: $where53) {
            createdAt
            deletedAt
            description
            featuredImageConnection(
              after: $after27
              first: $first27
              sort: $sort27
              where: $where52
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  features(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    images(options: $options18, where: $where38) {
                      createdAt
                      deletedAt
                      description
                      featuresConnection(after: $after, first: $first, sort: $sort, where: $where) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      name
                      products(options: $options17, where: $where37) {
                        createdAt
                        deletedAt
                        description
                        featuredImage(options: $options16, where: $where36) {
                          createdAt
                          deletedAt
                          description
                          featuresConnection(after: $after1, first: $first1, sort: $sort1, where: $where1) {
                            totalCount
                          }
                          id
                          name
                          products(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after2
                              first: $first2
                              sort: $sort2
                              where: $where2
                            ) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            images(options: $options, where: $where4) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              productsConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              updatedAt
                            }
                            imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                              edges {
                                cursor
                              }
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              id
                              images(options: $options1, where: $where6) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                updatedAt
                              }
                              imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where7) {
                                totalCount
                              }
                              name
                              products(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                description
                                id
                                inventory
                                name
                                publishedAt
                                publishedByConnection(
                                  after: $after6
                                  first: $first6
                                  sort: $sort6
                                  where: $where8
                                ) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                status(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  products(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where9) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    tags(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        featuredImage(options: $options2, where: $where11) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after8
                                            first: $first8
                                            sort: $sort8
                                            where: $where10
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        featuredImageConnection(
                                          after: $after9
                                          first: $first9
                                          sort: $sort9
                                          where: $where12
                                        ) {
                                          totalCount
                                        }
                                        id
                                        images(options: $options3, where: $where13) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          updatedAt
                                        }
                                        imagesConnection(
                                          after: $after10
                                          first: $first10
                                          sort: $sort10
                                          where: $where14
                                        ) {
                                          totalCount
                                        }
                                        inventory
                                        name
                                        publishedAt
                                        publishedBy(options: $options4, where: $where16) {
                                          createdAt
                                          deletedAt
                                          id
                                          name
                                          productsConnection(
                                            after: $after11
                                            first: $first11
                                            sort: $sort11
                                            where: $where15
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                          username
                                        }
                                        publishedByConnection(
                                          after: $after12
                                          first: $first12
                                          sort: $sort12
                                          where: $where17
                                        ) {
                                          totalCount
                                        }
                                        status(options: $options5, where: $where19) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after13
                                            first: $first13
                                            sort: $sort13
                                            where: $where18
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        statusConnection(
                                          after: $after14
                                          first: $first14
                                          sort: $sort14
                                          where: $where20
                                        ) {
                                          totalCount
                                        }
                                        tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where21) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        type(options: $options8, where: $where27) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          products(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            inventory
                                            name
                                            publishedAt
                                            tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where22) {
                                              totalCount
                                            }
                                            type(options: $options6, where: $where24) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after17
                                                first: $first17
                                                sort: $sort17
                                                where: $where23
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where25) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where28) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                              }
                              updatedAt
                              username
                            }
                            updatedAt
                          }
                          updatedAt
                        }
                        id
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    imagesConnection(
                      after: $after20
                      first: $first20
                      sort: $sort20
                      where: $where39
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options19, where: $where40) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after21
                      first: $first21
                      sort: $sort21
                      where: $where41
                    ) {
                      totalCount
                    }
                    status(options: $options20, where: $where42) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after22
                      first: $first22
                      sort: $sort22
                      where: $where43
                    ) {
                      totalCount
                    }
                    tags(options: $options21, where: $where44) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where45) {
                      totalCount
                    }
                    type(options: $options22, where: $where46) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                      totalCount
                    }
                    updatedAt
                  }
                  featuresConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  name
                  products(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    inventory
                    name
                    publishedAt
                    updatedAt
                  }
                  productsConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      id
      name
      updatedAt
    }
    info {
      bookmark
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
  }
}
    `;
export type UpdateImagesMutationFn = Apollo.MutationFunction<UpdateImagesMutation, UpdateImagesMutationVariables>;
export type UpdateImagesMutationResult = Apollo.MutationResult<UpdateImagesMutation>;
export type UpdateImagesMutationOptions = Apollo.BaseMutationOptions<UpdateImagesMutation, UpdateImagesMutationVariables>;
export const UpdateProductStatusesDocument = gql`
    mutation updateProductStatuses($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $options32: ProductOptions, $where64: ProductWhere, $after32: String, $first32: Int, $sort32: [ProductStatusProductsConnectionSort!], $where65: ProductStatusProductsConnectionWhere, $connect: ProductStatusConnectInput, $create: ProductStatusRelationInput, $delete: ProductStatusDeleteInput, $disconnect: ProductStatusDisconnectInput, $update: ProductStatusUpdateInput, $where66: ProductStatusWhere) {
  updateProductStatuses(
    connect: $connect
    create: $create
    delete: $delete
    disconnect: $disconnect
    update: $update
    where: $where66
  ) {
    info {
      bookmark
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
    productStatuses {
      createdAt
      deletedAt
      description
      id
      name
      products(options: $options32, where: $where64) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options31, where: $where63) {
          createdAt
          deletedAt
          description
          features(options: $options30, where: $where62) {
            createdAt
            deletedAt
            description
            featuredImage(options: $options29, where: $where61) {
              createdAt
              deletedAt
              description
              featuresConnection(
                after: $after31
                first: $first31
                sort: $sort31
                where: $where60
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    featuredImage(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      products(options: $options22, where: $where47) {
                        createdAt
                        deletedAt
                        description
                        featuredImageConnection(
                          after: $after
                          first: $first
                          sort: $sort
                          where: $where
                        ) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        images(options: $options21, where: $where46) {
                          createdAt
                          deletedAt
                          description
                          features(options: $options20, where: $where45) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after1
                              first: $first1
                              sort: $sort1
                              where: $where1
                            ) {
                              totalCount
                            }
                            id
                            images(options: $options15, where: $where35) {
                              createdAt
                              deletedAt
                              description
                              featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              name
                              products(options: $options14, where: $where34) {
                                createdAt
                                deletedAt
                                description
                                id
                                imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                inventory
                                name
                                publishedAt
                                publishedBy(options: $options13, where: $where33) {
                                  createdAt
                                  deletedAt
                                  id
                                  images(options: $options, where: $where5) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    updatedAt
                                  }
                                  imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                    totalCount
                                  }
                                  name
                                  products(options: $options12, where: $where32) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    publishedByConnection(
                                      after: $after6
                                      first: $first6
                                      sort: $sort6
                                      where: $where7
                                    ) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    status(options: $options11, where: $where31) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      products(options: $options10, where: $where30) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        inventory
                                        name
                                        publishedAt
                                        statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        tags(options: $options9, where: $where29) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          tags(options: $options8, where: $where28) {
                                            createdAt
                                            deletedAt
                                            description
                                            featuredImage(options: $options1, where: $where10) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            featuredImageConnection(
                                              after: $after9
                                              first: $first9
                                              sort: $sort9
                                              where: $where11
                                            ) {
                                              totalCount
                                            }
                                            id
                                            images(options: $options2, where: $where12) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              updatedAt
                                            }
                                            imagesConnection(
                                              after: $after10
                                              first: $first10
                                              sort: $sort10
                                              where: $where13
                                            ) {
                                              totalCount
                                            }
                                            inventory
                                            name
                                            publishedAt
                                            publishedBy(options: $options3, where: $where15) {
                                              createdAt
                                              deletedAt
                                              id
                                              name
                                              productsConnection(
                                                after: $after11
                                                first: $first11
                                                sort: $sort11
                                                where: $where14
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                              username
                                            }
                                            publishedByConnection(
                                              after: $after12
                                              first: $first12
                                              sort: $sort12
                                              where: $where16
                                            ) {
                                              totalCount
                                            }
                                            status(options: $options4, where: $where18) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after13
                                                first: $first13
                                                sort: $sort13
                                                where: $where17
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            statusConnection(
                                              after: $after14
                                              first: $first14
                                              sort: $sort14
                                              where: $where19
                                            ) {
                                              totalCount
                                            }
                                            tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            type(options: $options7, where: $where26) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              products(options: $options6, where: $where25) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                inventory
                                                name
                                                publishedAt
                                                tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                  totalCount
                                                }
                                                type(options: $options5, where: $where23) {
                                                  createdAt
                                                  deletedAt
                                                  description
                                                  id
                                                  name
                                                  productsConnection(
                                                    after: $after17
                                                    first: $first17
                                                    sort: $sort17
                                                    where: $where22
                                                  ) {
                                                    totalCount
                                                  }
                                                  updatedAt
                                                }
                                                typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                  edges {
                                                    cursor
                                                  }
                                                  pageInfo {
                                                    endCursor
                                                    hasNextPage
                                                    hasPreviousPage
                                                    startCursor
                                                  }
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                  username
                                }
                                updatedAt
                              }
                              updatedAt
                            }
                            imagesConnection(
                              after: $after20
                              first: $first20
                              sort: $sort20
                              where: $where36
                            ) {
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options16, where: $where37) {
                              createdAt
                              deletedAt
                              id
                              name
                              updatedAt
                              username
                            }
                            publishedByConnection(
                              after: $after21
                              first: $first21
                              sort: $sort21
                              where: $where38
                            ) {
                              totalCount
                            }
                            status(options: $options17, where: $where39) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            statusConnection(
                              after: $after22
                              first: $first22
                              sort: $sort22
                              where: $where40
                            ) {
                              totalCount
                            }
                            tags(options: $options18, where: $where41) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                              totalCount
                            }
                            type(options: $options19, where: $where43) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                              totalCount
                            }
                            updatedAt
                          }
                          id
                          name
                          updatedAt
                        }
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    featuredImageConnection(
                      after: $after25
                      first: $first25
                      sort: $sort25
                      where: $where49
                    ) {
                      totalCount
                    }
                    id
                    images(options: $options24, where: $where50) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    imagesConnection(
                      after: $after26
                      first: $first26
                      sort: $sort26
                      where: $where51
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options25, where: $where52) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after27
                      first: $first27
                      sort: $sort27
                      where: $where53
                    ) {
                      totalCount
                    }
                    status(options: $options26, where: $where54) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after28
                      first: $first28
                      sort: $sort28
                      where: $where55
                    ) {
                      totalCount
                    }
                    tags(options: $options27, where: $where56) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                      totalCount
                    }
                    type(options: $options28, where: $where58) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              name
              updatedAt
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      productsConnection(
        after: $after32
        first: $first32
        sort: $sort32
        where: $where65
      ) {
        totalCount
      }
      updatedAt
    }
  }
}
    `;
export type UpdateProductStatusesMutationFn = Apollo.MutationFunction<UpdateProductStatusesMutation, UpdateProductStatusesMutationVariables>;
export type UpdateProductStatusesMutationResult = Apollo.MutationResult<UpdateProductStatusesMutation>;
export type UpdateProductStatusesMutationOptions = Apollo.BaseMutationOptions<UpdateProductStatusesMutation, UpdateProductStatusesMutationVariables>;
export const UpdateProductTypesDocument = gql`
    mutation updateProductTypes($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $options32: ProductOptions, $where64: ProductWhere, $after32: String, $first32: Int, $sort32: [ProductTypeProductsConnectionSort!], $where65: ProductTypeProductsConnectionWhere, $connect: ProductTypeConnectInput, $create: ProductTypeRelationInput, $delete: ProductTypeDeleteInput, $disconnect: ProductTypeDisconnectInput, $update: ProductTypeUpdateInput, $where66: ProductTypeWhere) {
  updateProductTypes(
    connect: $connect
    create: $create
    delete: $delete
    disconnect: $disconnect
    update: $update
    where: $where66
  ) {
    info {
      bookmark
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
    productTypes {
      createdAt
      deletedAt
      description
      id
      name
      products(options: $options32, where: $where64) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options31, where: $where63) {
          createdAt
          deletedAt
          description
          features(options: $options30, where: $where62) {
            createdAt
            deletedAt
            description
            featuredImage(options: $options29, where: $where61) {
              createdAt
              deletedAt
              description
              featuresConnection(
                after: $after31
                first: $first31
                sort: $sort31
                where: $where60
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    featuredImage(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      products(options: $options22, where: $where47) {
                        createdAt
                        deletedAt
                        description
                        featuredImageConnection(
                          after: $after
                          first: $first
                          sort: $sort
                          where: $where
                        ) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        images(options: $options21, where: $where46) {
                          createdAt
                          deletedAt
                          description
                          features(options: $options20, where: $where45) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after1
                              first: $first1
                              sort: $sort1
                              where: $where1
                            ) {
                              totalCount
                            }
                            id
                            images(options: $options15, where: $where35) {
                              createdAt
                              deletedAt
                              description
                              featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              name
                              products(options: $options14, where: $where34) {
                                createdAt
                                deletedAt
                                description
                                id
                                imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                inventory
                                name
                                publishedAt
                                publishedBy(options: $options13, where: $where33) {
                                  createdAt
                                  deletedAt
                                  id
                                  images(options: $options, where: $where5) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    updatedAt
                                  }
                                  imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                    totalCount
                                  }
                                  name
                                  products(options: $options12, where: $where32) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    publishedByConnection(
                                      after: $after6
                                      first: $first6
                                      sort: $sort6
                                      where: $where7
                                    ) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    status(options: $options11, where: $where31) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      products(options: $options10, where: $where30) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        inventory
                                        name
                                        publishedAt
                                        statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        tags(options: $options9, where: $where29) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          tags(options: $options8, where: $where28) {
                                            createdAt
                                            deletedAt
                                            description
                                            featuredImage(options: $options1, where: $where10) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            featuredImageConnection(
                                              after: $after9
                                              first: $first9
                                              sort: $sort9
                                              where: $where11
                                            ) {
                                              totalCount
                                            }
                                            id
                                            images(options: $options2, where: $where12) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              updatedAt
                                            }
                                            imagesConnection(
                                              after: $after10
                                              first: $first10
                                              sort: $sort10
                                              where: $where13
                                            ) {
                                              totalCount
                                            }
                                            inventory
                                            name
                                            publishedAt
                                            publishedBy(options: $options3, where: $where15) {
                                              createdAt
                                              deletedAt
                                              id
                                              name
                                              productsConnection(
                                                after: $after11
                                                first: $first11
                                                sort: $sort11
                                                where: $where14
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                              username
                                            }
                                            publishedByConnection(
                                              after: $after12
                                              first: $first12
                                              sort: $sort12
                                              where: $where16
                                            ) {
                                              totalCount
                                            }
                                            status(options: $options4, where: $where18) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after13
                                                first: $first13
                                                sort: $sort13
                                                where: $where17
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            statusConnection(
                                              after: $after14
                                              first: $first14
                                              sort: $sort14
                                              where: $where19
                                            ) {
                                              totalCount
                                            }
                                            tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            type(options: $options7, where: $where26) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              products(options: $options6, where: $where25) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                inventory
                                                name
                                                publishedAt
                                                tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                  totalCount
                                                }
                                                type(options: $options5, where: $where23) {
                                                  createdAt
                                                  deletedAt
                                                  description
                                                  id
                                                  name
                                                  productsConnection(
                                                    after: $after17
                                                    first: $first17
                                                    sort: $sort17
                                                    where: $where22
                                                  ) {
                                                    totalCount
                                                  }
                                                  updatedAt
                                                }
                                                typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                  edges {
                                                    cursor
                                                  }
                                                  pageInfo {
                                                    endCursor
                                                    hasNextPage
                                                    hasPreviousPage
                                                    startCursor
                                                  }
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                  username
                                }
                                updatedAt
                              }
                              updatedAt
                            }
                            imagesConnection(
                              after: $after20
                              first: $first20
                              sort: $sort20
                              where: $where36
                            ) {
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options16, where: $where37) {
                              createdAt
                              deletedAt
                              id
                              name
                              updatedAt
                              username
                            }
                            publishedByConnection(
                              after: $after21
                              first: $first21
                              sort: $sort21
                              where: $where38
                            ) {
                              totalCount
                            }
                            status(options: $options17, where: $where39) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            statusConnection(
                              after: $after22
                              first: $first22
                              sort: $sort22
                              where: $where40
                            ) {
                              totalCount
                            }
                            tags(options: $options18, where: $where41) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                              totalCount
                            }
                            type(options: $options19, where: $where43) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                              totalCount
                            }
                            updatedAt
                          }
                          id
                          name
                          updatedAt
                        }
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    featuredImageConnection(
                      after: $after25
                      first: $first25
                      sort: $sort25
                      where: $where49
                    ) {
                      totalCount
                    }
                    id
                    images(options: $options24, where: $where50) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    imagesConnection(
                      after: $after26
                      first: $first26
                      sort: $sort26
                      where: $where51
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options25, where: $where52) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after27
                      first: $first27
                      sort: $sort27
                      where: $where53
                    ) {
                      totalCount
                    }
                    status(options: $options26, where: $where54) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after28
                      first: $first28
                      sort: $sort28
                      where: $where55
                    ) {
                      totalCount
                    }
                    tags(options: $options27, where: $where56) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                      totalCount
                    }
                    type(options: $options28, where: $where58) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              name
              updatedAt
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      productsConnection(
        after: $after32
        first: $first32
        sort: $sort32
        where: $where65
      ) {
        totalCount
      }
      updatedAt
    }
  }
}
    `;
export type UpdateProductTypesMutationFn = Apollo.MutationFunction<UpdateProductTypesMutation, UpdateProductTypesMutationVariables>;
export type UpdateProductTypesMutationResult = Apollo.MutationResult<UpdateProductTypesMutation>;
export type UpdateProductTypesMutationOptions = Apollo.BaseMutationOptions<UpdateProductTypesMutation, UpdateProductTypesMutationVariables>;
export const UpdateProductsDocument = gql`
    mutation updateProducts($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $connect: ProductConnectInput, $create: ProductRelationInput, $delete: ProductDeleteInput, $disconnect: ProductDisconnectInput, $update: ProductUpdateInput, $where64: ProductWhere) {
  updateProducts(
    connect: $connect
    create: $create
    delete: $delete
    disconnect: $disconnect
    update: $update
    where: $where64
  ) {
    info {
      bookmark
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
    products {
      createdAt
      deletedAt
      description
      featuredImage(options: $options31, where: $where63) {
        createdAt
        deletedAt
        description
        features(options: $options30, where: $where62) {
          createdAt
          deletedAt
          description
          featuredImage(options: $options29, where: $where61) {
            createdAt
            deletedAt
            description
            featuresConnection(
              after: $after31
              first: $first31
              sort: $sort31
              where: $where60
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  featuredImage(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    products(options: $options22, where: $where47) {
                      createdAt
                      deletedAt
                      description
                      featuredImageConnection(
                        after: $after
                        first: $first
                        sort: $sort
                        where: $where
                      ) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      images(options: $options21, where: $where46) {
                        createdAt
                        deletedAt
                        description
                        features(options: $options20, where: $where45) {
                          createdAt
                          deletedAt
                          description
                          featuredImageConnection(
                            after: $after1
                            first: $first1
                            sort: $sort1
                            where: $where1
                          ) {
                            totalCount
                          }
                          id
                          images(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            name
                            products(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              description
                              id
                              imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              inventory
                              name
                              publishedAt
                              publishedBy(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                id
                                images(options: $options, where: $where5) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  updatedAt
                                }
                                imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                  totalCount
                                }
                                name
                                products(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  publishedByConnection(
                                    after: $after6
                                    first: $first6
                                    sort: $sort6
                                    where: $where7
                                  ) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  status(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    products(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      inventory
                                      name
                                      publishedAt
                                      statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        tags(options: $options8, where: $where28) {
                                          createdAt
                                          deletedAt
                                          description
                                          featuredImage(options: $options1, where: $where10) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          featuredImageConnection(
                                            after: $after9
                                            first: $first9
                                            sort: $sort9
                                            where: $where11
                                          ) {
                                            totalCount
                                          }
                                          id
                                          images(options: $options2, where: $where12) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            updatedAt
                                          }
                                          imagesConnection(
                                            after: $after10
                                            first: $first10
                                            sort: $sort10
                                            where: $where13
                                          ) {
                                            totalCount
                                          }
                                          inventory
                                          name
                                          publishedAt
                                          publishedBy(options: $options3, where: $where15) {
                                            createdAt
                                            deletedAt
                                            id
                                            name
                                            productsConnection(
                                              after: $after11
                                              first: $first11
                                              sort: $sort11
                                              where: $where14
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                            username
                                          }
                                          publishedByConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where16
                                          ) {
                                            totalCount
                                          }
                                          status(options: $options4, where: $where18) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after13
                                              first: $first13
                                              sort: $sort13
                                              where: $where17
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          statusConnection(
                                            after: $after14
                                            first: $first14
                                            sort: $sort14
                                            where: $where19
                                          ) {
                                            totalCount
                                          }
                                          tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          type(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            products(options: $options6, where: $where25) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              inventory
                                              name
                                              publishedAt
                                              tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                totalCount
                                              }
                                              type(options: $options5, where: $where23) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                name
                                                productsConnection(
                                                  after: $after17
                                                  first: $first17
                                                  sort: $sort17
                                                  where: $where22
                                                ) {
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                edges {
                                                  cursor
                                                }
                                                pageInfo {
                                                  endCursor
                                                  hasNextPage
                                                  hasPreviousPage
                                                  startCursor
                                                }
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            updatedAt
                                          }
                                          typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                                username
                              }
                              updatedAt
                            }
                            updatedAt
                          }
                          imagesConnection(
                            after: $after20
                            first: $first20
                            sort: $sort20
                            where: $where36
                          ) {
                            totalCount
                          }
                          inventory
                          name
                          publishedAt
                          publishedBy(options: $options16, where: $where37) {
                            createdAt
                            deletedAt
                            id
                            name
                            updatedAt
                            username
                          }
                          publishedByConnection(
                            after: $after21
                            first: $first21
                            sort: $sort21
                            where: $where38
                          ) {
                            totalCount
                          }
                          status(options: $options17, where: $where39) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          statusConnection(
                            after: $after22
                            first: $first22
                            sort: $sort22
                            where: $where40
                          ) {
                            totalCount
                          }
                          tags(options: $options18, where: $where41) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                            totalCount
                          }
                          type(options: $options19, where: $where43) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                            totalCount
                          }
                          updatedAt
                        }
                        id
                        name
                        updatedAt
                      }
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    updatedAt
                  }
                  featuredImageConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  images(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  imagesConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  inventory
                  name
                  publishedAt
                  publishedBy(options: $options25, where: $where52) {
                    createdAt
                    deletedAt
                    id
                    name
                    updatedAt
                    username
                  }
                  publishedByConnection(
                    after: $after27
                    first: $first27
                    sort: $sort27
                    where: $where53
                  ) {
                    totalCount
                  }
                  status(options: $options26, where: $where54) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  statusConnection(
                    after: $after28
                    first: $first28
                    sort: $sort28
                    where: $where55
                  ) {
                    totalCount
                  }
                  tags(options: $options27, where: $where56) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                    totalCount
                  }
                  type(options: $options28, where: $where58) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            name
            updatedAt
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      id
      inventory
      name
      publishedAt
      updatedAt
    }
  }
}
    `;
export type UpdateProductsMutationFn = Apollo.MutationFunction<UpdateProductsMutation, UpdateProductsMutationVariables>;
export type UpdateProductsMutationResult = Apollo.MutationResult<UpdateProductsMutation>;
export type UpdateProductsMutationOptions = Apollo.BaseMutationOptions<UpdateProductsMutation, UpdateProductsMutationVariables>;
export const UpdateTagsDocument = gql`
    mutation updateTags($after: String, $first: Int, $sort: [ImageProductsConnectionSort!], $where: ImageProductsConnectionWhere, $options: ImageOptions, $where1: ImageWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where3: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageFeaturesConnectionSort!], $where4: ImageFeaturesConnectionWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $after5: String, $first5: Int, $sort5: [ImageProductsConnectionSort!], $where6: ImageProductsConnectionWhere, $options1: ImageOptions, $where7: ImageWhere, $after6: String, $first6: Int, $sort6: [UserImagesConnectionSort!], $where8: UserImagesConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductPublishedByConnectionSort!], $where9: ProductPublishedByConnectionWhere, $after8: String, $first8: Int, $sort8: [ProductStatusConnectionSort!], $where10: ProductStatusConnectionWhere, $after9: String, $first9: Int, $sort9: [TagTagsConnectionSort!], $where11: TagTagsConnectionWhere, $options2: TagOptions, $where12: TagWhere, $after10: String, $first10: Int, $sort10: [ProductTagsConnectionSort!], $where13: ProductTagsConnectionWhere, $after11: String, $first11: Int, $sort11: [ProductTypeConnectionSort!], $where14: ProductTypeConnectionWhere, $options3: ProductOptions, $where15: ProductWhere, $after12: String, $first12: Int, $sort12: [ProductTypeProductsConnectionSort!], $where16: ProductTypeProductsConnectionWhere, $options4: ProductTypeOptions, $where17: ProductTypeWhere, $options5: ProductOptions, $where18: ProductWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where19: ProductStatusProductsConnectionWhere, $options6: ProductStatusOptions, $where20: ProductStatusWhere, $options7: ProductOptions, $where21: ProductWhere, $after14: String, $first14: Int, $sort14: [UserProductsConnectionSort!], $where22: UserProductsConnectionWhere, $options8: UserOptions, $where23: UserWhere, $options9: ProductOptions, $where24: ProductWhere, $options10: ImageOptions, $where25: ImageWhere, $after15: String, $first15: Int, $sort15: [ProductImagesConnectionSort!], $where26: ProductImagesConnectionWhere, $options11: UserOptions, $where27: UserWhere, $after16: String, $first16: Int, $sort16: [ProductPublishedByConnectionSort!], $where28: ProductPublishedByConnectionWhere, $options12: ProductStatusOptions, $where29: ProductStatusWhere, $after17: String, $first17: Int, $sort17: [ProductStatusConnectionSort!], $where30: ProductStatusConnectionWhere, $options13: TagOptions, $where31: TagWhere, $after18: String, $first18: Int, $sort18: [ProductTagsConnectionSort!], $where32: ProductTagsConnectionWhere, $options14: ProductTypeOptions, $where33: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where34: ProductTypeConnectionWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductFeaturedImageConnectionSort!], $where39: ProductFeaturedImageConnectionWhere, $options19: ImageOptions, $where40: ImageWhere, $after21: String, $first21: Int, $sort21: [ProductImagesConnectionSort!], $where41: ProductImagesConnectionWhere, $options20: UserOptions, $where42: UserWhere, $after22: String, $first22: Int, $sort22: [ProductPublishedByConnectionSort!], $where43: ProductPublishedByConnectionWhere, $options21: ProductStatusOptions, $where44: ProductStatusWhere, $after23: String, $first23: Int, $sort23: [ProductStatusConnectionSort!], $where45: ProductStatusConnectionWhere, $options22: TagOptions, $where46: TagWhere, $after24: String, $first24: Int, $sort24: [ProductTagsConnectionSort!], $where47: ProductTagsConnectionWhere, $options23: ProductTypeOptions, $where48: ProductTypeWhere, $after25: String, $first25: Int, $sort25: [ProductTypeConnectionSort!], $where49: ProductTypeConnectionWhere, $after26: String, $first26: Int, $sort26: [ImageFeaturesConnectionSort!], $where50: ImageFeaturesConnectionWhere, $options24: ImageOptions, $where51: ImageWhere, $options25: ProductOptions, $where52: ProductWhere, $options26: ImageOptions, $where53: ImageWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where54: ProductFeaturedImageConnectionWhere, $options27: ImageOptions, $where55: ImageWhere, $after28: String, $first28: Int, $sort28: [ProductImagesConnectionSort!], $where56: ProductImagesConnectionWhere, $options28: UserOptions, $where57: UserWhere, $after29: String, $first29: Int, $sort29: [ProductPublishedByConnectionSort!], $where58: ProductPublishedByConnectionWhere, $options29: ProductStatusOptions, $where59: ProductStatusWhere, $after30: String, $first30: Int, $sort30: [ProductStatusConnectionSort!], $where60: ProductStatusConnectionWhere, $options30: ProductTypeOptions, $where61: ProductTypeWhere, $after31: String, $first31: Int, $sort31: [ProductTypeConnectionSort!], $where62: ProductTypeConnectionWhere, $options31: ProductOptions, $where63: ProductWhere, $connect: TagConnectInput, $create: TagRelationInput, $delete: TagDeleteInput, $disconnect: TagDisconnectInput, $update: TagUpdateInput, $where64: TagWhere) {
  updateTags(
    connect: $connect
    create: $create
    delete: $delete
    disconnect: $disconnect
    update: $update
    where: $where64
  ) {
    info {
      bookmark
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
    tags {
      createdAt
      deletedAt
      description
      id
      name
      tags(options: $options31, where: $where63) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options26, where: $where53) {
          createdAt
          deletedAt
          description
          features(options: $options25, where: $where52) {
            createdAt
            deletedAt
            description
            featuredImage(options: $options24, where: $where51) {
              createdAt
              deletedAt
              description
              featuresConnection(
                after: $after26
                first: $first26
                sort: $sort26
                where: $where50
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    featuredImage(options: $options18, where: $where38) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      products(options: $options17, where: $where37) {
                        createdAt
                        deletedAt
                        description
                        featuredImage(options: $options, where: $where1) {
                          createdAt
                          deletedAt
                          description
                          id
                          name
                          productsConnection(after: $after, first: $first, sort: $sort, where: $where) {
                            edges {
                              cursor
                            }
                            pageInfo {
                              endCursor
                              hasNextPage
                              hasPreviousPage
                              startCursor
                            }
                            totalCount
                          }
                          updatedAt
                        }
                        featuredImageConnection(
                          after: $after1
                          first: $first1
                          sort: $sort1
                          where: $where2
                        ) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        images(options: $options16, where: $where36) {
                          createdAt
                          deletedAt
                          description
                          features(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after2
                              first: $first2
                              sort: $sort2
                              where: $where3
                            ) {
                              totalCount
                            }
                            id
                            images(options: $options10, where: $where25) {
                              createdAt
                              deletedAt
                              description
                              featuresConnection(after: $after3, first: $first3, sort: $sort3, where: $where4) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              name
                              products(options: $options9, where: $where24) {
                                createdAt
                                deletedAt
                                description
                                id
                                imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                inventory
                                name
                                publishedAt
                                publishedBy(options: $options8, where: $where23) {
                                  createdAt
                                  deletedAt
                                  id
                                  images(options: $options1, where: $where7) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    productsConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                      totalCount
                                    }
                                    updatedAt
                                  }
                                  imagesConnection(after: $after6, first: $first6, sort: $sort6, where: $where8) {
                                    totalCount
                                  }
                                  name
                                  products(options: $options7, where: $where21) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    publishedByConnection(
                                      after: $after7
                                      first: $first7
                                      sort: $sort7
                                      where: $where9
                                    ) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    status(options: $options6, where: $where20) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      products(options: $options5, where: $where18) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        inventory
                                        name
                                        publishedAt
                                        statusConnection(after: $after8, first: $first8, sort: $sort8, where: $where10) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        tags(options: $options2, where: $where12) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          tagsConnection(after: $after9, first: $first9, sort: $sort9, where: $where11) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        tagsConnection(after: $after10, first: $first10, sort: $sort10, where: $where13) {
                                          totalCount
                                        }
                                        type(options: $options4, where: $where17) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          products(options: $options3, where: $where15) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            inventory
                                            name
                                            publishedAt
                                            typeConnection(after: $after11, first: $first11, sort: $sort11, where: $where14) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          productsConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where16
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      productsConnection(
                                        after: $after13
                                        first: $first13
                                        sort: $sort13
                                        where: $where19
                                      ) {
                                        totalCount
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  productsConnection(
                                    after: $after14
                                    first: $first14
                                    sort: $sort14
                                    where: $where22
                                  ) {
                                    totalCount
                                  }
                                  updatedAt
                                  username
                                }
                                updatedAt
                              }
                              updatedAt
                            }
                            imagesConnection(
                              after: $after15
                              first: $first15
                              sort: $sort15
                              where: $where26
                            ) {
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options11, where: $where27) {
                              createdAt
                              deletedAt
                              id
                              name
                              updatedAt
                              username
                            }
                            publishedByConnection(
                              after: $after16
                              first: $first16
                              sort: $sort16
                              where: $where28
                            ) {
                              totalCount
                            }
                            status(options: $options12, where: $where29) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            statusConnection(
                              after: $after17
                              first: $first17
                              sort: $sort17
                              where: $where30
                            ) {
                              totalCount
                            }
                            tags(options: $options13, where: $where31) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            tagsConnection(after: $after18, first: $first18, sort: $sort18, where: $where32) {
                              totalCount
                            }
                            type(options: $options14, where: $where33) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where34) {
                              totalCount
                            }
                            updatedAt
                          }
                          id
                          name
                          updatedAt
                        }
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    featuredImageConnection(
                      after: $after20
                      first: $first20
                      sort: $sort20
                      where: $where39
                    ) {
                      totalCount
                    }
                    id
                    images(options: $options19, where: $where40) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    imagesConnection(
                      after: $after21
                      first: $first21
                      sort: $sort21
                      where: $where41
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options20, where: $where42) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after22
                      first: $first22
                      sort: $sort22
                      where: $where43
                    ) {
                      totalCount
                    }
                    status(options: $options21, where: $where44) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after23
                      first: $first23
                      sort: $sort23
                      where: $where45
                    ) {
                      totalCount
                    }
                    tags(options: $options22, where: $where46) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                      totalCount
                    }
                    type(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after25, first: $first25, sort: $sort25, where: $where49) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              name
              updatedAt
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        featuredImageConnection(
          after: $after27
          first: $first27
          sort: $sort27
          where: $where54
        ) {
          totalCount
        }
        id
        images(options: $options27, where: $where55) {
          createdAt
          deletedAt
          description
          id
          name
          updatedAt
        }
        imagesConnection(
          after: $after28
          first: $first28
          sort: $sort28
          where: $where56
        ) {
          totalCount
        }
        inventory
        name
        publishedAt
        publishedBy(options: $options28, where: $where57) {
          createdAt
          deletedAt
          id
          name
          updatedAt
          username
        }
        publishedByConnection(
          after: $after29
          first: $first29
          sort: $sort29
          where: $where58
        ) {
          totalCount
        }
        status(options: $options29, where: $where59) {
          createdAt
          deletedAt
          description
          id
          name
          updatedAt
        }
        statusConnection(
          after: $after30
          first: $first30
          sort: $sort30
          where: $where60
        ) {
          totalCount
        }
        type(options: $options30, where: $where61) {
          createdAt
          deletedAt
          description
          id
          name
          updatedAt
        }
        typeConnection(after: $after31, first: $first31, sort: $sort31, where: $where62) {
          totalCount
        }
        updatedAt
      }
      updatedAt
    }
  }
}
    `;
export type UpdateTagsMutationFn = Apollo.MutationFunction<UpdateTagsMutation, UpdateTagsMutationVariables>;
export type UpdateTagsMutationResult = Apollo.MutationResult<UpdateTagsMutation>;
export type UpdateTagsMutationOptions = Apollo.BaseMutationOptions<UpdateTagsMutation, UpdateTagsMutationVariables>;
export const UpdateUsersDocument = gql`
    mutation updateUsers($after: String, $first: Int, $sort: [ImageFeaturesConnectionSort!], $where: ImageFeaturesConnectionWhere, $after1: String, $first1: Int, $sort1: [ImageFeaturesConnectionSort!], $where1: ImageFeaturesConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageProductsConnectionSort!], $where3: ImageProductsConnectionWhere, $options: ImageOptions, $where4: ImageWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $options1: ImageOptions, $where6: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where7: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where8: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where9: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where10: ImageProductsConnectionWhere, $options2: ImageOptions, $where11: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where12: ProductFeaturedImageConnectionWhere, $options3: ImageOptions, $where13: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where14: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where15: UserProductsConnectionWhere, $options4: UserOptions, $where16: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where17: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where18: ProductStatusProductsConnectionWhere, $options5: ProductStatusOptions, $where19: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where20: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where22: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where23: ProductTypeProductsConnectionWhere, $options6: ProductTypeOptions, $where24: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where25: ProductTypeConnectionWhere, $options7: ProductOptions, $where26: ProductWhere, $options8: ProductTypeOptions, $where27: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where28: ProductTypeConnectionWhere, $options9: ProductOptions, $where29: ProductWhere, $options10: TagOptions, $where30: TagWhere, $options11: ProductOptions, $where31: ProductWhere, $options12: ProductStatusOptions, $where32: ProductStatusWhere, $options13: ProductOptions, $where33: ProductWhere, $options14: UserOptions, $where34: UserWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where39: ProductImagesConnectionWhere, $options19: UserOptions, $where40: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where41: ProductPublishedByConnectionWhere, $options20: ProductStatusOptions, $where42: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where43: ProductStatusConnectionWhere, $options21: TagOptions, $where44: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where45: ProductTagsConnectionWhere, $options22: ProductTypeOptions, $where46: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where47: ProductTypeConnectionWhere, $options23: ProductOptions, $where48: ProductWhere, $after25: String, $first25: Int, $sort25: [ImageFeaturesConnectionSort!], $where49: ImageFeaturesConnectionWhere, $options24: ProductOptions, $where50: ProductWhere, $after26: String, $first26: Int, $sort26: [ImageProductsConnectionSort!], $where51: ImageProductsConnectionWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where52: ProductFeaturedImageConnectionWhere, $options25: ProductOptions, $where53: ProductWhere, $options26: ImageOptions, $where54: ImageWhere, $options27: ProductOptions, $where55: ProductWhere, $options28: ImageOptions, $where56: ImageWhere, $after28: String, $first28: Int, $sort28: [UserImagesConnectionSort!], $where57: UserImagesConnectionWhere, $options29: ProductOptions, $where58: ProductWhere, $after29: String, $first29: Int, $sort29: [UserProductsConnectionSort!], $where59: UserProductsConnectionWhere, $connect: UserConnectInput, $create: UserRelationInput, $delete: UserDeleteInput, $disconnect: UserDisconnectInput, $update: UserUpdateInput, $where60: UserWhere) {
  updateUsers(
    connect: $connect
    create: $create
    delete: $delete
    disconnect: $disconnect
    update: $update
    where: $where60
  ) {
    info {
      bookmark
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
    users {
      createdAt
      deletedAt
      id
      images(options: $options28, where: $where56) {
        createdAt
        deletedAt
        description
        features(options: $options27, where: $where55) {
          createdAt
          deletedAt
          description
          featuredImage(options: $options26, where: $where54) {
            createdAt
            deletedAt
            description
            features(options: $options25, where: $where53) {
              createdAt
              deletedAt
              description
              featuredImageConnection(
                after: $after27
                first: $first27
                sort: $sort27
                where: $where52
              ) {
                edges {
                  cursor
                  node {
                    createdAt
                    deletedAt
                    description
                    features(options: $options23, where: $where48) {
                      createdAt
                      deletedAt
                      description
                      id
                      images(options: $options18, where: $where38) {
                        createdAt
                        deletedAt
                        description
                        featuresConnection(after: $after, first: $first, sort: $sort, where: $where) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        id
                        name
                        products(options: $options17, where: $where37) {
                          createdAt
                          deletedAt
                          description
                          featuredImage(options: $options16, where: $where36) {
                            createdAt
                            deletedAt
                            description
                            featuresConnection(after: $after1, first: $first1, sort: $sort1, where: $where1) {
                              totalCount
                            }
                            id
                            name
                            products(options: $options15, where: $where35) {
                              createdAt
                              deletedAt
                              description
                              featuredImageConnection(
                                after: $after2
                                first: $first2
                                sort: $sort2
                                where: $where2
                              ) {
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              id
                              images(options: $options, where: $where4) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                productsConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                updatedAt
                              }
                              imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              inventory
                              name
                              publishedAt
                              publishedBy(options: $options14, where: $where34) {
                                createdAt
                                deletedAt
                                id
                                images(options: $options1, where: $where6) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  updatedAt
                                }
                                imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where7) {
                                  totalCount
                                }
                                name
                                products(options: $options13, where: $where33) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  publishedByConnection(
                                    after: $after6
                                    first: $first6
                                    sort: $sort6
                                    where: $where8
                                  ) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  status(options: $options12, where: $where32) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    products(options: $options11, where: $where31) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      inventory
                                      name
                                      publishedAt
                                      statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where9) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      tags(options: $options10, where: $where30) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        tags(options: $options9, where: $where29) {
                                          createdAt
                                          deletedAt
                                          description
                                          featuredImage(options: $options2, where: $where11) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after8
                                              first: $first8
                                              sort: $sort8
                                              where: $where10
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          featuredImageConnection(
                                            after: $after9
                                            first: $first9
                                            sort: $sort9
                                            where: $where12
                                          ) {
                                            totalCount
                                          }
                                          id
                                          images(options: $options3, where: $where13) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            updatedAt
                                          }
                                          imagesConnection(
                                            after: $after10
                                            first: $first10
                                            sort: $sort10
                                            where: $where14
                                          ) {
                                            totalCount
                                          }
                                          inventory
                                          name
                                          publishedAt
                                          publishedBy(options: $options4, where: $where16) {
                                            createdAt
                                            deletedAt
                                            id
                                            name
                                            productsConnection(
                                              after: $after11
                                              first: $first11
                                              sort: $sort11
                                              where: $where15
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                            username
                                          }
                                          publishedByConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where17
                                          ) {
                                            totalCount
                                          }
                                          status(options: $options5, where: $where19) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after13
                                              first: $first13
                                              sort: $sort13
                                              where: $where18
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          statusConnection(
                                            after: $after14
                                            first: $first14
                                            sort: $sort14
                                            where: $where20
                                          ) {
                                            totalCount
                                          }
                                          tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where21) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          type(options: $options8, where: $where27) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            products(options: $options7, where: $where26) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              inventory
                                              name
                                              publishedAt
                                              tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where22) {
                                                totalCount
                                              }
                                              type(options: $options6, where: $where24) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                name
                                                productsConnection(
                                                  after: $after17
                                                  first: $first17
                                                  sort: $sort17
                                                  where: $where23
                                                ) {
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where25) {
                                                edges {
                                                  cursor
                                                }
                                                pageInfo {
                                                  endCursor
                                                  hasNextPage
                                                  hasPreviousPage
                                                  startCursor
                                                }
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            updatedAt
                                          }
                                          typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where28) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                                username
                              }
                              updatedAt
                            }
                            updatedAt
                          }
                          id
                          inventory
                          name
                          publishedAt
                          updatedAt
                        }
                        updatedAt
                      }
                      imagesConnection(
                        after: $after20
                        first: $first20
                        sort: $sort20
                        where: $where39
                      ) {
                        totalCount
                      }
                      inventory
                      name
                      publishedAt
                      publishedBy(options: $options19, where: $where40) {
                        createdAt
                        deletedAt
                        id
                        name
                        updatedAt
                        username
                      }
                      publishedByConnection(
                        after: $after21
                        first: $first21
                        sort: $sort21
                        where: $where41
                      ) {
                        totalCount
                      }
                      status(options: $options20, where: $where42) {
                        createdAt
                        deletedAt
                        description
                        id
                        name
                        updatedAt
                      }
                      statusConnection(
                        after: $after22
                        first: $first22
                        sort: $sort22
                        where: $where43
                      ) {
                        totalCount
                      }
                      tags(options: $options21, where: $where44) {
                        createdAt
                        deletedAt
                        description
                        id
                        name
                        updatedAt
                      }
                      tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where45) {
                        totalCount
                      }
                      type(options: $options22, where: $where46) {
                        createdAt
                        deletedAt
                        description
                        id
                        name
                        updatedAt
                      }
                      typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                        totalCount
                      }
                      updatedAt
                    }
                    featuresConnection(
                      after: $after25
                      first: $first25
                      sort: $sort25
                      where: $where49
                    ) {
                      totalCount
                    }
                    id
                    name
                    products(options: $options24, where: $where50) {
                      createdAt
                      deletedAt
                      description
                      id
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    productsConnection(
                      after: $after26
                      first: $first26
                      sort: $sort26
                      where: $where51
                    ) {
                      totalCount
                    }
                    updatedAt
                  }
                }
                totalCount
              }
              id
              inventory
              name
              publishedAt
              updatedAt
            }
            id
            name
            updatedAt
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      imagesConnection(
        after: $after28
        first: $first28
        sort: $sort28
        where: $where57
      ) {
        totalCount
      }
      name
      products(options: $options29, where: $where58) {
        createdAt
        deletedAt
        description
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      productsConnection(
        after: $after29
        first: $first29
        sort: $sort29
        where: $where59
      ) {
        totalCount
      }
      updatedAt
      username
    }
  }
}
    `;
export type UpdateUsersMutationFn = Apollo.MutationFunction<UpdateUsersMutation, UpdateUsersMutationVariables>;
export type UpdateUsersMutationResult = Apollo.MutationResult<UpdateUsersMutation>;
export type UpdateUsersMutationOptions = Apollo.BaseMutationOptions<UpdateUsersMutation, UpdateUsersMutationVariables>;
export const ImagesDocument = gql`
    query images($after: String, $first: Int, $sort: [ImageFeaturesConnectionSort!], $where: ImageFeaturesConnectionWhere, $after1: String, $first1: Int, $sort1: [ImageFeaturesConnectionSort!], $where1: ImageFeaturesConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageProductsConnectionSort!], $where3: ImageProductsConnectionWhere, $options: ImageOptions, $where4: ImageWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $options1: ImageOptions, $where6: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where7: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where8: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where9: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where10: ImageProductsConnectionWhere, $options2: ImageOptions, $where11: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where12: ProductFeaturedImageConnectionWhere, $options3: ImageOptions, $where13: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where14: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where15: UserProductsConnectionWhere, $options4: UserOptions, $where16: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where17: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where18: ProductStatusProductsConnectionWhere, $options5: ProductStatusOptions, $where19: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where20: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where22: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where23: ProductTypeProductsConnectionWhere, $options6: ProductTypeOptions, $where24: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where25: ProductTypeConnectionWhere, $options7: ProductOptions, $where26: ProductWhere, $options8: ProductTypeOptions, $where27: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where28: ProductTypeConnectionWhere, $options9: ProductOptions, $where29: ProductWhere, $options10: TagOptions, $where30: TagWhere, $options11: ProductOptions, $where31: ProductWhere, $options12: ProductStatusOptions, $where32: ProductStatusWhere, $options13: ProductOptions, $where33: ProductWhere, $options14: UserOptions, $where34: UserWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where39: ProductImagesConnectionWhere, $options19: UserOptions, $where40: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where41: ProductPublishedByConnectionWhere, $options20: ProductStatusOptions, $where42: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where43: ProductStatusConnectionWhere, $options21: TagOptions, $where44: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where45: ProductTagsConnectionWhere, $options22: ProductTypeOptions, $where46: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where47: ProductTypeConnectionWhere, $options23: ProductOptions, $where48: ProductWhere, $after25: String, $first25: Int, $sort25: [ImageFeaturesConnectionSort!], $where49: ImageFeaturesConnectionWhere, $options24: ProductOptions, $where50: ProductWhere, $after26: String, $first26: Int, $sort26: [ImageProductsConnectionSort!], $where51: ImageProductsConnectionWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where52: ProductFeaturedImageConnectionWhere, $options25: ProductOptions, $where53: ProductWhere, $options26: ImageOptions, $where54: ImageWhere, $options27: ProductOptions, $where55: ProductWhere, $options28: ImageOptions, $where56: ImageWhere) {
  images(options: $options28, where: $where56) {
    createdAt
    deletedAt
    description
    features(options: $options27, where: $where55) {
      createdAt
      deletedAt
      description
      featuredImage(options: $options26, where: $where54) {
        createdAt
        deletedAt
        description
        features(options: $options25, where: $where53) {
          createdAt
          deletedAt
          description
          featuredImageConnection(
            after: $after27
            first: $first27
            sort: $sort27
            where: $where52
          ) {
            edges {
              cursor
              node {
                createdAt
                deletedAt
                description
                features(options: $options23, where: $where48) {
                  createdAt
                  deletedAt
                  description
                  id
                  images(options: $options18, where: $where38) {
                    createdAt
                    deletedAt
                    description
                    featuresConnection(after: $after, first: $first, sort: $sort, where: $where) {
                      edges {
                        cursor
                      }
                      pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
                      }
                      totalCount
                    }
                    id
                    name
                    products(options: $options17, where: $where37) {
                      createdAt
                      deletedAt
                      description
                      featuredImage(options: $options16, where: $where36) {
                        createdAt
                        deletedAt
                        description
                        featuresConnection(after: $after1, first: $first1, sort: $sort1, where: $where1) {
                          totalCount
                        }
                        id
                        name
                        products(options: $options15, where: $where35) {
                          createdAt
                          deletedAt
                          description
                          featuredImageConnection(
                            after: $after2
                            first: $first2
                            sort: $sort2
                            where: $where2
                          ) {
                            pageInfo {
                              endCursor
                              hasNextPage
                              hasPreviousPage
                              startCursor
                            }
                            totalCount
                          }
                          id
                          images(options: $options, where: $where4) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            productsConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                              edges {
                                cursor
                              }
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            updatedAt
                          }
                          imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                            edges {
                              cursor
                            }
                            pageInfo {
                              endCursor
                              hasNextPage
                              hasPreviousPage
                              startCursor
                            }
                            totalCount
                          }
                          inventory
                          name
                          publishedAt
                          publishedBy(options: $options14, where: $where34) {
                            createdAt
                            deletedAt
                            id
                            images(options: $options1, where: $where6) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              updatedAt
                            }
                            imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where7) {
                              totalCount
                            }
                            name
                            products(options: $options13, where: $where33) {
                              createdAt
                              deletedAt
                              description
                              id
                              inventory
                              name
                              publishedAt
                              publishedByConnection(
                                after: $after6
                                first: $first6
                                sort: $sort6
                                where: $where8
                              ) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              status(options: $options12, where: $where32) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                products(options: $options11, where: $where31) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where9) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  tags(options: $options10, where: $where30) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    tags(options: $options9, where: $where29) {
                                      createdAt
                                      deletedAt
                                      description
                                      featuredImage(options: $options2, where: $where11) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        productsConnection(
                                          after: $after8
                                          first: $first8
                                          sort: $sort8
                                          where: $where10
                                        ) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      featuredImageConnection(
                                        after: $after9
                                        first: $first9
                                        sort: $sort9
                                        where: $where12
                                      ) {
                                        totalCount
                                      }
                                      id
                                      images(options: $options3, where: $where13) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        updatedAt
                                      }
                                      imagesConnection(
                                        after: $after10
                                        first: $first10
                                        sort: $sort10
                                        where: $where14
                                      ) {
                                        totalCount
                                      }
                                      inventory
                                      name
                                      publishedAt
                                      publishedBy(options: $options4, where: $where16) {
                                        createdAt
                                        deletedAt
                                        id
                                        name
                                        productsConnection(
                                          after: $after11
                                          first: $first11
                                          sort: $sort11
                                          where: $where15
                                        ) {
                                          totalCount
                                        }
                                        updatedAt
                                        username
                                      }
                                      publishedByConnection(
                                        after: $after12
                                        first: $first12
                                        sort: $sort12
                                        where: $where17
                                      ) {
                                        totalCount
                                      }
                                      status(options: $options5, where: $where19) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        productsConnection(
                                          after: $after13
                                          first: $first13
                                          sort: $sort13
                                          where: $where18
                                        ) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      statusConnection(
                                        after: $after14
                                        first: $first14
                                        sort: $sort14
                                        where: $where20
                                      ) {
                                        totalCount
                                      }
                                      tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where21) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      type(options: $options8, where: $where27) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        products(options: $options7, where: $where26) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          inventory
                                          name
                                          publishedAt
                                          tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where22) {
                                            totalCount
                                          }
                                          type(options: $options6, where: $where24) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after17
                                              first: $first17
                                              sort: $sort17
                                              where: $where23
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where25) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where28) {
                                        totalCount
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                              }
                              updatedAt
                            }
                            updatedAt
                            username
                          }
                          updatedAt
                        }
                        updatedAt
                      }
                      id
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    updatedAt
                  }
                  imagesConnection(
                    after: $after20
                    first: $first20
                    sort: $sort20
                    where: $where39
                  ) {
                    totalCount
                  }
                  inventory
                  name
                  publishedAt
                  publishedBy(options: $options19, where: $where40) {
                    createdAt
                    deletedAt
                    id
                    name
                    updatedAt
                    username
                  }
                  publishedByConnection(
                    after: $after21
                    first: $first21
                    sort: $sort21
                    where: $where41
                  ) {
                    totalCount
                  }
                  status(options: $options20, where: $where42) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  statusConnection(
                    after: $after22
                    first: $first22
                    sort: $sort22
                    where: $where43
                  ) {
                    totalCount
                  }
                  tags(options: $options21, where: $where44) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where45) {
                    totalCount
                  }
                  type(options: $options22, where: $where46) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                    totalCount
                  }
                  updatedAt
                }
                featuresConnection(
                  after: $after25
                  first: $first25
                  sort: $sort25
                  where: $where49
                ) {
                  totalCount
                }
                id
                name
                products(options: $options24, where: $where50) {
                  createdAt
                  deletedAt
                  description
                  id
                  inventory
                  name
                  publishedAt
                  updatedAt
                }
                productsConnection(
                  after: $after26
                  first: $first26
                  sort: $sort26
                  where: $where51
                ) {
                  totalCount
                }
                updatedAt
              }
            }
            totalCount
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      id
      inventory
      name
      publishedAt
      updatedAt
    }
    id
    name
    updatedAt
  }
}
    `;
export type ImagesQueryResult = Apollo.QueryResult<ImagesQuery, ImagesQueryVariables>;
export const ImagesCountDocument = gql`
    query imagesCount($where: ImageWhere) {
  imagesCount(where: $where)
}
    `;
export type ImagesCountQueryResult = Apollo.QueryResult<ImagesCountQuery, ImagesCountQueryVariables>;
export const MeDocument = gql`
    query me($after: String, $first: Int, $sort: [ImageFeaturesConnectionSort!], $where: ImageFeaturesConnectionWhere, $after1: String, $first1: Int, $sort1: [ImageFeaturesConnectionSort!], $where1: ImageFeaturesConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageProductsConnectionSort!], $where3: ImageProductsConnectionWhere, $options: ImageOptions, $where4: ImageWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $options1: ImageOptions, $where6: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where7: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where8: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where9: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where10: ImageProductsConnectionWhere, $options2: ImageOptions, $where11: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where12: ProductFeaturedImageConnectionWhere, $options3: ImageOptions, $where13: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where14: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where15: UserProductsConnectionWhere, $options4: UserOptions, $where16: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where17: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where18: ProductStatusProductsConnectionWhere, $options5: ProductStatusOptions, $where19: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where20: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where22: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where23: ProductTypeProductsConnectionWhere, $options6: ProductTypeOptions, $where24: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where25: ProductTypeConnectionWhere, $options7: ProductOptions, $where26: ProductWhere, $options8: ProductTypeOptions, $where27: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where28: ProductTypeConnectionWhere, $options9: ProductOptions, $where29: ProductWhere, $options10: TagOptions, $where30: TagWhere, $options11: ProductOptions, $where31: ProductWhere, $options12: ProductStatusOptions, $where32: ProductStatusWhere, $options13: ProductOptions, $where33: ProductWhere, $options14: UserOptions, $where34: UserWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where39: ProductImagesConnectionWhere, $options19: UserOptions, $where40: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where41: ProductPublishedByConnectionWhere, $options20: ProductStatusOptions, $where42: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where43: ProductStatusConnectionWhere, $options21: TagOptions, $where44: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where45: ProductTagsConnectionWhere, $options22: ProductTypeOptions, $where46: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where47: ProductTypeConnectionWhere, $options23: ProductOptions, $where48: ProductWhere, $after25: String, $first25: Int, $sort25: [ImageFeaturesConnectionSort!], $where49: ImageFeaturesConnectionWhere, $options24: ProductOptions, $where50: ProductWhere, $after26: String, $first26: Int, $sort26: [ImageProductsConnectionSort!], $where51: ImageProductsConnectionWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where52: ProductFeaturedImageConnectionWhere, $options25: ProductOptions, $where53: ProductWhere, $options26: ImageOptions, $where54: ImageWhere, $options27: ProductOptions, $where55: ProductWhere, $options28: ImageOptions, $where56: ImageWhere, $after28: String, $first28: Int, $sort28: [UserImagesConnectionSort!], $where57: UserImagesConnectionWhere, $options29: ProductOptions, $where58: ProductWhere, $after29: String, $first29: Int, $sort29: [UserProductsConnectionSort!], $where59: UserProductsConnectionWhere) {
  me {
    createdAt
    deletedAt
    id
    images(options: $options28, where: $where56) {
      createdAt
      deletedAt
      description
      features(options: $options27, where: $where55) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options26, where: $where54) {
          createdAt
          deletedAt
          description
          features(options: $options25, where: $where53) {
            createdAt
            deletedAt
            description
            featuredImageConnection(
              after: $after27
              first: $first27
              sort: $sort27
              where: $where52
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  features(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    images(options: $options18, where: $where38) {
                      createdAt
                      deletedAt
                      description
                      featuresConnection(after: $after, first: $first, sort: $sort, where: $where) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      name
                      products(options: $options17, where: $where37) {
                        createdAt
                        deletedAt
                        description
                        featuredImage(options: $options16, where: $where36) {
                          createdAt
                          deletedAt
                          description
                          featuresConnection(after: $after1, first: $first1, sort: $sort1, where: $where1) {
                            totalCount
                          }
                          id
                          name
                          products(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after2
                              first: $first2
                              sort: $sort2
                              where: $where2
                            ) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            images(options: $options, where: $where4) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              productsConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              updatedAt
                            }
                            imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                              edges {
                                cursor
                              }
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              id
                              images(options: $options1, where: $where6) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                updatedAt
                              }
                              imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where7) {
                                totalCount
                              }
                              name
                              products(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                description
                                id
                                inventory
                                name
                                publishedAt
                                publishedByConnection(
                                  after: $after6
                                  first: $first6
                                  sort: $sort6
                                  where: $where8
                                ) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                status(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  products(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where9) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    tags(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        featuredImage(options: $options2, where: $where11) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after8
                                            first: $first8
                                            sort: $sort8
                                            where: $where10
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        featuredImageConnection(
                                          after: $after9
                                          first: $first9
                                          sort: $sort9
                                          where: $where12
                                        ) {
                                          totalCount
                                        }
                                        id
                                        images(options: $options3, where: $where13) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          updatedAt
                                        }
                                        imagesConnection(
                                          after: $after10
                                          first: $first10
                                          sort: $sort10
                                          where: $where14
                                        ) {
                                          totalCount
                                        }
                                        inventory
                                        name
                                        publishedAt
                                        publishedBy(options: $options4, where: $where16) {
                                          createdAt
                                          deletedAt
                                          id
                                          name
                                          productsConnection(
                                            after: $after11
                                            first: $first11
                                            sort: $sort11
                                            where: $where15
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                          username
                                        }
                                        publishedByConnection(
                                          after: $after12
                                          first: $first12
                                          sort: $sort12
                                          where: $where17
                                        ) {
                                          totalCount
                                        }
                                        status(options: $options5, where: $where19) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after13
                                            first: $first13
                                            sort: $sort13
                                            where: $where18
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        statusConnection(
                                          after: $after14
                                          first: $first14
                                          sort: $sort14
                                          where: $where20
                                        ) {
                                          totalCount
                                        }
                                        tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where21) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        type(options: $options8, where: $where27) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          products(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            inventory
                                            name
                                            publishedAt
                                            tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where22) {
                                              totalCount
                                            }
                                            type(options: $options6, where: $where24) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after17
                                                first: $first17
                                                sort: $sort17
                                                where: $where23
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where25) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where28) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                              }
                              updatedAt
                              username
                            }
                            updatedAt
                          }
                          updatedAt
                        }
                        id
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    imagesConnection(
                      after: $after20
                      first: $first20
                      sort: $sort20
                      where: $where39
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options19, where: $where40) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after21
                      first: $first21
                      sort: $sort21
                      where: $where41
                    ) {
                      totalCount
                    }
                    status(options: $options20, where: $where42) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after22
                      first: $first22
                      sort: $sort22
                      where: $where43
                    ) {
                      totalCount
                    }
                    tags(options: $options21, where: $where44) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where45) {
                      totalCount
                    }
                    type(options: $options22, where: $where46) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                      totalCount
                    }
                    updatedAt
                  }
                  featuresConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  name
                  products(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    inventory
                    name
                    publishedAt
                    updatedAt
                  }
                  productsConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      id
      name
      updatedAt
    }
    imagesConnection(
      after: $after28
      first: $first28
      sort: $sort28
      where: $where57
    ) {
      totalCount
    }
    name
    products(options: $options29, where: $where58) {
      createdAt
      deletedAt
      description
      id
      inventory
      name
      publishedAt
      updatedAt
    }
    productsConnection(
      after: $after29
      first: $first29
      sort: $sort29
      where: $where59
    ) {
      totalCount
    }
    updatedAt
    username
  }
}
    `;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProductStatusesDocument = gql`
    query productStatuses($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $options32: ProductOptions, $where64: ProductWhere, $after32: String, $first32: Int, $sort32: [ProductStatusProductsConnectionSort!], $where65: ProductStatusProductsConnectionWhere, $options33: ProductStatusOptions, $where66: ProductStatusWhere) {
  productStatuses(options: $options33, where: $where66) {
    createdAt
    deletedAt
    description
    id
    name
    products(options: $options32, where: $where64) {
      createdAt
      deletedAt
      description
      featuredImage(options: $options31, where: $where63) {
        createdAt
        deletedAt
        description
        features(options: $options30, where: $where62) {
          createdAt
          deletedAt
          description
          featuredImage(options: $options29, where: $where61) {
            createdAt
            deletedAt
            description
            featuresConnection(
              after: $after31
              first: $first31
              sort: $sort31
              where: $where60
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  featuredImage(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    products(options: $options22, where: $where47) {
                      createdAt
                      deletedAt
                      description
                      featuredImageConnection(
                        after: $after
                        first: $first
                        sort: $sort
                        where: $where
                      ) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      images(options: $options21, where: $where46) {
                        createdAt
                        deletedAt
                        description
                        features(options: $options20, where: $where45) {
                          createdAt
                          deletedAt
                          description
                          featuredImageConnection(
                            after: $after1
                            first: $first1
                            sort: $sort1
                            where: $where1
                          ) {
                            totalCount
                          }
                          id
                          images(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            name
                            products(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              description
                              id
                              imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              inventory
                              name
                              publishedAt
                              publishedBy(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                id
                                images(options: $options, where: $where5) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  updatedAt
                                }
                                imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                  totalCount
                                }
                                name
                                products(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  publishedByConnection(
                                    after: $after6
                                    first: $first6
                                    sort: $sort6
                                    where: $where7
                                  ) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  status(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    products(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      inventory
                                      name
                                      publishedAt
                                      statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        tags(options: $options8, where: $where28) {
                                          createdAt
                                          deletedAt
                                          description
                                          featuredImage(options: $options1, where: $where10) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          featuredImageConnection(
                                            after: $after9
                                            first: $first9
                                            sort: $sort9
                                            where: $where11
                                          ) {
                                            totalCount
                                          }
                                          id
                                          images(options: $options2, where: $where12) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            updatedAt
                                          }
                                          imagesConnection(
                                            after: $after10
                                            first: $first10
                                            sort: $sort10
                                            where: $where13
                                          ) {
                                            totalCount
                                          }
                                          inventory
                                          name
                                          publishedAt
                                          publishedBy(options: $options3, where: $where15) {
                                            createdAt
                                            deletedAt
                                            id
                                            name
                                            productsConnection(
                                              after: $after11
                                              first: $first11
                                              sort: $sort11
                                              where: $where14
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                            username
                                          }
                                          publishedByConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where16
                                          ) {
                                            totalCount
                                          }
                                          status(options: $options4, where: $where18) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after13
                                              first: $first13
                                              sort: $sort13
                                              where: $where17
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          statusConnection(
                                            after: $after14
                                            first: $first14
                                            sort: $sort14
                                            where: $where19
                                          ) {
                                            totalCount
                                          }
                                          tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          type(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            products(options: $options6, where: $where25) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              inventory
                                              name
                                              publishedAt
                                              tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                totalCount
                                              }
                                              type(options: $options5, where: $where23) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                name
                                                productsConnection(
                                                  after: $after17
                                                  first: $first17
                                                  sort: $sort17
                                                  where: $where22
                                                ) {
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                edges {
                                                  cursor
                                                }
                                                pageInfo {
                                                  endCursor
                                                  hasNextPage
                                                  hasPreviousPage
                                                  startCursor
                                                }
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            updatedAt
                                          }
                                          typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                                username
                              }
                              updatedAt
                            }
                            updatedAt
                          }
                          imagesConnection(
                            after: $after20
                            first: $first20
                            sort: $sort20
                            where: $where36
                          ) {
                            totalCount
                          }
                          inventory
                          name
                          publishedAt
                          publishedBy(options: $options16, where: $where37) {
                            createdAt
                            deletedAt
                            id
                            name
                            updatedAt
                            username
                          }
                          publishedByConnection(
                            after: $after21
                            first: $first21
                            sort: $sort21
                            where: $where38
                          ) {
                            totalCount
                          }
                          status(options: $options17, where: $where39) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          statusConnection(
                            after: $after22
                            first: $first22
                            sort: $sort22
                            where: $where40
                          ) {
                            totalCount
                          }
                          tags(options: $options18, where: $where41) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                            totalCount
                          }
                          type(options: $options19, where: $where43) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                            totalCount
                          }
                          updatedAt
                        }
                        id
                        name
                        updatedAt
                      }
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    updatedAt
                  }
                  featuredImageConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  images(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  imagesConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  inventory
                  name
                  publishedAt
                  publishedBy(options: $options25, where: $where52) {
                    createdAt
                    deletedAt
                    id
                    name
                    updatedAt
                    username
                  }
                  publishedByConnection(
                    after: $after27
                    first: $first27
                    sort: $sort27
                    where: $where53
                  ) {
                    totalCount
                  }
                  status(options: $options26, where: $where54) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  statusConnection(
                    after: $after28
                    first: $first28
                    sort: $sort28
                    where: $where55
                  ) {
                    totalCount
                  }
                  tags(options: $options27, where: $where56) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                    totalCount
                  }
                  type(options: $options28, where: $where58) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            name
            updatedAt
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      id
      inventory
      name
      publishedAt
      updatedAt
    }
    productsConnection(
      after: $after32
      first: $first32
      sort: $sort32
      where: $where65
    ) {
      totalCount
    }
    updatedAt
  }
}
    `;
export type ProductStatusesQueryResult = Apollo.QueryResult<ProductStatusesQuery, ProductStatusesQueryVariables>;
export const ProductStatusesCountDocument = gql`
    query productStatusesCount($where: ProductStatusWhere) {
  productStatusesCount(where: $where)
}
    `;
export type ProductStatusesCountQueryResult = Apollo.QueryResult<ProductStatusesCountQuery, ProductStatusesCountQueryVariables>;
export const ProductTypesDocument = gql`
    query productTypes($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $options32: ProductOptions, $where64: ProductWhere, $after32: String, $first32: Int, $sort32: [ProductTypeProductsConnectionSort!], $where65: ProductTypeProductsConnectionWhere, $options33: ProductTypeOptions, $where66: ProductTypeWhere) {
  productTypes(options: $options33, where: $where66) {
    createdAt
    deletedAt
    description
    id
    name
    products(options: $options32, where: $where64) {
      createdAt
      deletedAt
      description
      featuredImage(options: $options31, where: $where63) {
        createdAt
        deletedAt
        description
        features(options: $options30, where: $where62) {
          createdAt
          deletedAt
          description
          featuredImage(options: $options29, where: $where61) {
            createdAt
            deletedAt
            description
            featuresConnection(
              after: $after31
              first: $first31
              sort: $sort31
              where: $where60
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  featuredImage(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    products(options: $options22, where: $where47) {
                      createdAt
                      deletedAt
                      description
                      featuredImageConnection(
                        after: $after
                        first: $first
                        sort: $sort
                        where: $where
                      ) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      images(options: $options21, where: $where46) {
                        createdAt
                        deletedAt
                        description
                        features(options: $options20, where: $where45) {
                          createdAt
                          deletedAt
                          description
                          featuredImageConnection(
                            after: $after1
                            first: $first1
                            sort: $sort1
                            where: $where1
                          ) {
                            totalCount
                          }
                          id
                          images(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            name
                            products(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              description
                              id
                              imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              inventory
                              name
                              publishedAt
                              publishedBy(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                id
                                images(options: $options, where: $where5) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  updatedAt
                                }
                                imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                  totalCount
                                }
                                name
                                products(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  publishedByConnection(
                                    after: $after6
                                    first: $first6
                                    sort: $sort6
                                    where: $where7
                                  ) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  status(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    products(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      inventory
                                      name
                                      publishedAt
                                      statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        tags(options: $options8, where: $where28) {
                                          createdAt
                                          deletedAt
                                          description
                                          featuredImage(options: $options1, where: $where10) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          featuredImageConnection(
                                            after: $after9
                                            first: $first9
                                            sort: $sort9
                                            where: $where11
                                          ) {
                                            totalCount
                                          }
                                          id
                                          images(options: $options2, where: $where12) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            updatedAt
                                          }
                                          imagesConnection(
                                            after: $after10
                                            first: $first10
                                            sort: $sort10
                                            where: $where13
                                          ) {
                                            totalCount
                                          }
                                          inventory
                                          name
                                          publishedAt
                                          publishedBy(options: $options3, where: $where15) {
                                            createdAt
                                            deletedAt
                                            id
                                            name
                                            productsConnection(
                                              after: $after11
                                              first: $first11
                                              sort: $sort11
                                              where: $where14
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                            username
                                          }
                                          publishedByConnection(
                                            after: $after12
                                            first: $first12
                                            sort: $sort12
                                            where: $where16
                                          ) {
                                            totalCount
                                          }
                                          status(options: $options4, where: $where18) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            productsConnection(
                                              after: $after13
                                              first: $first13
                                              sort: $sort13
                                              where: $where17
                                            ) {
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          statusConnection(
                                            after: $after14
                                            first: $first14
                                            sort: $sort14
                                            where: $where19
                                          ) {
                                            totalCount
                                          }
                                          tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          type(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            name
                                            products(options: $options6, where: $where25) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              inventory
                                              name
                                              publishedAt
                                              tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                                totalCount
                                              }
                                              type(options: $options5, where: $where23) {
                                                createdAt
                                                deletedAt
                                                description
                                                id
                                                name
                                                productsConnection(
                                                  after: $after17
                                                  first: $first17
                                                  sort: $sort17
                                                  where: $where22
                                                ) {
                                                  totalCount
                                                }
                                                updatedAt
                                              }
                                              typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                                edges {
                                                  cursor
                                                }
                                                pageInfo {
                                                  endCursor
                                                  hasNextPage
                                                  hasPreviousPage
                                                  startCursor
                                                }
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            updatedAt
                                          }
                                          typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                                username
                              }
                              updatedAt
                            }
                            updatedAt
                          }
                          imagesConnection(
                            after: $after20
                            first: $first20
                            sort: $sort20
                            where: $where36
                          ) {
                            totalCount
                          }
                          inventory
                          name
                          publishedAt
                          publishedBy(options: $options16, where: $where37) {
                            createdAt
                            deletedAt
                            id
                            name
                            updatedAt
                            username
                          }
                          publishedByConnection(
                            after: $after21
                            first: $first21
                            sort: $sort21
                            where: $where38
                          ) {
                            totalCount
                          }
                          status(options: $options17, where: $where39) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          statusConnection(
                            after: $after22
                            first: $first22
                            sort: $sort22
                            where: $where40
                          ) {
                            totalCount
                          }
                          tags(options: $options18, where: $where41) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                            totalCount
                          }
                          type(options: $options19, where: $where43) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                            totalCount
                          }
                          updatedAt
                        }
                        id
                        name
                        updatedAt
                      }
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    updatedAt
                  }
                  featuredImageConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  images(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  imagesConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  inventory
                  name
                  publishedAt
                  publishedBy(options: $options25, where: $where52) {
                    createdAt
                    deletedAt
                    id
                    name
                    updatedAt
                    username
                  }
                  publishedByConnection(
                    after: $after27
                    first: $first27
                    sort: $sort27
                    where: $where53
                  ) {
                    totalCount
                  }
                  status(options: $options26, where: $where54) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  statusConnection(
                    after: $after28
                    first: $first28
                    sort: $sort28
                    where: $where55
                  ) {
                    totalCount
                  }
                  tags(options: $options27, where: $where56) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                    totalCount
                  }
                  type(options: $options28, where: $where58) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            name
            updatedAt
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      id
      inventory
      name
      publishedAt
      updatedAt
    }
    productsConnection(
      after: $after32
      first: $first32
      sort: $sort32
      where: $where65
    ) {
      totalCount
    }
    updatedAt
  }
}
    `;
export type ProductTypesQueryResult = Apollo.QueryResult<ProductTypesQuery, ProductTypesQueryVariables>;
export const ProductTypesCountDocument = gql`
    query productTypesCount($where: ProductTypeWhere) {
  productTypesCount(where: $where)
}
    `;
export type ProductTypesCountQueryResult = Apollo.QueryResult<ProductTypesCountQuery, ProductTypesCountQueryVariables>;
export const ProductsDocument = gql`
    query products($after: String, $first: Int, $sort: [ProductFeaturedImageConnectionSort!], $where: ProductFeaturedImageConnectionWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where1: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ImageFeaturesConnectionSort!], $where2: ImageFeaturesConnectionWhere, $after3: String, $first3: Int, $sort3: [ProductImagesConnectionSort!], $where3: ProductImagesConnectionWhere, $after4: String, $first4: Int, $sort4: [ImageProductsConnectionSort!], $where4: ImageProductsConnectionWhere, $options: ImageOptions, $where5: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where6: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where7: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where8: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where9: ImageProductsConnectionWhere, $options1: ImageOptions, $where10: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where11: ProductFeaturedImageConnectionWhere, $options2: ImageOptions, $where12: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where13: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where14: UserProductsConnectionWhere, $options3: UserOptions, $where15: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where16: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where17: ProductStatusProductsConnectionWhere, $options4: ProductStatusOptions, $where18: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where19: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where20: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where22: ProductTypeProductsConnectionWhere, $options5: ProductTypeOptions, $where23: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where24: ProductTypeConnectionWhere, $options6: ProductOptions, $where25: ProductWhere, $options7: ProductTypeOptions, $where26: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where27: ProductTypeConnectionWhere, $options8: ProductOptions, $where28: ProductWhere, $options9: TagOptions, $where29: TagWhere, $options10: ProductOptions, $where30: ProductWhere, $options11: ProductStatusOptions, $where31: ProductStatusWhere, $options12: ProductOptions, $where32: ProductWhere, $options13: UserOptions, $where33: UserWhere, $options14: ProductOptions, $where34: ProductWhere, $options15: ImageOptions, $where35: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where36: ProductImagesConnectionWhere, $options16: UserOptions, $where37: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where38: ProductPublishedByConnectionWhere, $options17: ProductStatusOptions, $where39: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where40: ProductStatusConnectionWhere, $options18: TagOptions, $where41: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where42: ProductTagsConnectionWhere, $options19: ProductTypeOptions, $where43: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where44: ProductTypeConnectionWhere, $options20: ProductOptions, $where45: ProductWhere, $options21: ImageOptions, $where46: ImageWhere, $options22: ProductOptions, $where47: ProductWhere, $options23: ImageOptions, $where48: ImageWhere, $after25: String, $first25: Int, $sort25: [ProductFeaturedImageConnectionSort!], $where49: ProductFeaturedImageConnectionWhere, $options24: ImageOptions, $where50: ImageWhere, $after26: String, $first26: Int, $sort26: [ProductImagesConnectionSort!], $where51: ProductImagesConnectionWhere, $options25: UserOptions, $where52: UserWhere, $after27: String, $first27: Int, $sort27: [ProductPublishedByConnectionSort!], $where53: ProductPublishedByConnectionWhere, $options26: ProductStatusOptions, $where54: ProductStatusWhere, $after28: String, $first28: Int, $sort28: [ProductStatusConnectionSort!], $where55: ProductStatusConnectionWhere, $options27: TagOptions, $where56: TagWhere, $after29: String, $first29: Int, $sort29: [ProductTagsConnectionSort!], $where57: ProductTagsConnectionWhere, $options28: ProductTypeOptions, $where58: ProductTypeWhere, $after30: String, $first30: Int, $sort30: [ProductTypeConnectionSort!], $where59: ProductTypeConnectionWhere, $after31: String, $first31: Int, $sort31: [ImageFeaturesConnectionSort!], $where60: ImageFeaturesConnectionWhere, $options29: ImageOptions, $where61: ImageWhere, $options30: ProductOptions, $where62: ProductWhere, $options31: ImageOptions, $where63: ImageWhere, $options32: ProductOptions, $where64: ProductWhere) {
  products(options: $options32, where: $where64) {
    createdAt
    deletedAt
    description
    featuredImage(options: $options31, where: $where63) {
      createdAt
      deletedAt
      description
      features(options: $options30, where: $where62) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options29, where: $where61) {
          createdAt
          deletedAt
          description
          featuresConnection(
            after: $after31
            first: $first31
            sort: $sort31
            where: $where60
          ) {
            edges {
              cursor
              node {
                createdAt
                deletedAt
                description
                featuredImage(options: $options23, where: $where48) {
                  createdAt
                  deletedAt
                  description
                  id
                  name
                  products(options: $options22, where: $where47) {
                    createdAt
                    deletedAt
                    description
                    featuredImageConnection(
                      after: $after
                      first: $first
                      sort: $sort
                      where: $where
                    ) {
                      edges {
                        cursor
                      }
                      pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
                      }
                      totalCount
                    }
                    id
                    images(options: $options21, where: $where46) {
                      createdAt
                      deletedAt
                      description
                      features(options: $options20, where: $where45) {
                        createdAt
                        deletedAt
                        description
                        featuredImageConnection(
                          after: $after1
                          first: $first1
                          sort: $sort1
                          where: $where1
                        ) {
                          totalCount
                        }
                        id
                        images(options: $options15, where: $where35) {
                          createdAt
                          deletedAt
                          description
                          featuresConnection(after: $after2, first: $first2, sort: $sort2, where: $where2) {
                            pageInfo {
                              endCursor
                              hasNextPage
                              hasPreviousPage
                              startCursor
                            }
                            totalCount
                          }
                          id
                          name
                          products(options: $options14, where: $where34) {
                            createdAt
                            deletedAt
                            description
                            id
                            imagesConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                              edges {
                                cursor
                              }
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options13, where: $where33) {
                              createdAt
                              deletedAt
                              id
                              images(options: $options, where: $where5) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                productsConnection(after: $after4, first: $first4, sort: $sort4, where: $where4) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                updatedAt
                              }
                              imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                totalCount
                              }
                              name
                              products(options: $options12, where: $where32) {
                                createdAt
                                deletedAt
                                description
                                id
                                inventory
                                name
                                publishedAt
                                publishedByConnection(
                                  after: $after6
                                  first: $first6
                                  sort: $sort6
                                  where: $where7
                                ) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                status(options: $options11, where: $where31) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  products(options: $options10, where: $where30) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where8) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    tags(options: $options9, where: $where29) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      tags(options: $options8, where: $where28) {
                                        createdAt
                                        deletedAt
                                        description
                                        featuredImage(options: $options1, where: $where10) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(after: $after8, first: $first8, sort: $sort8, where: $where9) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        featuredImageConnection(
                                          after: $after9
                                          first: $first9
                                          sort: $sort9
                                          where: $where11
                                        ) {
                                          totalCount
                                        }
                                        id
                                        images(options: $options2, where: $where12) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          updatedAt
                                        }
                                        imagesConnection(
                                          after: $after10
                                          first: $first10
                                          sort: $sort10
                                          where: $where13
                                        ) {
                                          totalCount
                                        }
                                        inventory
                                        name
                                        publishedAt
                                        publishedBy(options: $options3, where: $where15) {
                                          createdAt
                                          deletedAt
                                          id
                                          name
                                          productsConnection(
                                            after: $after11
                                            first: $first11
                                            sort: $sort11
                                            where: $where14
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                          username
                                        }
                                        publishedByConnection(
                                          after: $after12
                                          first: $first12
                                          sort: $sort12
                                          where: $where16
                                        ) {
                                          totalCount
                                        }
                                        status(options: $options4, where: $where18) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after13
                                            first: $first13
                                            sort: $sort13
                                            where: $where17
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        statusConnection(
                                          after: $after14
                                          first: $first14
                                          sort: $sort14
                                          where: $where19
                                        ) {
                                          totalCount
                                        }
                                        tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where20) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        type(options: $options7, where: $where26) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          products(options: $options6, where: $where25) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            inventory
                                            name
                                            publishedAt
                                            tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where21) {
                                              totalCount
                                            }
                                            type(options: $options5, where: $where23) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after17
                                                first: $first17
                                                sort: $sort17
                                                where: $where22
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where24) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where27) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                              }
                              updatedAt
                              username
                            }
                            updatedAt
                          }
                          updatedAt
                        }
                        imagesConnection(
                          after: $after20
                          first: $first20
                          sort: $sort20
                          where: $where36
                        ) {
                          totalCount
                        }
                        inventory
                        name
                        publishedAt
                        publishedBy(options: $options16, where: $where37) {
                          createdAt
                          deletedAt
                          id
                          name
                          updatedAt
                          username
                        }
                        publishedByConnection(
                          after: $after21
                          first: $first21
                          sort: $sort21
                          where: $where38
                        ) {
                          totalCount
                        }
                        status(options: $options17, where: $where39) {
                          createdAt
                          deletedAt
                          description
                          id
                          name
                          updatedAt
                        }
                        statusConnection(
                          after: $after22
                          first: $first22
                          sort: $sort22
                          where: $where40
                        ) {
                          totalCount
                        }
                        tags(options: $options18, where: $where41) {
                          createdAt
                          deletedAt
                          description
                          id
                          name
                          updatedAt
                        }
                        tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where42) {
                          totalCount
                        }
                        type(options: $options19, where: $where43) {
                          createdAt
                          deletedAt
                          description
                          id
                          name
                          updatedAt
                        }
                        typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where44) {
                          totalCount
                        }
                        updatedAt
                      }
                      id
                      name
                      updatedAt
                    }
                    inventory
                    name
                    publishedAt
                    updatedAt
                  }
                  updatedAt
                }
                featuredImageConnection(
                  after: $after25
                  first: $first25
                  sort: $sort25
                  where: $where49
                ) {
                  totalCount
                }
                id
                images(options: $options24, where: $where50) {
                  createdAt
                  deletedAt
                  description
                  id
                  name
                  updatedAt
                }
                imagesConnection(
                  after: $after26
                  first: $first26
                  sort: $sort26
                  where: $where51
                ) {
                  totalCount
                }
                inventory
                name
                publishedAt
                publishedBy(options: $options25, where: $where52) {
                  createdAt
                  deletedAt
                  id
                  name
                  updatedAt
                  username
                }
                publishedByConnection(
                  after: $after27
                  first: $first27
                  sort: $sort27
                  where: $where53
                ) {
                  totalCount
                }
                status(options: $options26, where: $where54) {
                  createdAt
                  deletedAt
                  description
                  id
                  name
                  updatedAt
                }
                statusConnection(
                  after: $after28
                  first: $first28
                  sort: $sort28
                  where: $where55
                ) {
                  totalCount
                }
                tags(options: $options27, where: $where56) {
                  createdAt
                  deletedAt
                  description
                  id
                  name
                  updatedAt
                }
                tagsConnection(after: $after29, first: $first29, sort: $sort29, where: $where57) {
                  totalCount
                }
                type(options: $options28, where: $where58) {
                  createdAt
                  deletedAt
                  description
                  id
                  name
                  updatedAt
                }
                typeConnection(after: $after30, first: $first30, sort: $sort30, where: $where59) {
                  totalCount
                }
                updatedAt
              }
            }
            totalCount
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      id
      name
      updatedAt
    }
    id
    inventory
    name
    publishedAt
    updatedAt
  }
}
    `;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductsCountDocument = gql`
    query productsCount($where: ProductWhere) {
  productsCount(where: $where)
}
    `;
export type ProductsCountQueryResult = Apollo.QueryResult<ProductsCountQuery, ProductsCountQueryVariables>;
export const TagsDocument = gql`
    query tags($after: String, $first: Int, $sort: [ImageProductsConnectionSort!], $where: ImageProductsConnectionWhere, $options: ImageOptions, $where1: ImageWhere, $after1: String, $first1: Int, $sort1: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where3: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageFeaturesConnectionSort!], $where4: ImageFeaturesConnectionWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $after5: String, $first5: Int, $sort5: [ImageProductsConnectionSort!], $where6: ImageProductsConnectionWhere, $options1: ImageOptions, $where7: ImageWhere, $after6: String, $first6: Int, $sort6: [UserImagesConnectionSort!], $where8: UserImagesConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductPublishedByConnectionSort!], $where9: ProductPublishedByConnectionWhere, $after8: String, $first8: Int, $sort8: [ProductStatusConnectionSort!], $where10: ProductStatusConnectionWhere, $after9: String, $first9: Int, $sort9: [TagTagsConnectionSort!], $where11: TagTagsConnectionWhere, $options2: TagOptions, $where12: TagWhere, $after10: String, $first10: Int, $sort10: [ProductTagsConnectionSort!], $where13: ProductTagsConnectionWhere, $after11: String, $first11: Int, $sort11: [ProductTypeConnectionSort!], $where14: ProductTypeConnectionWhere, $options3: ProductOptions, $where15: ProductWhere, $after12: String, $first12: Int, $sort12: [ProductTypeProductsConnectionSort!], $where16: ProductTypeProductsConnectionWhere, $options4: ProductTypeOptions, $where17: ProductTypeWhere, $options5: ProductOptions, $where18: ProductWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where19: ProductStatusProductsConnectionWhere, $options6: ProductStatusOptions, $where20: ProductStatusWhere, $options7: ProductOptions, $where21: ProductWhere, $after14: String, $first14: Int, $sort14: [UserProductsConnectionSort!], $where22: UserProductsConnectionWhere, $options8: UserOptions, $where23: UserWhere, $options9: ProductOptions, $where24: ProductWhere, $options10: ImageOptions, $where25: ImageWhere, $after15: String, $first15: Int, $sort15: [ProductImagesConnectionSort!], $where26: ProductImagesConnectionWhere, $options11: UserOptions, $where27: UserWhere, $after16: String, $first16: Int, $sort16: [ProductPublishedByConnectionSort!], $where28: ProductPublishedByConnectionWhere, $options12: ProductStatusOptions, $where29: ProductStatusWhere, $after17: String, $first17: Int, $sort17: [ProductStatusConnectionSort!], $where30: ProductStatusConnectionWhere, $options13: TagOptions, $where31: TagWhere, $after18: String, $first18: Int, $sort18: [ProductTagsConnectionSort!], $where32: ProductTagsConnectionWhere, $options14: ProductTypeOptions, $where33: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where34: ProductTypeConnectionWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductFeaturedImageConnectionSort!], $where39: ProductFeaturedImageConnectionWhere, $options19: ImageOptions, $where40: ImageWhere, $after21: String, $first21: Int, $sort21: [ProductImagesConnectionSort!], $where41: ProductImagesConnectionWhere, $options20: UserOptions, $where42: UserWhere, $after22: String, $first22: Int, $sort22: [ProductPublishedByConnectionSort!], $where43: ProductPublishedByConnectionWhere, $options21: ProductStatusOptions, $where44: ProductStatusWhere, $after23: String, $first23: Int, $sort23: [ProductStatusConnectionSort!], $where45: ProductStatusConnectionWhere, $options22: TagOptions, $where46: TagWhere, $after24: String, $first24: Int, $sort24: [ProductTagsConnectionSort!], $where47: ProductTagsConnectionWhere, $options23: ProductTypeOptions, $where48: ProductTypeWhere, $after25: String, $first25: Int, $sort25: [ProductTypeConnectionSort!], $where49: ProductTypeConnectionWhere, $after26: String, $first26: Int, $sort26: [ImageFeaturesConnectionSort!], $where50: ImageFeaturesConnectionWhere, $options24: ImageOptions, $where51: ImageWhere, $options25: ProductOptions, $where52: ProductWhere, $options26: ImageOptions, $where53: ImageWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where54: ProductFeaturedImageConnectionWhere, $options27: ImageOptions, $where55: ImageWhere, $after28: String, $first28: Int, $sort28: [ProductImagesConnectionSort!], $where56: ProductImagesConnectionWhere, $options28: UserOptions, $where57: UserWhere, $after29: String, $first29: Int, $sort29: [ProductPublishedByConnectionSort!], $where58: ProductPublishedByConnectionWhere, $options29: ProductStatusOptions, $where59: ProductStatusWhere, $after30: String, $first30: Int, $sort30: [ProductStatusConnectionSort!], $where60: ProductStatusConnectionWhere, $options30: ProductTypeOptions, $where61: ProductTypeWhere, $after31: String, $first31: Int, $sort31: [ProductTypeConnectionSort!], $where62: ProductTypeConnectionWhere, $options31: ProductOptions, $where63: ProductWhere, $options32: TagOptions, $where64: TagWhere) {
  tags(options: $options32, where: $where64) {
    createdAt
    deletedAt
    description
    id
    name
    tags(options: $options31, where: $where63) {
      createdAt
      deletedAt
      description
      featuredImage(options: $options26, where: $where53) {
        createdAt
        deletedAt
        description
        features(options: $options25, where: $where52) {
          createdAt
          deletedAt
          description
          featuredImage(options: $options24, where: $where51) {
            createdAt
            deletedAt
            description
            featuresConnection(
              after: $after26
              first: $first26
              sort: $sort26
              where: $where50
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  featuredImage(options: $options18, where: $where38) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    products(options: $options17, where: $where37) {
                      createdAt
                      deletedAt
                      description
                      featuredImage(options: $options, where: $where1) {
                        createdAt
                        deletedAt
                        description
                        id
                        name
                        productsConnection(after: $after, first: $first, sort: $sort, where: $where) {
                          edges {
                            cursor
                          }
                          pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            startCursor
                          }
                          totalCount
                        }
                        updatedAt
                      }
                      featuredImageConnection(
                        after: $after1
                        first: $first1
                        sort: $sort1
                        where: $where2
                      ) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      images(options: $options16, where: $where36) {
                        createdAt
                        deletedAt
                        description
                        features(options: $options15, where: $where35) {
                          createdAt
                          deletedAt
                          description
                          featuredImageConnection(
                            after: $after2
                            first: $first2
                            sort: $sort2
                            where: $where3
                          ) {
                            totalCount
                          }
                          id
                          images(options: $options10, where: $where25) {
                            createdAt
                            deletedAt
                            description
                            featuresConnection(after: $after3, first: $first3, sort: $sort3, where: $where4) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            name
                            products(options: $options9, where: $where24) {
                              createdAt
                              deletedAt
                              description
                              id
                              imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              inventory
                              name
                              publishedAt
                              publishedBy(options: $options8, where: $where23) {
                                createdAt
                                deletedAt
                                id
                                images(options: $options1, where: $where7) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  productsConnection(after: $after5, first: $first5, sort: $sort5, where: $where6) {
                                    totalCount
                                  }
                                  updatedAt
                                }
                                imagesConnection(after: $after6, first: $first6, sort: $sort6, where: $where8) {
                                  totalCount
                                }
                                name
                                products(options: $options7, where: $where21) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  inventory
                                  name
                                  publishedAt
                                  publishedByConnection(
                                    after: $after7
                                    first: $first7
                                    sort: $sort7
                                    where: $where9
                                  ) {
                                    edges {
                                      cursor
                                    }
                                    pageInfo {
                                      endCursor
                                      hasNextPage
                                      hasPreviousPage
                                      startCursor
                                    }
                                    totalCount
                                  }
                                  status(options: $options6, where: $where20) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    name
                                    products(options: $options5, where: $where18) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      inventory
                                      name
                                      publishedAt
                                      statusConnection(after: $after8, first: $first8, sort: $sort8, where: $where10) {
                                        edges {
                                          cursor
                                        }
                                        pageInfo {
                                          endCursor
                                          hasNextPage
                                          hasPreviousPage
                                          startCursor
                                        }
                                        totalCount
                                      }
                                      tags(options: $options2, where: $where12) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        tagsConnection(after: $after9, first: $first9, sort: $sort9, where: $where11) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      tagsConnection(after: $after10, first: $first10, sort: $sort10, where: $where13) {
                                        totalCount
                                      }
                                      type(options: $options4, where: $where17) {
                                        createdAt
                                        deletedAt
                                        description
                                        id
                                        name
                                        products(options: $options3, where: $where15) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          inventory
                                          name
                                          publishedAt
                                          typeConnection(after: $after11, first: $first11, sort: $sort11, where: $where14) {
                                            edges {
                                              cursor
                                            }
                                            pageInfo {
                                              endCursor
                                              hasNextPage
                                              hasPreviousPage
                                              startCursor
                                            }
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        productsConnection(
                                          after: $after12
                                          first: $first12
                                          sort: $sort12
                                          where: $where16
                                        ) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    productsConnection(
                                      after: $after13
                                      first: $first13
                                      sort: $sort13
                                      where: $where19
                                    ) {
                                      totalCount
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                productsConnection(
                                  after: $after14
                                  first: $first14
                                  sort: $sort14
                                  where: $where22
                                ) {
                                  totalCount
                                }
                                updatedAt
                                username
                              }
                              updatedAt
                            }
                            updatedAt
                          }
                          imagesConnection(
                            after: $after15
                            first: $first15
                            sort: $sort15
                            where: $where26
                          ) {
                            totalCount
                          }
                          inventory
                          name
                          publishedAt
                          publishedBy(options: $options11, where: $where27) {
                            createdAt
                            deletedAt
                            id
                            name
                            updatedAt
                            username
                          }
                          publishedByConnection(
                            after: $after16
                            first: $first16
                            sort: $sort16
                            where: $where28
                          ) {
                            totalCount
                          }
                          status(options: $options12, where: $where29) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          statusConnection(
                            after: $after17
                            first: $first17
                            sort: $sort17
                            where: $where30
                          ) {
                            totalCount
                          }
                          tags(options: $options13, where: $where31) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          tagsConnection(after: $after18, first: $first18, sort: $sort18, where: $where32) {
                            totalCount
                          }
                          type(options: $options14, where: $where33) {
                            createdAt
                            deletedAt
                            description
                            id
                            name
                            updatedAt
                          }
                          typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where34) {
                            totalCount
                          }
                          updatedAt
                        }
                        id
                        name
                        updatedAt
                      }
                      inventory
                      name
                      publishedAt
                      updatedAt
                    }
                    updatedAt
                  }
                  featuredImageConnection(
                    after: $after20
                    first: $first20
                    sort: $sort20
                    where: $where39
                  ) {
                    totalCount
                  }
                  id
                  images(options: $options19, where: $where40) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  imagesConnection(
                    after: $after21
                    first: $first21
                    sort: $sort21
                    where: $where41
                  ) {
                    totalCount
                  }
                  inventory
                  name
                  publishedAt
                  publishedBy(options: $options20, where: $where42) {
                    createdAt
                    deletedAt
                    id
                    name
                    updatedAt
                    username
                  }
                  publishedByConnection(
                    after: $after22
                    first: $first22
                    sort: $sort22
                    where: $where43
                  ) {
                    totalCount
                  }
                  status(options: $options21, where: $where44) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  statusConnection(
                    after: $after23
                    first: $first23
                    sort: $sort23
                    where: $where45
                  ) {
                    totalCount
                  }
                  tags(options: $options22, where: $where46) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  tagsConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                    totalCount
                  }
                  type(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    name
                    updatedAt
                  }
                  typeConnection(after: $after25, first: $first25, sort: $sort25, where: $where49) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            name
            updatedAt
          }
          id
          inventory
          name
          publishedAt
          updatedAt
        }
        id
        name
        updatedAt
      }
      featuredImageConnection(
        after: $after27
        first: $first27
        sort: $sort27
        where: $where54
      ) {
        totalCount
      }
      id
      images(options: $options27, where: $where55) {
        createdAt
        deletedAt
        description
        id
        name
        updatedAt
      }
      imagesConnection(
        after: $after28
        first: $first28
        sort: $sort28
        where: $where56
      ) {
        totalCount
      }
      inventory
      name
      publishedAt
      publishedBy(options: $options28, where: $where57) {
        createdAt
        deletedAt
        id
        name
        updatedAt
        username
      }
      publishedByConnection(
        after: $after29
        first: $first29
        sort: $sort29
        where: $where58
      ) {
        totalCount
      }
      status(options: $options29, where: $where59) {
        createdAt
        deletedAt
        description
        id
        name
        updatedAt
      }
      statusConnection(
        after: $after30
        first: $first30
        sort: $sort30
        where: $where60
      ) {
        totalCount
      }
      type(options: $options30, where: $where61) {
        createdAt
        deletedAt
        description
        id
        name
        updatedAt
      }
      typeConnection(after: $after31, first: $first31, sort: $sort31, where: $where62) {
        totalCount
      }
      updatedAt
    }
    updatedAt
  }
}
    `;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const TagsCountDocument = gql`
    query tagsCount($where: TagWhere) {
  tagsCount(where: $where)
}
    `;
export type TagsCountQueryResult = Apollo.QueryResult<TagsCountQuery, TagsCountQueryVariables>;
export const UsersDocument = gql`
    query users($after: String, $first: Int, $sort: [ImageFeaturesConnectionSort!], $where: ImageFeaturesConnectionWhere, $after1: String, $first1: Int, $sort1: [ImageFeaturesConnectionSort!], $where1: ImageFeaturesConnectionWhere, $after2: String, $first2: Int, $sort2: [ProductFeaturedImageConnectionSort!], $where2: ProductFeaturedImageConnectionWhere, $after3: String, $first3: Int, $sort3: [ImageProductsConnectionSort!], $where3: ImageProductsConnectionWhere, $options: ImageOptions, $where4: ImageWhere, $after4: String, $first4: Int, $sort4: [ProductImagesConnectionSort!], $where5: ProductImagesConnectionWhere, $options1: ImageOptions, $where6: ImageWhere, $after5: String, $first5: Int, $sort5: [UserImagesConnectionSort!], $where7: UserImagesConnectionWhere, $after6: String, $first6: Int, $sort6: [ProductPublishedByConnectionSort!], $where8: ProductPublishedByConnectionWhere, $after7: String, $first7: Int, $sort7: [ProductStatusConnectionSort!], $where9: ProductStatusConnectionWhere, $after8: String, $first8: Int, $sort8: [ImageProductsConnectionSort!], $where10: ImageProductsConnectionWhere, $options2: ImageOptions, $where11: ImageWhere, $after9: String, $first9: Int, $sort9: [ProductFeaturedImageConnectionSort!], $where12: ProductFeaturedImageConnectionWhere, $options3: ImageOptions, $where13: ImageWhere, $after10: String, $first10: Int, $sort10: [ProductImagesConnectionSort!], $where14: ProductImagesConnectionWhere, $after11: String, $first11: Int, $sort11: [UserProductsConnectionSort!], $where15: UserProductsConnectionWhere, $options4: UserOptions, $where16: UserWhere, $after12: String, $first12: Int, $sort12: [ProductPublishedByConnectionSort!], $where17: ProductPublishedByConnectionWhere, $after13: String, $first13: Int, $sort13: [ProductStatusProductsConnectionSort!], $where18: ProductStatusProductsConnectionWhere, $options5: ProductStatusOptions, $where19: ProductStatusWhere, $after14: String, $first14: Int, $sort14: [ProductStatusConnectionSort!], $where20: ProductStatusConnectionWhere, $after15: String, $first15: Int, $sort15: [ProductTagsConnectionSort!], $where21: ProductTagsConnectionWhere, $after16: String, $first16: Int, $sort16: [ProductTagsConnectionSort!], $where22: ProductTagsConnectionWhere, $after17: String, $first17: Int, $sort17: [ProductTypeProductsConnectionSort!], $where23: ProductTypeProductsConnectionWhere, $options6: ProductTypeOptions, $where24: ProductTypeWhere, $after18: String, $first18: Int, $sort18: [ProductTypeConnectionSort!], $where25: ProductTypeConnectionWhere, $options7: ProductOptions, $where26: ProductWhere, $options8: ProductTypeOptions, $where27: ProductTypeWhere, $after19: String, $first19: Int, $sort19: [ProductTypeConnectionSort!], $where28: ProductTypeConnectionWhere, $options9: ProductOptions, $where29: ProductWhere, $options10: TagOptions, $where30: TagWhere, $options11: ProductOptions, $where31: ProductWhere, $options12: ProductStatusOptions, $where32: ProductStatusWhere, $options13: ProductOptions, $where33: ProductWhere, $options14: UserOptions, $where34: UserWhere, $options15: ProductOptions, $where35: ProductWhere, $options16: ImageOptions, $where36: ImageWhere, $options17: ProductOptions, $where37: ProductWhere, $options18: ImageOptions, $where38: ImageWhere, $after20: String, $first20: Int, $sort20: [ProductImagesConnectionSort!], $where39: ProductImagesConnectionWhere, $options19: UserOptions, $where40: UserWhere, $after21: String, $first21: Int, $sort21: [ProductPublishedByConnectionSort!], $where41: ProductPublishedByConnectionWhere, $options20: ProductStatusOptions, $where42: ProductStatusWhere, $after22: String, $first22: Int, $sort22: [ProductStatusConnectionSort!], $where43: ProductStatusConnectionWhere, $options21: TagOptions, $where44: TagWhere, $after23: String, $first23: Int, $sort23: [ProductTagsConnectionSort!], $where45: ProductTagsConnectionWhere, $options22: ProductTypeOptions, $where46: ProductTypeWhere, $after24: String, $first24: Int, $sort24: [ProductTypeConnectionSort!], $where47: ProductTypeConnectionWhere, $options23: ProductOptions, $where48: ProductWhere, $after25: String, $first25: Int, $sort25: [ImageFeaturesConnectionSort!], $where49: ImageFeaturesConnectionWhere, $options24: ProductOptions, $where50: ProductWhere, $after26: String, $first26: Int, $sort26: [ImageProductsConnectionSort!], $where51: ImageProductsConnectionWhere, $after27: String, $first27: Int, $sort27: [ProductFeaturedImageConnectionSort!], $where52: ProductFeaturedImageConnectionWhere, $options25: ProductOptions, $where53: ProductWhere, $options26: ImageOptions, $where54: ImageWhere, $options27: ProductOptions, $where55: ProductWhere, $options28: ImageOptions, $where56: ImageWhere, $after28: String, $first28: Int, $sort28: [UserImagesConnectionSort!], $where57: UserImagesConnectionWhere, $options29: ProductOptions, $where58: ProductWhere, $after29: String, $first29: Int, $sort29: [UserProductsConnectionSort!], $where59: UserProductsConnectionWhere, $options30: UserOptions, $where60: UserWhere) {
  users(options: $options30, where: $where60) {
    createdAt
    deletedAt
    id
    images(options: $options28, where: $where56) {
      createdAt
      deletedAt
      description
      features(options: $options27, where: $where55) {
        createdAt
        deletedAt
        description
        featuredImage(options: $options26, where: $where54) {
          createdAt
          deletedAt
          description
          features(options: $options25, where: $where53) {
            createdAt
            deletedAt
            description
            featuredImageConnection(
              after: $after27
              first: $first27
              sort: $sort27
              where: $where52
            ) {
              edges {
                cursor
                node {
                  createdAt
                  deletedAt
                  description
                  features(options: $options23, where: $where48) {
                    createdAt
                    deletedAt
                    description
                    id
                    images(options: $options18, where: $where38) {
                      createdAt
                      deletedAt
                      description
                      featuresConnection(after: $after, first: $first, sort: $sort, where: $where) {
                        edges {
                          cursor
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                          hasPreviousPage
                          startCursor
                        }
                        totalCount
                      }
                      id
                      name
                      products(options: $options17, where: $where37) {
                        createdAt
                        deletedAt
                        description
                        featuredImage(options: $options16, where: $where36) {
                          createdAt
                          deletedAt
                          description
                          featuresConnection(after: $after1, first: $first1, sort: $sort1, where: $where1) {
                            totalCount
                          }
                          id
                          name
                          products(options: $options15, where: $where35) {
                            createdAt
                            deletedAt
                            description
                            featuredImageConnection(
                              after: $after2
                              first: $first2
                              sort: $sort2
                              where: $where2
                            ) {
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            id
                            images(options: $options, where: $where4) {
                              createdAt
                              deletedAt
                              description
                              id
                              name
                              productsConnection(after: $after3, first: $first3, sort: $sort3, where: $where3) {
                                edges {
                                  cursor
                                }
                                pageInfo {
                                  endCursor
                                  hasNextPage
                                  hasPreviousPage
                                  startCursor
                                }
                                totalCount
                              }
                              updatedAt
                            }
                            imagesConnection(after: $after4, first: $first4, sort: $sort4, where: $where5) {
                              edges {
                                cursor
                              }
                              pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                              }
                              totalCount
                            }
                            inventory
                            name
                            publishedAt
                            publishedBy(options: $options14, where: $where34) {
                              createdAt
                              deletedAt
                              id
                              images(options: $options1, where: $where6) {
                                createdAt
                                deletedAt
                                description
                                id
                                name
                                updatedAt
                              }
                              imagesConnection(after: $after5, first: $first5, sort: $sort5, where: $where7) {
                                totalCount
                              }
                              name
                              products(options: $options13, where: $where33) {
                                createdAt
                                deletedAt
                                description
                                id
                                inventory
                                name
                                publishedAt
                                publishedByConnection(
                                  after: $after6
                                  first: $first6
                                  sort: $sort6
                                  where: $where8
                                ) {
                                  edges {
                                    cursor
                                  }
                                  pageInfo {
                                    endCursor
                                    hasNextPage
                                    hasPreviousPage
                                    startCursor
                                  }
                                  totalCount
                                }
                                status(options: $options12, where: $where32) {
                                  createdAt
                                  deletedAt
                                  description
                                  id
                                  name
                                  products(options: $options11, where: $where31) {
                                    createdAt
                                    deletedAt
                                    description
                                    id
                                    inventory
                                    name
                                    publishedAt
                                    statusConnection(after: $after7, first: $first7, sort: $sort7, where: $where9) {
                                      edges {
                                        cursor
                                      }
                                      pageInfo {
                                        endCursor
                                        hasNextPage
                                        hasPreviousPage
                                        startCursor
                                      }
                                      totalCount
                                    }
                                    tags(options: $options10, where: $where30) {
                                      createdAt
                                      deletedAt
                                      description
                                      id
                                      name
                                      tags(options: $options9, where: $where29) {
                                        createdAt
                                        deletedAt
                                        description
                                        featuredImage(options: $options2, where: $where11) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after8
                                            first: $first8
                                            sort: $sort8
                                            where: $where10
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        featuredImageConnection(
                                          after: $after9
                                          first: $first9
                                          sort: $sort9
                                          where: $where12
                                        ) {
                                          totalCount
                                        }
                                        id
                                        images(options: $options3, where: $where13) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          updatedAt
                                        }
                                        imagesConnection(
                                          after: $after10
                                          first: $first10
                                          sort: $sort10
                                          where: $where14
                                        ) {
                                          totalCount
                                        }
                                        inventory
                                        name
                                        publishedAt
                                        publishedBy(options: $options4, where: $where16) {
                                          createdAt
                                          deletedAt
                                          id
                                          name
                                          productsConnection(
                                            after: $after11
                                            first: $first11
                                            sort: $sort11
                                            where: $where15
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                          username
                                        }
                                        publishedByConnection(
                                          after: $after12
                                          first: $first12
                                          sort: $sort12
                                          where: $where17
                                        ) {
                                          totalCount
                                        }
                                        status(options: $options5, where: $where19) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          productsConnection(
                                            after: $after13
                                            first: $first13
                                            sort: $sort13
                                            where: $where18
                                          ) {
                                            totalCount
                                          }
                                          updatedAt
                                        }
                                        statusConnection(
                                          after: $after14
                                          first: $first14
                                          sort: $sort14
                                          where: $where20
                                        ) {
                                          totalCount
                                        }
                                        tagsConnection(after: $after15, first: $first15, sort: $sort15, where: $where21) {
                                          edges {
                                            cursor
                                          }
                                          pageInfo {
                                            endCursor
                                            hasNextPage
                                            hasPreviousPage
                                            startCursor
                                          }
                                          totalCount
                                        }
                                        type(options: $options8, where: $where27) {
                                          createdAt
                                          deletedAt
                                          description
                                          id
                                          name
                                          products(options: $options7, where: $where26) {
                                            createdAt
                                            deletedAt
                                            description
                                            id
                                            inventory
                                            name
                                            publishedAt
                                            tagsConnection(after: $after16, first: $first16, sort: $sort16, where: $where22) {
                                              totalCount
                                            }
                                            type(options: $options6, where: $where24) {
                                              createdAt
                                              deletedAt
                                              description
                                              id
                                              name
                                              productsConnection(
                                                after: $after17
                                                first: $first17
                                                sort: $sort17
                                                where: $where23
                                              ) {
                                                totalCount
                                              }
                                              updatedAt
                                            }
                                            typeConnection(after: $after18, first: $first18, sort: $sort18, where: $where25) {
                                              edges {
                                                cursor
                                              }
                                              pageInfo {
                                                endCursor
                                                hasNextPage
                                                hasPreviousPage
                                                startCursor
                                              }
                                              totalCount
                                            }
                                            updatedAt
                                          }
                                          updatedAt
                                        }
                                        typeConnection(after: $after19, first: $first19, sort: $sort19, where: $where28) {
                                          totalCount
                                        }
                                        updatedAt
                                      }
                                      updatedAt
                                    }
                                    updatedAt
                                  }
                                  updatedAt
                                }
                                updatedAt
                              }
                              updatedAt
                              username
                            }
                            updatedAt
                          }
                          updatedAt
                        }
                        id
                        inventory
                        name
                        publishedAt
                        updatedAt
                      }
                      updatedAt
                    }
                    imagesConnection(
                      after: $after20
                      first: $first20
                      sort: $sort20
                      where: $where39
                    ) {
                      totalCount
                    }
                    inventory
                    name
                    publishedAt
                    publishedBy(options: $options19, where: $where40) {
                      createdAt
                      deletedAt
                      id
                      name
                      updatedAt
                      username
                    }
                    publishedByConnection(
                      after: $after21
                      first: $first21
                      sort: $sort21
                      where: $where41
                    ) {
                      totalCount
                    }
                    status(options: $options20, where: $where42) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    statusConnection(
                      after: $after22
                      first: $first22
                      sort: $sort22
                      where: $where43
                    ) {
                      totalCount
                    }
                    tags(options: $options21, where: $where44) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    tagsConnection(after: $after23, first: $first23, sort: $sort23, where: $where45) {
                      totalCount
                    }
                    type(options: $options22, where: $where46) {
                      createdAt
                      deletedAt
                      description
                      id
                      name
                      updatedAt
                    }
                    typeConnection(after: $after24, first: $first24, sort: $sort24, where: $where47) {
                      totalCount
                    }
                    updatedAt
                  }
                  featuresConnection(
                    after: $after25
                    first: $first25
                    sort: $sort25
                    where: $where49
                  ) {
                    totalCount
                  }
                  id
                  name
                  products(options: $options24, where: $where50) {
                    createdAt
                    deletedAt
                    description
                    id
                    inventory
                    name
                    publishedAt
                    updatedAt
                  }
                  productsConnection(
                    after: $after26
                    first: $first26
                    sort: $sort26
                    where: $where51
                  ) {
                    totalCount
                  }
                  updatedAt
                }
              }
              totalCount
            }
            id
            inventory
            name
            publishedAt
            updatedAt
          }
          id
          name
          updatedAt
        }
        id
        inventory
        name
        publishedAt
        updatedAt
      }
      id
      name
      updatedAt
    }
    imagesConnection(
      after: $after28
      first: $first28
      sort: $sort28
      where: $where57
    ) {
      totalCount
    }
    name
    products(options: $options29, where: $where58) {
      createdAt
      deletedAt
      description
      id
      inventory
      name
      publishedAt
      updatedAt
    }
    productsConnection(
      after: $after29
      first: $first29
      sort: $sort29
      where: $where59
    ) {
      totalCount
    }
    updatedAt
    username
  }
}
    `;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UsersCountDocument = gql`
    query usersCount($where: UserWhere) {
  usersCount(where: $where)
}
    `;
export type UsersCountQueryResult = Apollo.QueryResult<UsersCountQuery, UsersCountQueryVariables>;