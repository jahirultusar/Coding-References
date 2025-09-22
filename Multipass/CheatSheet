# This is Canonical's Multipass CLI Cheatsheet

## 🔹 Basics
```bash
multipass version                 # Show multipass version
multipass help                    # Show all commands
multipass help <command>          # Show help for a specific command
```

---

## 🔹 Launch Instances
```bash
multipass launch                  # Launch a new Ubuntu instance with default name
multipass launch <release>        # Launch with a specific Ubuntu release (e.g. jammy, focal, bionic)
multipass launch --name my-vm     # Launch and give instance a name
multipass launch --cpus 2         # Launch with 2 CPUs
multipass launch --mem 4G         # Launch with 4 GB RAM
multipass launch --disk 20G       # Launch with 20 GB disk
multipass launch --cloud-init <file.yaml>   # Launch with cloud-init config
```

---

## 🔹 List & Info
```bash
multipass list                    # List all running/stopped instances
multipass info <name>             # Get detailed info about a specific instance
```

---

## 🔹 Manage Instances
```bash
multipass start <name>            # Start an instance
multipass stop <name>             # Stop an instance
multipass restart <name>          # Restart an instance
multipass suspend <name>          # Suspend an instance
multipass delete <name>           # Delete an instance (mark for deletion)
multipass purge                   # Remove all deleted instances permanently
```

---

## 🔹 Access Instances
```bash
multipass shell <name>            # Open an interactive shell into an instance
multipass exec <name> -- <cmd>    # Run a command inside an instance
```

---

## 🔹 File Transfer
```bash
multipass transfer local.txt <name>:/home/ubuntu/   # Copy file to VM
multipass transfer <name>:/home/ubuntu/file.txt ./  # Copy file from VM to host
```

---

## 🔹 Networking & Mounts
```bash
multipass networks                # List available networks
multipass set local.driver=qemu   # Change driver (Linux: qemu/KVM)
multipass mount ./data <name>:/data     # Mount local folder into instance
multipass umount <name>:/data           # Unmount folder from instance
```

---

## 🔹 Images
```bash
multipass find                    # Show all available images
multipass launch <image>          # Launch instance with a specific image
```

---

## 🔹 Multipass Daemon
```bash
multipass stop --all              # Stop all instances
multipass delete --all            # Delete all instances
multipass purge                   # Purge all deleted instances
```

---

## 🔹 Cloud-init
```bash
multipass launch --cloud-init my-config.yaml
```
Use a `cloud-init.yaml` file to preconfigure users, packages, networking, etc.

---

## 🔹 Example Workflows
```bash
# Create a dev VM with Docker preinstalled
multipass launch --name docker-vm --mem 4G --disk 20G --cpus 2 --cloud-init docker.yaml

# Run a quick command on a VM
multipass exec docker-vm -- docker ps

# Copy project files into VM
multipass transfer ./project docker-vm:/home/ubuntu/project
```

---

⚡ **Tip:** Multipass integrates great for **Docker Swarm/K8s testing** since you can quickly spin up multiple lightweight VMs and configure them as swarm managers/workers.
