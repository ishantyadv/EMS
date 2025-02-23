localStorage.clear()
const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstname": "Aarav",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Complete project documentation",
                "task_date": "2025-02-01",
                "task_category": "Documentation",
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Update website content",
                "task_date": "2025-02-02",
                "task_category": "Content",
                "active": true,
                "new_task": false,
                "completed_task": false,
                "failed_task": false
            },
            {
                "task_title": "Task 3",
                "task_description": "Design new logo",
                "task_date": "2025-02-03",
                "task_category": "Design",
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false
            }
        ],
        "task_count": {
            "active": 3,
            "new_task": 2,
            "completed_task": 0,
            "failed_task": 0
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstname": "Ishaan",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Fix bugs in application",
                "task_date": "2025-02-01",
                "task_category": "Development",
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Deploy to production",
                "task_date": "2025-02-02",
                "task_category": "Deployment",
                "active": false,
                "new_task": false,
                "completed_task": true,
                "failed_task": false
            }
        ],
        "task_count": {
            "active": 1,
            "new_task": 1,
            "completed_task": 1,
            "failed_task": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstname": "Ananya",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Prepare a presentation for client",
                "task_date": "2025-02-01",
                "task_category": "Client Relations",
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Create client feedback report",
                "task_date": "2025-02-03",
                "task_category": "Reporting",
                "active": true,
                "new_task": false,
                "completed_task": true,
                "failed_task": false
            },
            {
                "task_title": "Task 3",
                "task_description": "Arrange team meeting",
                "task_date": "2025-02-04",
                "task_category": "Meetings",
                "active": false,
                "new_task": true,
                "completed_task": true,
                "failed_task": false
            }
        ],
        "task_count": {
            "active": 2,
            "new_task": 2,
            "completed_task": 2,
            "failed_task": 0
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstname": "Aryan",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Update company social media profiles",
                "task_date": "2025-02-01",
                "task_category": "Marketing",
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Run SEO audit on website",
                "task_date": "2025-02-02",
                "task_category": "SEO",
                "active": true,
                "new_task": false,
                "completed_task": true,
                "failed_task": false
            }
        ],
        "task_count": {
            "active": 2,
            "new_task": 1,
            "completed_task": 1,
            "failed_task": 0
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstname": "Pinki",
        "tasks": [
            {
                "task_title": "Task 1",
                "task_description": "Write blog post about new product features",
                "task_date": "2025-02-01",
                "task_category": "Content Writing",
                "active": true,
                "new_task": true,
                "completed_task": false,
                "failed_task": false
            },
            {
                "task_title": "Task 2",
                "task_description": "Create product demo video",
                "task_date": "2025-02-03",
                "task_category": "Video Production",
                "active": true,
                "new_task": false,
                "completed_task": true,
                "failed_task": false
            },
            {
                "task_title": "Task 3",
                "task_description": "Prepare monthly report",
                "task_date": "2025-02-05",
                "task_category": "Reporting",
                "active": false,
                "new_task": false,
                "completed_task": false,
                "failed_task": true
            }
        ],
        "task_count": {
            "active": 2,
            "new_task": 1,
            "completed_task": 1,
            "failed_task": 1
        }
    }
];





const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123", 
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
     const employees = JSON.parse(localStorage.getItem("employees"));
     const admin = JSON.parse(localStorage.getItem("admin"));

    return{employees,admin}; 
}