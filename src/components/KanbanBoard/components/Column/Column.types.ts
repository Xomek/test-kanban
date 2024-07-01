import type { Task } from "../../../../types/task.types";

export interface ColumnType {
  id: string;
  title: string;
  tasks: Task[];
}

export interface ColumnProps {
  column: ColumnType;
  onAddTask: (columnId: string) => void;
  onRemoveColumn: (columnId: string) => void;
  onUpdateColumnTitle: (columnId: string) => void;
}
