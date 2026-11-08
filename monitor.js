console.log("DOM Mutation Monitor initialized successfully.");

function simulateHeartbeat() {
    const timestamp = new Date().toISOString();
    console.log(`[Heartbeat] Session active at ${timestamp}`);
}

setInterval(simulateHeartbeat, 30000);
