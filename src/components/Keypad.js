const Keypad = () => {
  const eventHandler = (event) => {
    console.log(`Entering password...`);
  };

  return (
    <div>
      <input type="password" onChange={() => eventHandler()} />
    </div>
  );
};

export default Keypad;
