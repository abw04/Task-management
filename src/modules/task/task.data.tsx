import type { Task } from "@/modules/task/task.type";
// import type { workTask } from "@/modules/task/task.type";

export const tasksData: Task[] = [
  {
    id: 1,
    title: "Exercise",
    description: "Jogging",
    date: new Date('2026-02-20'),
    isCompleted: false,
  },
  {
    id: 2,
    title: "Family Time",
    description: "Go to Zoo",
    date: new Date('2026-03-15'),
    isCompleted: true,
  },
  {
    id: 3,
    title: "Upskilling",
    description: "Bearmentor tasks",
    date: new Date('2026-02-28'),
    isCompleted: true,
  },
];

// export const workTasksData: workTask[] = [
//   {
//     id: 1,
//     title: "Task Deadline",
//     description: "Finish issue #99",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     title: "Documentation",
//     description: "Document new payment API",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     title: "Networking",
//     description: "Lunch with Tech Lead",
//     isCompleted: true,
//   },
// ];
