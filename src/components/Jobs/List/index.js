const List = ({ list, onView, onDelete, onEdit }) => {
    return (
        <div className='row'>
            {list.map((item) => {
                return (
                    <div key={item.id} className='user col-3'>
                        <div> {item.title}</div>
                        <div> {item.type}</div>
                        <div> {item.descriptor}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default List;