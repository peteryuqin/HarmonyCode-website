# HarmonyCode Installation Guide

## 🚀 Quick Install (Recommended)

The fastest way to get started with HarmonyCode:

```bash
npx harmonycode@latest init
```

That's it! You're ready to collaborate.

## 📦 Installation Methods

### Method 1: NPX (No Installation Required)
Perfect for trying out HarmonyCode or one-off projects.

```bash
# Initialize a new project
npx harmonycode init

# Run any command
npx harmonycode join "Developer"
npx harmonycode tasks
```

### Method 2: Global Installation
Best for frequent use across multiple projects.

```bash
# Install globally with npm
npm install -g harmonycode

# Or with yarn
yarn global add harmonycode

# Or with pnpm
pnpm add -g harmonycode

# Verify installation
harmonycode --version
```

### Method 3: Local Project Installation
Ideal for team projects with version control.

```bash
# Add to your project
npm install --save-dev harmonycode

# Add to package.json scripts
{
  "scripts": {
    "collab": "harmonycode"
  }
}

# Run with npm
npm run collab init
```

### Method 4: Direct Download
For environments without npm.

```bash
# Clone the repository
git clone https://github.com/yourusername/harmonycode.git
cd harmonycode

# Install dependencies
npm install

# Link for global use
npm link
```

## 🔧 System Requirements

### Minimum Requirements
- **Node.js**: Version 14.0.0 or higher
- **npm**: Version 6.0.0 or higher
- **Operating System**: Windows, macOS, or Linux
- **Disk Space**: 50MB free space

### Checking Your Environment
```bash
# Check Node.js version
node --version
# Should output: v14.0.0 or higher

# Check npm version
npm --version
# Should output: 6.0.0 or higher
```

### Installing Node.js
If you don't have Node.js installed:

**Option 1: Official Installer**
Download from [nodejs.org](https://nodejs.org)

**Option 2: Using NVM (Node Version Manager)**
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install latest Node.js
nvm install node
nvm use node
```

**Option 3: Package Managers**
```bash
# macOS with Homebrew
brew install node

# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Windows with Chocolatey
choco install nodejs
```

## 🏗️ Project Setup

### New Project
```bash
# Create project directory
mkdir my-ai-collaboration
cd my-ai-collaboration

# Initialize HarmonyCode
harmonycode init

# You'll see:
# ✅ Created .claude-collab directory
# ✅ Initialized DISCUSSION_BOARD.md
# ✅ Created TASK_BOARD.md
# 🎉 HarmonyCode workspace ready!
```

### Existing Project
```bash
# Navigate to your project
cd existing-project

# Initialize HarmonyCode (safe - won't overwrite files)
harmonycode init

# Start collaborating!
harmonycode join "Backend-Dev"
```

## 🐳 Docker Installation (Optional)

For containerized environments:

```dockerfile
# Dockerfile
FROM node:18-alpine
RUN npm install -g harmonycode
WORKDIR /app
CMD ["harmonycode", "help"]
```

```bash
# Build and run
docker build -t harmonycode .
docker run -it -v $(pwd):/app harmonycode init
```

## ⚙️ Configuration

### Environment Variables
```bash
# Set custom workspace location
export HARMONYCODE_WORKSPACE="./.collaboration"

# Enable debug mode
export HARMONYCODE_DEBUG=true

# Set default role
export HARMONYCODE_DEFAULT_ROLE="Developer"
```

### Configuration File
Create `.harmonycode.json` in your project root:

```json
{
  "workspace": ".claude-collab",
  "defaultRole": "Developer",
  "features": {
    "autoRefresh": true,
    "notifications": true,
    "colorOutput": true
  },
  "tasks": {
    "maxConcurrent": 3,
    "autoAssign": false
  }
}
```

## 🔍 Verification

After installation, verify everything works:

```bash
# Check version
harmonycode --version
# Output: HarmonyCode v3.0.0

# Show help
harmonycode help
# Lists all available commands

# Test initialization
harmonycode init
# Should create workspace without errors

# Test joining
harmonycode join "Test-User"
# Output: ✅ Joined as Test-User
```

## 🚨 Troubleshooting

### Common Issues

**"command not found: harmonycode"**
```bash
# Reinstall globally
npm uninstall -g harmonycode
npm install -g harmonycode

# Or check npm global path
npm config get prefix
# Add to PATH if needed
```

**"EACCES: permission denied"**
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

**"Cannot find module"**
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
npm install -g harmonycode
```

### Getting Help
- 📚 Documentation: [docs.harmonycode.ai](https://docs.harmonycode.ai)
- 💬 Discord: [discord.gg/harmonycode](https://discord.gg/harmonycode)
- 🐛 Issues: [github.com/harmonycode/issues](https://github.com/harmonycode/issues)

## 🎯 Next Steps

Once installed:
1. Initialize your workspace: `harmonycode init`
2. Read the [Quickstart Guide](./quickstart.md)
3. Check out [example projects](./examples)
4. Join the community!

---

*Installation issues? We're here to help! Open an issue or join our Discord.*