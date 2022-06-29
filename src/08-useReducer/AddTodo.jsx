import { useForm } from "../hooks/useForm";

export const AddTodo = ({onNewTodo}) => {
  const { description, formState, onInputChange, onResetForm } = useForm({description:''});

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(description.length<1) return;

    const newTodo = {
        id: new Date().getTime(),
        todo: description,
        done: false
    }

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter new TODO"
        onChange={onInputChange}
        value={description}
        name="description"
        autoComplete="off"
      />
      <button className="btn btn-outline-primary mt-1" type="submit">
        Add
      </button>
      </form>
    </>
  );
};
