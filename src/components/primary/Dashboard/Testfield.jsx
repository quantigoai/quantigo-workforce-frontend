import React from 'react';
import {Controller, useFieldArray, useForm} from 'react-hook-form';

function Testfield() {
  const { control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'relevantDocuments',
  });

  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Controller
            name={`relevantDocuments[${index}].documentName`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                {...field}
                placeholder="Document Name"
              />
            )}
          />
          <Controller
            name={`relevantDocuments[${index}].documentUrl`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                {...field}
                placeholder="Document URL"
              />
            )}
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ documentName: '', documentUrl: '' })}
      >
        Add Document
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Testfield;
