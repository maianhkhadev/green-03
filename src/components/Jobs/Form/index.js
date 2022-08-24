import { useMemo } from "react";
import Input from "./Input";

const Form = ({ formData, list, onSubmit, onChange }) => {

    const disabled = useMemo(() => {
        return formData.title === '' || formData.type === '' || formData.descriptor === ''
    }, [formData])

    return (
        <div>
            <div
                className="modal fade"
                id="formModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {formData.id ? "Edit" : "Create"} User
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>

                        {/* Start of Input (Import) */}
                        <div className="modal-body">
                            <div>
                                <Input
                                    id="form-name"
                                    className="form-control"
                                    name="title"
                                    onChange={onChange}
                                    lists={list}
                                    item={formData}
                                />
                            </div>
                            <div>
                                <Input
                                    id="form-name"
                                    className="form-control"
                                    name="type"
                                    onChange={onChange}
                                    lists={list}
                                    item={formData}
                                />
                            </div>
                            <div>
                                <Input
                                    id="form-name"
                                    className="form-control"
                                    name="descriptor"
                                    onChange={onChange}
                                    lists={list}
                                    item={formData}
                                />
                            </div>
                        </div>
                        {/* End of Input (Import) */}
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                disabled={disabled}
                                onClick={onSubmit}
                                type="button"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Form;