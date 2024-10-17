type Task = {
  name: string;
  schedule: Date;
};

class ToDoListManager {
  private tasks: Task[] = [];
  constructor() {}

  insertTask(task: any) {
    this.tasks.push(task);
  }
}

const task: Task = {
  name: "aula 03",

  schedule: new Date("2004-08-23"),
};

const taskManager = new ToDoListManager();

taskManager.insertTask(task);

console.log('TASK', task)
