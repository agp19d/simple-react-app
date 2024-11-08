### outputs.tf
output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "storage_account_name" {
  value = azurerm_storage_account.storage.name
}

output "static_website_url" {
  value = azurerm_storage_account.storage.primary_web_host
  description = "The URL of the static website."
}
