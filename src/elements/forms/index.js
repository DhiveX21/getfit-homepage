import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import DatePicker from "react-multi-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import Select2 from "react-select";

function Form({ template, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);
  let {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  let { fields } = template;

  const select2CustomStyle = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      display: "flex",

      // none of react-select's styles are passed to <Control />
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const renderFields = (fields) => {
    return fields.map((field) => {
      let {
        title,
        type,
        name,
        validationProps,

        placeholder,
        options,
        select2Option,
      } = field;

      switch (type) {
        case "text":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <input
                className="my-1 shadow border-2 border-white rounded px-2"
                type="text"
                name={name}
                id={name}
                placeholder={placeholder}
                {...register(name, validationProps)}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "password":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <input
                className="my-1 shadow border-2 border-white rounded px-2"
                type="password"
                name={name}
                id={name}
                placeholder={placeholder}
                {...register(name, validationProps)}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "datepicker":
          return (
            <div className="flex flex-col text-pink w-full" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <Controller
                control={control}
                name={name}
                rules={{ required: true }} //optional
                render={({
                  field: { onChange, name, value },
                  formState: { errors }, //optional, but necessary if you want to show an error message
                }) => (
                  <>
                    <DatePicker
                      style={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        fontSize: "16px",
                        padding: "13px 10px",
                        border: "0px",
                        boxShadow: "1px 2px 3px #dfdfdf",
                        width: "100%",
                      }}
                      animations={[
                        opacity(),
                        transition({
                          from: 40,
                          transition:
                            "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                        }),
                      ]}
                      value={value || ""}
                      onChange={(date) => {
                        onChange(date?.isValid ? date : "");
                      }}
                      format={"DD-MM-YYYY"}
                    />
                    {errors &&
                      errors[name] &&
                      errors[name].type === "required" && (
                        //if you want to show an error message
                        <span>your error message !</span>
                      )}
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "textarea":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <textarea
                className="my-1 shadow border-2 border-white rounded px-2"
                id={name}
                name={name}
                cols="100"
                rows="4"
                {...register(name, validationProps)}
              ></textarea>
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "number":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <input
                className="my-1 shadow border-2 border-white rounded px-2"
                type="number"
                name={name}
                id={name}
                placeholder={placeholder}
                {...register(name, validationProps)}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "email":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <input
                className="my-1 shadow border-2 border-white rounded px-2"
                type="email"
                name={name}
                id={name}
                placeholder={placeholder}
                {...register(name, validationProps)}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "checkbox":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label>
                <input
                  type="checkbox"
                  name={name}
                  id={name}
                  {...register(name, validationProps)}
                />
                <span>{title}</span>
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => <p>{message}</p>}
                />
              </label>
            </div>
          );
        case "url":
          return (
            <div key={name}>
              <label htmlFor={name}>{title}</label>
              <input
                type="url"
                name={name}
                id={name}
                placeholder={placeholder}
                {...register(name, validationProps)}
              />
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "radio":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <div className="flex ">
                {options.map((option, index) => (
                  <div className="mr-2">
                    <input
                      className="mr-1"
                      type="radio"
                      id={name + index}
                      name={name}
                      value={option.value}
                    />
                    <label className="text-gray-600" for={name + index}>
                      {option.optionLabel}
                    </label>
                  </div>
                ))}
              </div>
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );
        case "select2":
          return (
            <div className="flex flex-col text-pink" key={name}>
              <label className="my-1" htmlFor={name}>
                {title}
              </label>
              <div className="flex">
                <Select2
                  className="my-1 shadow border-2 border-white rounded px-2 w-full"
                  type="text"
                  name={name}
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={select2Option}
                  styles={select2CustomStyle}
                />
              </div>
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          );

        default:
          return (
            <div key={name}>
              <span className="red-text">Invalid Field</span>
            </div>
          );
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFields(fields)}
        <br />
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="bg-pink py-2 px-4 text-white rounded-3xl shadow"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
