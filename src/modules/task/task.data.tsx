import type { Task } from "@/modules/task/task.type";
// import type { workTask } from "@/modules/task/task.type";

export const tasksData: Task[] = [
  {
    id: 1,
    title: "Exercise",
    description: "Jogging",
    date: new Date("2026-02-20"),
    category: "non-Work",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Family Time",
    description: "Go to Zoo",
    date: new Date("2026-03-15"),
    category: "non-Work",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Upskilling",
    description: "Bearmentor tasks",
    date: new Date("2026-02-28"),
    category: "non-Work",
    isCompleted: true,
  },
  {
      id: 4,
    title: "Meeting",
    description: "Weekly meeting",
    date: new Date("2026-05-28"),
    category: "Work",
    isCompleted: true,
  },
  {
      id: 5,
    title: "Development",
    description: "Develop Payment Feature",
    date: new Date("2026-03-10"),
    category: "Work",
    isCompleted: true,
  },
];
