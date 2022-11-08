function deleteTask(id) {
    fetch('/delete_task', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({taskID: id})
    }).catch(error => console.error(error))
    .then(location.reload());
};