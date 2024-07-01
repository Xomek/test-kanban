import { Dispatch, SetStateAction } from "react";
import type { ColumnType } from "./components/Column/Column.types";

export interface BoardType {
  columns: ColumnType[];
}

export interface BoardProps {
  board: BoardType;
  addTask: (columnId: string) => void;
  removeColumn: (columnId: string) => void;
  setBoard: Dispatch<SetStateAction<BoardType>>;
}
