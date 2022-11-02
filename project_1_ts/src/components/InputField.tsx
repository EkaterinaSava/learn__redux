interface InputFieldProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const InputField: React.FC<InputFieldProps> = ({value, handleAction, updateText}) => {
  return (
    <label>
      <input
        placeholder="New Todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add Todo</button>
    </label>
  );
};

export default InputField