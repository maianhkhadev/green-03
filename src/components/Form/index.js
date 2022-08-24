const Form = ({form, submit}) => {
    return (
        <div class="modal fade" id="modal-form-user" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{form.id ? 'Edit' : 'Create'} User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="title" class="col-form-label">Title:</label>
                                <input type="text" class="form-control" id="recipient-name" name="title" value={form.title} />
                            </div>
                            <div class="mb-3">
                                <label for="type" class="col-form-label">Type:</label>
                                <input type="text" class="form-control" id="recipient-name" name="type" value={form.type}/>
                            </div>
                            <div class="mb-3">
                                <label for="descriptor" class="col-form-label">Descriptor:</label>
                                <input type="text" class="form-control" id="recipient-name" name="descriptor" value={form.descriptor} />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;