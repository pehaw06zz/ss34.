const courses = [
    {
      id: 1,
      content: 'Learn Javascript Session 01',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Anh Bách',
    },
    {
      id: 2,
      content: 'Learn Javascript Session 2',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Lâm th`',
    },
    {
      id: 3,
      content: 'Learn CSS Session 1',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Hiếu Cì Ớt Ớt',
    },
  ];
  
  function renderTable(data) {
    const tbody = document.getElementById('taskTableBody');
    tbody.innerHTML = '';
    data.forEach((course, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${course.content}</td>
          <td>${course.dueDate}</td>
          <td>${course.status}</td>
          <td>${course.assignedTo}</td>
          <td>
            <button class="action-btn">Sửa</button>
            <button class="action-btn">Xóa</button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
  
  function applyFilters() {
    const contentValue = document.getElementById('contentFilter').value.toLowerCase();
    const dateValue = document.getElementById('dateFilter').value;
    const statusValue = document.getElementById('statusFilter').value;
    const userValue = document.getElementById('userFilter').value.toLowerCase();
  
    const filtered = courses.filter(course => {
      return (
        course.content.toLowerCase().includes(contentValue) &&
        course.assignedTo.toLowerCase().includes(userValue) &&
        (statusValue === '' || course.status === statusValue) &&
        (dateValue === '' || course.dueDate === dateValue)
      );
    });
  
    renderTable(filtered);
  }
  
  // Initial load
  renderTable(courses);
  