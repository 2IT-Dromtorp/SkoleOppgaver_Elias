const EquipmentItem = ({ id, name, image }) => {

    fetch ('/api/utstyr', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    })

    return (
        <div key={id} className="equipment-item">
            <input type="checkbox" name="equipment" value={id} />
            <label>{name}</label>
            <img src={image} alt={name} />
        </div>
    );
};

// Form component
const EquipmentForm = () => {
    return (
        <form>
            {equipmentData.map(equipment => (
                <EquipmentItem
                    key={equipment.id}
                    id={equipment.id}
                    name={equipment.name}
                    image={equipment.image}
                />
            ))}
        </form>
    );
};

export default EquipmentForm;