# Terraform 1.x Quick Cheatsheet

## Init & Workflow
```bash
terraform init                  # Init backend/providers
terraform plan                  # Preview changes
terraform apply                 # Apply changes
terraform apply -auto-approve   # Apply w/out prompt
terraform destroy               # Destroy infra
terraform refresh               # Sync state w/ real infra
```

## State & Workspaces
```bash
terraform state list            # List resources in state
terraform state show <addr>     # Show resource in state
terraform state mv A B          # Move resources in state
terraform state rm <addr>       # Remove from state

terraform workspace list        # List workspaces
terraform workspace new dev     # Create new workspace
terraform workspace select prod # Switch workspace
```

## Format, Validate & Graph
```bash
terraform fmt -recursive        # Format .tf files
terraform validate              # Validate syntax
terraform graph | dot -Tpng > graph.png
```

## Variables
```hcl
variable "region" {
  type    = string
  default = "eu-west-1"
}
```
Set values:
```bash
terraform apply -var="region=us-east-1"
terraform apply -var-file="prod.tfvars"
```

## Outputs
```hcl
output "ip" {
  value = aws_instance.web.public_ip
}
```
Show:
```bash
terraform output
terraform output -json
```

## Resource Basics
```hcl
resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t3.micro"
}
```

## Data Sources
```hcl
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
  filter { name = "name" values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-*"] }
}
```

## Meta-Arguments
```hcl
count  = 2
for_each = toset(["a","b"])
provider = aws.dr
depends_on = [aws_vpc.main]
lifecycle { prevent_destroy = true }
```

## Expressions
```hcl
# Interpolation
"${var.region}"
var.region

# Conditionals
count = var.enabled ? 1 : 0

# For loops
[for s in var.subnets : s.id]

# Merge / Map ops
merge(var.common_tags, { Name = "web" })
```

## Modules
```hcl
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "5.0"
  name    = "my-vpc"
  cidr    = "10.0.0.0/16"
}
```

## Import
```bash
terraform import aws_instance.web i-1234567890abcdef
```
