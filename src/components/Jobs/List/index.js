import './style.css'

const List = ({ list, onEdit, onDelete }) => {

    return (
        <div className="row">
            {list.map((item) => {
                return (
                    <div key={item.id} className="col-4">
                        <div className="user ">
                            <div>
                                Title: {item.title}
                            </div>
                            <div>
                                Type: {item.type}
                            </div>
                            <div>
                                Descriptor: {item.descriptor}
                            </div>
                            <div>
                                <div>
                                    <button className='btn btn-info' onClick={() => {
                                        onEdit(item)
                                    }}>Edit</button>
                                    <button  className='btn btn-danger' onClick={() => {
                                        onDelete(item.id)
                                    }}></button>
                            </div>
                        </div>
                    </div>
                    </div>
    )
})}
        </div >
    )
}

export default List;