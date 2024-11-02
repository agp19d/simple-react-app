# Output the Storage Account Name
output "storage_account_name" {
  value       = azurerm_storage_account.storage.name
  description = "The name of the storage account."
}

# Output the URL for the static website
output "static_website_url" {
  value       = azurerm_storage_account_static_website.static_website.primary_endpoint
  description = "The URL of the static website."
}

