resource "aws_appsync_resolver" "resolver" {
  api_id      = var.appsync_api_id
  type        = var.type
  field       = var.field
  code = var.code
  data_source = aws_appsync_datasource.products_datasource.name
  runtime {
    name            = "APPSYNC_JS"
    runtime_version = "1.0.0"
  }
}

