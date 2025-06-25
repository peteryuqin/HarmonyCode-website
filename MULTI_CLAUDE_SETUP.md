# 🚀 Multi-Claude Collaboration Setup Guide

## Overview
This guide shows you how to use multiple Claude Code sessions to collaboratively build the HarmonyCode promotion website using HarmonyCode v3 itself!

## Prerequisites
- Access to Claude Code (claude.ai/code)
- Project directory: `/Users/peter/harmonycode-website/`
- HarmonyCode v3 already initialized

## Step 1: Open Multiple Claude Code Sessions

### Option A: Multiple Browser Windows
1. Open claude.ai/code in Browser Window 1
2. Open claude.ai/code in Browser Window 2 (use incognito/private mode)
3. Open claude.ai/code in Browser Window 3 (different browser)

### Option B: Multiple Terminal Sessions
1. Open Terminal 1 → Run `claude code`
2. Open Terminal 2 → Run `claude code`
3. Open Terminal 3 → Run `claude code`

## Step 2: Navigate Each Session to Project

In **EACH** Claude Code session, navigate to the project:
```bash
cd /Users/peter/harmonycode-website
```

## Step 3: Assign Roles to Each Session

### Session 1: Frontend Developer
```bash
./claude-collab-v3.js join "Frontend-Dev"
```
Tell this Claude: "You are the frontend developer. Focus on HTML, CSS, and JavaScript tasks."

### Session 2: Content Writer
```bash
./claude-collab-v3.js join "Content-Writer"
```
Tell this Claude: "You are the content writer. Focus on writing compelling copy and documentation."

### Session 3: Backend Developer
```bash
./claude-collab-v3.js join "Backend-Dev"
```
Tell this Claude: "You are the backend developer. Focus on technical integration and demos."

## Step 4: Working Workflow

### For Each Session:

1. **Check Available Tasks**
   ```bash
   ./claude-collab-v3.js tasks
   ```

2. **Claim a Task** (before starting work!)
   ```bash
   ./claude-collab-v3.js claim "Create landing page HTML structure"
   ```

3. **Update Progress**
   ```bash
   ./claude-collab-v3.js progress "Create landing page HTML structure" "Created basic structure"
   ```

4. **Communicate with Team**
   ```bash
   ./claude-collab-v3.js say "Frontend structure ready for styling"
   ```

5. **Complete Task**
   ```bash
   ./claude-collab-v3.js done "Create landing page HTML structure"
   ```

## Step 5: Coordination Commands

### Essential Commands for Each Session:

| Purpose | Command |
|---------|---------|
| See messages | `cat .claude-collab/DISCUSSION_BOARD.md` |
| Check tasks | `./claude-collab-v3.js tasks` |
| See all files | `ls -la` |
| Check progress | `cat .claude-collab/TASK_BOARD.md` |

## Step 6: Human Coordination Role

As the human coordinator, you need to:

1. **Prompt Sessions to Check Messages**
   - Say "go talk" or "check messages" to trigger communication
   - Example: "Check if other sessions need anything"

2. **Facilitate Handoffs**
   - When Frontend-Dev completes HTML: "Tell Content-Writer the structure is ready"
   - When Content-Writer adds text: "Tell Frontend-Dev to style the new content"

3. **Resolve Conflicts**
   - If two sessions claim the same task, help negotiate
   - Guide sessions to complementary tasks

## Example Collaborative Flow

### Round 1: Setup
```
Human → Frontend-Dev: "Check available tasks and claim HTML structure work"
Human → Content-Writer: "Check tasks and claim tagline writing"
Human → Backend-Dev: "Check tasks and set up the demo section"
```

### Round 2: Progress
```
Human → All: "Update your progress and check if others need help"
Frontend-Dev: "./claude-collab-v3.js say 'HTML skeleton ready in index.html'"
Content-Writer: "./claude-collab-v3.js say 'Need the HTML structure to add content'"
Human → Frontend-Dev: "Show Content-Writer the HTML file"
```

### Round 3: Integration
```
Human → Backend-Dev: "Check messages and integrate the frontend with demo"
Human → Frontend-Dev: "Help Backend-Dev with the integration"
Human → Content-Writer: "Review and polish all text"
```

## Tips for Smooth Collaboration

1. **Regular Check-ins**: Prompt sessions to check messages every 5-10 minutes
2. **Clear Task Names**: Use exact task names when claiming/updating
3. **Frequent Saves**: Each session should save their work regularly
4. **Avoid Conflicts**: Check `git status` if using version control
5. **Documentation**: Have one session maintain a PROGRESS.md file

## Common Commands Reference

```bash
# Start of session
cd /Users/peter/harmonycode-website
./claude-collab-v3.js join "Session-Name"
./claude-collab-v3.js tasks

# During work
./claude-collab-v3.js claim "exact task name"
./claude-collab-v3.js progress "task name" "status update"
./claude-collab-v3.js say "message to team"

# Check status
cat .claude-collab/DISCUSSION_BOARD.md
cat .claude-collab/TASK_BOARD.md
ls -la

# Complete work
./claude-collab-v3.js done "task name"
```

## Troubleshooting

**Q: Session can't see others' messages?**
A: Prompt with "Check the discussion board for new messages"

**Q: Task already claimed error?**
A: Check exact task name with `./claude-collab-v3.js tasks`

**Q: How to handle merge conflicts?**
A: Have one session be the "integrator" who combines work

## Next Steps

1. Start with Session 1 (Frontend-Dev)
2. Add Session 2 (Content-Writer) after basic structure exists
3. Bring in Session 3 (Backend-Dev) for technical features
4. Iterate and refine together!

Remember: The magic happens when you actively coordinate between sessions! 🎯