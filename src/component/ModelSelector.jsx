const ModelSelector = () => {
  const models = ["A51", "A53", "A10", "A15", "A55"];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl">مدل:</p>

      <ul className="flex flex-wrap gap-3">
        {models.map((model) => (
          <li key={model}>
            <label>
              <input
                type="checkbox"
                value={model}
                className="peer hidden"
              />

              <span
                style={{
                  fontFamily: "Arial",
                  fontVariantNumeric: "normal",
                }}
                dir="ltr"
                className="
                  cursor-pointer
                  border border-gray-300
                  rounded-sm
                  px-3 py-1.5
                  inline-block
                  font-sans
                  peer-checked:border-[#2980b9]
                  peer-checked:bg-[#2980b9]
                  peer-checked:text-white
                "
              >
                {model}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelSelector;

