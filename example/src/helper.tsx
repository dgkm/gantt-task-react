import { Task } from "../../dist/types/public-types";

export function initTasks() {
  //const currentDate = new Date();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const test = [
    {
      start: new Date("2022-01-10T08:15:00.000Z"),
      end: new Date("2022-01-20T08:30:00.000Z"),
      name: "Treatment Program",
      id: "4",
      type: "project",
      isDisabled: true,
      hideChildren: false,
    },
    {
      start: new Date("2022-01-10T08:15:00.000Z"),
      end: new Date("2022-01-10T08:30:00.000Z"),
      name: "Other Intake First Appointment",
      project: "4",
      id: "41",
      progress: 40,
      dependencies: [],
      type: "task",
      isDisabled: true,
    },
    {
      start: new Date("2022-01-08T12:27:51.115Z"),
      end: new Date("2022-01-08T12:42:51.115Z"),
      name: "Other Intake Second Appointment",
      project: "4",
      id: "42",
      progress: 40,
      dependencies: ["41"],
      type: "task",
      isDisabled: true,
    },
    {
      start: new Date("2022-01-08T12:27:51.105Z"),
      end: new Date("2022-01-08T12:42:51.105Z"),
      name: "Other Intake Third Appointment",
      project: "4",
      id: "43",
      progress: 40,
      dependencies: ["42"],
      type: "task",
      isDisabled: true,
    },
  ];
  return [...test, ...test];
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
