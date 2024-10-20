export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Cart = {
  __typename?: 'Cart';
  count: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  items: Array<CartItem>;
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CartInput = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type CartItem = {
  __typename?: 'CartItem';
  createdAt: Scalars['String']['output'];
  product?: Maybe<Product>;
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CreateProductInput = {
  availableQuantity: Scalars['Int']['input'];
  badgeText: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  limitPerTransaction: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productId?: InputMaybe<Scalars['String']['input']>;
  rating?: Scalars['Float']['input'];
  tags: Array<Scalars['String']['input']>;
  unit: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addItemToCart: Cart;
  clearCart: Cart;
  createProduct: Product;
  removeProduct: Scalars['String']['output'];
};

export type MutationAddItemToCartArgs = {
  cartInput: CartInput;
};

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};

export type MutationRemoveProductArgs = {
  productId: Scalars['String']['input'];
};

export type PaginatedProduct = {
  __typename?: 'PaginatedProduct';
  items: Array<Product>;
  pagination: Pagination;
};

export type Pagination = {
  __typename?: 'Pagination';
  limit: Scalars['Int']['output'];
  next?: Maybe<Scalars['String']['output']>;
  prev?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  availableQuantity: Scalars['Int']['output'];
  badgeText: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  imageUrl: Scalars['String']['output'];
  limitPerTransaction: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productId: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  tags: Array<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cart: Cart;
  cartItem: CartItem;
  carts: PaginatedProduct;
  product?: Maybe<Product>;
  products: PaginatedProduct;
};

export type QueryCartItemArgs = {
  productId: Scalars['String']['input'];
};

export type QueryCartsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
};

export type QueryProductArgs = {
  productId: Scalars['String']['input'];
};

export type QueryProductsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  cartCountUpdated: Scalars['Int']['output'];
};
