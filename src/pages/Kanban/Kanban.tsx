import React, { useState } from "react";
import { Button, Modal, TextField } from "@mui/material";
import { KanbanBoard } from "../../components";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import type { BoardType } from "../../components/KanbanBoard/KanbanBoard.types";
import type { ColumnType } from "../../components/KanbanBoard/components/Column/Column.types";

import styles from "./Kanban.module.css";

const Kanban: React.FC = () => {
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

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>Проекты</h1>
        <PlayCircleOutlineSharpIcon color="error" />
        <div>CRM - система / Процессы</div>
      </div>

      <div className={styles.header}>
        <div className={styles.subtitle}>
          <WavesOutlinedIcon />
          Процессы проекта CRM - система
        </div>
        <Button onClick={handleOpenModal} variant="contained">
          Добавить столбец
        </Button>
      </div>

      <Modal open={openModal} onClose={handleCloseModal}>
        <div className={styles.modal}>
          <h2>Введите заголовок для нового столбца</h2>
          <TextField
            label="Заголовок столбца"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            variant="outlined"
            fullWidth
            autoFocus
            sx={{ mb: 1 }}
          />
          <Button
            fullWidth
            onClick={handleAddColumn}
            variant="contained"
            color="primary"
          >
            Добавить
          </Button>
        </div>
      </Modal>

      <div className={styles.kanbanContainer}>
        <KanbanBoard
          board={board}
          addTask={addTask}
          removeColumn={removeColumn}
          setBoard={setBoard}
        />
      </div>
    </div>
  );
};

export default Kanban;
