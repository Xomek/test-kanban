import { useState } from "react";
import type { BoardType } from "../../components/KanbanBoard/KanbanBoard.types";
import type { ColumnType } from "../../components/KanbanBoard/components/Column/Column.types";

export const useKanban = () => {
  const [board, setBoard] = useState<BoardType>({ columns: [] });
  const [openModal, setOpenModal] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddColumn = () => {
    const newColumn: ColumnType = {
      id: Date.now().toString(),
      title: newColumnTitle.trim() || `Column ${board.columns.length + 1}`,
      tasks: [],
    };
    setBoard({ ...board, columns: [...board.columns, newColumn] });
    handleCloseModal();
    setNewColumnTitle("");
  };

  const removeColumn = (columnId: string) => {
    setBoard({
      ...board,
      columns: board.columns.filter((column) => column.id !== columnId),
    });
  };

  const addTask = (columnId: string) => {
    const newTask = { id: Date.now().toString(), title: `#20413:` };
    const newColumns = board.columns.map((column) => {
      if (column.id === columnId) {
        return { ...column, tasks: [...column.tasks, newTask] };
      }
      return column;
    });
    setBoard({ ...board, columns: newColumns });
  };

  return {
    addTask,
    removeColumn,
    handleAddColumn,
    handleOpenModal,
    board,
    setBoard,
    openModal,
    setNewColumnTitle,
    newColumnTitle,
    handleCloseModal,
  };
};
