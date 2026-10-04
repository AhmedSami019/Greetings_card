const NameForm = () => {

    // use context 

  // get data
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);


    console.log(data);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Information</legend>

            <label className="label">Baby</label>
            <input
              type="text"
              className="input"
              name="baby"
              placeholder="Baby's name"
            />

            <label className="label">Father</label>
            <input
              type="text"
              className="input"
              name="father"
              placeholder="Father's name"
            />

            <label className="label">Mother</label>
            <input
              type="text"
              className="input"
              name="mother"
              placeholder="Mother's name"
            />

            <button className="btn btn-neutral mt-4">Next</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NameForm;
