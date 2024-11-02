# terraform {
#   backend "azurerm" {
#     resource_group_name   = "my-resource-group"
#     storage_account_name  = "mystoragetfstate"
#     container_name        = "tfstate"
#     key                   = "terraform.tfstate"
#   }
# }


# Configure the Azure provider
provider "azurerm" {
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

# Create a storage account
resource "azurerm_storage_account" "storage" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

# Enable static website hosting on the storage account
resource "azurerm_storage_account_static_website" "static_website" {
  storage_account_id = azurerm_storage_account.storage.id

  index_document     = "index.html"
  error_404_document = "index.html"
}