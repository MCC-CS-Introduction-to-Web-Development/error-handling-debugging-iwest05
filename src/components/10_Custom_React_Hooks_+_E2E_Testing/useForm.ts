import { ChangeEvent, FormEvent, useState } from "react";

type FormFieldValues = Record<string, string>;

interface UseFormReturn {
    formValues: FormFieldValues;
    handleChange: (inputChangeEvent: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (
        submitCallback: (submittedValues: FormFieldValues) => void
    ) => (formSubmitEvent: FormEvent<HTMLFormElement>) => void;
    resetFormToInitialValues: () => void;
}

const useForm = (initialFieldValues: FormFieldValues): UseFormReturn => {
    const [formValues, setFormValues] = useState<FormFieldValues>(initialFieldValues);

    const handleChange = (inputChangeEvent: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = inputChangeEvent.target;
        setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
    };

    const handleSubmit =
        (submitCallback: (submittedValues: FormFieldValues) => void) =>
        (formSubmitEvent: FormEvent<HTMLFormElement>): void => {
            formSubmitEvent.preventDefault();
            submitCallback(formValues);
        };

    const resetFormToInitialValues = (): void => {
        setFormValues(initialFieldValues);
    };

    return { formValues, handleChange, handleSubmit, resetFormToInitialValues };
};

export default useForm;
