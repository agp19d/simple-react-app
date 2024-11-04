# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "rg-terraform"
    storage_account_name = "satfstate1928"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}


provider "azurerm" {
  features {}
}