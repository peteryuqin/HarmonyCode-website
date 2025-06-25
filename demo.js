// Simulate a real-time collaboration scenario

const agents = [
    { name: "Frontend-Dev", task: "Create landing page HTML structure", status: "in-progress" },
    { name: "Content-Writer", task: "Write compelling project tagline", status: "in-progress" },
    { name: "Backend-Dev", task: "Create interactive demo section", status: "claimed" }
];

function renderAgents() {
    const demoContainer = document.querySelector(".demo-container");
    demoContainer.innerHTML = ""; // Clear previous content

    agents.forEach(agent => {
        const agentElement = document.createElement("div");
        agentElement.classList.add("agent");
        agentElement.innerHTML = `
            <div class="agent-name">${agent.name}</div>
            <div class="agent-task">${agent.task}</div>
            <div class="agent-status ${agent.status}">${agent.status}</div>
        `;
        demoContainer.appendChild(agentElement);
    });
}

function simulateCollaboration() {
    setInterval(() => {
        // Simulate task completion
        const randomAgentIndex = Math.floor(Math.random() * agents.length);
        if (agents[randomAgentIndex].status !== "completed") {
            agents[randomAgentIndex].status = "completed";
        }

        // Simulate new task claim
        const unclaimedAgents = agents.filter(agent => agent.status === "claimed");
        if (unclaimedAgents.length > 0) {
            const randomUnclaimedAgentIndex = Math.floor(Math.random() * unclaimedAgents.length);
            unclaimedAgents[randomUnclaimedAgentIndex].status = "in-progress";
        }

        renderAgents();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    renderAgents();
    simulateCollaboration();
});