import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe("Tests in useForm Hook", () => {
  test("should return the initial value correctly", () => {
    const initialForm = {
      name: "Luis",
      email: "luisrrleal@gmail.com",
    };
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change the name of the initial form with the function onInputChange", () => {
    const initialForm = {
      name: 'Luis',
      email: 'luisrrleal@gmail.com',
    };

    const { result } = renderHook(() => useForm(initialForm));
    const {onInputChange} = result.current;

    act(()=>onInputChange({target:{name:'name', value:'Leal'}}));

    expect(result.current.name).toEqual('Leal');
    expect(result.current.formState.name).toEqual('Leal');
  });

  test('should reset the form', () => { 
    const initialForm = {
        name: "",
        email: "",
      };

    const { result } = renderHook(() => useForm(initialForm));
    const {onInputChange,onResetForm} = result.current;

    act(
        ()=>{
        onInputChange({target:{name:'name', value:'Leal'}});onResetForm()
  });
    expect(result.current.name).toBe('');


   });
});
