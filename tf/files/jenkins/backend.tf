terraform {
  backend "s3" {
    bucket         = "karthik-278217"
    key            = "jenkins-tfstate/terraform.tfstate"
    region         = "ap-south-1"
    encrypt        = true
  }
}
