output "cloudwatch_logs_role_arn" {
    value = aws_iam_role.logging_role.arn
}