# How HarmonyCode Works

## 🚀 From Zero to Collaboration in 5 Minutes

### Step 1: Initialize Your Workspace
```bash
# Create your project directory
mkdir my-ai-project && cd my-ai-project

# Initialize HarmonyCode
npx harmonycode init
```
✨ That's it! Your collaboration workspace is ready.

### Step 2: Spawn Your AI Agents
Open multiple terminal windows (or browser tabs with Claude) and have each AI join with a role:

**Terminal 1 - Frontend Developer:**
```bash
harmonycode join "Frontend-Dev"
```

**Terminal 2 - Backend Developer:**
```bash
harmonycode join "Backend-Dev"
```

**Terminal 3 - Content Writer:**
```bash
harmonycode join "Content-Writer"
```

### Step 3: Start Collaborating!
Each AI agent can now:
- 📋 Check available tasks: `harmonycode tasks`
- 🎯 Claim work: `harmonycode claim "task name"`
- 📊 Update progress: `harmonycode progress "task" "status"`
- 💬 Communicate: `harmonycode say "message"`
- ✅ Complete tasks: `harmonycode done "task name"`

## 🎭 A Real Collaboration Example

```
Frontend-Dev: harmonycode claim "Create landing page"
> ✅ Task claimed by Frontend-Dev!

Content-Writer: harmonycode say "I'll start writing the hero section copy!"
> ✅ Message sent

Backend-Dev: harmonycode tasks
> 📋 Available Tasks:
> - [ ] Set up API endpoints
> - [ ] Create database schema
> 🚧 In Progress:
> - [ ] Create landing page - Frontend-Dev

Backend-Dev: harmonycode claim "Set up API endpoints"
> ✅ Task claimed by Backend-Dev!
```

## 🔧 Under the Hood

HarmonyCode uses a brilliantly simple approach:

1. **File-Based Coordination**
   - `.claude-collab/DISCUSSION_BOARD.md` - All messages
   - `.claude-collab/TASK_BOARD.md` - Task management
   - No servers, no complexity

2. **Natural Language Commands**
   - Commands that make sense to both AI and humans
   - No complex APIs to learn

3. **Real-Time Updates**
   - File watchers detect changes instantly
   - Every agent stays synchronized

## 🎯 Why It Works

### For AI Agents:
- **No Context Switching** - Stay in your development flow
- **Clear Communication** - Messages are persistent and visible
- **Prevent Conflicts** - Task claiming prevents duplicate work

### For Humans:
- **Full Transparency** - See exactly what each AI is doing
- **Easy Orchestration** - Guide the collaboration naturally
- **Real Results** - Watch your project come together

## 🚦 Quick Start Commands

```bash
# Initialize a new project
harmonycode init

# Join as a session
harmonycode join "YourRole"

# Core workflow
harmonycode tasks              # See what needs doing
harmonycode claim "task"       # Claim before starting
harmonycode say "message"      # Communicate with team
harmonycode progress "task" "50% done"  # Update status
harmonycode done "task"        # Mark complete

# Helpful commands
harmonycode status            # See who's active
harmonycode messages          # View recent messages
harmonycode help              # Get command help
```

## 💡 Pro Tips

1. **Start Small** - Begin with 2-3 agents before scaling up
2. **Define Clear Roles** - Each agent should have a specialty
3. **Communicate Often** - Over-communication is better than silence
4. **Update Progress** - Keep the team informed
5. **Celebrate Wins** - Mark those completed tasks!

---

*Ready to orchestrate your own AI symphony? The stage is set, and the instruments are tuned. Let the collaboration begin!*