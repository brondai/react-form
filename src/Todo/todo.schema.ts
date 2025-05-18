export interface ITodo {
  id: string | number;
  title: string;
  class: "react" | "node" | "digitalMarketing" | "";
  isCompleted: boolean;
  image: string | File;
  description?: string;
}

export const TodoFormInitialValue: ITodo = {
  id: "",
  title: "",
  class: "",
  description: "",
  isCompleted: false,
  image: "",
};
