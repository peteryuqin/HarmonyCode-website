#!/usr/bin/env node

// Claude-Collab v3.0 - Now with task coordination!
// Prevents duplicate work through simple task board

const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const args = process.argv.slice(3);

const workspace = path.join(process.cwd(), '.claude-collab');
const boardPath = path.join(workspace, 'DISCUSSION_BOARD.md');
const taskPath = path.join(workspace, 'TASK_BOARD.md');

// Colors
const c = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m'
};

function log(msg, color = 'reset') {
  console.log(c[color] + msg + c.reset);
}

const commands = {
  // New command: Show current tasks
  tasks() {
    if (!fs.existsSync(taskPath)) {
      log('❌ No task board found. Initialize workspace first.', 'red');
      return;
    }
    
    const tasks = fs.readFileSync(taskPath, 'utf-8');
    const inProgress = tasks.match(/\[ \] .* - \*\*.*claiming.*\*\*/g) || [];
    const unclaimed = tasks.match(/\[ \] .* - \*\*UNCLAIMED\*\*/g) || [];
    
    log('\n📋 Task Board Status:', 'blue');
    
    if (inProgress.length > 0) {
      log('\n🚧 In Progress:', 'yellow');
      inProgress.forEach(task => {
        console.log('  ' + task);
      });
    }
    
    if (unclaimed.length > 0) {
      log('\n🆕 Available Tasks:', 'green');
      unclaimed.forEach(task => {
        console.log('  ' + task);
      });
    }
    
    log('\n💡 Claim a task: claude-collab claim "task name"', 'magenta');
  },
  
  // New command: Claim a task
  claim(taskName) {
    if (!taskName) {
      log('❌ Provide task name to claim', 'red');
      return;
    }
    
    if (!fs.existsSync(taskPath)) {
      log('❌ No task board found', 'red');
      return;
    }
    
    const session = getCurrentSession();
    if (!session) {
      log('❌ Join a session first: claude-collab join <name>', 'red');
      return;
    }
    
    let tasks = fs.readFileSync(taskPath, 'utf-8');
    const time = new Date().toLocaleTimeString();
    
    // Check if task exists and is unclaimed
    if (tasks.includes(`- [ ] ${taskName} - **UNCLAIMED**`)) {
      tasks = tasks.replace(
        `- [ ] ${taskName} - **UNCLAIMED**`,
        `- [ ] ${taskName} - **${session} claiming** (${time})`
      );
      fs.writeFileSync(taskPath, tasks);
      log(`✅ Task claimed by ${session}!`, 'green');
      
      // Also announce in discussion board
      addMessage(`I'm claiming the task: "${taskName}" to avoid duplicate work.`);
    } else {
      log('❌ Task not found or already claimed', 'red');
    }
  },
  
  // New command: Update task progress
  progress(taskName, ...statusWords) {
    const status = statusWords.join(' ');
    
    if (!taskName || !status) {
      log('❌ Usage: claude-collab progress "task name" "status"', 'red');
      return;
    }
    
    const session = getCurrentSession();
    if (!session) {
      log('❌ Join a session first', 'red');
      return;
    }
    
    let tasks = fs.readFileSync(taskPath, 'utf-8');
    
    // Find and update the task
    const regex = new RegExp(`- \\[ \\] ${taskName} - \\*\\*${session}.*\\*\\*.*`);
    if (tasks.match(regex)) {
      tasks = tasks.replace(regex, 
        `- [ ] ${taskName} - **${session}** (${status})`
      );
      fs.writeFileSync(taskPath, tasks);
      log('✅ Progress updated!', 'green');
      
      // Announce progress
      addMessage(`Progress update on "${taskName}": ${status}`);
    } else {
      log('❌ Task not found or not owned by you', 'red');
    }
  },
  
  // Enhanced init to include task board
  init() {
    if (fs.existsSync(workspace)) {
      log('⚠️  Workspace exists', 'yellow');
      return;
    }
    
    fs.mkdirSync(workspace, { recursive: true });
    
    // Create discussion board
    const discussionBoard = `# AI Collaboration Board
Created: ${new Date().toISOString()}

## Active Sessions
- None yet

## 💬 Discussion

---
`;
    
    // Create task board
    const taskBoard = `# 📋 Task Board
*Last Updated: ${new Date().toISOString()}*

## 🚧 In Progress
*No tasks claimed yet*

## 🆕 Available Tasks
- [ ] Set up project structure - **UNCLAIMED**
- [ ] Create README documentation - **UNCLAIMED**
- [ ] Build core features - **UNCLAIMED**

## ✅ Completed
*No tasks completed yet*

---

**How to use:**
1. Check available tasks: claude-collab tasks
2. Claim a task: claude-collab claim "task name"
3. Update progress: claude-collab progress "task name" "50% done"
4. Mark complete: claude-collab done "task name"
`;
    
    fs.writeFileSync(boardPath, discussionBoard);
    fs.writeFileSync(taskPath, taskBoard);
    
    log('✅ Workspace initialized with task coordination!', 'green');
    log('Next: claude-collab join <name>', 'yellow');
  },
  
  // Mark task as done
  done(taskName) {
    if (!taskName) {
      log('❌ Provide task name', 'red');
      return;
    }
    
    const session = getCurrentSession();
    let tasks = fs.readFileSync(taskPath, 'utf-8');
    
    // Update task to completed
    const regex = new RegExp(`- \\[ \\] ${taskName}.*`);
    const match = tasks.match(regex);
    
    if (match) {
      const completedTask = match[0].replace('[ ]', '[x]') + ` ✅ by ${session}`;
      tasks = tasks.replace(match[0], completedTask);
      fs.writeFileSync(taskPath, tasks);
      
      log('✅ Task completed!', 'green');
      addMessage(`Completed task: "${taskName}" ✅`);
    } else {
      log('❌ Task not found', 'red');
    }
  },
  
  // Include key v2 features
  join(name) {
    if (!name) {
      log('❌ Provide session name', 'red');
      return;
    }
    
    fs.writeFileSync(path.join(workspace, '.session'), name);
    log(`✅ Joined as ${name}`, 'green');
    
    // Check for tasks
    if (fs.existsSync(taskPath)) {
      commands.tasks();
    }
  },
  
  say(...words) {
    const msg = words.join(' ');
    if (!msg) {
      log('❌ Provide message', 'red');
      return;
    }
    
    addMessage(msg);
    log('✅ Message sent', 'green');
  }
};

// Helper functions
function getCurrentSession() {
  const sessionPath = path.join(workspace, '.session');
  return fs.existsSync(sessionPath) ? 
    fs.readFileSync(sessionPath, 'utf-8').trim() : null;
}

function addMessage(content) {
  const session = getCurrentSession();
  const board = fs.readFileSync(boardPath, 'utf-8');
  const entry = `
### ${session} (${new Date().toLocaleString()})
${content}

---`;
  
  const updated = board.replace(
    '## 💬 Discussion\n',
    `## 💬 Discussion\n${entry}\n`
  );
  
  fs.writeFileSync(boardPath, updated);
}

// Main
if (!commands[command]) {
  log('Claude-Collab v3.0 - Now with task coordination!', 'blue');
  log('\nCommands:', 'yellow');
  log('  init         - Initialize workspace');
  log('  join <name>  - Join as session');
  log('  tasks        - Show task board');
  log('  claim <task> - Claim a task');
  log('  progress <task> <status> - Update progress');
  log('  done <task>  - Mark task complete');
  log('  say <msg>    - Send message');
  log('\nPrevents duplicate work through simple coordination!', 'green');
} else {
  commands[command](...args);
}