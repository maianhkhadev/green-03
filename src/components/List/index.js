const List = ({ list, onDelete, onEdit }) => {
  return (
    <div className="row">
      {list.map((item) => {
        return (
          <div classname="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Thông tin Job</h5>
                <p className="card-text">
                  {item.title}
                  {item.type}
                  {item.descriptor}
                </p>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success m-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-form-user"
                  onClick={() => {
                    onEdit(item);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
