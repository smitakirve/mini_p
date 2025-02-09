const API_URL = "http://localhost:5000/sessions";

// Load sessions
document.addEventListener("DOMContentLoaded", fetchSessions);

async function fetchSessions() {
    const response = await fetch(API_URL);
    const sessions = await response.json();
    const sessionList = document.getElementById("sessionList");
    sessionList.innerHTML = "";

    sessions.forEach(session => {
        let li = document.createElement("li");
        li.innerHTML = `${session.title} - ${session.date} 
                        <button onclick="deleteSession('${session._id}')">🗑</button>`;
        sessionList.appendChild(li);
    });
}

// Add a session
async function addSession() {
    const title = document.getElementById("sessionTitle").value.trim();
    const date = document.getElementById("sessionDate").value;

    if (!title || !date) {
        alert("Please enter a title and date!");
        return;
    }

    const response = await fetch("http://localhost:5000/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date }),
    });

    const data = await response.json();
    console.log("Server Response:", data);  // Debugging log

    fetchSessions();
}


// Delete a session
async function deleteSession(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchSessions();
}
