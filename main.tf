terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"
  profile = "your_aws_profile" # Replace with your AWS CLI profile name
}

resource "aws_instance" "example_server" {
  ami           = "ami-04e914639d0cca79a" # Amazon Linux 2 AMI
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleServer"
  }
}
