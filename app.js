var filters = {
    open: function (tasks){
        return tasks.filter(function (task){
            return task.status === 1
        })
    },
    doing: function (tasks){
        return tasks.filter(function (task){
            return task.status === 2
        })
    },
    closed: function (tasks){
        return tasks.filter(function (task){
            return task.status === 3
        })
    }
}

new Vue({
    el: '#board',
    data: {
        tasks: [
            { name: 'task 1', status: 1, assignee: '🐱', mandays: 3},
            { name: 'task 2', status: 1, assignee: '🐶', mandays: 2},
            { name: 'task 3', status: 2, assignee: '🐱', mandays: 1},
            { name: 'task 4', status: 3, assignee: '🐹', mandays: 1}
        ]   
    },
    computed: {
        tasksOpen: function() {
            return filters.open(this.tasks)
        },
        tasksDoing: function() {
            return filters.doing(this.tasks)
        },
        tasksClosed: function() {
            return filters.closed(this.tasks)
        }
    }
})

