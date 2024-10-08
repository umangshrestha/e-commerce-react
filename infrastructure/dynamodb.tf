resource "aws_dynamodb_table" "products_table" {
  name           = "PRODUCTS_TABLE"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "productId"
  attribute {
    name = "productId"
    type = "S"
  }
}

resource "aws_dynamodb_table" "users_table" {
  name           = "USERS_TABLE"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "userId"
  attribute {
    name = "userId"
    type = "S"
  }
}

resource "aws_dynamodb_table" "orders_table" {
  name           = "ORDERS_TABLE"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "userId"
  range_key      = "orderId"
  attribute {
    name = "userId"
    type = "S"
  }
    attribute {
        name = "orderId"
        type = "S"
    }
}


