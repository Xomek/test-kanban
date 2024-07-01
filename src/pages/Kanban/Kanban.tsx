import { Button, Modal, TextField } from "@mui/material";
import { KanbanBoard } from "../../components";
import { useKanban } from "./useKanban";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";

import styles from "./Kanban.module.css";

const Kanban: React.FC = () => {
  const {
    addTask,
    board,
    handleAddColumn,
    handleOpenModal,
    newColumnTitle,
    openModal,
    removeColumn,
    setBoard,
    setNewColumnTitle,
    handleCloseModal,
  } = useKanban();

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
