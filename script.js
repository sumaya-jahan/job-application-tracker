let jobs = [
    {
        id: 1,
        company: "TechNova Solutions",
        position: "Frontend Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳50,000 - ৳70,000",
        description: "Build responsive user interfaces using HTML, CSS and JavaScript.",
        status: "not-applied"
    },
    {
        id: 2,
        company: "CodeCraft",
        position: "React Developer",
        location: "Remote",
        type: "Full-time",
        salary: "৳60,000 - ৳90,000",
        description: "Develop modern web applications using React.",
        status: "not-applied"
    },
    {
        id: 3,
        company: "SoftEdge",
        position: "UI Designer",
        location: "Dhaka",
        type: "Part-time",
        salary: "৳35,000 - ৳50,000",
        description: "Design clean and user-friendly interfaces.",
        status: "not-applied"
    },
    {
        id: 4,
        company: "DataHub",
        position: "Backend Developer",
        location: "Chattogram",
        type: "Full-time",
        salary: "৳70,000 - ৳100,000",
        description: "Develop APIs and manage databases.",
        status: "not-applied"
    },
    {
        id: 5,
        company: "NextGen IT",
        position: "MERN Stack Developer",
        location: "Remote",
        type: "Contract",
        salary: "৳80,000 - ৳120,000",
        description: "Work on full-stack JavaScript projects.",
        status: "not-applied"
    },
    {
        id: 6,
        company: "Creative Labs",
        position: "UX Designer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳45,000 - ৳65,000",
        description: "Improve user experience through research and design.",
        status: "not-applied"
    },
    {
        id: 7,
        company: "SkyTech",
        position: "JavaScript Developer",
        location: "Sylhet",
        type: "Remote",
        salary: "৳55,000 - ৳85,000",
        description: "Develop interactive web applications.",
        status: "not-applied"
    },
    {
        id: 8,
        company: "CloudSphere",
        position: "Software Engineer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳90,000 - ৳140,000",
        description: "Build scalable software solutions.",
        status: "not-applied"
    }
];

const jobsContainer = document.getElementById("jobs-container");

const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

let currentTab = "all";

function updateActiveTab() {

    allTab.classList.remove("active-tab");
    interviewTab.classList.remove("active-tab");
    rejectedTab.classList.remove("active-tab");

    if (currentTab === "all") {
        allTab.classList.add("active-tab");
    }

    if (currentTab === "interview") {
        interviewTab.classList.add("active-tab");
    }

    if (currentTab === "rejected") {
        rejectedTab.classList.add("active-tab");
    }
}

function renderJobs() {

    jobsContainer.innerHTML = "";

    let filteredJobs = jobs;

    if (currentTab === "interview") {
        filteredJobs = jobs.filter(
            job => job.status === "interview"
        );
    }

    if (currentTab === "rejected") {
        filteredJobs = jobs.filter(
            job => job.status === "rejected"
        );
    }

    document.getElementById("job-count").textContent =
        `${filteredJobs.length} jobs`;

    if (filteredJobs.length === 0) {

        jobsContainer.innerHTML = `
            <div class="empty-state">

                <img src="./images/jobs.png" alt="No Jobs">

                <h2>No jobs available</h2>

                <p>Check back soon for new job opportunities</p>

            </div>
        `;

        return;
    }

    filteredJobs.forEach(job => {

        const card = document.createElement("div");

        card.classList.add("job-card");

        card.innerHTML = `
            <h3>${job.company}</h3>
            <h4>${job.position}</h4>

            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>

            <p>${job.description}</p>

            <p>
                <strong>Status:</strong>
                ${job.status.toUpperCase()}
            </p>

            <div class="btn-group">

                <button class="interview-btn" data-id="${job.id}">
                    Interview
                </button>

                <button class="rejected-btn" data-id="${job.id}">
                    Rejected
                </button>

                <button class="delete-btn" data-id="${job.id}">
                    Delete
                </button>

            </div>
        `;

        jobsContainer.appendChild(card);
    });
}

function updateDashboard() {

    const total = jobs.length;

    const interview = jobs.filter(
        job => job.status === "interview"
    ).length;

    const rejected = jobs.filter(
        job => job.status === "rejected"
    ).length;

    document.getElementById("total-count").textContent = total;
    document.getElementById("interview-count").textContent = interview;
    document.getElementById("rejected-count").textContent = rejected;
}

allTab.addEventListener("click", () => {
    currentTab = "all";
    renderJobs();
    updateActiveTab();
});

interviewTab.addEventListener("click", () => {
    currentTab = "interview";
    renderJobs();
    updateActiveTab();
});

rejectedTab.addEventListener("click", () => {
    currentTab = "rejected";
    renderJobs();
    updateActiveTab();
});

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("interview-btn")) {

        const id = Number(e.target.dataset.id);

        const selectedJob = jobs.find(
            job => job.id === id
        );

        selectedJob.status = "interview";

        renderJobs();
        updateDashboard();
    }

    if (e.target.classList.contains("rejected-btn")) {

        const id = Number(e.target.dataset.id);

        const selectedJob = jobs.find(
            job => job.id === id
        );

        selectedJob.status = "rejected";

        renderJobs();
        updateDashboard();
    }

    if (e.target.classList.contains("delete-btn")) {

        const id = Number(e.target.dataset.id);

        jobs = jobs.filter(
            job => job.id !== id
        );

        renderJobs();
        updateDashboard();
    }
});

renderJobs();
updateDashboard();
updateActiveTab();