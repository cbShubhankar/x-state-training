import { createMachine, assign } from "xstate";
import { TodoContext, TodoEvent } from "../types";

export const todoMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoCGBjZAlgG5gDEAggCKUDaADALqKgAOqsBhqAdsyAB6IALAE5MQoQFYAzAEY5dAGyLpogOwAaEAE9EAJjVDxSvUMUiLQ04qEBfW1rQYc+YmQAqAeQDi3gDIAovRMSCBsHFy8oYIIQtKYdCJqipKKdLJ06UIAHMpaugiyamqYIjKyemVCahbZkmr2juhYeIQkpABKAQCyngBqQYx84ZwEPHwxQrKlFrNzc-mI2dOSmel6iSlqpiL2DiDc6HB8TqjD7KPj0YgAtIoJa49PdJo6t4qNIKcubWDnEWMoqAYjJMIo1LJssk9HoMgYiopFghpGpJJg6iJpDYpHQ6i8PnsgA */
  id: "todo",
  initial: "active",
  types: {
    events: {} as TodoEvent,
    context: {} as TodoContext,
  },
  context: {
    todos: [],
  },
  states: {
    active: {
      on: {
        ADD: {
          actions: assign(({ context, event }) => ({
            todos: [
              ...context.todos,
              {
                id: context.todos.length + 1,
                text: event.text,
                completed: false,
              },
            ],
          })),
        },
        TOGGLE: {
          actions: assign(({ context, event }) => ({
            todos: context.todos.map((todo) =>
              todo.id === event.id
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
          })),
        },
        REMOVE: {
          actions: assign(({ context, event }) => ({
            todos: context.todos.filter((todo) => todo.id !== event.id),
          })),
        },
      },
    },
  },
});
