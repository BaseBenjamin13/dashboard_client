

export const handleFormChange = (formState, setFormState, e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
};