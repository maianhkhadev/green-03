import { useState } from "react";

const Input = ({ list, formData, onChange, name }) => {
    const [error, setError] = useState('')

    const onLocalChange = (e) => {
        const value = e.target.value
        onChange(e)

        const formData = list.find((item) => {
            return item[name] === value
        })
        setError(formData ? 'Trung' : 'Khung')
        
    }

    return (
        <div class="mb-3">
            <label className="form-label">{name}</label>
            <input className="form-control" type="text" name={name} onChange={onLocalChange} value={formData[name]} />
            <div>{error}</div>
        </div>
    );
};

export default Input;
