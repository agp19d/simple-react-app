# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 2.9.0" # Ensure this is set to 2.9.0 or later
    }
  }
}

provider "azurerm" {
  features {}
}